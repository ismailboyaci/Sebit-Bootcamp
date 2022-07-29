const isimler = ['can','rıdvan','elif'];
// console.log(isimler);

// console.log(isimler[0]);

// isimler[1] = 'osman';

// console.log(isimler);

//arraylerde const ile tanımlanmıssa bile dizi içi degiştirilebilir

let yaslar = [43,5,6,30];
console.log(yaslar[3]);

let rastgele = ['can','boz',10,15];

console.log(rastgele);

//dizi eleman sayısı

console.log(rastgele.length);


let tireli = isimler.join('-');
console.log(tireli);

let virgüllü = isimler.join(', ');
console.log(virgüllü);

let sira = isimler.indexOf('elif');
console.log(sira);

//concat metodu ile adna dizimiz degişmez
let eklenmiş = isimler.concat(['ismail','merve']);
console.log(eklenmiş);
console.log(isimler);

//push metodu ile dizi sonuna eleman eklenir

isimler.push('leyla');
console.log(isimler);

//pop metodu dizi sonundaki elemanı siler

isimler.pop()
console.log(isimler);