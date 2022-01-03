document.querySelectorAll('div.part-header').forEach(element => element.addEventListener('click', (() => {
	//let content = document.getElementById('controller-' + element.getAttribute('id'));
	console.log('div#controller-' + element.getAttribute('id'));
	document.querySelectorAll('div#controller-' + element.getAttribute('id')).forEach(controller => {
		console.log(controller);
		if(controller.style.display == 'none') {
			controller.style.display = 'block';
			element.children[0].className = 'fas fa-chevron-down';
		} else {
			controller.style.display = 'none';
			element.children[0].className = 'fas fa-chevron-right';
		}
	});
})));

document.querySelectorAll('div.part-title').forEach(element => element.addEventListener('click', (() => {
	let content = document.getElementById('details-' + element.getAttribute('id'));
	if(content.style.display == 'none') {
		content.style.display = 'block';
	} else {
		content.style.display = 'none';
	}
})));