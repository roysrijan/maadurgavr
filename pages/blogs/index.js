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


function index() {
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
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog2.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog3.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog1.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                    
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog2.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog3.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog1.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                    


                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog2.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog3.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div className={stylesHome.blogBox}>
                                <div className={stylesHome.blogBoxImageWrap}>
                                    <img
                                        className={stylesHome.blogBoxImage}
                                        src="img/blog1.jpg"
                                        alt="First slide"
                                        fluid
                                    />
                                </div>
                                <h3>December 8, 2020</h3>
                                <h4>10 unique web design trends for 2021</h4>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
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
