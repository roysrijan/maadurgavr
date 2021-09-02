import Head from "next/head";
import Image from "next/image";
import stylesHome from "../styles/Home.module.css";
import HomeContent from "./components/homecontent";
import HomeBanner from "./components/homebanner";
import Blog from "./components/blog";
import Footer from "./components/footer";
import MyApp from "./_app";
import "bootstrap/dist/css/bootstrap.css";

//import 'bootstrap/dist/js/bootstrap.bundle';
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>DurgaPujaVR | The best Virtual 360 Durga Puja Interactive Experience</title>
          <meta charSet="utf-8" />
          <meta property="og:description" content="Experience super high resolution HDR 360 Virtual Tours of you favourite Durga Puja Pandals from the comfort of your home" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
      <div className={stylesHome.container}>
        <main className={stylesHome.main}>
          <section>
            <MyApp Component={HomeBanner} />
          </section>
          <section>
            <MyApp Component={HomeContent} />
          </section>
          <section>
          <MyApp Component={Blog} />
          </section>
          <section>
            <MyApp Component={Footer} />
          </section>
        </main>
      </div>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin
      ></script>
    </>
  );
}
