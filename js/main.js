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
let oylar = ["Fevral","Yanvar","Mart","May","Iyun","Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr."];

document.write("1 Январь-Халкаро тинчлик куни  " + yil + "-yil" + oylar[oy]);
