var Home = (function() {

	window.onload = load;

	/**
	 * @param subject    the appropriate Data object
	 */
	function generateSentence(subject) {
		var structure,
			i, r;
		r = randInd(subject.structure.length);
		structure = subject.structure[r];
		return parseStructure(subject, structure);
	}

	function initHandlers() {
		$('#generateButton').on('click', function() {
			$('#sentence').text(generateSentence(Data[$('#subject').attr('value')]));
		});
	}

	function load() {
		initHandlers();
	}

	function parseStructure(subject, structure) {
		var pieces,
			cPieces,
			i,
			r, part,
			alreadyPicked = {};
		pieces = structure.split("||");
		for(i=1;i<pieces.length;i+=2) {
			console.log(pieces[i]);
			cPieces = pieces[i].split(':');
			if(cPieces.length > 1) {
				part = cPieces[0];
				if(!alreadyPicked[part]){
					alreadyPicked[part] = [r];
				}
				r = randInd(subject[part].length, alreadyPicked[part]);
				pieces[i] = subject[part][r][parseInt(cPieces[1], 10)];
			} else {
				part = pieces[i];
				if(!alreadyPicked[part]){
					alreadyPicked[part] = [r];
				}
				r = randInd(subject[part].length, alreadyPicked[part]);
				pieces[i] = subject[part][r];
			}
			alreadyPicked[part].push(r);
		}
		return pieces.join('');
	}

	/**
	 * Generate a random integer in [lower, upper)
	 */
	function randInd(upper, exclude) {
		var ret;
		upper = upper || 10000;
		exclude = exclude || [];
		if(exclude.length > 0 && upper < exclude.length) {
			return 0;
		}
		do {
			ret = Math.floor(Math.random() * upper);
			ret = (ret === upper) ? upper - 1 : ret;
		} while(exclude.indexOf(ret) >= 0);
		return ret; 
	}

	return {

	};
})();