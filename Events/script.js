const container = document.querySelector('.container');
const content = document.querySelector('.content');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener('click', () => {
    let result = content.innerHTML;
    result++;
    content.innerHTML = result;

});

minus.addEventListener('click', () => {
    let result = content.innerHTML;
    result--;
    content.innerHTML = result;

});