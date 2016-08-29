// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
	
	//chrome.tabs.create({url: url, active: true});
	
	//console.log(info.menuItemId);
	
	// var views = chrome.extension.getViews({type: "popup"});
    // for (var i = 0; i < views.length; i++) {
			// views[i].document.getElementById('x').innerHTML= text;
	// }
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		var pokename = info.selectionText.replace(/\s+/g,"").toLowerCase();
		var url = 'https://img.pokemondb.net/artwork/' + pokename + '.jpg';
		chrome.tabs.sendMessage(tabs[0].id, {action: "pokemon", pokename: pokename});  
	});
};




chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "View Pokemon", "contexts":["selection"], "id": "context2"}, function() {
    if (chrome.extension.lastError) {
      console.log("Got expected error: " + chrome.extension.lastError.message);
    }
  });
});


