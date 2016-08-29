window.onload=loadData;

function loadData(){
	var dataObj = {
		'only-pokemon-picture':false
	};
	chrome.storage.local.get(dataObj, function(obj) {
		document.getElementById('only-pokemon-picture').checked = obj['only-pokemon-picture'] || false;
	});
}

function saveOptions() {
	var dataObj = {};
	dataObj['only-pokemon-picture'] = document.getElementById('only-pokemon-picture').checked;
	chrome.storage.local.set(dataObj, function() {window.close();});
}


// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	//loadData();
    document.getElementById('fform').addEventListener('submit', saveOptions);	
});