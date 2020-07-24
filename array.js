
//mengganti value di array -----------------------------------------------------------------

var cars = ["volvo","saab","ferrari"];
cars[0]= 99;
console.log(cars[0]);

//array object -------------------------------------------------------------------------------

var name = {firstname = "JOHN", lastname = "doe"}
console.log(name.firstname)

//array loop -------------------------------------------------------------------------------

var fruit,flength,text,i;
fruit=["banana","milk","soy","brunch"];
flength = fruit.length;

text = "<ul>";
for (i=0; i < flength; i++){
   text += "<li>" + fruit[i] + "</li>";
}
 text += "</ul>";

//array for each -------------------------------------------------------------------------------

var fruits, text;
fruits = ["mel", "on", "lskd"];

text = "<ul>";
fruits.forEach(loopfunction);
text += </ul>;
document.getElementById() = text;

loopfunction(){
   text += "<li>" + value + "</li>";
}


//add element to array -------------------------------------------------------------------------------

var x = ["a", "b", "c"];
x.push = ("lemon");
// hati hati ini akan membuat 'holes'
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";  

// perbedaan object dan arrays adalah object memakai named indexes dan array memakai number indexes
// penggunaan new --------------------------------------------------------------------------------

var points= ["lol"]  //good
var points= new array ["lol2"] //bad

//mengubah array menjadi sting

var x = ["satu", "dua", "tiga"]
document.getElementById("demo").innerHTML = x.tostring();
// atau ginakan join() join kita bisa menentukan pemisah nya
document.getElementById("demo").innerHTML = x.join("*")
// satu * dua * tiga


//pop dan push 

var x = ["satu", "dua ", "tiga"];

x.pop(); // menghapus element terakhir ("satu")
var y = x.pop(); // value y adalah "satu"

x.push("empat")  //menambah value"empat" kedalam array
var z = x.push("empat"); // value x adalah 4

//shift --------------------------------------------------------------------------------
var x = ["satu", "dua ", "tiga"];
x.shift(); // 'satu' dihapus
var shifting = x.shift();  // value y adalah 'satu'


x.unshift(); //fungsinya sama dengan push


//mengubah element --------------------------------------------------------------------------------

var fruits=["pisang", "salak", "nanas"]
fruits[0]= "durian" //mengubah pisang menjadi durian
delete fruits[0];
// elemen dengan index 0 menjadi undefined


// splice  --------------------------------------------------------------------------------

var buah = ["pisang", "salak", "nanas", "apel"];
buah.splice(0,1,"anggur")
// parameter 0 menentukan posisi dimana elemen baru akan ditambah
// parameter 3 menentukan berapa elemen yang harus dihapus
// output nya pisamg diganti oleh anggur di index 0

//concat  --------------------------------------------------------------------------------

var anak = ["budi", "joni"];
var anak2 = ["bom", "tom"];
var anaksaya = anak.concat(anak);
// 2 array lebih
var anak3 = ["lilo", "lili"];
var anakdia = anak.concat(anak2, anak3);
//atau
var anaksaya2 = anak.concat('fafa')



//slicing  -----------------------------------------------------------------------------------------------------------

var buah = ["pisang", "salak", "nanas", "apel"];
var buah_favorit = buah.slice(1);
// output = nanas dan apel
var buah_favorit2 = bua.slice(1, 3);
// output = salak dan nanas jika (1,2) = salak

//sort array ---------------------------------------------------------------------------------------------------------
buah.sort(); //mengurutkan menurut abjad
buah.reverse(); // lalu urutan nya dibalik

var angka = [40, 100, 1, 5, 25, 10];
angka.sort(funtion(a,b)(retun a - b))  //ascending
angka.sort(funtion(a,b)(retun b - a))  // descending
/* The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/

// sorting array in random order

angka.sort(funtion(a,b){retutn 0.5 - Math.random()})
// research fisher yates method !!!

//min dan max  


var angka = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myFunctionmax(angka);

function myFunctionmax (arr){
return Math.max(arr);
return Math.min(arr)
}

// sorting object arrays

var cars = [
   {type:"Volvo", year:2016},
   {type:"Saab", year:2001},
   {type:"BMW", year:2010}
 ];

cars.sort(function a,b){return a.year - b.year};


//foreach  ------------------------------------------------------------------------------------------------------

var text = ""
var numbers2 = [33, 234, 31, 32, 34];
numbers2.forEach(myfunctionforeach);
document.getElementById("demo").innerHTML = text ;


function myfunctionforeach(value, index, array){
   text += "value" + "<br>";
}

// karena kita hanya memakai value jadi bisa ditulis myfunctionforeach(vakue) saja

// map function ------------------------------------------------------------------------------------------------------

var number3 = numbers2.map(thefunction);

function thefunction(){
   return value * 2; // dikali 2
}


// filter function -----------------------------------------------------------------------------------

var number4 = numbers2.filter(thefunction2); // me return value yang lebih kecil dari 32
function thefunction2(value){
   return value < 31;
}

// reduce function ----------------------------------------------------------------------------------------------

var number5 = numbers2.reduce(thefunction3); // atau (thefuntion3, 100) untuk memulai dari satu

function thefunction3(total, value){
  return total + value;
}
 // disini total nya bukanlah total, hanya sebuah variable 


var number6 = numbers2.reduceRight(thefunction3);


// every method----------------------------------------------------------------------------------

var pomenarian = [12,45,23,14,334,52,324];
var nothin = pomenarian.every(value > 20);

// akan false karena tidak semua value lebih besar dari 20
// every akan meng check array apakah mee the requirement

// memiliki fungsi yang sama dengan some()

// index-of --------------------------------------------------------------------

var oplol = ['er', 'err', 'errr'];
oplol.indexOf('er');
// mengetahui index dari elemen tersebut
//Array.indexOf() returns -1 if the item is not found.
// syntax = Array.indexOf(item, mulai dari mana)

oplol.lastIndexOf('er');
// dihitung dari belakang

// find()  ------------------------------------------------------------------------

// mencari elemen pertama yang memenuhi kebutuhan

var bego = [1, 23 , 12, 1312, 123, 45];
var first = bego.find(lolfunction);

function lolfunction (){
   return value > 18;
}
// output nya 23 
// untuk mencari tau index dari elemen pertama yang memenuhi kebutuhan 

var first = bego.indexfind(lolfunction);








