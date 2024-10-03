let cart = document.querySelector('.sidemenu .icon .fa-shopping-cart')
let cartcontainer = document.querySelector('.cart-container')
let close = document.querySelector('.cart-container .cart-top .close')
cart.addEventListener('click' , function(){
    cartcontainer.style.transform= 'translateX(0)'
})
close.addEventListener('click' , function(){
    cartcontainer.style.transform= 'translateX(450px)'
})

let inputsearch = document.querySelector('.sidemenu .icon .fa-magnifying-glass .search')
let iconsearch = document.querySelector('.sidemenu .icon .fa-magnifying-glass')
let bool = 0 
iconsearch.addEventListener('click' , function(){
    inputsearch.style.display = 'block'
})
inputsearch.addEventListener('blur' , function(){
    inputsearch.style.display = 'none'
})

let boxform = document.querySelector('.box-form')
let iconuser = document.querySelector('.sidemenu .icon .fa-user')
let closeform = document.querySelector('.box-form .close')
let eyeopen = document.querySelector('.fa-eye')
let eyeclose = document.querySelector('.fa-eye-slash')
let passinput = document.querySelector('.password')
let body = document.querySelector('body')
iconuser.addEventListener('click' , function(){
    boxform.style.display = 'block'
    body.style.overflowY = 'hidden'
})
closeform.addEventListener('click' , function(){
    boxform.style.display = 'none'
    body.style.overflowY = 'auto'
})
passinput.addEventListener('keyup' , function(){
    eyeopen.style.display = 'none'
    eyeclose.style.display = 'block'
})
eyeclose.addEventListener('click' , function(){
    eyeopen.style.display = 'block'
    eyeclose.style.display = 'none'
    passinput.setAttribute('type' , 'text')
})
eyeopen.addEventListener('click' , function(){
    eyeopen.style.display = 'none'
    eyeclose.style.display = 'block'
    passinput.setAttribute('type' , 'password')
})

const menulist =   [
                    {
                        list: "Asus",
                        submenu: [
                            {
                                li: "Mobile/Handhelds",
                                link: "product-container"
                            },
                            {
                                li: "Laptops",
                                link: "product-container"
                            },
                            {
                                li: "Displays/Desktops",
                                link: "product-container"
                            },
                            {
                                li: "Components",
                                link: "product-container"
                            }
                        ]
                    },
                    {
                        list: "MSI",
                        submenu: [
                            {
                                li: "Mobile/Handhelds",
                                link: "product-container"
                            },
                            {
                                li: "Laptops",
                                link: "product-container"
                            },
                            {
                                li: "Displays/Desktops",
                                link: "product-container"
                            },
                            {
                                li: "Components",
                                link: "product-container"
                            }
                        ]
                    },
                    {
                        list: "Apple",
                        submenu: [
                            {
                                li: "Mobile/Handhelds",
                                link: "product-container"
                            },
                            {
                                li: "Laptops",
                                link: "product-container"
                            },
                            {
                                li: "Displays/Desktops",
                                link: "product-container"
                            },
                        ]
                    },
                    {
                        list: "Game Console",
                        submenu: [
                            {
                                li: "Playstation",
                                link: "product-container"
                            },
                            {
                                li: "Xbox",
                                link: "product-container"
                            },
                            {
                                li: "Nintendo & Wii",
                                link: "product-container"
                            },
                        ]
                    },
]

let menu = ''
for(let i in menulist){
    let submenuli = menulist[i].submenu
    var list = ''
    for(let j in submenuli){
        list += `
                <li>
                    <a href="#${submenuli[j].link}">${submenuli[j].li}</a>
                </li>
        `
    }
    menu += `
                <li>
                    <p>${menulist[i].list}</p>
                    <div class="submenu-container">
                        <div class="submenu">
                            <div class="submenu-element">
                                <ul>
                                    ${list}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            `
}
document.querySelector('.menu nav').innerHTML = `
                                                    <div class="logo">
                                                        <img src="img/logo.png" alt="">
                                                    </div>
                                                    <ul>
                                                        ${menu}
                                                    </ul>
                                                `

let next = document.querySelector('.btnn')
let back = document.querySelector('.btnb')
let imageslider = document.querySelector('.slider img')
let imagesliderarray = ['img/sliderasus.webp' , 'img/slidermsi.jpg' , 'img/slidermac.jpg' , 'img/sliderps5.jpg']
let i = 0
next.addEventListener('click' , function(){
    i++
    if(i == imagesliderarray.length) i = 0
    imageslider.setAttribute('src' , imagesliderarray[i])
})
back.addEventListener('click' , function(){
    i--
    if(i < 0) i = imagesliderarray.length - 1
    imageslider.setAttribute('src' , imagesliderarray[i])
})

let asusfeature = [
    'img/asusfeature1.webp' , 
    'img/asusfeature2.webp' , 
    'img/asusfeature3.webp' , 
    'img/msifeature1.jpeg' , 
    'img/msifeature2.jpeg' , 
    'img/msifeature3.jpeg' ,
    'img/macfeature1.jpg' ,
    'img/macfeature2.jpg' ,
    'img/macfeature3.jpg' ,
    'img/consolefeature1.png' ,
    'img/consolefeature2.png' ,
    'img/consolefeature3.png'
]
let asusfeaturecontainer = document.querySelector('.asus-feature')
let asusfeatureitem = ''
for(let i in asusfeature){
    asusfeatureitem +=  `
                        <div class="item">
                            <img src="${asusfeature[i]}" alt="">
                        </div>
                        `
}
asusfeaturecontainer.innerHTML = asusfeatureitem

let productitem = [
                {
                    img: 'img/iphone1.jpg',
                    name: 'Handheld1',
                    price: 1299.99
                },
                {
                    img: 'img/iphone2.jpg',
                    name: 'Handheld2',
                    price: 999.99
                },
                {
                    img: 'img/iphone3.jpg',
                    name: 'Handheld3',
                    price: 699.99
                },
                {
                    img: 'img/iphone4.jpg',
                    name: 'Handheld4',
                    price: 599.99
                },
                {
                    img: 'img/asusphone1.png',
                    name: 'Handheld5',
                    price: 249.99
                },
                {
                    img: 'img/asusphone2.png',
                    name: 'Handheld6',
                    price: 199.99
                },
                {
                    img: 'img/asusphone3.png',
                    name: 'Handheld7',
                    price: 149.99
                },
                {
                    img: 'img/msihand1.webp',
                    name: 'Handheld8',
                    price: 699.99
                },
                {
                    img: 'img/asushand1.jpg',
                    name: 'Handheld9',
                    price: 599.99
                },
                {
                    img: 'img/asushand2.jpg',
                    name: 'Handheld10',
                    price: 499.99
                },
                {
                    img: 'img/laptop2.webp',
                    name: 'Laptop1',
                    price: 999.99
                },
                {
                    img: 'img/laptop1.webp',
                    name: 'Laptop2',
                    price: 899.99
                },
                {
                    img: 'img/laptop3.webp',
                    name: 'Laptop3',
                    price: 699.99
                },
                {
                    img: 'img/laptop4.webp',
                    name: 'Laptop4',
                    price: 599.99
                },
                {
                    img: 'img/laptop5.webp',
                    name: 'Laptop5',
                    price: 849.99
                },
                {
                    img: 'img/laptop6.webp',
                    name: 'Laptop6',
                    price: 1199.99
                },
                {
                    img: 'img/laptop7.webp',
                    name: 'Laptop7',
                    price: 399.99
                },
                {
                    img: 'img/laptop8.webp',
                    name: 'Laptop8',
                    price: 1499.99
                },
                {
                    img: 'img/laptop9.webp',
                    name: 'Laptop9',
                    price: 1999.99
                },
                {
                    img: 'img/laptop10.webp',
                    name: 'Laptop10',
                    price: 1199.99
                },
                {
                    img: 'img/monitor1.webp',
                    name: 'Monitor1',
                    price: 499.99
                },
                {
                    img: 'img/monitor2.webp',
                    name: 'Monitor2',
                    price: 399.99
                },
                {
                    img: 'img/monitor3.webp',
                    name: 'Monitor3',
                    price: 599.99
                },
                {
                    img: 'img/monitor4.webp',
                    name: 'Monitor4',
                    price: 299.99
                },
                {
                    img: 'img/monitor5.webp',
                    name: 'Monitor5',
                    price: 599.99
                },
                {
                    img: 'img/monitor6.webp',
                    name: 'Monitor6',
                    price: 399.99
                },
                {
                    img: 'img/monitor7.webp',
                    name: 'Monitor7',
                    price: 499.99
                },
                {
                    img: 'img/monitor8.webp',
                    name: 'Monitor8',
                    price: 299.99
                },
                {
                    img: 'img/monitor9.webp',
                    name: 'Monitor9',
                    price: 399.99
                },
                {
                    img: 'img/monitor10.webp',
                    name: 'Monitor10',
                    price: 349.99
                },
                {
                    img: 'img/component1.webp',
                    name: 'Component1',
                    price: 349.99
                },
                {
                    img: 'img/component2.webp',
                    name: 'Component2',
                    price: 69.99
                },
                {
                    img: 'img/component3.webp',
                    name: 'Component3',
                    price: 1099.99
                },
                {
                    img: 'img/component4.webp',
                    name: 'Component4',
                    price: 149.99
                },
                {
                    img: 'img/component5.webp',
                    name: 'Component5',
                    price: 129.99
                },
                {
                    img: 'img/component6.webp',
                    name: 'Component6',
                    price: 444.99
                },
                {
                    img: 'img/component7.webp',
                    name: 'Component7',
                    price: 69.99
                },
                {
                    img: 'img/component8.webp',
                    name: 'Component8',
                    price: 1909.99
                },
                {
                    img: 'img/component9.webp',
                    name: 'Component9',
                    price: 139.99
                },
                {
                    img: 'img/component10.webp',
                    name: 'Component10',
                    price: 149.99
                },
                {
                    img: 'img/game1.webp',
                    name: 'Game1',
                    price: 499.99
                },
                {
                    img: 'img/game2.webp',
                    name: 'Game2',
                    price: 699.99
                },
                {
                    img: 'img/game3.webp',
                    name: 'Game3',
                    price: 399.99
                },
                {
                    img: 'img/game4.webp',
                    name: 'Game4',
                    price: 449.99
                },
                {
                    img: 'img/game5.webp',
                    name: 'Game5',
                    price: 299.99
                },
]
let product = ''
let productcontainer = document.querySelector('.product-container')
for(let i in productitem){
    product += `
                <div class="item">
                    <div class="img"><img src="${productitem[i].img}" alt=""></div>
                    <div class="des">
                        <p class="model">${productitem[i].name}</p>
                        <p class="price">${productitem[i].price}$</p>
                    <button>Add to Cart</button>
                    </div>
                </div>
    `
}
productcontainer.innerHTML = product

let totalcart = 0
let btn = document.querySelectorAll('.product-container .item .des button')
let total = document.querySelector('.cart-container .total')
for(let i = 0 ; i < btn.length ; i++){
    btn[i].addEventListener('click' , function(){
        var div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML = `
                            <div class="img">
                                    <img src="${productitem[i].img}" alt="">
                            </div>
                            <div class="des">
                                <p class="model">${productitem[i].name}</p>
                                <p class="price">${productitem[i].price}$</p>
                                <div class="icon">
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </div>
        `
        totalcart += productitem[i].price
        total.innerHTML = `Total: $${totalcart.toFixed(2)}`
        cartcontainer.appendChild(div)
        div.querySelector('.icon i').addEventListener('click' , function(){
            totalcart -= productitem[i].price
            if(totalcart <= 0) total.innerHTML = `Total: `
            else total.innerHTML = `Total: $${totalcart.toFixed(2)}`
            cartcontainer.removeChild(div)
        })
    })
}

let compaignarray = [
                        {
                            img: 'img/compaign1.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign2.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign3.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign4.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign5.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign6.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign7.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign8.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign9.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        },
                        {
                            img: 'img/compaign10.webp',
                            des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur?'
                        }
]
let compaignitem = document.querySelector('.compaign-container .compaign')
let compaignel = ''
for(let i in compaignarray){
    compaignel +=   `
                        <div class="item">
                            <div class="img"><img src="${compaignarray[i].img}" alt=""></div>
                            <div class="des">${compaignarray[i].des}</div>
                        </div>
                    `
}
compaignitem.innerHTML = compaignel
let btnprev = document.querySelector('.btn .btnprev')
let btnnext = document.querySelector('.btn .btnnext')
let compaign = document.querySelector('.compaign-container')
btnprev.addEventListener('click' , function(){
    compaign.scrollBy({left: -400 , behavior : 'smooth'})
})
btnnext.addEventListener('click' , function(){
    compaign.scrollBy({left: 400 , behavior : 'smooth'})
})

let gamefeatrurearray = [
                            {
                                img: 'img/gamefeature1.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            },
                            {
                                img: 'img/gamefeature2.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            },
                            {
                                img: 'img/gamefeature3.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            },
                            {
                                img: 'img/gamefeature4.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            },
                            {
                                img: 'img/gamefeature5.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            },
                            {
                                img: 'img/gamefeature6.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            },
                            {
                                img: 'img/gamefeature7.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            },
                            {
                                img: 'img/gamefeature8.webp',
                                des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere mollitia fugit debitis error nam. Perspiciatis consectetur sed est et.'
                            }
]
let gamecontainer = document.querySelector('.game-feature')
let game = ''
for(let i in gamefeatrurearray){
    game += `
                <div class="item">
                    <div class="img"><img src="${gamefeatrurearray[i].img}" alt=""></div>
                    <div class="des">${gamefeatrurearray[i].des}</div>
                </div>
    `
}
gamecontainer.innerHTML = game