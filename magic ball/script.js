let title = document.querySelector('.title');
let btn = document.querySelector('.btn');
let field = document.querySelector('.field');

let pDiv = document.querySelector('p-div')

let answers = ['Да', 'Нет', 'Не знаю', 'Возможно', '100%', 'Знаешь сам', 'Вероятно'];

function getRandomInt(max){
    return Math.floor(Math.random() * max);
};

btn.addEventListener('click', function(){
    if(field.value != ''){
        title.textContent = answers[getRandomInt(7)];
        field.value = '';
    };
});