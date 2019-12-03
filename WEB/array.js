//task1
let fruits = ["Яблука", "Груша", "Апельсин"];

// додаємо нове значення в "копію"
let shoppingCart = fruits;
shoppingCart.push ("Банан");

// що в fruits і чому?
alert (fruits.length); //4 - тому що додоли в масив +1 елемент і тому довжина масиву стала 4

//task2
let music = ["Джаз", "Блюз"];
music.push("Рок-н-рол");

music[Math.floor(music.length/2)] = "Класика"

alert (music.shift());

music.unshift("Реп","Реггі")

//task3
let arr = ["a", "b"];

arr.push (function () {
   alert (this);
})

arr [2] (); //Виведеться вміст масиву та код який записується в push

//task4
function numbersSum() {
    var sum = 0;
    var result = 0;
    var bucket;
    do {
        result = prompt("Input number", '');
        bucket = parseInt(result,10);
        if (Number.isInteger(bucket)) { 
            sum+=bucket;
        }
    } while(result != null && bucket != NaN && Number.isInteger(bucket));
    
    alert(sum);
}
numbersSum()