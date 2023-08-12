const body = document.querySelector('body')
const rgbValue = document.querySelector('p')
const btn = document.querySelector('button')
const inputs = document.querySelectorAll('input')
let result 

const generateColor = () => {
    const red = document.querySelector('#red')
    const green = document.querySelector('#green')
    const blue = document.querySelector('#blue')
    rgbValue.textContent = `rgb(${red.value}, ${green.value}, ${blue.value})`
    body.style.backgroundColor = rgbValue.textContent
    result = rgbValue.textContent
}

inputs.forEach(inp => {
    inp.addEventListener('input', generateColor)
})

btn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    textarea.value = result;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    btn.innerText = 'Copied!';
    setTimeout(() => {
        btn.innerText = 'Copy Color Code';
    }, 1000);
});

window.addEventListener('load', generateColor)