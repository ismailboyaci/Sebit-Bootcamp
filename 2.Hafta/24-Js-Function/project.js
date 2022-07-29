function hello(){
    console.log("hello");
}

// hello();
// hello();
// hello();

//fonksiyonlara parametre gönderme ve default parametre

const canboz = function(ad="Can",soyad="Boz"){
    console.log(`Ad Soyad : ${ad} ${soyad}`)
}

canboz('ismail','boyaci');

canboz();

const karealani = function(kenar){
    return kenar*kenar;
}

// let sonuc = karealani(6);

// console.log(sonuc);


//arrow ilk versiyon

// const karealanim = (kenar) => {
//     return kenar*kenar;
// }

//tek parametre ise 
// const karealanim = kenar => {
//     return kenar*kenar;
// }

//içerisi tek satır ise
// const karealanim = kenar => kenar*kenar;
// console.log(karealanim(7));

// const donus = () => {
//     return ismail;
// }

// const stringDonus = () => "ismail";
// console.log(stringDonus())

//uygulama
//ürünlerin ham fiyatını verip vergili halinin toplamını bulan hesaplama yapınız


const urunSatis = function(urunler,vergi){
    let toplam = 0;
    for(let i = 0; i < urunler.length ; i++){
        toplam +=  urunler[i] + urunler[i]*vergi;
    }
    return toplam;
}


console.log(urunSatis([10,20,30],0.25))
 
//arrow function ile

const urunSatisArrow = (urunler,vergi) =>{
    let toplam = 0;
    for(let i = 0; i < urunler.length ; i++){
        toplam +=  urunler[i] + urunler[i]*vergi;
    }
    return toplam;
}
console.log(urunSatisArrow([10,20,30],0.25))