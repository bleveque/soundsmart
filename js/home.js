var Home = (function() {

	window.onload = load;

	localStorage.ppSubject = localStorage.ppSubject || 'chemistry',
	localStorage.ppText = localStorage.ppText || 'Chemistry';

	var recurring = {};

	/**
	 * @param subject    the appropriate Data object
	 */
	function generateSentence() {
		var structure,
			i, r,
			subject = Data[localStorage.ppSubject];
		r = randInd(subject.structure.length);
		structure = subject.structure[r];
		var regex = /\|\|/;
		var timesThrough = 1;
		while(regex.test(structure)) {
			structure = parseStructure(subject, structure,timesThrough);
			timesThrough++;
		}
		structure = structure.charAt(0).toUpperCase() + structure.substring(1,structure.length);
		recurring = {};
		return structure;
	}

	function initHandlers() {

		$('#generateButton').on('click', function() {
			pullAndGenerate();
		});

		$('body').on('keyup', function(evt) {
			if(evt.which === 13) {
				pullAndGenerate();
			}
		});

		$('#twitterContainer').on('mousedown', function() {
			$('#tweet').attr('data-text', $('#sentence').text());
		});

		// avoids issue with #content overflowing #background, but also stops content from moving vertically...
		$(window).on('scroll', function() {
			var h = $('#background').height();
			$('#background').css('height', Math.max(h, 2 * $('#content').offset().top + $('#content').height()));
		});

		$('#subjectSelect').on('click', function(evt) {
			evt.stopPropagation();
			$('#currentSubject').css('display', 'none');
			$('#subjectOptions').css('display', 'block');
			$('body').on('click.select', function() {
				optionClicked(null, null, localStorage.ppText, localStorage.ppSubject);
			});
		});

		$('.subjectOption').on('click', optionClicked);
	}

	function optionClicked(evt, elt, text, subj) {
		elt = elt || this;
		evt && evt.stopPropagation();
		localStorage.ppText = text || $(elt).text();
		$('#currentSubject').css('display', 'block');
		$('#currentSubject').text(localStorage.ppText);
		localStorage.ppSubject = (subj || $(elt).attr('value') || $(elt).text()).replace(/ /g, '').toLowerCase();
		$('#subjectOptions').css('display','none');
		$('#smartalec').attr('src', 'images/smartalec' + localStorage.ppSubject + '.png');
		pullAndGenerate();
		$('body').off('click.select');
	}

	function defaultOption() {
		optionClicked(null, null, localStorage.ppText, localStorage.ppSubject);
	}

	function pullAndGenerate() {
		$('#sentence').html(generateSentence().replace(/\n/g,'<br />'));
	}

	function fbIntegrate() {
		(function(d,s,id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if(d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	function twitterIntegrate() {
		(function(d,s,id) {
			console.log('hi');
			var js,
				fjs = d.getElementsByTagName(s)[0],
				p=/^http:/.test(d.location)?'http':'https';
			if(!d.getElementById(id)) {
				js = d.createElement(s);
				js.id=id;
				js.src=p+'://platform.twitter.com/widgets.js';
				fjs.parentNode.insertBefore(js,fjs);
			}
		}(document, 'script', 'twitter-wjs'));
	}

	function load() {
		initHandlers();
		defaultOption();
		pullAndGenerate();
		fbIntegrate();
		twitterIntegrate();
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

	function reverseString(str) {
		return str.split('').reverse().join('');
	}

	function capitalize(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

	function specialBehaviors(part, subject, alreadyPicked) {
		var ret = false,
			cat, word,
			tempAlreadyPicked,
			r, i, s, matches;
		switch(part) {
			case 'book':
			case 'piece':
			case 'show':
				// italicize
				r = randInd(subject[part].length, alreadyPicked[part]);
				alreadyPicked[part].push(r);
				ret = "<i>"+subject[part][r]+"</i>";
				break;
			case 'startup_name':
				r = randInd(subject.noun.length, []);
				ret = capitalize(reverseString(reverseString(subject.noun[r]).replace(/[aeiou]/,'')));
				break;
			case 'hashtag':
				// add some number <= 5 of hashtags
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
					ret += " #"+word.replace(/ /g,'').toLowerCase();
				}
				break;
			case 'job_background':
				// add some number <= 3 of competencies
				// don't add to already picked -- can repeat
				ret = ''
				tempAlreadyPicked = [];
				r = randInd(3) + 1;
				if(r==1) {
					ret = subject[part][randInd(subject[part].length)];
				} else {
					for(i=0;i<r;i++) {
						if(i === r-1){
							ret += 'and ';
						}
						s = randInd(subject[part].length, tempAlreadyPicked);
						tempAlreadyPicked.push(s);
						ret += subject[part][s];
						if(i < r-1) {
							ret += (r===2) ? ' ' : ', ';
						}
					}
				}
				
				break;
			case 'job_position':
			case 'job_company':
				// stick with one for the entire statement
				if(recurring[part]) {
					ret = recurring[part];
				} else {
					r = randInd(subject[part].length, alreadyPicked[part]);
					alreadyPicked[part].push(r);
					ret = subject[part][r];
					recurring[part] = ret;
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