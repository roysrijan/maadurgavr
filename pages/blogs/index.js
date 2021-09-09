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
import Link from "next/link";

index.getInitialProps = async (ctx) => {
    const res = await fetch('https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-all-blogs?year=2020')
    const json = await res.json()
    return { stars: json.items }
  }

function index({stars}) {
    return (
        <>
         <div  className={stylesBlogs.bodyContent}>
         <MyApp Component={TopNav} />
        <div className={stylesBlogs.blogMainWrapperNew}>
                <Container fluid>
                    <Row>
                    <Col lg="12">
                        <h2>Blogs</h2>
                    </Col>
                    {stars && stars.map((ele)=>(
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <Link href={'/blogs/'+ele.pageName}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src={ele.blogThumbnailImg}
                                        alt="First slide"
                                        fluid
                                    />
                                    </Link>
                                </div>
                                <h3>{new Date(ele.createdOn).toDateString()}</h3>
                                <h4>{ele.titleTag}</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:{ele.author}</h3>
                            </div>
                        </Col>
                    ))}
                        
                    <Col lg="12">
                    <div className={stylesHome.moreBlogBtWrap}>
                    <a className={stylesHome.knowmoreBt}>More Blogs</a>
                    </div>
                    </Col>
                    
                    </Row>
                </Container>
            </div>
            <MyApp Component={Footer} /> 
            </div>
    </>
    )
}

export default index
