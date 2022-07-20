const img = document.querySelectorAll(".img-container img")
const container = document.querySelector(".img-container")
let idx = 0

setInterval(run, 2000)

function run(){
    idx++
    changeImg()
}

function changeImg(){
    if(idx < 0){
        idx = img.length-1
    }else if(idx > img.length-1){
        idx = 0
    }
    container.style.transform = `translateX(${-800*idx}px)`
    resopnsive()
}

//To make the trasition responsive aswell
function resopnsive(){
    let x = window.matchMedia("(max-width: 825px)")
    if(x.matches){
        container.style.transform = `translateX(${-100*idx}vw)`
    }
}