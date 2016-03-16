
window.onload = function(){
	clickComments();
	linkmadness();
}

var setBodyClass = function(){
	var brand = window.location.hostname.split('.')[0];
	var body = document.querySelector('body');
	body.classList.add(brand);
}
setBodyClass();

// show comments only..
var clickComments = function(){
	var tabPanel = document.querySelector('#comment-tabpanel');
	if(!tabPanel){
		return;
	}
	tabPanel.click();
}


var linkmadness = function(){
	var linkItem = document.querySelectorAll('.js-key-link');
	if(linkItem.length <= 0){
		return;
	}
	for (var i = 0; i < linkItem.length; i++) {
		linkItem[i].addEventListener('click', function(e){
			window.open(window.location.origin + e.target.getAttribute('href'),'_blank');
		})
	};
}
