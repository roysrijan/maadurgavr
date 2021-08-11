import Head from 'next/head'
import TopNav from '../components/navbar';
import MyApp from '../_app';

const About = () => (
    <>
      <div>
        <Head>About Us</Head>
        <MyApp Component={TopNav} />
        <h2>A place for playing with Next JS! :D</h2>
      </div>
    </>
  );
  
  export default About;