let $ = function (element) {
    return document.querySelector(element)
}
let createElements = function (tag) {
    let newElement = document.createElement(tag)
    return createElements
}

// //=======CODE=======//
// let bread = $('.bread'),
//  breadTxt = createElements(`div` , `<p>Non:${bread.value}</p>`),
//  right = $('.right')


//  right.appendChild(breadTxt)

let right = document.querySelector('.right')


let bread = document.querySelector('.bread')
let breadTxt = document.querySelector('.bread-result')
bread.addEventListener('change', () => {
    breadTxt.innerHTML = ''
    breadTxt.innerHTML = `${bread.value}`
    // .appendChild(breadTxt)
    console.log(right);
    bread.classList.add('bread-changed')
})

let size = document.querySelector('.size');
let sizeTxt = document.querySelector('.size-result')
size.addEventListener('change', () => {
    let result = document.querySelector('input[name="size"]:checked').value
    sizeTxt.innerHTML = ''
    sizeTxt.innerHTML = `<span> ${result} cm</span>`
    size.classList.add('size-changed')

    // right.appendChild(sizeTxt)

})


// let tarkib = document.querySelector('input[class="tarkib"]');
// tarkib.addEventListener('click',()=>{
//     let result = document.querySelector('input[class="tarkib"]:checked')
//     result.innerHTML = ''
//     let results = document.createElement('p')
//     results.innerHTML = `<p>-<span>${result}</span></p>`
//     right.appendChild(results)
// })
// let result = document.querySelector('input[class="tarkib"]:checked.value')

// console.log(result);



// let tarkib = document.querySelectorAll('.tarkib');
// let array = [];
// for(let i=0 ; i>tarkib.length;i++){
//     tarkib[i].addEventListener('click',()=>{
//         console.log(salom);
//     })
// }
let insideForm = document.querySelector(".inside-form");
let insideBlock = document.querySelector(".inside-block");
let list = document.querySelector(".ul");
let array = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];

let arrayNew = [];

function renderArray() {
    array.forEach(element => {
        let label = document.createElement("label")
        label.innerHTML = element;
        label.htmlFor = element;
        label.classList.add('label')
        let input = document.createElement("input");
        let wrapper = document.createElement("div");
        input.value = element;
        input.id = element;
        input.type = "checkbox";
        input.classList.add('checkbox')
        wrapper.classList.add('wrapper')
        insideForm.appendChild(insideBlock)
        insideBlock.appendChild(input)
        wrapper.appendChild(input)
        wrapper.appendChild(label)
        insideBlock.appendChild(wrapper)
        // insideBlock.appendChild(label)
        input.addEventListener("click", () => {
            list.innerHTML = "";
            if (input.checked) {
                arrayNew.push(element);
            } else {
                // arrayNew.pop(element)
                let num = arrayNew.indexOf(element)
                arrayNew.splice(num, 1)

            }
            arrayNew.forEach(element => {
                let li = document.createElement("li")
                li.innerHTML = `<p><span>-${element}</span></p>`;
                list.appendChild(li)
            })
        })

    })
}
renderArray()

let form = document.querySelector(".form1");
// let insideBlock = document.querySelector(".inside-block");
let list1 = document.querySelector(".ul1");
let array1 = ['Achchiq', 'Sosiskali'];
// let insideForm1 = document.querySelector(".inside-form");


let arrayNew1 = [];

function renderArray1() {
    array1.forEach(element => {
        let label = document.createElement("label")
        label.innerHTML = element;
        label.htmlFor = element;
        label.classList.add('label')
        let input = document.createElement("input");
        let wrapper = document.createElement("div");
        input.value = element;
        input.id = element;
        input.type = "checkbox";
        input.classList.add('checkbox')
        input.classList.add('mt-2')
        wrapper.classList.add('wrapper')
        form.appendChild(input)
        wrapper.appendChild(input)
        wrapper.appendChild(label)
        form.appendChild(wrapper)
        // insideBlock.appendChild(label)
        input.addEventListener("click", () => {
            list1.innerHTML = "";
            if (input.checked) {
                arrayNew1.push(element);
            } else {
                let num = arrayNew1.indexOf(element)
                arrayNew1.splice(num, 1)
            }
            arrayNew1.forEach(element => {
                let li1 = document.createElement("li")
                li1.innerHTML = `<p><span>-${element}</span></p>`;
                list1.appendChild(li1)
            })
        })

    })
}
renderArray1()

let order = document.querySelector('.order')
let orderImg = document.querySelector('.order-img')
let btn = document.querySelector('.order-btn')
let modal = document.querySelector('.modal-result')
btn.addEventListener('click', () => {
    if (
        bread.getAttribute('class').includes('bread-changed') &&
        document.querySelector('input[name="size"]:checked') &&
        arrayNew.length > 0



    ) {
        modal.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check-circle order-img text-primary" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg> <h3 class="m-0 order text-primary">Buyurtmangiz qabul qilindi.</h3>`
    } else {
        modal.innerHTML = '';
        modal.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x-circle text-danger" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg><h3 class="m-0 order text-danger">Iltimos hamma joyni to'ldiring!</h3>`;
    }

})