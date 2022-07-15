/*
const nameField = document.querySelector('#userName');
*/

/*nameField.addEventListener('change', (event) => {
    console.log(event.target.value);
})*/

/*nameField.addEventListener('input', (event) => {
    console.log(event.target.value);
})*/

/*nameField.addEventListener('focus', (event) => {
    console.log(event.target.style.border = "3px solid blue");
})*/

/*nameField.addEventListener('blur', () => {
    console.log('blur');
})*/


/*nameField.addEventListener('select', () => {
    console.log('select');
})*/

const form = document.querySelector('#form1');

const checkElements = (elements) => {
    let count = 0;

    for(let i = 0; i < elements.length; i++){
        if(elements[i].value === ''){
            elements[i].classList.add('red-border');
            count++;
        }
    }

    return count === 0;
}

form.addEventListener('submit', () => {
    const requiredElements = document.querySelectorAll('form [data-required]');
    const result = checkElements(requiredElements);

    if(result){
        window.location.href = 'form2.html';
    }
})

 /*

 elements = [input1, input2, select];

 1) условие: elements[0].value === '' // true
    elements[0].classList.add('red-border');
    count++; //1

 2) условие: elements[1].value === '' // true
    elements[1].classList.add('red-border');
    count++; //2

 3) условие: elements[2].value === '' // true
    elements[2].classList.add('red-border');
    count++; //3

*/
