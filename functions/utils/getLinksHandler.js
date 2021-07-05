const sendQuery = require('./sendQuery');
const formatResponse = require('./formatResponse');
const ERROR_MESSAGE = require('./getLinksQueries');

module.exports = async (albumGetter) => {
    try {
        const res = await sendQuery(albumGetter);
        const { data } = res.getAllAlbumLinks;
        return formatResponse(200, data);
    } catch(error) {
        console.error(error);
        return formatResponse(500, { error: ERROR_MESSAGE });
    }
}