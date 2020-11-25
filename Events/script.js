const container = document.querySelector('.container');
const content = document.querySelector('.content');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener('click', () => {
    let result = content.innerHTML;
    result++;
    content.innerHTML = result;
    if(result === 11) {
        content.innerHTML = 10;
    }
});

minus.addEventListener('click', () => {
    let result = content.innerHTML;
    result--;
    content.innerHTML = result;
    if(result === -1) {
        content.innerHTML = 0;
    }
});
