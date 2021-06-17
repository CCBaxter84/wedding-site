const { GET_FAMILY_LINKS } = require('./utils/getLinksQueries.js');
const getLinksHandler = require('./utils/getLinksHandler');

exports.handler = () => getLinksHandler(GET_FAMILY_LINKS);