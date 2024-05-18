const tl = gsap.timeline({
	defaults: {
		duration: 0.35,
		ease: "power2.easeOut",
	},
});

// grab home
const home = document.querySelector(".home");

gsap.set(".feather", { scale: 0, transformOrigin: "center" });
home.addEventListener("click", () => {
	console.log("click");
	gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.8, yoyo: true, repeat: 1 });
	gsap.fromTo(
		".feather",
		{ scale: 0, y: -5 },
		{ scale: 1, y: 20, duration: 1, stagger: 0.2 }
	);

	gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
});
