import Head from "next/head";
import TopNav from "../../components/navbar";
import MyApp from "../../_app";
import Footer from "../../components/footer";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import stylesHome from "../../../styles/Home.module.css";
import stylesBlogs from "../../../styles/blogs.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function index() {
    return (
        <div  className={stylesBlogs.bodyContent}>
        <MyApp Component={TopNav} />
       <div className={stylesBlogs.blogMainWrapperNew}>
               <Container fluid>
                   <Row>
                   <Col lg="12">
                       <h2>BEHALA FRIENDS 2020</h2>
                   </Col>
                       <Col xs={12} lg={12}>
                           <div className={stylesHome.blogBox}>
                               <div className={stylesBlogs.blogBoxImageWrapForDetails}>
                                   <img
                                       className={stylesHome.blogBoxImage}
                                       src="../img/blogD1.webp"
                                       alt="First slide"
                                       fluid
                                   />
                               </div>
                              <div className={stylesBlogs.blogDetailsContent}>
                              Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. <br></br><br></br>
                              Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.
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
