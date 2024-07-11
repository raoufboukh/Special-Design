let lis = document.querySelectorAll(".landing ul li");
let opt = document.querySelector(".opt");
let box = document.querySelector(".box-option");
let iopt = document.querySelector(".opt i")
let color = document.querySelectorAll(".color");
let showBullet = document.querySelectorAll(".show span");
let ul = document.querySelector(".landing ul");
let reset = document.querySelector(".Reset");
let random = document.querySelectorAll(".random span");
let images = document.querySelectorAll(".gallery img");
let sections = document.querySelectorAll("section");
let landing = document.querySelector(".landing");
let skills = document.querySelector(".skills");
let prog = document.querySelectorAll(".progress span");
let menu = document.querySelector(".links i");
let links = document.querySelector(".links ul");
let a = document.querySelectorAll(".links ul li a");
// document.body.style.cursor = "";
window.onscroll = function(){
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        if(top >= offset){
            sec.classList.add("appear");
        }else if(top < offset){
            sec.classList.remove("appear");
        }
    })
    if(window.scrollY >= skills.offsetTop - 150){
        prog[0].style.width = "90%";
        prog[1].style.width = "85%";
        prog[2].style.width = "80%";
        prog[3].style.width = "70%";
        prog[4].style.width = "60%";
    }else if(window.scrollY < skills.offsetTop - 200){
        prog[0].style.width = "0%";
        prog[1].style.width = "0%";
        prog[2].style.width = "0%";
        prog[3].style.width = "0%";
        prog[4].style.width = "0%";
    }
}

let co = 1;

setInterval(function(){
    landing.style.backgroundImage = `url(${images[co].src})`
    if(co == 4){
        co = 0;
    }else{
        co++;
    }
},6000);
let mainColors;

let cont = false;
menu.addEventListener("click",function(){
    links.classList.toggle("show");
});

document.addEventListener('click', (e) => {
    if (e.target !== menu) {
        links.classList.remove("show");
    }
});

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', mainColors);
}
lis.forEach(li =>{
    li.onclick = function(){
        location.href = "/SpecialDesign/index.html#"+li.getAttribute("data-id");
    }
})

images.forEach(el =>{
    el.onclick = function(){
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let h = document.createElement("h3");
        div.className = "popup";
        h.innerHTML = el.alt;
        h.className = "change";
        div2.appendChild(h);
        div2.style = "padding: 30px; width:fit-content; position:fixed; top:50%; left:50%;transform:translate(-50%,-50%); background-color:white; text-align:center;";
        let img = document.createElement("img");
        img.src = el.src;
        img.style = "width:100%;margin:10px 0";
        let sp = document.createElement("span");
        sp.innerHTML = "X";
        sp.className = "changebg";
        sp.style = `color:white; position:absolute; padding:10px; border-radius:50%; top:-7px; right:-15px; cursor:pointer; `
        sp.onclick = function(){
            document.body.removeChild(div);
        }
        div2.appendChild(sp);
        div2.appendChild(img);
        div.appendChild(div2);
        document.body.appendChild(div);
    }
})

function rem(arr){
    for(let i = 0;i < arr.length;i++){
        arr[i].classList.remove("active");
    }
}

random.forEach(el => {
    el.addEventListener("click", function () {
        rem(random);
        el.classList.add("active");
        localStorage.setItem("random",el.textContent);
    })
})
if(localStorage.getItem("random")){
    rem(random);
    for(let i = 0;i < random.length;i++){
        localStorage.getItem("random") == random[i].textContent ? random[i].classList.add("active") : null;
    }
}

color.forEach(co =>{
    co.addEventListener("click",function(){
        for(let i = 0;i < color.length;i++){
            color[i].classList.remove("selected");
        }
        co.classList.add("selected");
        localStorage.setItem("color",co.getAttribute("data-color"));
        changeAll();
    })
})
showBullet.forEach(el=>{
    el.onclick = function(){
        rem(showBullet);
        el.classList.add("active");
        localStorage.setItem("show",el.textContent);
        show();
    }
})
if(localStorage.getItem("show")){
    rem(showBullet);
    for(let i = 0;i < showBullet.length;i++){
        if(localStorage.getItem("show") == showBullet[i].textContent){
            showBullet[i].classList.add("active");
        }
    }
    show();
}
if(localStorage.getItem("color")){
    for(let j = 0;j < color.length;j++){
        color[j].classList.remove("selected");
    }
    for(let i = 0;i < color.length;i++){
        if(color[i].getAttribute("data-color") == localStorage.getItem("color")){
            color[i].classList.add("selected");
        }
    }
    changeAll();
}

iopt.classList.remove("fa-spin");
opt.onclick = function(){
    box.classList.toggle("showed");
    iopt.classList.toggle("fa-spin");
}

function show(){
    if(localStorage.getItem("show") == "Yes"){
        ul.style.display = "flex";
    }else{
        ul.style.display = "none";
    }
}
reset.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
})


function changeAll(){
    mainColors = localStorage.getItem("color");
    document.documentElement.style.setProperty('--main-color', mainColors);
}

changeAll();
