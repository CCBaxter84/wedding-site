const { GET_VIDEOS_LINKS } = require('./utils/getLinksQueries.js');
const getLinksHandler = require('./utils/getLinksHandler');

exports.handler = () => getLinksHandler(GET_VIDEOS_LINKS);