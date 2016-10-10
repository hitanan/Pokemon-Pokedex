$(function(){
    currencies = [
        { value: 'Mewtwo', data: '150' },
        { value: 'Dragonite', data: '149' },
        { value: 'Mew', data: '151' },
        { value: 'Moltres', data: '146' },
        { value: 'Zapdos', data: '145' },
        { value: 'Snorlax', data: '143' },
        { value: 'Arcanine', data: '59' },
        { value: 'Lapras', data: '131' },
        { value: 'Articuno', data: '144' },
        { value: 'Exeggutor', data: '103' },
        { value: 'Vaporeon', data: '134' },
        { value: 'Gyarados', data: '130' },
        { value: 'Flareon', data: '136' },
        { value: 'Muk', data: '89' },
        { value: 'Charizard', data: '6' },
        { value: 'Slowbro', data: '80' },
        { value: 'Machamp', data: '68' },
        { value: 'Venusaur', data: '3' },
        { value: 'Blastoise', data: '9' },
        { value: 'Victreebel', data: '71' },
        { value: 'Poliwrath', data: '62' },
        { value: 'Vileplume', data: '45' },
        { value: 'Nidoqueen', data: '31' },
        { value: 'Nidoking', data: '34' },
        { value: 'Clefable', data: '36' },
        { value: 'Golduck', data: '55' },
        { value: 'Golem', data: '76' },
        { value: 'Magmar', data: '126' },
        { value: 'Weezing', data: '110' },
        { value: 'Rhydon', data: '112' },
        { value: 'Omastar', data: '139' },
        { value: 'Tentacruel', data: '73' },
        { value: 'Rapidash', data: '78' },
        { value: 'Ninetales', data: '38' },
        { value: 'Hypno', data: '97' },
        { value: 'Starmie', data: '121' },
        { value: 'Wigglytuff', data: '40' },
        { value: 'Aerodactyl', data: '142' },
        { value: 'Dewgong', data: '87' },
        { value: 'Jolteon', data: '135' },
        { value: 'Kabutops', data: '141' },
        { value: 'Pinsir', data: '127' },
        { value: 'Electabuzz', data: '125' },
        { value: 'Pigeot', data: '18' },
        { value: 'Gengar', data: '94' },
        { value: 'Scyther', data: '123' },
        { value: 'Cloyster', data: '91' },
        { value: 'Seaking', data: '119' },
        { value: 'Kangaskhan', data: '115' },
        { value: 'Raichu', data: '26' },
        { value: 'Golbat', data: '42' },
        { value: 'Venomoth', data: '49' },
        { value: 'Magneton', data: '82' },
        { value: 'Primeape', data: '57' },
        { value: 'Tauros', data: '128' },
        { value: 'Dodrio', data: '85' },
        { value: 'Kingler', data: '99' },
        { value: 'Alakazam', data: '65' },
        { value: 'Sandslash', data: '28' },
        { value: 'Arbok', data: '24' },
        { value: 'Machoke', data: '67' },
        { value: 'Parasect', data: '47' },
        { value: 'Fearow', data: '22' },
        { value: 'Tangela', data: '114' },
        { value: 'Weepinbell', data: '70' },
        { value: 'Jynx', data: '124' },
        { value: 'Seadra', data: '117' },
        { value: 'Porygon', data: '137' },
        { value: 'Gloom', data: '44' },
        { value: 'Marowak', data: '105' },
        { value: 'Electrode', data: '101' },
        { value: 'Ivysaur', data: '2' },
        { value: 'Persian', data: '53' },
        { value: 'Lickitung', data: '108' },
        { value: 'Wartortle', data: '8' },
        { value: 'Charmeleon', data: '5' },
        { value: 'Hitmonchan', data: '107' },
        { value: 'Ponyta', data: '77' },
        { value: 'Mr. Mime', data: '122' },
        { value: 'Hitmonlee', data: '106' },
        { value: 'Dragonair', data: '148' },
        { value: 'Butterfree', data: '12' },
        { value: 'Raticate', data: '20' },
        { value: 'Beedril', data: '15' },
        { value: 'Graveler', data: '75' },
        { value: 'Nidorina', data: '30' },
        { value: 'Haunter', data: '93' },
        { value: 'Nidorino', data: '33' },
        { value: 'Poliwhirl', data: '61' },
        { value: 'Growlithe', data: '58' },
        { value: 'Grimer', data: '88' },
        { value: 'Farfetch\'d', data: '83' },
        { value: 'Pidgeotto', data: '17' },
        { value: 'Slowpoke', data: '79' },
        { value: 'Clefairy', data: '35' },
        { value: 'Rhyhorn', data: '111' },
        { value: 'Dugtrio', data: '51' },
        { value: 'Koffing', data: '109' },
        { value: 'Oddish', data: '43' },
        { value: 'Kadabra', data: '64' },
        { value: 'Omanyte', data: '138' },
        { value: 'Bellsprout', data: '69' },
        { value: 'Psyduck', data: '54' },
        { value: 'Seel', data: '86' },
        { value: 'Kabuto', data: '140' },
        { value: 'Exeggcute', data: '102' },
        { value: 'Machop', data: '66' },
        { value: 'Eevee', data: '133' },
        { value: 'Drowzee', data: '96' },
        { value: 'Bulbasaur', data: '1' },
        { value: 'Venonat', data: '48' },
        { value: 'Squirtle', data: '7' },
        { value: 'Cubone', data: '104' },
        { value: 'Dratini', data: '147' },
        { value: 'Goldeen', data: '118' },
        { value: 'Charmander', data: '4' },
        { value: 'Staryu', data: '120' },
        { value: 'Ditto', data: '132' },
        { value: 'Jigglypuff', data: '39' },
        { value: 'Paras', data: '46' },
        { value: 'Tentacool', data: '72' },
        { value: 'Magnemite', data: '81' },
        { value: 'Pikachu', data: '25' },
        { value: 'Mankey', data: '56' },
        { value: 'Nidoran (female)', data: '29' },
        { value: 'Onix', data: '95' },
        { value: 'Doduo', data: '84' },
        { value: 'Geodude', data: '74' },
        { value: 'Nidoran (male)', data: '32' },
        { value: 'Voltorb', data: '100' },
        { value: 'Vulpix', data: '37' },
        { value: 'Ekans', data: '23' },
        { value: 'Shellder', data: '90' },
        { value: 'Gastly', data: '92' },
        { value: 'Sandshrew', data: '27' },
        { value: 'Poliwag', data: '60' },
        { value: 'Krabby', data: '98' },
        { value: 'Horsea', data: '116' },
        { value: 'Meowth', data: '52' },
        { value: 'Spearow', data: '21' },
        { value: 'Pidgey', data: '16' },
        { value: 'Chansey', data: '113' },
        { value: 'Zubat', data: '41' },
        { value: 'Abra', data: '63' },
        { value: 'Rattata', data: '19' },
        { value: 'Kakuna', data: '14' },
        { value: 'Diglett', data: '50' },
        { value: 'Weedle', data: '13' },
        { value: 'Metapod', data: '11' },
        { value: 'Caterpie', data: '10' },
        { value: 'Magikarp', data: '129' },
    ]; 

    PATTERN = 'https://pokemongo.gamepress.gg/pokemon/';

    // setup autocomplete function pulling from currencies[] array
    $('#autocomplete').autocomplete({
        lookup: currencies,
        onSelect: function (suggestion) {
            // Save pokemon has just been searched
            chrome.storage.local.get({'ids':[]}, function(pokemons) {
                //console.log(pokemons);
				//console.log(pokemons.ids);
				// Remove Old
				var index = pokemons.ids.indexOf(suggestion.data);
				if (index > -1) {
					//console.log("index:" + index);
					pokemons.ids.splice(index, 1);
				}
				
				// Add id to first position
                pokemons.ids.unshift(suggestion.data);
				//console.log(pokemons.ids);
				
				// max element is 6;
				if ( pokemons.ids.length > 10) {  
					pokemons.ids.pop(); 
				}
				
                // Save to storage
                chrome.storage.local.set(pokemons, function() {
                    createTab( PATTERN +suggestion.data +'#movesets', PATTERN);					

                });
            });
            
            
        }
    });

	
	
    $(document).on('click','#pokelinks a', function(e) {
		var url = $(this).attr('href');
        e.preventDefault();
        createTab( url, PATTERN);
        //return false;
    });

    // Load recent pokemons
    chrome.storage.local.get( {'ids':[]} , function(pokemons) {
        var recentPokemons = '<ul id=pokelinks">';
        for (var i = 0; i < pokemons.ids.length; i++) {
			var name = getName(pokemons.ids[i]);
            recentPokemons += '<li><div class="pokemon-id"><img src="https://img.pokemondb.net/artwork/' + name.toLowerCase() +'.jpg" style="height: 100%; width: 100%; object-fit: contain"></div><a href="' +PATTERN +pokemons.ids[i] +'#movesets" target="_blank"><strong>' + pokemons.ids[i] +'. '+ name + '</strong></a></li>';

        }
        recentPokemons += "</ul>";
        $('#recentPokemons').html(recentPokemons);
    });

    // Auto focus
    $('#autocomplete').focus();



	function getName(id) {
		var idx = -1;
		for (var i = 0, len = currencies.length; i < len ; i++) {
			if (currencies[i].data == id) {
				idx = i;
				break;
			}
		}
		return idx > -1 ? currencies[idx].value : '';
	}
	

    // create new or updated tab
    function createTab(url, PATTERN) {
        chrome.tabs.query({currentWindow: true}, function (tabs) {
            // From last url to first.
            var i = tabs.length - 1;
            while(i >= 0) {
                var curTab = tabs[i];
                if (curTab.url.indexOf(PATTERN) >= 0) {
                    chrome.tabs.update(curTab.id, {
                        active: true, 
                        highlighted: true, 
                        url: url
                    });
                    window.close();

                    break;
                }
                
                i--;
            }
            if (i < 0) {
                chrome.tabs.create({
                    active: true, 
                    url: url
                });
                window.close();

            }

        });
    }



});