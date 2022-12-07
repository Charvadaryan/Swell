import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/nav-Bar/index';
import Footer from '../components/footer/index';
import HowDoes from '../components/how-Does/index';
import MadeForGrowth from '../components/made-For-Growth/index';
import MerchantsOnTheMove from '../components/merchants-On-The-Move/index';
import SellCreatively from '../components/sell-Creatively/index';
import WhatYouNeed from '../components/what-You-Need/index';
import Partners from '../components/partners/index'

 const Home: NextPage = () =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sweel</title>
        <meta name="description" content="Swell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div><NavBar /></div>
        <main>
          <SellCreatively/>
          <MadeForGrowth/>
          <WhatYouNeed/> 
          <HowDoes/>
          <MerchantsOnTheMove/>
          <Partners/>
          <Footer/>
        </main>
      </div>
    </div>
  );
};


export default Home;