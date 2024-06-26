const tl = gsap.timeline({
    defaults: {
        duration: 0.35,
        ease: "power2.easeOut"
    }
});
// grab home
const home = document.querySelector(".home");
const notifications = document.querySelector(".notifications");
const messages = document.querySelector(".messages");
gsap.set(".feather", {
    scale: 0,
    transformOrigin: "center"
});
home.addEventListener("click", ()=>{
    console.log("click");
    gsap.fromTo(".home-svg", {
        scale: 1
    }, {
        scale: 0.8,
        yoyo: true,
        repeat: 1
    });
    gsap.fromTo(".feather", {
        scale: 0,
        y: -5
    }, {
        scale: 1,
        y: 20,
        duration: 1,
        stagger: 0.2
    });
    gsap.fromTo(".right-feather", {
        x: 0
    }, {
        x: 5
    });
});
gsap.set(".bell", {
    transformOrigin: "top center"
});
gsap.set(".ringer", {
    transformOrigin: "top center"
});
gsap.set(".wave", {
    opacity: 0,
    transformOrigin: "bottom"
});
notifications.addEventListener("click", ()=>{
    gsap.fromTo(".bell", {
        rotation: -5
    }, {
        rotation: 0,
        duration: 2,
        ease: "elastic.out(5, 0.2)"
    });
    gsap.fromTo(".ringer", {
        rotation: -3,
        x: 0.5
    }, {
        rotation: 0,
        x: 0,
        duration: 1,
        ease: "elastic.out(5, 0.2)"
    });
    gsap.fromTo(".wave", {
        scale: 0,
        opacity: 1
    }, {
        scale: 1.3,
        opacity: 0,
        duration: 1
    });
});
gsap.set(".flap", {
    transformOrigin: "top"
});
gsap.set(".note", {
    zIndex: 3
});
messages.addEventListener("click", ()=>{
    tl.fromTo(".messages-svg", {
        scale: 1
    }, {
        scale: 0.9
    }).fromTo(".flap", {
        scale: 1
    }, {
        scale: -1
    }, "<50%").fromTo(".messages-svg", {
        scale: 0.9
    }, {
        scale: 1
    }, "<50%").fromTo(".note", {
        y: 0,
        opacity: 1
    }, {
        y: -40,
        opacity: 0,
        duration: 0.75
    }).to(".flap", {
        scale: 1
    }, "<50%");
});

//# sourceMappingURL=index.a622b82b.js.map
