const cfg = document.getElementById("cfg")
const modo = document.getElementById("modo")
const perfil = document.getElementById("perfil")
const topo = document.getElementById("topo")
const produtos = document.getElementById("produtos")
const inicio = document.getElementById("inicio")
const search = document.getElementById("search")
const images = document.querySelectorAll("#images")
const imagens = document.getElementById("imagens")
const insta = document.getElementById("insta")
const phone = document.getElementById("phone")
const imagens1 = document.getElementById("imagens1")
const imagen1 = document.getElementById("images1")
const carrinholista = document.getElementById("carrinholista")
const plist = [
    {
        nome: "Cerveja Skol",
        preco: "R$2,75",
        link: "skol.html",
        imagem: "skol.png"
    }
    ,
    {
        nome: "Cerveja Brahma",
        preco: "R$2,75",
        link: "brahma.html",
        imagem: "brahma.png"
    }
    ,
    {
        nome: "Cerveja Sol",
        preco: "R$6,99",
        link: "sol.html",
        imagem: "sol.png"
    }
    ,
    {
        nome: "Cerveja Heineken",
        preco: "R$6,99",
        link: "heineken.html",
        imagem: "heineken.png"
    }
    ,
    {
        nome: "Cerveja Budweiser",
        preco: "R$5,49",
        link: "budweiser.html",
        imagem: "budweiser.png"
    }
    ,
    {
        nome: "Cerveja Stella",
        preco: "R$5,49",
        link: "stella.html",
        imagem: "stella.png"
    }
    ,
    {
        nome: "Cerveja Spaten",
        preco: "R$5,49",
        link: "spaten.html",
        imagem: "spaten.png"
    }
    ,
    {
        nome: "Cerveja Budweiser Lata",
        preco: "R$3,99",
        link: "budweiserlata.html",
        imagem: "budweiserlata.png"
    }
    ,
    {
        nome: "Cerveja Brahma Duplo Malte",
        preco: "R$3,25",
        link: "brahmaduplo.html",
        imagem: "brahmaduplo.png"
    }
]

function criarproduto(produto) {
    const pa = document.createElement("a")
    pa.setAttribute("class", "skoldiv")
    pa.setAttribute("href", produto.link)

    const img = document.createElement("img")
    img.setAttribute("class", "skolimg")
    img.setAttribute("src", produto.imagem)

    const nome = document.createElement("p")
    nome.setAttribute("class", "skolp")
    nome.innerText = produto.nome

    const preco = document.createElement("p")
    preco.setAttribute("class", "skolp")
    preco.innerText = produto.preco

    pa.appendChild(img)
    pa.appendChild(nome)
    pa.appendChild(preco)

    return pa
}
function criarprodutolista(produto,produtolocal) {
    const pa = document.createElement("div")
    pa.setAttribute("class", "skoldiv1")
    pa.setAttribute("href", produto.link)

    const img = document.createElement("img")
    img.setAttribute("class", "skolimg")
    img.setAttribute("src", produto.imagem)

    const nome = document.createElement("p")
    nome.setAttribute("class", "skolp")
    nome.innerText = produto.nome

    const preco = document.createElement("p")
    preco.setAttribute("class", "skolp")
    preco.innerText = produto.preco

    produtolocal=localStorage.getItem(produtolocal)
    const div=document.createElement("div")
    div.setAttribute("class","listadiv")
    div.innerText=produtolocal

    
    pa.appendChild(img)
    pa.appendChild(nome)
    pa.appendChild(preco)
    div.appendChild(pa)
    return div
}

if (imagens1 != null) {
    const p1list = plist.map((produto) => {
        const pa = criarproduto(produto)
        imagens1.appendChild(pa)
    })
}

let aberto = false
function abrirbotoes() {
    if (aberto == false) {
        modo.style.display = "flex"
        perfil.style.display = "flex"
        cfg.style.rotate = "-180deg"
        cfg.style.transition = " rotate 0.5s ease"
        setTimeout(() => {
            modo.style.transition = "transform 0.2s ease"
            modo.style.transform = "translateX(-7vh)"
            perfil.style.transition = "transform 0.2s ease"
            perfil.style.transform = "translateY(7vh)"
        }, 10);
    }
    else if (aberto == true) {
        cfg.style.rotate = "180deg"
        modo.style.transition = "transform 0.2s ease"
        modo.style.transform = "translateX(0vh)"
        perfil.style.transition = "transform 0.2s ease"
        perfil.style.transform = "translateY(0vh)"
        setTimeout(() => {
            modo.style.display = "none"
            perfil.style.display = "none"
        }, 130);
    }
    aberto = !aberto
}



const nomeproduto = document.querySelectorAll(".skolp")

let modonoite = localStorage.getItem("modonoite")
if (modonoite == null) {
    modonoite = "false"
}
if (insta != null) {
    if (modonoite == "true") {
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        topo.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        modo.style.borderColor = "white"
        perfil.style.filter = "invert(100%)"
        inicio.style.color = "white"
        topo.style.borderColor = "rgb(94, 9, 17)"
        search.style.borderColor = "white"
        search.style.color = "white"
        produtos.style.color = "white"
        modo.src = "modonoturno.png"
        modo.style.display = "none"
        modo.style.transition = "transform 0.5s ease"
        insta.style.color = "white"
        phone.style.color = "white"
    }
    else if (modonoite == "false") {
        topo.style.backgroundColor = "rgb(255, 153, 0)"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        produtos.style.color = "black"
        modo.style.borderColor = "black"
        search.style.borderColor = "rgb(68, 7, 13)"
        topo.style.borderColor = "rgb(94, 9, 17)"
        perfil.style.filter = "invert(0%)"
        inicio.style.color = "black"
        search.style.color = "black"
        document.body.style.backgroundColor = "white"
        modo.style.display = "none"
        modo.src = "mododia.png"
        modo.style.transition = "transform 0.5s ease"
        insta.style.color = "black"
        phone.style.color = "black"
    }
} else if (imagens1 != null) {
    if (modonoite == "true") {
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        topo.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        modo.style.borderColor = "white"
        produtos.style.color = "white"
        perfil.style.filter = "invert(100%)"
        inicio.style.color = "white"
        topo.style.borderColor = "rgb(94, 9, 17)"
        search.style.borderColor = "white"
        search.style.color = "white"
        modo.src = "modonoturno.png"
        modo.style.display = "none"
        modo.style.transition = "transform 0.5s ease"
        nomeproduto.forEach(elemento => {
            elemento.style.color = "white"
        })
        images1.style.backgroundColor = "rgba(255,255,255,0.250)"
        images.forEach(elemento => {
            elemento.style.backgroundColor = "rgba(255,255,255,0.250)"
        })
    }
    else if (modonoite == "false") {
        topo.style.backgroundColor = "rgb(255, 153, 0)"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        modo.style.borderColor = "black"
        produtos.style.color = "black"
        search.style.borderColor = "rgb(68, 7, 13)"
        topo.style.borderColor = "rgb(94, 9, 17)"
        perfil.style.filter = "invert(0%)"
        inicio.style.color = "black"
        search.style.color = "black"
        document.body.style.backgroundColor = "white"
        modo.style.display = "none"
        modo.src = "mododia.png"
        modo.style.transition = "transform 0.5s ease"
        images1.style.backgroundColor = "rgb(255, 153, 0)"
        images.forEach(elemento => {
            elemento.style.backgroundColor = "rgb(255, 153, 0)"
        })
        nomeproduto.forEach(elemento => {
            elemento.style.color = "rgb(68, 7, 13)"
        })
    }
} else {
    if (modonoite == "true") {
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        topo.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        modo.style.borderColor = "white"
        perfil.style.filter = "invert(100%)"
        inicio.style.color = "white"
        produtos.style.color = "white"
        topo.style.borderColor = "rgb(94, 9, 17)"
        search.style.borderColor = "white"
        search.style.color = "white"
        modo.src = "modonoturno.png"
        modo.style.display = "none"
        modo.style.transition = "transform 0.5s ease"
    }
    else if (modonoite == "false") {
        topo.style.backgroundColor = "rgb(255, 153, 0)"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        produtos.style.color = "black"
        modo.style.borderColor = "black"
        search.style.borderColor = "rgb(68, 7, 13)"
        topo.style.borderColor = "rgb(94, 9, 17)"
        perfil.style.filter = "invert(0%)"
        inicio.style.color = "black"
        search.style.color = "black"
        document.body.style.backgroundColor = "white"
        modo.style.display = "none"
        modo.src = "mododia.png"
        modo.style.transition = "transform 0.5s ease"
    }
}
function mudarmodo() {
    if (modonoite == "false") {
        modonoite = "true"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        topo.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        modo.style.borderColor = "white"
        produtos.style.color = "white"
        perfil.style.filter = "invert(100%)"
        inicio.style.color = "white"
        topo.style.borderColor = "rgb(94, 9, 17)"
        search.style.borderColor = "white"
        search.style.color = "white"
        setTimeout(() => {
            modo.src = "modonoturno.png"
            modo.style.transform = "translateX(-7vh)"
            modo.style.transition = "transform 0.5s ease"
        }, 10);
        nomeproduto.forEach(elemento => {
            elemento.style.color = "white"
        })
        images.forEach(elemento => {
            elemento.style.backgroundColor = "rgba(255,255,255,0.250)"
        })
        images1.style.backgroundColor = "rgba(255,255,255,0.250)"
    }
    else if (modonoite == "true") {
        modonoite = "false"
        topo.style.backgroundColor = "rgb(255, 153, 0)"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        modo.style.borderColor = "black"
        produtos.style.color = "black"
        search.style.borderColor = "rgb(68, 7, 13)"
        topo.style.borderColor = "rgb(94, 9, 17)"
        perfil.style.filter = "invert(0%)"
        inicio.style.color = "black"
        search.style.color = "black"
        document.body.style.backgroundColor = "white"
        setTimeout(() => {
            modo.style.transform = "translateX(-7vh)"
            modo.src = "mododia.png"
            modo.style.transition = "transform 0.5s ease"
        }, 20);
        images.forEach(elemento => {
            elemento.style.backgroundColor = "rgb(255, 153, 0)"
        })
        nomeproduto.forEach(elemento => {
            elemento.style.color = "rgb(68, 7, 13)"
        })
        images1.style.backgroundColor = "rgb(255, 153, 0)"
    }
    localStorage.setItem("modonoite", modonoite)
}


function mudarmodo1() {
    if (modonoite == "false") {
        modonoite = "true"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        topo.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        modo.style.borderColor = "white"
        produtos.style.color = "white"
        perfil.style.filter = "invert(100%)"
        inicio.style.color = "white"
        topo.style.borderColor = "rgb(94, 9, 17)"
        search.style.borderColor = "white"
        search.style.color = "white"
        insta.style.color = "white"
        phone.style.color = "white"
        setTimeout(() => {
            modo.src = "modonoturno.png"
            modo.style.transform = "translateX(-7vh)"
            modo.style.transition = "transform 0.5s ease"
        }, 10);
    }
    else if (modonoite == "true") {
        modonoite = "false"
        topo.style.backgroundColor = "rgb(255, 153, 0)"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        modo.style.borderColor = "black"
        produtos.style.color = "black"
        search.style.borderColor = "rgb(68, 7, 13)"
        topo.style.borderColor = "rgb(94, 9, 17)"
        perfil.style.filter = "invert(0%)"
        inicio.style.color = "black"
        search.style.color = "black"
        insta.style.color = "black"
        phone.style.color = "black"
        document.body.style.backgroundColor = "white"
        setTimeout(() => {
            modo.style.transform = "translateX(-7vh)"
            modo.src = "mododia.png"
            modo.style.transition = "transform 0.5s ease"
        }, 20);
    }
    localStorage.setItem("modonoite", modonoite)
}

function mudarmodo2() {
    if (modonoite == "false") {
        modonoite = "true"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        topo.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.852)"
        modo.style.borderColor = "white"
        produtos.style.color = "white"
        perfil.style.filter = "invert(100%)"
        inicio.style.color = "white"
        topo.style.borderColor = "rgb(94, 9, 17)"
        search.style.borderColor = "white"
        search.style.color = "white"
        setTimeout(() => {
            modo.src = "modonoturno.png"
            modo.style.transform = "translateX(-7vh)"
            modo.style.transition = "transform 0.5s ease"
        }, 10);
    }
    else if (modonoite == "true") {
        modonoite = "false"
        topo.style.backgroundColor = "rgb(255, 153, 0)"
        modo.style.transition = "transform 0.01s ease"
        modo.style.display = "none"
        modo.style.transform = "translateX(-2vh)"
        modo.style.display = "flex"
        modo.style.borderColor = "black"
        produtos.style.color = "black"
        search.style.borderColor = "rgb(68, 7, 13)"
        topo.style.borderColor = "rgb(94, 9, 17)"
        perfil.style.filter = "invert(0%)"
        inicio.style.color = "black"
        search.style.color = "black"
        document.body.style.backgroundColor = "white"
        setTimeout(() => {
            modo.style.transform = "translateX(-7vh)"
            modo.src = "mododia.png"
            modo.style.transition = "transform 0.5s ease"
        }, 20);
    }
    localStorage.setItem("modonoite", modonoite)
}


if (imagens1 != null) {
    imagens1.style.left = "30vw"
    function carroselesquerda() {
        if (imagens1.style.left == "30vw") {
        }
        else {
            imagens1.style.left = parseFloat(imagens1.style.left.replace("vw", "")) + 15 + "vw"
        }
    }
    function carroseldireita() {
        if (imagens1.style.left == "-30vw") {
        }
        else {
            imagens1.style.left = parseFloat(imagens1.style.left.replace("vw", "")) - 15 + "vw"
        }
    }
}


function ircarrinho() {
    window.location.href = "carrinho.html"
}
let quantia = 0
const naturagua = "naturagua"
localStorage.getItem(naturagua)
const skol = "skol"
localStorage.getItem(skol)
const brahma = "brahma"
localStorage.getItem(brahma)
const brahmaduplo = "brahmaduplo"
localStorage.getItem(brahmaduplo)
const redbull = "redbull"
localStorage.getItem(redbull)
const spaten = "spaten"
localStorage.getItem(spaten)
const stella = "stella"
localStorage.getItem(stella)
const sol = "sol"
localStorage.getItem(sol)
const ypioca = "ypioca"
localStorage.getItem(ypioca)
const slovaazul = "slovaazul"
localStorage.getItem(slovaazul)
const slovavermelha = "slovavermelha"
localStorage.getItem(slovavermelha)
const gelo = "gelo"
localStorage.getItem(gelo)
const fanta2l = "fanta2l"
localStorage.getItem(fanta2l)
const budweiser = "budweiser"
localStorage.getItem(budweiser)
const budweiserlata = "budweiserlata"
localStorage.getItem(budweiserlata)
const heineken = "heineken"
localStorage.getItem(heineken)
const _51 = "_51"
localStorage.getItem(_51)
const _51gold = "_51gold"
localStorage.getItem(_51gold)
function adicionar(produto) {
    quantia++
    localStorage.setItem(produto, quantia)
}

function addcart(produto) {

    const pskol = {
        nome: "Cerveja Skol",
        preco: "R$2,75",
        link: "skol.html",
        imagem: "skol.png"
    }

    const pbrahma = {
        nome: "Cerveja Brahma",
        preco: "R$2,75",
        link: "brahma.html",
        imagem: "brahma.png"
    }

    const psol = {
        nome: "Cerveja Sol",
        preco: "R$6,99",
        link: "sol.html",
        imagem: "sol.png"
    }

    const pheineken = {
        nome: "Cerveja Heineken",
        preco: "R$6,99",
        link: "heineken.html",
        imagem: "heineken.png"
    }

    const pbudweiser = {
        nome: "Cerveja Budweiser",
        preco: "R$5,49",
        link: "budweiser.html",
        imagem: "budweiser.png"
    }

    const pstella = {
        nome: "Cerveja Stella",
        preco: "R$5,49",
        link: "stella.html",
        imagem: "stella.png"
    }

    const pspaten = {
        nome: "Cerveja Spaten",
        preco: "R$5,49",
        link: "spaten.html",
        imagem: "spaten.png"
    }

    const pbudweiserlata = {
        nome: "Cerveja Budweiser Lata",
        preco: "R$3,99",
        link: "budweiserlata.html",
        imagem: "budweiserlata.png"
    }

    const pbrahmaduplo = {
        nome: "Cerveja Brahma Duplo Malte",
        preco: "R$3,25",
        link: "brahmaduplo.html",
        imagem: "brahmaduplo.png"
    }

    const pnaturagua = {
        nome: "Água Naturágua",
        preco: "R$1,99",
        link: "naturagua.html",
        imagem: "naturagua.png"
    }
    const p_51 = {
        nome: "Cachaça 51",
        preco: "R$14,99",
        link: "51.html",
        imagem: "51.png"
    }
    const p_51gold = {
        nome: "Água Naturágua",
        preco: "R$17,99",
        link: "51gold.html",
        imagem: "51gold.png"
    }
    const pypioca = {
        nome: "Cachaça Ypioca",
        preco: "R$1,99",
        link: "ypioca.html",
        imagem: "ypioca.png"
    }
    const pslovaazul = {
        nome: "Vodka Slova Azul",
        preco: "R$14,99",
        link: "slovaazul.html",
        imagem: "slovaazul.png"
    }
    const pslovavermelha = {
        nome: "Vodka Slova Vermelha",
        preco: "R$14,99",
        link: "slovavermelha.html",
        imagem: "slovavermelha.png"
    }
    const pgelo = {
        nome: "Gelo",
        preco: "R$6,99",
        link: "gelo.html",
        imagem: "gelo.png"
    }
    const predbull = {
        nome: "Energético Redbull",
        preco: "R$8,49",
        link: "redbull.html",
        imagem: "redbul.png"
    }
    const pfanta2l = {
        nome: "Refrigerante Fanta Laranja 2L",
        preco: "R$8,99",
        link: "fanta2l.html",
        imagem: "fanta2l.png"
    }

    let quantianaturagua = localStorage.getItem(naturagua)
    if (quantianaturagua != null) {
        quantianaturagua += -1
        carrinholista.appendChild(criarprodutolista(pnaturagua,naturagua))
    }
    let quantiasol = localStorage.getItem(sol)
    if (quantiasol != null) {
        quantiasol += -1
        carrinholista.appendChild(criarprodutolista(psol,sol))
    }
    let quantiaskol = localStorage.getItem(skol)
    if (quantiaskol != null) {
        quantiaskol += -1
        carrinholista.appendChild(criarprodutolista(pskol,skol))
    }
    let quantiabrahma = localStorage.getItem(brahma)
    if (quantiabrahma != null) {
        quantiabrahma += -1
        carrinholista.appendChild(criarprodutolista(pbrahma,brahma))
    }
    let quantiabrahmaduplo = localStorage.getItem(brahmaduplo)
    if (quantiabrahmaduplo != null) {
        quantiabrahmaduplo += -1
        carrinholista.appendChild(criarprodutolista(pbrahmaduplo,brahmaduplo))
    }
    let quantiabudweiser = localStorage.getItem(budweiser)
    if (quantiabudweiser != null) {
        quantiabudweiser += -1
        carrinholista.appendChild(criarprodutolista(pbudweiser,budweiser))
    }
    let quantiabudweiserlata = localStorage.getItem(budweiserlata)
    if (quantiabudweiserlata != null) {
        quantiabudweiserlata += -1
        carrinholista.appendChild(criarprodutolista(pbudweiserlata,budweiserlata))
    }
    let quantiaheineken = localStorage.getItem(heineken)
    if (quantiaheineken != null) {
        quantiaheineken += -1
        carrinholista.appendChild(criarprodutolista(pheineken,heineken))
    }
    let quantiagelo = localStorage.getItem(gelo)
    if (quantiagelo != null) {
        quantiagelo += -1
        carrinholista.appendChild(criarprodutolista(pgelo,gelo))
    }
    let quantiastella = localStorage.getItem(stella)
    if (quantiastella != null) {
        quantiastella += -1
        carrinholista.appendChild(criarprodutolista(pstella,stella))
    }
    let quantiaspaten = localStorage.getItem(spaten)
    if (quantiaspaten != null) {
        quantiaspaten += -1
        carrinholista.appendChild(criarprodutolista(pspaten,spaten))
    }
    let quantiaypioca = localStorage.getItem(ypioca)
    if (quantiaypioca != null) {
        quantiaypioca += -1
        carrinholista.appendChild(criarprodutolista(pypioca,ypioca))
    }
    let quantia_51 = localStorage.getItem(_51)
    if (quantia_51 != null) {
        quantia_51 += -1
        carrinholista.appendChild(criarprodutolista(p_51,_51))
    }
    let quantia_51gold = localStorage.getItem(_51gold)
    if (quantia_51gold != null) {
        quantia_51gold += -1
        carrinholista.appendChild(criarprodutolista(p_51gold,_51gold))
    }
    let quantiaslovaazul = localStorage.getItem(slovaazul)
    if (quantiaslovaazul != null) {
        quantiaslovaazul += -1
        carrinholista.appendChild(criarprodutolista(pslovaazul,slovaazul))
    }
    let quantiaslovavermelha = localStorage.getItem(slovavermelha)
    if (quantiaslovavermelha != null) {
        quantiaslovavermelha += -1
        carrinholista.appendChild(criarprodutolista(pslovavermelha,slovavermelha))
    }
    let quantiafanta2l = localStorage.getItem(fanta2l)
    if (quantiafanta2l != null) {
        quantiafanta2l += -1
        carrinholista.appendChild(criarprodutolista(pfanta2l,fanta2l))
    }
    let quantiaredbull = localStorage.getItem(redbull)
    if (quantiaredbull != null) {
        quantiaredbull += -1
        carrinholista.appendChild(criarprodutolista(predbull,redbull))
    }
}

if (window.location.href.includes("carrinho.html")) {
    addcart()
}