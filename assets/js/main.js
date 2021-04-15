(function () {

    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
          const span = this.querySelector('span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;

          span.style.transform = `translate(${xMove}px, ${yMove}px)`;

          if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
          console.log(x,y);
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();

$(document).ready(function(){
    //srcoll reset
    window.onload = function() {
        setTimeout (function () {
            scrollTo(0,0);

        },100);
    }


let tl = gsap.timeline();

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

});
