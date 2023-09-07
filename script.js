var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top =  dets.y - 6 +"px"
    crsrBlur.style.left = dets.x  - 250+ "px"
    crsrBlur.style.top =  dets.y  - 250+ "px"
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function () {
        crsr.style.scale = 4
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "0.5px solid white"
    })
    elem.addEventListener("mouseleave",function () {
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#95c11e"
        crsr.style.border = "none"
    })
})


var navimg = document.querySelector("#nav img")
navimg.addEventListener("mouseenter",function () {
        navimg.style.scale = 1
        navimg.style.transition =  "all linear 0.1s";
        
    })
    navimg.addEventListener("mouseleave",function () {
        navimg.style.scale = 1.1
        navimg.style.transition =  "all linear 0.1s";
    })



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height: "120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       /* markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub:2 
        
    }
})

gsap.to("#main",{
    backgroundColor: "rgba(0, 0, 0, 0.97)",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
      /*  markers:true,*/
        start:"top -25vh",
        end:"top -70%",
        scrub:2

    }
})
gsap.from("#about-us,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        /*markers:true,*/
        start:"top 70%",
        end:"end 65%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.4,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        /*markers:true,*/
        start:"top 70%",
        end:"end 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        marker:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        marker:true,
        start:" 100%",
        end:" 90%",
        scrub:4
    }
})