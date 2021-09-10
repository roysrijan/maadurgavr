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
              <h2>Blog posts</h2>
            </Col>
            <Col xs={12} lg={4} md={6} sm={6}>
              <div className={stylesHome.blogBox}>
                <div className={stylesHome.blogBoxImageWrap}>
                  <img
                    className={stylesHome.blogBoxImage}
                    src="img/blogD2.webp"
                    alt="First slide"
                    fluid
                  />
                </div>
                <h3>December 8, 2020</h3>
                <h4>10 unique web design trends for 2021</h4>
                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
              </div>
            </Col>
            <Col xs={12} lg={4} md={6} sm={6}>
              <div className={stylesHome.blogBox}>
                <div className={stylesHome.blogBoxImageWrap}>
                  <img
                    className={stylesHome.blogBoxImage}
                    src="img/blogD5.webp"
                    alt="First slide"
                    fluid
                  />
                </div>
                <h3>December 8, 2020</h3>
                <h4>10 unique web design trends for 2021</h4>
                <h3 className={stylesHome.postedBy}>Posted by:Taylor Duchon</h3>
              </div>
            </Col>
            <Col xs={12} lg={4} md={6} sm={6}>
              <div className={stylesHome.blogBox}>
                <div className={stylesHome.blogBoxImageWrap}>
                  <img
                    className={stylesHome.blogBoxImage}
                    src="img/blogD8.webp"
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
                <a href="/blogs" className={stylesHome.knowmoreBt}>
                  More Blogs
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
