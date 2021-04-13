$(document).ready(function(){
    let tl = gsap.timeline();
    //header

   tl.to(
       $(".logo"),1,{
        delay:1.8,
        opacity:1,
        y:0,
        ease: Expo.easeInOut
       }
   )
   .to($("#menu1"),.3,{
       opacity:1,
       y:0,
       ease: Expo.easeInOut
   }
   )
   .to($("#menu2"),.3,{
    opacity:1,
    y:0,
    ease: Expo.easeInOut
}
)
.to($("#menu3"),.3,{
    opacity:1,
    y:0,
    ease: Expo.easeInOut
}
)


//canvas


})