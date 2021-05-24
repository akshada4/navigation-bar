let navBarElements = document.getElementById('menu');

navBarElements.addEventListener('mouseover', () => {
	document.getElementById('dropdown').style.height = '25.6rem';
	changeOpacity('1');
});

navBarElements.addEventListener('mouseout', () => {
	document.getElementById('dropdown').style.height = '0';
	changeOpacity('0');
});

let changeOpacity = (opacityValue) => {
	const container = document.getElementById('dropdown').getElementsByTagName('li');
	for (let i = 0; i<4; i++){
		container[i].style.opacity = opacityValue;
	}

}