import Head from 'next/head';
import NextLink from 'next/link';
import { Meta } from '../components/Meta.js';
import { services } from '../data/services.js';
import { commonServices } from '../data/commonServices.js';

const BusinessFogService = () => {
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  return (
    <div className="container">
      <Meta description="Anti-viral fog service for businesses" />

      <header className="tc relative bg-near-black">
        <div
          className="cover bg-bottom relative o-80"
          style={{ backgroundImage: 'url(/virus.jpg)', height: 0, paddingTop: '50%' }}
        ></div>

        <div className="pa4 pa0-ns absolute-ns w-90 center header-content">
          <h1 className="f3 f3-m f1-l fw8 lh-solid ttu ma0 gold">247Handyman for business</h1>
          <h2 className="f3 f3-m f1-l fw8 lh-solid ttu ma0 white">Disinfection spray and fogging services</h2>
        </div>

        <div className="ph3 pa3-ns absolute-ns header-phone">
          <span className="f5 ttu white">07813 246 247 – 08000 226 247</span>
        </div>

        <div className="ph3 pb4 pa3-ns absolute-ns header-email">
          <a href="mailto:help@247handyman.co.uk" className="f5 ttu link white hover-silver">
            help@247handyman.co.uk
          </a>
        </div>
      </header>

      <div>
        <div className="mw8 ph3 pv5 center">
          <h2 className="tc f2-ns">About this service</h2>
          <p className="measure tc center lh-copy">
            We are introducing a new service to contribute to the eradication of this pandemic. This is dedicated to
            businesses only.
          </p>

          <h3 className="tc f3-ns mt5">What is it?</h3>
          <p className="measure tc center lh-copy">
            Disinfect your workplace or business premises and protect your staff and customers with our virus
            sanitation.
          </p>

          <h3 className="tc f3-ns mt5">How is it done?</h3>
          <p className="measure tc center lh-copy">
            We use a disinfection machine - an intelligent fogger sprayer and an environmental friendly product that
            kills 99.99% of microorganisms while removing the biofilm, mould and organic residue.
          </p>

          <p className="measure tc center lh-copy">
            The disinfectant acts against norovirus and a broad spectrum of bacterias and viruses protecting your
            facilities and areas.
          </p>
          <p className="measure tc center lh-copy mt4">
            Have this application done while the building is unoccupied so people return its a clean environment.
          </p>
        </div>
      </div>

      <div className="bg-near-white">
        <div className="mw8 ph3 pv5 center">
          <h2 className="tc f2-ns">Where is it applied?</h2>
          <p className="measure tc center lh-copy">Below are the common places of application:</p>

          <ul className="measure center mt4">
            <li className="lh-copy">Schools </li>
            <li className="lh-copy">Nurseries </li>
            <li className="lh-copy">Houses </li>
            <li className="lh-copy">Warehouses </li>
            <li className="lh-copy">Offices </li>
            <li className="lh-copy">Banks </li>
            <li className="lh-copy">Stores </li>
            <li className="lh-copy">Shops </li>
            <li className="lh-copy">Churches </li>
            <li className="lh-copy">Shopping Malls </li>
            <li className="lh-copy">Estate Agents </li>
            <li className="lh-copy">Restaurants </li>
            <li className="lh-copy">Cafes </li>
            <li className="lh-copy">Pubs </li>
            <li className="lh-copy">Bars </li>
            <li className="lh-copy">Nightclubs </li>
            <li className="lh-copy">Cinemas </li>
            <li className="lh-copy">Theatres </li>
            <li className="lh-copy">Concert halls, and bingo halls </li>
            <li className="lh-copy">Museums and Galleries </li>
            <li className="lh-copy">Spas and massage parlours </li>
            <li className="lh-copy">Casinos and betting shops </li>
            <li className="lh-copy">all indoor leisure and sports facilities including gyms </li>
            <li className="lh-copy">Vehicles</li>
            <li className="lh-copy">and anywhere the virus can live</li>
          </ul>
        </div>
      </div>

      <div className="bg-near-black white">
        <div className="mw8 ph3 pv5 center">
          <h2 className="tc f2-ns mt0 red">Get a quote</h2>
          <div className="tc f4 lh-solid">
            <p className="measure tc center lh-copy">
              Slots are limited and are on a first come first served basis. Email us on the address below and we'll be
              in touch asap.
            </p>

            <p className="mb0 mt3 f5 mw5 center">
              <a
                href="mailto:help@247handyman.co.uk"
                className="link button-reset flex items-center justify-center h2 f5 ph3 bg-red hover-bg-dark-red white bn lh-solid br1 tc"
              >
                help@247handyman.co.uk
              </a>
            </p>
            <p className="f6 measure tc mt3 center lh-copy gray">
              Please note: this is a busy time and we may take longer answer your query.
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
};

export default BusinessFogService;
