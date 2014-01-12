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
		var regex = /\|\|/;
		var timesThrough = 1;
		while(regex.test(structure)) {
			structure = parseStructure(subject, structure,timesThrough);
			timesThrough++;
		}
		structure = structure.charAt(0).toUpperCase() + structure.substring(1,structure.length);
		return structure;
	}

	function initHandlers() {
		$('#generateButton').on('click', function() {
			pullAndGenerate();
		});
	}

	function pullAndGenerate() {
		var subject = $('#subject').attr('value');
		subject = subject.replace(/ /g, '').toLowerCase();
		$('#sentence').html(generateSentence(Data[subject]));
	}

	function load() {
		initHandlers();
		pullAndGenerate();
	}

	function parseStructure(subject, structure, timesThrough) {
		var pieces,
			cPieces,
			i,
			r, part,
			alreadyPicked = {};
		pieces = structure.split("||");
		for(i=1;i<pieces.length;i+=2) {
			if(timesThrough >= 3) {
				pieces[i] = "";
			} else {
				console.log(pieces[i]);
				cPieces = pieces[i].split(':');
				if(cPieces.length > 1) {
					part = cPieces[0];
					if(!alreadyPicked[part]){
						alreadyPicked[part] = [r];
					}
					r = randInd(subject[part].length, alreadyPicked[part]);
					pieces[i] = subject[part][r][parseInt(cPieces[1], 10)];
					alreadyPicked[part].push(r);
				} else {
					part = pieces[i];
					if(!alreadyPicked[part]){
						alreadyPicked[part] = [];
					}
					pieces[i] = specialBehaviors(part, subject, alreadyPicked);
				}
			}
		}
		return pieces.join('');
	}

	function specialBehaviors(part, subject, alreadyPicked) {
		var ret = false,
			cat, word,
			r, i;
		switch(part) {
			case 'book':
			case 'show':
				r = randInd(subject[part].length, alreadyPicked[part]);
				alreadyPicked[part].push(r);
				ret = "<i>"+subject[part][r]+"</i>";
				break;
			case 'hashtag':
				ret = '';
				r = randInd(5) + 1;
				cats = [];
				for(cat in subject) {
					if(subject.hasOwnProperty(cat) && cat !== 'structure') {
						cats.push(cat);
					}
				}
				for(i=0;i<r;i++) {
					r = randInd(cats.length - 1);
					cat = subject[cats[r]];
					console.log(cat);
					r = randInd(cat.length - 1);
					cat = cat[r];
					word = (typeof cat === 'string') ? cat : cat[2];
					// debugger;
					ret += " #"+word.replace(/ /g,'').toLowerCase();
				}
				break;
			default:
				r = randInd(subject[part].length, alreadyPicked[part]);
				ret = subject[part][r];
				alreadyPicked[part].push(r);
				break;
		}
		return ret;
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