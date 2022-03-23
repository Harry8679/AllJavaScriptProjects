const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        setColor();
    }

    if (e.target.classList.contains('subtract')) {
        count.innerHTML--;
        setColor();
    }

    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        setColor();
    }
    // console.log(e.target.classList); Il retourne un tableau
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = 'yellow';
    } else if (count.innerHTML < 0) {
        count.style.color = 'orangered';
    } else {
        count.style.color = "#fff";
    }
}

// const count = document.querySelector('.count');
// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const subtract = document.querySelector('.subtract');

// console.log(count);
// console.log(add);

// add.addEventListener('click', () => {
//     count.innerHTML++;
// });

// subtract.addEventListener('click', () => {
//     count.innerHTML--;
// });

// resetCount.addEventListener('click', () => {
//     count.innerHTML = 0;
// });