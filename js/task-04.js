// var counterValue = document.getElementById(value);
// console.log(counterValue);



// function increment()
// {
//     var value = parseInt(document.getElementById('value').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('value').value = value;
// }

// var i = 0;
//     function increment() {
//         document.getElementById('value').value = ++i;
//     }


//(╯ ͠° ͟ʖ ͡°)╯┻━┻
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = document.getElementById(`value`);

console.log(incrementBtn)

incrementBtn.addEventListener("click", () => {
    counterValue.innerHTML = Number(counterValue) + 1;
})