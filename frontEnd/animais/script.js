/*
//1
const img = document.getElementsByTagName("img")
console.log(img)


//2
//^ começa com
const imagem = document.querySelectorAll("img[src^='imagens/imagem']")
console.log(imagem)
//3
const href= document.querySelectorAll("[href^='#']")
console.log(href)

//4
const animaisDescricao = document.getElementsByClassName("animaisDescricao")
console.log(animaisDescricao[0].querySelector("h2"))


//5
const p = document.querySelectorAll("p")
console.log(p[p.length - 1])
*/
/*
//EXERCICIOS 2
//1
const p = document.querySelectorAll("p")
p.forEach((item) => {
    console.log(item)
})

//2
p.forEach((item) => {
    console.log(item.innerText)
})

//3
*/

/*
//EXERCICIOS 3
//1
const menu = document.querySelectorAll(".menu > *")
menu.forEach((item) => {
    console.log(item)
    item.classList.add('ativo');
})

//2
for(i=0; i < menu.length; i++){
    if(i==0){

    }else{
        menu[i].classList.remove('ativo')
    }
}

//3
const img = document.querySelectorAll("img")
img.forEach((item) => {
    console.log(item.hasAttribute("alt"))
})

//4
menu.forEach((item) =>{
    item.setAttribute('href', 'link alterado XD')
})
*/

/*
//EXERCICIOS 4
//1
const primeiraImg = document.querySelector("img")
console.log(primeiraImg.offsetTop)

//2
const todasImg = document.querySelectorAll("img")

//3
const links = document.querySelectorAll("a")
links.forEach((item) => {
    let rect = item.getBoundingClientRect()
    if(rect.width >= 48 && rect.height >= 48){
        console.log("Link com o tamnho errado")
    }else{
        console.log("Link com o tamanho errado")
    }
})

//4
let small = window.matchMedia("(max-width: 720px)")
if(small.matches){
    let menu = document.querySelector(".menu")
    menu.classList.add('menu-mobile')
    console.log("menor que 720 px")
}else{
    console.log("maior que 720 px")
}
*/

/*
//EXERCICIOS 5
//1
const links = document.querySelectorAll("a[href^='#']")
function callback(event) {
    event.preventDefault()
    event.currentTarget.classList.add('ativo')
    tudo.forEach((link) =>{
        link.classList.remove('ativo')
    })
}
//2
const tudo = document.querySelectorAll("body *");

function callback(event) {
    console.log(this)
}
tudo.forEach((tudinho) => {
    tudinho.addEventListener('click',callback)
})

//3
function callback2() {
    const element = this
    element.remove()
}
tudo.forEach((tudinho) => {
    tudinho.addEventListener('click',callback2)
})

//4
function callback3(event) {
    if(event.key === 't'){
        document.body.classList.toggle('maior')
    }
}

window.addEventListener('keydown', callback3)
*/


/*
//EXERCICIOS 6
//1
const menu = document.querySelector(".menu")
const footer = document.querySelector("footer")

const menu2 = menu.cloneNode(true)
footer.appendChild(menu2)

//2
const h2 = document.querySelector(".faq section").children[0]
console.log(h2)

//3
*/

const imgs = document.querySelectorAll('.jsTabMenu img')
const conteudo = document.querySelectorAll('.jsDescription section')

if(imgs.length && conteudo.length){
    console.log(imgs)
    console.log(conteudo)

    conteudo.forEach((item) => {
        item.classList.add("displayNone")
    })

    conteudo[0].classList.toggle('displayNone')
    let ultimoAtivo = 0;

    function mostrarDescricao(){
        let index = this.getAttribute('alt')

        if(index != ultimoAtivo){
            conteudo[index].classList.toggle('displayNone')
        }

        if(ultimoAtivo != index){
            conteudo[ultimoAtivo].classList.toggle('displayNone')
            ultimoAtivo = index
        }

        console.log(`index ${index}`)
        console.log(`ultimo ativo ${ultimoAtivo}`)
        }

    imgs.forEach((item) =>{
        item.addEventListener('click', mostrarDescricao)
    })
}

//FAQ

const faq = document.querySelector(".faq")
const after = document.querySelectorAll(".faq h2::after")
const h2 = document.querySelectorAll(".faq h2")
const p = document.querySelectorAll(".faq p")
console.log(faq)
console.log(h2)
console.log(p)

p.forEach((item) => {
    item.classList.add("displayNone")
})

function mostrarp(index){
    p[index].classList.toggle('displayNone')
    after[index].classList.toggle("viraSeta")
}

h2.forEach((item, index) => {
    item.addEventListener('click', () => {
        mostrarp(index)
    })
})

//LINKS
const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    console.log(section);
    section.scrollIntoView({
        behavior: "smooth"
    });


    // window.scrollTo({
    //     top: 1000,
    //     behavior: 'smooth'
    // });

}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
})

//ANIMAR

const sectionScroll = document.querySelectorAll('.jsScroll');

function animaScroll() {
    sectionScroll.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - window.innerHeight*0.6) < 0
        console.log(sectionTop);
        if(isSectionVisible) {
            section.classList.add('ativo')
        }
    })
}

animaScroll()

window.addEventListener("scroll", animaScroll)