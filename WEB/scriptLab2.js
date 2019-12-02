// #1
var test = 'foo';

function testScope1() {
	  var test = 'baz';
  	console.log(test);     
}

testScope1(); // Виведеться baz - тому що в функції оголошується змінна test отримує значення 'baz'
console.log(test); //Виведеться foo - тому що змінна оголошена за рамками функції тому при її виведенні вона виводе своє значення

// #2
var test = 'foo';

function testScope2() {
	  test = 'baz';
  	console.log(test);     
}

console.log(test); //Виведеться foo - тому що змінна оголошена за рамками функції
testScope2(); //Виведеться baz - тому що змінній присвоюється нове значення
console.log(test); //Виведеться baz - тому що змінній в функції присвоюється нове значення

// #3
var test;
test = 'foo';
var test = 'baz';

console.log(test); //Виведеться baz - тому що йде перезапис зміної із новим значенням


// #4
function foo1() {
  console.log(1);
} 

var foo;

foo1 = function() {
  console.log(2);
};

foo1(); //Виведеться 2 - тому що йде перезапис функції і тому виконується console.log(2);

// #5
var test = 'foo';
function foo2() {
    return test;
}
function baz(callback) {
    return callback();
}
baz(foo2); //Виведеться foo - тому що функція baz(callback) приймає на вхід функцію та функцію повертає а функція foo2() віддає значення test яке рівне foo


// #6
var test = 'foo';
function foo3() {
    return test;
}
function baz(callback) {
    var test = 'baz';
    return callback();
}
baz(foo3); //Виведеться foo - тому що при повертанні з функциї baz(callback) змінна test оголошенна тільки в її рамках і тому не перевизначає змінну test в якій знаходиться 'foo'


// #7
var test = 'foo';
function foo4() {
    return test;
}
function baz(callback) {
    this.test = 'baz';
    var binded = callback.bind(this);
    return binded();
}
baz(foo4); //Виведеться baz - тому що змінній this.test надається значення яке відноситься до функції де воно надається 


// #8
var test = 'foo';
var foo5 = function () {
    return test;
};
var baz = function (callback) {
    var test = 'baz';
    return callback();
};
baz(foo5); //Виведеться foo - тому що в функцію foo5 не передається значення test, тому що воно не перевизначається


// #9
var test = 'qwerty';
var a = 4;

function foo6() {
    if (a === 4) {
      	var test = 'bazinga';
    }
  	console.log(test);
}

foo6(); //Виведеться bazina - тому значення змінної a = 4 і тому в функциї if приймає true  та змінна test перевизнається і виводиться її значення 


// #10
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})(); //Виведеться undefined i 10 - тому що в цьому скоупі змінної x немає і тому виводиться undefined, а потім коли ми в функції змінній x надаємо значення та виводим його в консоль то отримуєм 10

// #11
(function() {
   var a = b = 5;
})();
console.log(b); //Виведеться 5 - тому що змінній b в функції надається значення 5 і потім після оголошення функції вона викликається і після неї в консоль виводиться значення b яке рівне 5 

// #12
function test1() {
   console.log(a); //Виведеться undefined - тому що змінній a не присвоєне значення
   console.log(foo()); //Виведеться 2 - тому що функція foo() повертає 2
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test1(); 
