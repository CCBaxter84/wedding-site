const { GET_COUPLE_LINKS } = require('./utils/getLinksQueries.js');
const getLinksHandler = require('./utils/getLinksHandler');

exports.handler = () => getLinksHandler(GET_COUPLE_LINKS);