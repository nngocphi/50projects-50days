const splits = document.querySelectorAll(".split");

splits.forEach((split) => {
	split.addEventListener("mouseenter", () => {
		split.style.flex = 4;
	});
	split.addEventListener("mouseleave", () => {
		split.style.flex = "";
	});
});
