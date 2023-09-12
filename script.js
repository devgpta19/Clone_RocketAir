gsap.to("#heroblack",{
    scrollTrigger : {
        trigger:"#heroblack",
        scroll:"#body",
        // markers:true,
        start:"bottom 70%",
        end:"bottom 0%",
        duration: 2,
        scrub: 2 ,
        ease:"inOut",
    },
    opacity: 2,
})