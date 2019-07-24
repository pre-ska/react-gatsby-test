module.exports = {
  siteMetadata: {
    title: 'React & Gatsby test trololo',
    description:
      'Ovo je opis site-a. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
    keywords: 'keywords, tegovi, ovo je u hederu za SEO',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '6bi0oe8l4yj0',
        accessToken: 'ygmTzEJrgIA7jK7hV0A20WTPib0BUUi_ryamfWSBWss',
      },
    },
  ],
}
