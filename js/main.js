/*const DUMPLINGS_APP = () => {
	const RANGE = 200;
	const DUMPLINGS_COUNT = 5;

	let dumplings = [];

	function create_dumplings_animation() {
		let about_back_node = document.getElementById("about-back")
		for(let i = 0; i < DUMPLINGS_COUNT; i++) {
			let dumpling_node = document.createElement("img")
			dumpling_node.src = "./imgs/pierog.png"
			dumpling_node.classList.add("dumpling")
			dumpling_node.style.top = parseInt(Math.random() * about_back_node.offsetHeight) + "px"
			dumpling_node.style.left = parseInt(Math.random() * about_back_node.offsetWidth) + "px"
			dumplings.push(dumpling_node)
			about_back_node.appendChild(dumpling_node)
		}
	}

	function update_dumplings_pos() {
		console.log("ELO")
	}

	create_dumplings_animation()
	setInterval(update_dumplings_pos, 16 * 1000)
};

DUMPLINGS_APP()*/