import Head from 'next/head';
import NextLink from 'next/link';
import { services } from '../data/services.js';

const Home = () => (
  <div className="container">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>247handyman</title>

      <meta name="description" content="Home repairs expert since 2002" />
      <meta name="author" content="Pedro Duarte" />

      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:image" content="https://247handyman.co.uk/hero.jpg" />
      <meta property="og:description" content="Home repairs expert since 2002" />
      <meta property="og:title" content="247Handyman" />

      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:image" content="https://247handyman.co.uk/hero.jpg" />
      <meta property="og:description" content="Home repairs expert since 2002" />
      <meta property="og:title" content="247Handyman" />

      <meta name="twitter:url" content="https://247handyman.co.uk" />
      <meta name="twitter:image" content="https://247handyman.co.uk/hero.jpg" />
      <meta name="twitter:description" content="Home repairs expert since 2002" />
      <meta name="twitter:title" content="247Handyman" />

      <link rel="canonical" href="https://247handyman.co.uk" />
      <link rel="image_src" href="https://247handyman.co.uk/hero.jpg" />
      <link rel="shortcut icon" href="https://247handyman.co.uk/favicon.png" />
    </Head>

    <header className="tc relative bg-near-white">
      <div className="cover relative" style={{ backgroundImage: 'url(/hero.jpg)', height: 0, paddingTop: '50%' }}></div>

      <div className="pa4 pa0-ns absolute-ns mw7 header-content">
        <h1 className="f3 f1-ns fw8 lh-solid ttu ma0">247Handyman</h1>
        <h2 className="f3 f1-ns fw8 lh-solid ttu ma0 light-silver">Services</h2>
      </div>

      <div className="ph3 pa3-ns absolute-ns header-phone">
        <span className="f5 ttu">07813 246 247 – 08000 226 247</span>
      </div>

      <div className="ph3 pb4 pa3-ns absolute-ns header-email">
        <a href="mailto:help@247handyman.co.uk" className="f5 ttu link near-black hover-silver">
          help@247handyman.co.uk
        </a>
      </div>
    </header>

    <div>
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns">Services we offer</h2>
        <p className="measure tc center lh-copy">
          Here's a more complete list of services we can offer you. If you can't find what you're looking for, please
          don't hesistate to give us a call on <span className="pre">07813 246 247 or 08000 226 247</span> or email us
          at{' '}
          <a href="mailto:help@247handyman.co.uk" className="pre link near-black hover-silver">
            help@247handyman.co.uk
          </a>
        </p>

        <div className="cf">
          {services.map((service, i) => (
            <div className={`fl-ns w-50-ns mb3 mb0-ns pa2 ${i % 2 === 0 ? 'cl pr3' : 'pl3'}`}>
              <h3 className="f5">{service.title}</h3>
              <ul className="list pa0 lh-copy f5">
                {service.list.map((item, index) => (
                  <li key={item + i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div style={{ backgroundColor: '#FFBC00' }}>
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns">Get a free quote</h2>
        <div className="tc f4 lh-solid">
          <p className="ma0">07813 246 247 — 08000 226 247</p>
          <p className="ma0 mt1">
            <a href="mailto:help@247handyman.co.uk" className="link near-black">
              help@247handyman.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>

    <div className="bg-dark-gray white">
      <div className="mw8 ph3 pv5 center">
        <div className="cf">
          <div className="fl-ns w-25-ns mb3 mb0-ns pv2 pr3">
            <h3 className="f5">Contact</h3>
            <ul className="list pa0 lh-copy f5">
              <li>
                <a href="mailto:help@247handyman.co.uk" className="link white hover-silver">
                  help@247handyman.co.uk
                </a>
              </li>
              <li>07813 246 247</li>
              <li>08000 226 247</li>
              <li></li>
            </ul>
          </div>
        </div>

        <p className="mt5 white-50 tr">&copy; 2020 247Handyman. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Home;
