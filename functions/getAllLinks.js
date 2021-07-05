const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');
const ERROR_MESSAGE = require('./utils/getLinksQueries');

exports.handler = async () => {
  const GET_ALL_LINKS = `query {
    getAllLinks(_size: 700) {
      data {
        description,
        url
      }
    }
  }`

  try {
    const data = await sendQuery(GET_ALL_LINKS);
    return formatResponse(200, data.getAllLinks.data);
  } catch(error) {
    console.error(error);
    return formatResponse(500, { error: ERROR_MESSAGE });
  }
}