/*console.log('hola mundo desde java script')

let number = 1

console.log(number)

    number++
    
    console.log(number);

    

const bussines = ['Apple', 'Hp', 'Lenovo'];


for(let i = 0;i <=2;i++) {
    console.log(bussines[i])
}


let i = 0;
while (i <= 2) {
    console.log(bussines[i]);
    i++;
}


const hello = 'Hi!';

function saludo(){
    console.log(hello);
}

saludo();

const nombre = function (){
    console.log('nombre');

}

nombre();


const green = (i) => {
    const nombres = ['Carlos', 'Manuelito', 'Gabriel',];
    console.log(nombres[i])
};

green(0)
green(1)
green(2)



const varios = (data) => {
    for (let i = 0; i <=4; i++){
        console.log(data[i]);
    }
}


const vario = [1, 2, 3, 4, 5];
const name = ['hola', 'chao','epale']
const perol = [4, 3, 2, 1, 0] 
varios(vario);
varios(name);
varios(perol);


const nombre = "Juan"
const elemento = document.querySelector("#miElemento");
elemento.textContent = `Hola, ${nombre}!`;
*/

const contenedor = document.querySelector('#contenedor');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
   contenedor.innerHTML = `
   <h1 class="warning"> PELIGRO </h1>
   `;
});




