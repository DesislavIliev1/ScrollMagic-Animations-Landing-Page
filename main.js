
  
$(function(){
    
// Scroll trigger register
    gsap.registerPlugin(ScrollTrigger);

    
    //3d cube rotation on scrolling
    cubeRotation();

     // navbar color changing animation
    navbarColorChange();

    //header parallax efect animation
   // different images different parameters
    navbarParallax();

 //grid of images fade out animation
    imagesFade();

 //bear scale pinned animation
    bearZoom();

     //text animation 
    textAnimation();

    // footer control animation panel with buttons
    footerController();
    

})

function navbarParallax(){
    gsap.to(".bg",{
        scrollTrigger : {
            scrub: 1 
        },
        scale: 1.5
    })    

    gsap.to(".mountain-left",{
        scrollTrigger : {
            scrub: 1 
        },
        x : -500
    })    

    gsap.to(".mountain-right",{
        scrollTrigger : {
            scrub: 1 
        },
        x : 500
    })
    
    gsap.to(".clouds-1",{
        scrollTrigger : {
            scrub: 1 
        },
        x : 200
    }) 
    
    gsap.to(".clouds-2",{
        scrollTrigger : {
            scrub: 1 
        },
        x : -200
    })    

    gsap.to(".h-text",{
        scrollTrigger : {
            scrub: 1 
        },
        y : 200
    })
    

}

function cubeRotation(){

    gsap.registerPlugin(ScrollTrigger) 

    gsap.set('.cube',{yPercent: -20});

    var rotate = gsap.timeline({
      scrollTrigger:{
        trigger: ".section-4",
        
        scrub:0.5,
        start: 'top top',
        end: 'bottom top  ' 
        }
    })
    .to('.cube', {
      rotation:360*2,
      duration:1, ease:'none',
    })
}

function navbarColorChange(){
    gsap.to(".navbar",{
        backgroundColor:'#63277a' ,
        ease: "linear",
        duration:1,
        scrollTrigger : {
            trigger:".section-1",
            start: "top",
            toggleActions:"play restart restart reverse"
        }
    })
    
    gsap.to(".navbar",{
        backgroundColor:"#613386" ,
        ease: "linear",
        duration:1,
       scrollTrigger : {
            trigger:".section-2",
            start: "top",
            toggleActions:"resume pause restart reverse",
        }
    })          

    gsap.to(".navbar",{
        backgroundColor:"#8555ac" ,
        ease:"linear",
        duration:2,
        scrub:1,
        scrollTrigger : {
            trigger:".section-3",
            start: "top 80%",
            toggleActions:"play pause restart reverse",}
        }) 
}

function imagesFade(){
    gsap.to(".img-1",{
        scrollTrigger : {
            trigger:".section-1",
            start:"top 55%",
            toggleActions: "restart restart reverse resume",
        },
        
        opacity:0,
        duration:3

    })  
    
    gsap.to(".img-2",{
       
        scrollTrigger : {
            trigger:".section-1",
            start: "top 50%",
            toggleActions: "restart restart reverse resume",
        },
        opacity:0,
        duration:3,
        
        

    }) 
    gsap.to(".img-3",{
        opacity:0,
        duration:3,
        scrollTrigger : {
            trigger:".section-1",
            start: "top 40%",
            toggleActions: "restart restart reverse resume",}
        
        

    })    
    gsap.to(".img-4",{
        opacity:0,
        duration:3,
        scrollTrigger : {
            trigger:".section-1",
            start: "top 30%",
            toggleActions: "restart restart reverse resume",}
        
        

    })    
    gsap.to(".img-5",{
        opacity:0,
        duration:3,
        scrollTrigger : {
            trigger:".section-1",
            start: "top 20%",
            toggleActions: "restart restart reverse resume",}
        
        

    })    
    gsap.to(".img-6",{
        opacity:0,
        duration:3,
        scrollTrigger : {
            trigger:".section-1",
            start: "top 10%",
            toggleActions: "restart restart reverse resume",}
        
        

    })   

}

function bearZoom(){
    var images = gsap.utils.toArray(".section-2 .bear");
    images.forEach((image, i) => {
    gsap.fromTo(
      image,
      { scale: 0.7 },
      {
        scale: 1.2,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          pin:jQuery(image).parent(),
          trigger: jQuery(image).parent(),
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          
        }
      }
    );
  
  
  })

}


function footerController(){
    $(".btn-1").on("click", function() {
        gsap.to(window, {
            scrollTo: ".header" ,
    });
      });

      $(".btn-2").on("click", function() {
        gsap.to(window, {
            scrollTo: ".section-1" ,
    });
      });

      $(".btn-3").on("click", function() {
        gsap.to(window, {
            scrollTo: ".section-2" ,
    });
      });

      $(".btn-4").on("click", function() {
        gsap.to(window, {
            scrollTo: ".section-3" ,
    });
      });

      $(".btn-5").on("click", function() {
        gsap.to(window, {
            scrollTo: ".section-4" ,
    });
      });
}

function textAnimation(){
    const splitTypes = document.querySelectorAll(".split")
   splitTypes.forEach((char,i) => {
    const text = new SplitType(char, {types: 'chars'})

    gsap.from(text.chars,{
        scrollTrigger:{
            trigger: '.section-3',
            start: 'top 50%',
            end: "top bottom",
            scrub: 3,
            toggleActions:"play pause restart reverse",

        },
        y:100,
        opacity:0.2,
        stagger: 0.2,
        duration:3,

    })
   })

}





    