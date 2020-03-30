import Head from 'next/head';
import NextLink from 'next/link';
import { Meta } from '../components/Meta.js';
import { benefits } from '../data/benefits.js';
import { testimonials } from '../data/testimonials.js';
import { commonServices } from '../data/commonServices.js';

const Home = () => (
  <div className="container">
    <Meta />

    <header className="tc relative bg-near-white">
      <div className="cover relative" style={{ backgroundImage: 'url(/hero.jpg)', height: 0, paddingTop: '50%' }}></div>

      <div className="pa4 pa0-ns absolute-ns mw7 header-content">
        <h1 className="f3 f2-m f1-l fw8 lh-solid ttu ma0">247Handyman</h1>
        <h2 className="f3 f2-m f1-l fw8 lh-solid ttu ma0 light-silver">Home repairs expert since 2002</h2>
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
        <div className="cf tc">
          {benefits.map(benefit => (
            <div className="fl-ns w-25-ns mb3 mb0-ns pv2 ph3">
              {benefit.icon && (
                <div className="center mb3" style={{ width: 44, height: 44 }}>
                  <img src={`/${benefit.icon}`} />
                </div>
              )}

              <h2 className="f5">{benefit.title}</h2>
              <p className="lh-copy gray">{benefit.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-near-white">
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns">Locations</h2>
        <ul className="lh-copy list tc pa0">
          <li>Abridge</li>
          <li>Barkingside</li>
          <li>Buckhurst Hill</li>
          <li>Chigwell</li>
          <li>Chingford</li>
          <li>Clayhall</li>
          <li>Debden</li>
          <li>Epping Forest</li>
          <li>Ilford</li>
          <li>Loughton</li>
          <li>Redbridge</li>
          <li>Romford</li>
          <li>South Woodford</li>
          <li>Theydon Bois</li>
          <li>Walthan Abbey</li>
          <li>Wanstead</li>
          <li>Woodford</li>
        </ul>
      </div>
    </div>

    <div style={{ backgroundColor: '#FFBC00' }}>
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns mt0">Get a free quote</h2>
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

    <div>
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns">Services</h2>

        <p className="measure tc center lh-copy">We offer a variety of services, here are the most popular ones</p>

        <div className="cf tc">
          {commonServices.map((service, i) => (
            <div key={service.title.trim()} className="fl-ns w-25-ns mb3 mb0-ns pv2 ph3">
              {service.icon && (
                <div className="center mb3" style={{ width: 40, height: 40 }}>
                  <img src={service.icon} />
                </div>
              )}

              <h3 className="f5">{service.title}</h3>
              <ul className="list pa0 lh-copy f5">
                {service.list.map((item, index) => (
                  <li key={item + i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt3 measure tc center lh-copy">
          Can't find what you're after? Hop over to our{' '}
          <NextLink href="/services">
            <a className="link near-black hover-silver b">Services page</a>
          </NextLink>{' '}
          for a more complete list!
        </p>
      </div>
    </div>

    <div className="bg-near-white">
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns">Testimonials</h2>

        <div className="cf tc pt2 mb5">
          <div className="dib pr2 pr4-ns br b--black-10">
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <h3 className="f5 ma0">
              <a
                className="link near-black"
                href="https://www.yell.com/biz/247-handyman-co-uk-woodford-green-901468999/"
                title="Yell Reviews"
                target="blank"
              >
                Yell
              </a>
            </h3>
          </div>
          <div className="dib pl2 pl4-ns">
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>
            <span className="dib" style={{ width: 20 }}>
              <img src="/white-medium-star.svg" />
            </span>

            <h3 className="f5 ma0">
              <a
                className="link near-black"
                href="https://www.google.co.uk/search?q=247handyman&oq=247handyman&aqs=chrome..69i57j69i60j69i61j69i59.2095j0j7&sourceid=chrome&ie=UTF-8#lrd=0x47d8a0cd6da6ebb9:0x8f2fc1c8122859ef,1,"
                title="Yell Reviews"
                target="blank"
              >
                Google
              </a>
            </h3>
          </div>
        </div>

        <div className="cf">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.title.trim()}
              className={`fl-ns w-50-ns mb3 mb0-ns pa2 ${i % 2 === 0 ? 'cl pr4-ns' : 'pl4-ns'}`}
            >
              <h3 className="f5">{testimonial.title}</h3>
              <p className="lh-copy">{testimonial.copy}</p>
              <p>
                <a href={testimonial.link}>{testimonial.from}</a>
              </p>
            </div>
          ))}
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
