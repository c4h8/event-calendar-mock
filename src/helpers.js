export const eventDataAdapter = (events) => events.map((e, i) => ({
  category: e.kategoria,
  title: e.ohjelma,
  imgUrl: `https://loremflickr.com/320/240?lock=${i*4}`, //e.kuvaurl,
  performers: e.ohjelma,
  startTime: e.alkuKlo,
  endTime: e.loppuKlo,
  price: e.liput,
  ticketLink: e.ennakkourl,
  description: e.tapahtumaKuvaus,
  date: e.alkuPaiva
}));

export const asd = 3;
