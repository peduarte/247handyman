import React from 'react';
import Head from 'next/head';

export const Meta = ({ title = '247Handyman', description = 'Home repairs expert since 2002' }) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>
        {title} - {description}
      </title>

      <meta name="description" content={description} />
      <meta name="author" content="Pedro Duarte" />

      <meta name="format-detection" content="telephone=no" />

      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:image" content="https://247handyman.co.uk/hero.jpg" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />

      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:url" content="https://247handyman.co.uk" />
      <meta property="og:image" content="https://247handyman.co.uk/hero.jpg" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />

      <meta name="twitter:url" content="https://247handyman.co.uk" />
      <meta name="twitter:image" content="https://247handyman.co.uk/hero.jpg" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />

      <link rel="canonical" href="https://247handyman.co.uk" />
      <link rel="image_src" href="https://247handyman.co.uk/hero.jpg" />
      <link rel="shortcut icon" href="https://247handyman.co.uk/favicon.png" />
    </Head>
  );
};
