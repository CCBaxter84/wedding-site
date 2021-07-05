const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');
const ERROR_MESSAGE = require('./utils/getLinksQueries');

exports.handler = async () => {
  const GET_HOME_VIDEO = `query {
    getLink(album: "Videos", description: "Wedding Highlights") {
      url,
      description
    }
  }`

  try {
    const data = await sendQuery(GET_HOME_VIDEO);
    return formatResponse(200, data);
  } catch(error) {
    console.error(error);
    return formatResponse(500, { error: ERROR_MESSAGE });
  }
}