const inputName = document.querySelector('#inputName');
const inputApellido = document.querySelector('#inputApellido');
const button = document.querySelector('#button');
const textName = document.querySelector('#textName');
const textApellido = document.querySelector('#textApellido');
const keyboard = document.querySelector('#keyboard');
const site = document.querySelector('#site');

/*button.addEventListener('click' , () =>{
    textName.innerHTML = `${inputName.value}`;
    textApellido.innerHTML = `${inputApellido.value}`;
})
*/

button.addEventListener('mouseover' , () =>{
    textName.innerHTML = `${inputName.value}`;
    textApellido.innerHTML = `${inputApellido.value}`;
})

const evento = (input) => {
    input.addEventListener('keydown', (event) =>{
        keyboard.innerHTML += `${event.key}`;
        const pressKey = event.key;
        switch(pressKey.toUpperCase()){
            case 'CONTROL':
                site.style.backgroundColor = 'black';
                site.style.color = 'white';
            break;
            case 'ALT':
                site.style.backgroundColor = 'red';
            break;
            case 'ESCAPE':
                site.style.backgroundColor = 'blue';
            break;
            case 'ENTER':
                site.style.backgroundColor = 'green';
            break;
            case 'TAB':
                site.style.backgroundColor = 'pink';
            break;
            default:
                site.style.backgroundColor = 'white';
                site.style.color = 'black';
            break;
        }
    })
};

evento(inputName);
evento(inputApellido);
evento(site);

