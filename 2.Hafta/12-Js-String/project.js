let email = "cnboz@hotmail.com";
console.log(email);

//birleştirme

let ad = "ismail";
let soyad = "boyaci";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);

console.log(adSoyad[2]);

//karakter sayısı

console.log(adSoyad.length);

//string metodları

console.log(adSoyad.toUpperCase());

let kucukAdSoyad = adSoyad.toLowerCase();
console.log(kucukAdSoyad);

//kacıncı indexte bulunduğu

let index = adSoyad.indexOf('n');
console.log(index);

let indexLast = adSoyad.lastIndexOf('a');
console.log(indexLast);

//slice kullanımı
let ilkisim = adSoyad.slice(0,7);
console.log(ilkisim);

//replace kullanımı
let yerdegistir = adSoyad.replace(" ","");
console.log(yerdegistir);

let yerdegistir2 = adSoyad.replaceAll(" ","");
console.log(yerdegistir2);