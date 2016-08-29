if (chrome.extension) {
	chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
		if (msg.action == 'pokemon') {
			
			var pokeImage = 'https://img.pokemondb.net/artwork/' +msg.pokename+ '.jpg';
			var url = 'http://pokemondb.net/pokedex/' + msg.pokename+'#dex-basics';
			$.ajax(url,
			{
				/*statusCode: {
					200: function() {
						$('#pokeimage').attr('src', pokeImage).show("fast");
						sendResponse({});
					}
				},*/
				success: function (response) {  
					//var pokeHtml = $.parseHTML(response); 
					// $('body:not(:has(div#chrome-pokeinfo))').prepend($(pokeHtml).find('#dex-evolution').next());
					//$('body:not(:has(iframe#chrome-pokeinfo))').prepend('<iframe id="chrome-pokeinfo" src="' +url +'"></iframe>');
					
					// show image
					if ($('body > #pokeimage').length > 0) {
						$('body > #pokeimage').remove();
					}
					$('body').prepend('<img id="pokeimage" src="'+ pokeImage +'" alt="pokemon image">');
					$("#pokeimage").show("fast"); 
					
					// show page
					if ($('body > iframe#chrome-pokeinfo').length > 0) {
						$('body > iframe#chrome-pokeinfo').remove();
					}
					$('body').prepend('<iframe id="chrome-pokeinfo" src="' +url +'"></iframe>');
					$('body > iframe#chrome-pokeinfo').show("fast");
					
					//$('#chrome-pokeinfo').load(function(){ $("#chrome-pokeinfo").contents().find("#google_ads_frame1,.ad-responsive").remove() });	
					$('#chrome-pokeinfo').load(function(){	
						$("#pokeimage").hide("fast"); 
					});
					
					sendResponse({});
				}
			});
			
			
		}
	});
	
	
	$(document).click(function(e) {
		if (!(e.target.id === 'chrome-pokeinfo' || e.target.id === 'pokeimage')) {
			$("#pokeimage, body > iframe#chrome-pokeinfo").hide("fast");                        
		}
	})

}

