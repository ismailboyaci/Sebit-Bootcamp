//Uygulama

//Şifre uzunluğunun 12 den büyükse güçlü şifre
//8 ile 12 arasındaysa yeterli şifre 8 den küçülse yetersiz olduğunu konsola bastırın

const yeniSifre = "12323123456321";

if(yeniSifre.length>12)
{
    console.log("Şifre Güçlü");
}
else if (yeniSifre.length >= 8 && yeniSifre.length<=12)
{
    console.log("Şifre Yeterli");
}
else{
    console.log("Şifre Yetersiz");
}