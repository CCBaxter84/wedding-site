const makeGetQuery = function(name) {
  return `query {
    getAllAlbumLinks(_size: 180, album: "${name}") {
      data {
        _id,
        url,
        description
      }
    }
  }`
}

const GET_CEREMONY_LINKS = makeGetQuery("Ceremony");
const GET_COUPLE_LINKS = makeGetQuery("Couple");
const GET_ENGAGEMENT_LINKS = makeGetQuery("Engagement");
const GET_FAMILY_LINKS = makeGetQuery("Family");
const GET_GETTING_READY_LINKS = makeGetQuery("GettingReady");
const GET_RECEPTION_LINKS = makeGetQuery("Reception");
const GET_VIDEOS_LINKS = makeGetQuery("Videos");
const ERROR_MESSAGE = 'Something went wrong'

module.exports = {
    GET_CEREMONY_LINKS,
    GET_COUPLE_LINKS,
    GET_ENGAGEMENT_LINKS,
    GET_FAMILY_LINKS,
    GET_GETTING_READY_LINKS,
    GET_RECEPTION_LINKS,
    GET_VIDEOS_LINKS,
    ERROR_MESSAGE
}