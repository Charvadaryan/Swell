import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/footer';
import HowDoes from '../components/howDoes/howDoes';
import MadeForGrowth from '../components/madeForGrowth/madeForGrowth';
import MerchantsOnTheMove from '../components/merchantsOnTheMove/merchantsOnTheMove';
import SellCreatively from '../components/sellCreatively/sellCreatinely';
import WhatYouNeed from '../components/whatYouNeed/whatYouNeed';

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
          <Footer/>
        </main>
      </div>
    </div>
  );
};


export default Home;