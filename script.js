var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 10 + "px"
    crsr.style.top =  dets.y - 6 +"px"
    crsrBlur.style.left = dets.x  - 250+ "px"
    crsrBlur.style.top =  dets.y  - 250+ "px"
})
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height: "120px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
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
        markers:true,
        start:"top -25vh",
        end:"top -70%",
        scrub:2

    }
})