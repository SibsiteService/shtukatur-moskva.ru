const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Штукатур Москва',
    description: 'Механизированная штукатурка в Москве и области по низким ценам. Делаем качественно и быстро на сколько это возможно. Используем качественные материалы.',
    contact: {
      phone: '+7-915-457-22-01',
      email: 'olroyd75@yandex.ru',
    },
    menuLinks: [
      {
        name: 'Всё включено',
        link: '/services',
      },
      {
        name: 'Связаться с нами',
        link: '/contact',
      },
      {
        name: '+7-915-457-22-01',
        tel: '+79154572201',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
