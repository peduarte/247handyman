import Head from 'next/head';
import NextLink from 'next/link';
import { Meta } from '../components/Meta.js';
import { services } from '../data/services.js';

const AntiViral = () => (
  <div className="container">
    <Meta description="Anti-viral outdoor spray and fog service" />

    <header className="tc relative bg-black">
      <div
        className="cover bg-bottom relative o-80"
        style={{ backgroundImage: 'url(/spray.jpg)', height: 0, paddingTop: '50%' }}
      ></div>

      <div className="pa4 pa0-ns absolute-ns w-90 center header-content">
        <h1 className="f3 f2-m f1-l fw8 lh-solid ttu ma0 gold">247Handyman</h1>
        <h2 className="f3 f2-m f1-l fw8 lh-solid ttu ma0 white">Anti-viral outdoor spray and Fog service</h2>
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
          We are introducing a new service to contribute to the eradication of this pandemic and therefore help the NHS
          to cope with the high demand for patients.
        </p>

        <h3 className="tc f3-ns mt5">What is it?</h3>
        <p className="measure tc center lh-copy">
          Disinfection and sanitation of surfaces and floor areas to prevent and stop the spread of viruses and
          bacterias.
        </p>

        <h3 className="tc f3-ns mt5">Where is it done?</h3>
        <p className="measure tc center lh-copy">
          Outside your house or your business, mainly on the footpath area, near the porch or front door, on the
          driveway, on the tyres of your car (if it is parked on the driveway) and surrounding areas.
        </p>

        <h3 className="tc f3-ns mt5">How is it done?</h3>
        <p className="measure tc center lh-copy">
          The service is done with no contact with the house or business occupants. You don't need to meet us in front
          of your house or premises. Stay inside!
        </p>
        <p className="measure tc center lh-copy mt4">
          A professional with all personal protective equipment, using a spray machine sprays a disinfectant solution
          killing the viruses and bacterias at 99.999%.
        </p>
        <p className="measure tc center lh-copy mt4">All payments are online - paypal or bank transfer.</p>
        <p className="measure tc center lh-copy mt4">You can order a single application or multi applications.</p>
        <p className="measure tc center lh-copy mt4">
          {' '}
          At this stage of the coronavirus infection we recommend 2 applications per week.
        </p>
      </div>
    </div>

    <div className="bg-near-white">
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns">Packages</h2>
        <p className="measure tc center lh-copy">We've come up with a few packages you can choose from.</p>
        <p className="measure tc center lh-copy i">
          <strong>Please note:</strong> All payments must be done via PayPal or Bank Transfer in advance.
        </p>

        <ul className="measure center mt4">
          <li className="lh-copy">Single application - £35</li>
          <li className="lh-copy">4 applications (1 per week) - £130</li>
          <li className="lh-copy">8 applications (2 per week) - £250</li>
          <li className="lh-copy">12 applications (3 per week) - £360</li>
          <li className="lh-copy">20 applications (5 per week) - £600</li>
        </ul>

        <h3 className="tc f3-ns mt5">Bear in mind</h3>

        <ol className="measure center mt4">
          <li className="lh-copy">
            We have limited slots available so when we reach our capacity we will stop bookings until further notice.
          </li>
          <li className="lh-copy">
            Each application is limited to a maximum of 15 minutes of spraying (so if you have a big property and want
            all the protection you can buy multiple applications).
          </li>
          <li className="lh-copy">When you book multiple applications you are guaranteed to be served.</li>
          <li>Our chemical solution is not harmful to the surfaces , people, animals and plants.</li>
        </ol>
      </div>
    </div>

    <div>
      <div className="mw8 ph3 pv5 center">
        <h2 className="tc f2-ns">FAQ</h2>
        <p className="measure tc center lh-copy">Below are the answers to some frequently asked questions</p>

        <h3 className="tc f5-ns mt5">
          Do existing coronavirus disinfectant sprays protect against this new coronavirus?
        </h3>

        <p className="measure tc center lh-copy mt4">
          Given the Wuhan Coronavirus is new, no one can yet test their coronavirus disinfectant products specifically
          against this strain of the virus. However, coronaviruses are part of the “enveloped viruses” family, which
          includes other well-known and identified diseases such as influenza.
        </p>
        <p className="measure tc center lh-copy mt4">
          Current coronavirus disinfectant sprays have been tested against existing enveloped viruses and have been
          proven to be effective at destroying those germs.
        </p>
        <p className="measure tc center lh-copy mt4">
          Because of their proven effectiveness against other viruses in the same family, there is confidence existing
          disinfection sprays will work on this new strain.
        </p>

        <h3 className="tc f5-ns mt5">What is coronavirus?</h3>

        <p className="measure tc center lh-copy mt4">
          Coronavirus is the overarching name given to a family of viruses which includes many strains, some of which
          have been responsible for other global crises such as the SARS (Severe Acute Respiratory Syndrome) outbreak in
          2002.
        </p>
        <p className="measure tc center lh-copy mt4">
          Coronaviruses are transmitted between humans and animals, and can cause a range of illnesses from common colds
          to more severe respiratory diseases2. It is understood the virus is predominantly spread via close contact
          with an infected person who has the symptoms of the illness such as breathing difficulties, fever, cough or
          shortness of breath.
        </p>
        <p className="measure tc center lh-copy mt4">
          This new strain of coronavirus has been named "COVID-19" and is being commonly referred to as the Wuhan
          Coronavirus, based on the area where it originated in China.
        </p>
        <p className="measure tc center lh-copy mt4">
          While the World Health Organisation (WHO) works with agencies across the world to develop specific medicines,
          treatments and vaccines, a key focus of efforts has been to try and prevent the spread of the virus through
          travel and good hygiene practices.
        </p>
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

export default AntiViral;
