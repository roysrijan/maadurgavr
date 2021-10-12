import Head from "next/head";
import Image from "next/image";
import stylesHome from "../styles/Home.module.css";
import HomeContent from "./components/homecontent";
import HomeBanner from "./components/homebanner";
import Blog from "./components/blog";
import Footer from "./components/footer";
import MyApp from "./_app";
import "bootstrap/dist/css/bootstrap.css";

export const getStaticProps = async (ctx) => {
  let res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-data?year=2021");
  const json = await res.json()
  res = await fetch("https://lfhatz6o61.execute-api.ap-south-1.amazonaws.com/get-distinct-years");
  let data = await res.json();
  return { props: { stars: json.items, years: data.years } }
}

//import 'bootstrap/dist/js/bootstrap.bundle';
export default function Home({stars, years}) {
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
          <meta name="google-site-verification" content="Pps_Qra3ysgwM49lV0V0SA8oZe_xoCcFdLakRAFUPoA" />
          <meta property="og:image" content="https://www.durgapujavr.com/img/durgapujavr-virtual-showcase-2021.jpg"></meta>
        </Head>
      </div>
      <div className={stylesHome.container}>
        <main className={stylesHome.main}>
          <section>
            <MyApp Component={HomeBanner} />
          </section>
          <section>
            <HomeContent pujalist={stars} years={years} />
          </section>
          <section>
          {/* <MyApp Component={Blog} /> */}
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
