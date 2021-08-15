import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";

export default function blog() {
    return (
        <>
            <div className={stylesHome.blogMainWrapper}>
                <Container fluid>
                    <Row>
                    <Col lg="12">
                        <h4>Blog Posts</h4>
                    </Col>
                        <Col>
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
                                <h2>10 unique web design trends for 2021</h2>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col>
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
                                <h2>10 unique web design trends for 2021</h2>
                                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
                            </div>
                        </Col>
                        <Col>
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
                                <h2>10 unique web design trends for 2021</h2>
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
        </>
    );
}
