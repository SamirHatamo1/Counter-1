
const content = document.querySelector('.content');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener('click', () => {
    let result = content.innerHTML;
    result++;
    content.innerHTML = result;
    if(result === 10) {
        document.getElementById('plus').disabled = true;
    }
});

minus.addEventListener('click', () => {
    let result = content.innerHTML;
    result--;
    content.innerHTML = result;
    if(result === -1) {
        document.getElementById('minus').disabled = true;
        content.innerHTML = 0;
    }
});
