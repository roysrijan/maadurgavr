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
  let res = await fetch(
    "https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-all-blogs"
  );
  let data = await res.json();
  const paths = data.items.map((e, i) => {
    return {
      params: { id: e.pageName ? e.pageName.toString() : "" },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  let res = await fetch(
    "https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-all-blogs"
  );
  let data = await res.json();
  let item = data.items.filter((o) => o.pageName == id)[0];
  return {
    props: { item: JSON.stringify(item), items: JSON.stringify(data.items) },
    revalidate: 60,
  };
};

export default function index({ item, items }) {
  item = JSON.parse(item);
  return (
    <div className={stylesBlogs.bodyContent}>
      <MyApp Component={TopNav} />
      <div className={stylesBlogs.blogMainWrapperNewDetails}>
        <div className={stylesBlogs.blogBoxImageWrapForDetails}>
          <img
                                       className={stylesHome.blogBoxImage}
                                       src={item.blogCoverDesktopImg}
                                       alt="First slide"
                                       fluid
                                   />
          {/* <img src="../img/about-pujo.jpg" alt="First slide" fluid /> */}
        </div>
        <Container fluid>
          <Row>
            <Col xs={12} lg={12}>
              <div className={stylesBlogs.blogBoxDeatils}>
                <h2>{item.h1Header}</h2>
                <h4>
                {new Date(item.createdOn).toDateString()} by <b> {item.author}</b>
                </h4>
                <div className={stylesBlogs.blogDetailsContent}>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.blogEditor }}
                  ></div>
                </div>
                {/* <img src=" https://wallpapercave.com/wp/GoYcMqd.jpg" alt="First slide" fluid />
<p>Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at </p> */}
              </div>
            </Col>
            <Col lg="12"></Col>
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
  );
}
