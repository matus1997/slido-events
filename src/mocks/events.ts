import * as moment from "moment";

export default [
    {
        id: "fbdc590d-05ec-4352-bc6b-a0c31e8bfe20",
        name: "Februárové bratislavské knižné burzy - 65. a 66. vydanie",
        description: "Dovoľujeme si Vás pozvať na februárové bratislavské knižné burzy. \n Burzy sa budú konať v rámci podujatia TRH - PIAC - MARKT  v sobotu, 1. februára 2020 a v sobotu, 15. februára 2020 v čase od 09:00 do 15:30, v Starej tržnici - na poschodí.  Predávať sa budú najmä knihy, ale popritom sa určite objavia aj gramoplatne, pohľadnice, časopisy, CD-čka, komiksy a plagáty. Vstup pre navštevníkov je samozrejme zdarma.  Tešíme sa na Vás",
        startDate: "2020-02-20T16:00:00+01:00",
        endDate: "2020-02-20T20:00:00+01:00",
        location: "Námestie SNP 25, 81101 Bratislava, Slovakia",
    },
    {
        id: "9c14eb82-f5cd-4e0c-8c20-d8ed1da30800",
        name: "Blší trh v Starej tržnici",
        description: "Milí priaznivci blších trhov a výhodných nákupov Blšie trhy sa budú konať od nového roka na prvom poschodí v Starej tržnici v termínoch 8., 22. a 29. februára 2020. Otvárame už o 9:00 hod. Tešíme sa!",
        startDate: "2020-06-02T00:00:00+02:00",
        endDate: "2020-06-02T15:00:00+02:00",
        location: "Námestie SNP 25, 81101 Bratislava, Slovakia",
    },
    {
        id: "5f158534-fe80-4d72-b7f1-0a36a27c147e",
        name: "Ochutnávka japonských čajov Koucha",
        description: "Pozývame Vás prechutnať u nás málo zastúpené japonské čaje typu Koucha. Koucha je čierny čaj, ktorý tvorí v Japonsku iba asi 1% čajovej produkcie. My ich máme pre Vás pripravených 6 v rôznych chuťových profiloch a triedach kvality. Táto ochutnávka sa nebude opakovať a počet miest je obmedzený.",
        startDate: "2019-06-01T00:00:00+02:00",
        endDate: "2019-06-01T14:00:00+02:00",
        location: "Námestie SNP 25, 81101 Bratislava, Slovakia",
    },
    {
        id: "a085246d-e469-4e29-801f-da0e9c2fedcc",
        name: "Street Food Park vol. 38",
        description: "Prvý Street Food Park v roku 2020 už tento mesiac! Vo februári sa opäť stretneme v interiéri Starej tržnice pri dobrom jedle, nápojoch a atmosfére. Viac info čoskoro! :)",
        startDate: "2020-03-15T22:00:00+01:00",
        endDate: "2020-03-16T04:00:00+01:00",
        location: "Námestie SNP 25, 81101 Bratislava, Slovakia",
    },
    {
        id: "05kdas6d-e409-4e29-801f-5h0e0k2fsacc",
        name: "Ochutnávka jesenných Darjeelingov",
        description: "Pozývame Vás na ochutnávku jesenných Darjeelingov. Dlho patrili tieto tretie zbery k slabšiemu doplnku sezóny. Posledných pár rokov sa nám však darí vybrať viacero zaujímavých čajov a je z čoho zostaviť kvalitnú ponuku, ktorou nepohrdne ani dlhoročný milovník čajov z tejto oblasti. Klasicky Vám ku Darjeelingom pridáme pár Nepálskych čajov a tak nás čaká celkom slušná paleta a množstvo čajov. Odporúčame silné raňajky!",
        startDate: "2018-06-02T00:00:00+02:00",
        endDate: "2018-06-05T00:00:00+02:00",
        location: "Námestie SNP 25, 81101 Bratislava, Slovakia",
    },
].map(($) => ({ ...$, expired: moment().diff(moment($.endDate)) > 0 }));
