const mockData = `{
  "data": {
    "kategoriat": [
      {"tapahtumaKategoria":"Tanssi-ilta"},
      {"tapahtumaKategoria":"Erikoisilta"},
      {"tapahtumaKategoria":"Pub live"},
      {"tapahtumaKategoria":"P\u00e4iv\u00e4tanssit"},
      {"tapahtumaKategoria":"Teatteri"},
      {"tapahtumaKategoria":"Muu tapahtuma"}
    ],
    "tapahtumat": [ 
      {"kategoria":"Tanssi-ilta","alkuPaiva":"08.06.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Marko Maunuksela & Jukka Hallikainen & Jackpot","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Erikoisilta","alkuPaiva":"14.06.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Klamydia","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"15.06.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Teuvo Oinas & Kiintot\u00e4hti","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Erikoisilta","alkuPaiva":"21.06.2019","alkuKlo":"20:00","loppuPaiva":"21.06.2019","loppuKlo":"03:00","tapahtumaKuva":"juhannuskuva","ohjelma":"A.Aallon Rytmiorkesteri, KinoJake, Christa Huikko Band, J. Karjalainen, Eva and the Tones","liput":"27","ennakkourl":"tiketti.fi\/testi","kuvaurl":"juhannuskuva","tapahtumanKuvaus":null},
      {"kategoria":"Erikoisilta","alkuPaiva":"22.06.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Leewings","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"27.06.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Saija Tuupanen & eXmiehet","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"29.06.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Mikko M\u00e4kel\u00e4inen & Myrskylyhty","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"04.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Taikakuu, Dj Pasi","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"06.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Eija Kantola & Omega","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"11.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Hurma, Dj Pasi","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"13.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Lemmenlautta","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"18.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Teemu Roivainen & Energia","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"20.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Nina \u00c5kerman & Onnent\u00e4hti","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"25.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Ky\u00f6sti M\u00e4kimattila & Varjokuva, In The Mood","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"27.07.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Orivesi All Stars, Komiat","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"01.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Reeta ja Lumo, Dj Pasi","liput":"16","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"03.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Heikki Koskelo & Taivaankaari","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"08.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Jyrki Nurminen & S\u00e4vel, DJ Pasi","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Erikoisilta","alkuPaiva":"09.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Anssi Kela","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"10.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Kari Hirvonen & June","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"17.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Anneli Mattila & Recados","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"24.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Janne Tulkki & Tulinen Syd\u00e4n","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"31.08.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"KinoJake, Henkka ja kulkurit","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null},
      {"kategoria":"Tanssi-ilta","alkuPaiva":"07.09.2019","alkuKlo":"00:00","loppuPaiva":"01.01.1970","loppuKlo":"00:00","tapahtumaKuva":null,"ohjelma":"Kake Randelin & Company","liput":"0","ennakkourl":null,"kuvaurl":null,"tapahtumanKuvaus":null}
    ]
  }
}`;

export default JSON.parse(mockData);