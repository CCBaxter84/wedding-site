const sendQuery = require('./sendQuery');
const formatResponse = require('./formatResponse');

module.exports = async (albumGetter) => {
    try {
        const res = await sendQuery(albumGetter);
        const data = res.getAllAlbumLinks.data;
        return formatResponse(200, data);
    } catch(err) {
        console.error(err);
        return formatResponse(500, { err: 'Something went wrong' });
    }
}