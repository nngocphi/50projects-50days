const labels = document.querySelectorAll(".form-input label");

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter, index) =>
				`<span style="transition-delay:${
					index * 50
				}ms">${letter}</span>`
		)
		.join("");
});
