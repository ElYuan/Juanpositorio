const contentProduct = document.querySelector("#contentProduct");

fetch("http://192.168.0.136:4000/")
    .then(response => response.json())
    .then(data => {
    data.forEach(element => {
        contentProduct.innerHTML += `
        <div class="col-3 px-5 mt-5">
        <div class="row bg-white shadow rounded">
            <div class="col-12">
                <img src="${element.img}" class="w-100 p-4 mt-2" alt="">
            </div>
            <div class="col-12 text-center">
                <p class="fw-bold">${element.name}</p>
            </div>
            <div class="col-12 text-center mb-3">
                <p class="">$${element.price}</p>
            </div>
        </div>
    </div>
        `;
    })
    })