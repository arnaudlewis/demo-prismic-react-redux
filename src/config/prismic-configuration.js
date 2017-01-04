export default {
    apiEndpoint: 'https://test-zoeller-steuerberatung.prismic.io/api',
    //accessToken: 'ACCESS_TOKEN',

    //required only for oauth authentication
    //clientId: 'CLIENT_ID',
    //clientSecret: 'CLIENT_SECRET',

    linkResolver() {
      return '/';
    }
}
