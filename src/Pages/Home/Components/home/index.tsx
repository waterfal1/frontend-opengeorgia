import React from 'react';
import '../firstScreen/styles.scss';
import './styles.scss';
import { Helmet } from 'react-helmet';
import { FirstScreen } from '../firstScreen';
import { Content } from '../content/components/content';

export function Home() {
  return (
    <main>
      <Helmet>
        <title>OpenGeorgia | Home</title>
      </Helmet>
      <header>
        <FirstScreen />
        <div className="header-img">
          <img src={`${process.env.PUBLIC_URL}/Images/MainPage/home-page.jpg`} alt="" />
        </div>
      </header>
      <section>
        <Content />
      </section>
    </main>
  );
}
