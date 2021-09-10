import Head from "next/head";
import TopNav from "../components/navbar";
import MyApp from "../_app";
import Footer from "../components/footer";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesHome from "../../styles/Home.module.css";
import stylesBlogs from "../../styles/blogs.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";



export const getStaticPaths = async () => {
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-all-blogs");
    let data = await res.json();
    const paths = data.items.map((e, i) => {
        return {
            params: { id: e.pageName? e.pageName.toString() : '' }
        }
    });
    return {
        paths,
        fallback: 'blocking'
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-all-blogs");
    let data = await res.json();
    let item = data.items.filter(o=>o.pageName == id)[0];
    return {
        props: {item: JSON.stringify(item), items: JSON.stringify(data.items)},
        revalidate: 60,
    }
}


export default function index({item, items}) {
    item = JSON.parse(item);
    return (
        <div  className={stylesBlogs.bodyContent}>
        <MyApp Component={TopNav} />
       <div className={stylesBlogs.blogMainWrapperNew}>
               <Container fluid>
                   <Row>
                   <Col lg="12">
                       <h2>{item.h1Header}</h2>
                   </Col>
                       <Col xs={12} lg={12}>
                           <div className={stylesHome.blogBox}>
                               <div className={stylesBlogs.blogBoxImageWrapForDetails}>
                                   <img
                                       className={stylesHome.blogBoxImage}
                                       src={item.blogCoverDesktopImg}
                                       alt="First slide"
                                       fluid
                                   />
                               </div>
                              <div className={stylesBlogs.blogDetailsContent}>
                                <div dangerouslySetInnerHTML={{__html: item.blogEditor}}></div>
                              </div>
                           </div>
                       </Col>
                         {/* <Col lg="12">
                   <div className={stylesHome.moreBlogBtWrap}>
                   <a className={stylesHome.knowmoreBt}>More Blogs</a>
                   </div>
                   </Col> */}
                   
                   </Row>
               </Container>
           </div>
           <MyApp Component={Footer} /> 
           </div>
  
    )
}
