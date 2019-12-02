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


numbersSum(array_of_nums) {
    var sum = 0;
    for (let i = 0; array_of_nums.length > i; i++)
    {
        
    }
    return sum
}