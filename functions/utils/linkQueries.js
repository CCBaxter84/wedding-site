const GET_LINKs = `query {
    getAllAlbumLinks(_size: 135, album: "Ceremony") {
      data {
        _id,
        url
      }
    }
}`;

module.exports = {
    GET_LINKS
}