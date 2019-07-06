export const eventDataAdapter = (events) => events.map((e, i) => ({
  category: e.kategoria,
  title: e.ohjelma,
  imgUrl: e.kuvaurl || `http://lorempixel.com/620/420/city/${i}`, //TODO: DELETE FOR PRODUCTION,
  performers: e.ohjelma,
  startTime: e.alkuKlo,
  endTime: e.loppuKlo,
  price: e.liput,
  ticketLink: e.ennakkourl,
  description: e.tapahtumanKuvaus,
  date: e.alkuPaiva
}));
