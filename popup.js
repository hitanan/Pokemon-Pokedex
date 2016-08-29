if (chrome.extension) {
	var pokedex = ['mewtwo','dragonite','mew','moltres','zapdos','snorlax','arcanine','lapras','articuno','exeggutor','vaporeon','gyarados','flareon','muk','charizard','slowbro','machamp','venusaur','blastoise','victreebel','poliwrath','vileplume','nidoqueen','nidoking','clefable','golduck','golem','magmar','weezing','rhydon','omastar','tentacruel','rapidash','ninetales','hypno','starmie','wigglytuff','aerodactyl','dewgong','jolteon','kabutops','pinsir','electabuzz','pigeot','gengar','scyther','cloyster','seaking','kangaskhan','raichu','golbat','venomoth','magneton','primeape','tauros','dodrio','kingler','alakazam','sandslash','arbok','machoke','parasect','fearow','tangela','weepinbell','jynx','seadra','porygon','gloom','marowak','electrode','ivysaur','persian','lickitung','wartortle','charmeleon','hitmonchan','ponyta','mr-mime','hitmonlee','dragonair','butterfree','raticate','beedril','graveler','nidorina','haunter','nidorino','poliwhirl','growlithe','grimer','farfetchd','pidgeotto','slowpoke','clefairy','rhyhorn','dugtrio','koffing','oddish','kadabra','omanyte','bellsprout','psyduck','seel','kabuto','exeggcute','machop','eevee','drowzee','bulbasaur','venonat','squirtle','cubone','dratini','goldeen','charmander','staryu','ditto','jigglypuff','paras','tentacool','magnemite','pikachu','mankey','onix','doduo','geodude','nidoran','voltorb','vulpix','ekans','shellder','gastly','sandshrew','poliwag','krabby','horsea','meowth','spearow','pidgey','chansey','zubat','abra','rattata','kakuna','diglett','weedle','metapod','caterpie','magikarp'];
	
	
	var pokedexErrors = {
		"farfetch'd": 'farfetchd'		
	}
	
	chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
		if (msg.action == 'pokemon') {
			
			var pokeImage = 'https://img.pokemondb.net/artwork/' +msg.pokename+ '.jpg';
			var url = 'http://pokemondb.net/pokedex/' + msg.pokename+'#dex-basics';
			
			if (isPokemon(msg.pokename)) {
				if ($('body > #pokeimage').length > 0) {
					$('body > #pokeimage').remove();
				}
				$('body').prepend('<img id="pokeimage" src="'+ pokeImage +'" alt="pokemon image">');
				$("#pokeimage").show("fast"); 
			} 
			
			/*$.ajax(url,
			{

				success: function (response) {  

					
					if (!isPokemon(msg.pokename)) {
						// show image
						if ($('body > #pokeimage').length > 0) {
							$('body > #pokeimage').remove();
						}
						$('body').prepend('<img id="pokeimage" src="'+ pokeImage +'" alt="pokemon image">');
						$("#pokeimage").show("fast"); 
					} else {
						$("#pokeimage").hide("fast");
					}
					
					// show page
					if ($('body > iframe#chrome-pokeinfo').length > 0) {
						$('body > iframe#chrome-pokeinfo').remove();
					}
					$('body').prepend('<iframe id="chrome-pokeinfo" src="' +url +'"></iframe>');
					$('body > iframe#chrome-pokeinfo').show("fast");
					
					sendResponse({});
				}
			});	
			*/
			
			
			
		}
	});
	
	
	$(document).click(function(e) {
		if (!(e.target.id === 'chrome-pokeinfo' || e.target.id === 'pokeimage')) {
			$("#pokeimage, body > iframe#chrome-pokeinfo").hide("fast");                        
		}
	});
	
	
	function isPokemon(name) {
		var lowerName = name.toLowerCase();
		if ( $.inArray( lowerName, pokedex ) >= 0 ) {
			return true;
		}
		return false;
	}

}

