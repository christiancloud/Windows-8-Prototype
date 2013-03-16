(function() {
var splash = $('#splash');

window.setTimeout( function() {	
	hideSplash();
},5000);

splash.find('button').on('click', hideSplash);

function hideSplash(e) {
	splash.fadeOut(3000);
}

})();