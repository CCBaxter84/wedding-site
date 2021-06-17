const { GET_GETTING_READY_LINKS } = require('./utils/getLinksQueries.js');
const getLinksHandler = require('./utils/getLinksHandler');

exports.handler = () => getLinksHandler(GET_GETTING_READY_LINKS);