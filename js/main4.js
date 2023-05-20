/*  Data in JS */

let sana = new Date();



let yil = sana.getFullYear();
let oy = sana.getMonth(12);
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let soat = sana.getHours();
let millisekund = sana.getMilliseconds();
let vaqt = sana.getTime();
let seconds = sana.getSeconds();
let minutes = sana.getMinutes();
let malumotlarQatoriga = sana.toDateString();
let vaqtMintaqasi = sana.getTimezoneOffset();
let soniyalarniBergilang = sana.setUTCSeconds();
let oylar = ["Fevral","Iyul","Mart","May","Iyun",,/*"Avgust",*/"Yanvar","Oktyabr",,];

document.write("2 Июль-  Давлат герби қабул қилинган кун (1992)" + yil + "-yil" + oylar[oy]);
