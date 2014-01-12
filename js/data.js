var Data = (function() {

	var starwars = {

	};

	var foodandbeverage = {
		structure: [
			'Last night, I made a ||ingredient|| ||dish|| for some friends. It was ||adj|| with a hint of ||noun||.',
			'Have you had the ||adj|| yet ||adj|| ||dish|| at ||place||? It\'s so ||emotion||.',
			'||place|| has the best ||adj|| ||dish||. I found it ||emotion||, however subtly ||emotion||.',
			'Going to ||place|| was ||emotion||. I could never imagine pairing ||ingredient|| and ||ingredient|| to such ||emotion|| effect.',
			'You know what this party needs? A ||wineadj|| ||wine||; that could really change the mood.',
			'How do you feel about ||wine||s? I find them ||wineadj||, but also ||wineadj||.',
			'Their ||dish|| is ||adj||, but their ||dish|| is unnecessarily ||adj||.'
		],
		w: [
			'rotund',
			'high-tannin',
			'low-tannin',
			'strawberry',
			'leggy',
			'big',
			'black cherry'
		],
		adj: [
			'oaky',
			'rich',
			'strong',
			'soft',
			'barnyardy',
			'sweet',
			'tangy',
			'nutty',
			'fruty',
			'umami',
			'sour',
			'whimsical',
			'playful',
			'surprising',
			'intoxicating',
			'savory',
			'floral',
			'spicy',
			'robust',
			'juicy'
		],
		wine: [
			'cab',
			'pinot',
			'granache',
			'bordeaux',
			'chardonnay',
			'pinot gris',
			'sauvignon blanc',
			'pinot grigio',
			'barollo',
			'malbec',
			'prosecco',
			'champaigne',
			'moscato',
			'red blend',
			'ros&#233;'
		],
		dish: [
			'ragu',
			'risotto',
			'polenta cake',
			'crusted ||ingredient||',
			'fritter',
			'fritatta',
			'carpaccio',
			'gratin',
			'cake',
			'enchilada',
			'roll',
			'torta',
			'pastitsio',
			'flatbread',
			'crepe',
			'paella'
		],
		ingredient: [
			'butternut squash',
			'porcini',
			'shiitake',
			'chantrelle',
			'truffle',
			'tiger prawns',
			'Chilean sea bass',
			'kale',
			'ridicchio',
			'endive',
			'leek',
			'potato',
			'parmesian',
			'bleu cheese',
			'prosciutto',
			'pancetta',
			'bacon',
			'goat cheese',
			'duck',
			'elk',
			'lamb',
			'veal',
			'salmon',
			'halibut',
			'buratta',
			'fennel',
			'pink peppercorn',
			'cloudberry',
			'salmonberry',
			'romanesco'
		],
		noun: [
			'cherry',
			'plum',
			'oak',
			'hickory',
			'peach',
			'apple',
			'pear',
			'rosemary',
			'sage',
			'thyme',
			'taragon',
			'blackberry'
		],
		emotion: [
			'delicious',
			'scrumptious',
			'breathtaking',
			'complex',
			'intriguing',
			'delightful',
			'whimsical',
			'playful',
			'surprising',
			'intoxicating',
			'plebian',
			'pedestrian'
		],
		place: [
			'the French Laundry',
			'Canlis',
			'Bouchon',
			'Per Se',
			'Alder',
			'the Chart House',
			'Jean Georges',
			'Smolder',
			'Bar Sajor',
			'Whale Winds'
		]
	};

	foodandbeverage.wineadj = foodandbeverage.w.concat(foodandbeverage.adj);

	var topical = {
		structure: [
			'Did you see ||person|| ||verb:2|| at ||place|| last night? It was like ||person|| ||verb:2|| all over again.',
			'Have you heard ||person||\'s opinion on ||noun||? It\'s pretty ||adj||.',
			'I think ||event|| has gone downhill. I remember last year when ||person|| and ||person|| ||verb:1|| onstage. It was so ||adj||.',
			'I can\'t believe what ||person|| said about ||noun||! ||person|| and ||person|| were so ||emotion|| that they ||verb:1||.',
			'Why are ||person|| and ||person|| dating?! How on earth do they ever ||verb:0|| together?',
			'Have you heard that ||person|| is dating ||person||? I heard about it on TMZ when ||person|| tweeted it. \#||adj||',
			'||person|| got so ||adj|| last night. ||hashtag||'
		],
		verb: [
			['twerk', 'twerked', 'twerking'],
			['snapchat', 'snapchatted', 'snapchatting'],
			['tweet', 'tweeted', 'tweeting'],
			['take bath salts', 'took bath salts', 'taking bath salts'],
			['swag out', 'swagged out', 'swagging out'],
			['get turnt up', 'got turnt up', 'getting turnt up'],
			['crowdsource', 'crowdsourced', 'crowdsourcing'],
			['hobbit', 'hobbited', 'hobbiting'],
			['LARP', 'LARPed', 'LARPing'],
			['cosplay', 'cosplayed', 'cosplaying'],
			['have a fight', 'had a fight', 'having a fight'],
			['get caught on camera', 'got caught on camera', 'getting caught on camera'],
			['sleep', 'slept', 'sleeping']
		],
		emotion: [
			'sad',
			'thrilled',
			'angry',
			'upset',
			'mind-boggled'
		],
		adj: [
			'dope',
			'turnt up',
			'hipster',
			'hood',
			'beast',
			'torched',
			'twisted',
			'pro-abortion',
			'right-wing',
			'left-wing',
			'socialist'
		],
		person: [
			'Miley Cyrus',
			'Rob Ford',
			'Justin Bieber',
			'Dennis Rodman',
			'Putin',
			'Obama',
			'Oprah',
			'Anthony Weiner',
			'Tiger Woods',
			'Jennifer Lawrence',
			'LeBron',
			'JaVale McGee',
			'Snoop Lion',
			'Tom Cruise',
			'Snoopzilla',
			'Two Chainz',
			'Chief Keef',
			'Kanye West',
			'Kim Kardashian',
			'Kathy-Lee Gifford',
			'One Direction',
			'Louis C.K.',
			'Aziz Ansari',
			'Tina Fey',
			'Hillary Clinton',
			'Joss Whedon',
			'Michael Bay',
			'Dwayne \"The Rock\" Johnson',
			'Kim Jong Un'
		],
		event: [
			'the Grammies',
			'the Globes',
			'Burning Man',
			'the Oscars',
			'the Tonies',
			'the ESPYs',
			'the Teen Choice Awards',
			'the Superbowl Halftime Show',
			'that charity auction',
			'the Make-a-Wish fundraiser'
		],
		place: [
			'the Playboy Mansion',
			'the Church of Scientology',
			'Kanye\'s place',
			'the Today Show',
			'the O\'Reilly Factor'
		],
		noun: [
			'comic-con',
			'the government shutdown',
			'the Tea Party',
			'the freemasons',
			'same-sex marriage',
			'Google Glass',
			'civil union',
			'the polar vortex',
			'the fiscal cliff',
			'the sequester',
			'congress',
			'GMOs',
			'legal marijuana',
			'gender-neutral pronouns',
			'fracking',
			'selfies',
			'Obamacare',
			'minimum wage',
			'the NSA',
			'the far left',
			'Breaking Bad',
			'Instagram',
			'Netflix'
		]
	};

	var chemistry = {
		structure: [
			'I attempted the ||experiment|| with ||reactant|| and ||reactant||, but the whole thing ||verb:1|| in my face.',
			'Never again will I consider mixing ||adj|| ||reactant|| and ||adj|| ||reactant|| using the ||apparatus||.',
			'My ||apparatus|| seems to be malfunctioning. It won\'t even ||verb:0|| ||reactant|| into ||reactant||.'
		],
		verb: [
			['polymerize', 'polymerized', 'polymerizing'],
			['precipitate', 'precipitated', 'precipitating'],
			//['turns pink', 'turned pink', 'turning pink'],
			//['fall on the table and shatter', 'fell on the table and shattered', 'falling on the table and shattering']
		],
		apparatus: [
			'bunsen burner',
			'erlenmeyer flask'
		],
		reactant: [
			'molybdenum',
			'mild base',
			'sulphuric acid',
			'glacial acetic acid'
		],
		adj: [
			'miscible',
			'nonpolar',
			'viscous',
			'bilaterally symmetrical',
			'trigonal planar',
			'dextrorotary',
			'achiral',
			'aromatic'
		],
		experiment: [
			'Diels-Alder reaction',
			'Friedel-Crafts hydroxyalkylation'
		],
		noun: [
			'cycloaddition',
			'homolytic cleavage',
			'backside attack'
		]
	};

	var english = {
		structure: [
			'If you only read ||author|| and ||author|| more often, you would understand how ||adj|| their writing is. You can clearly see their influence in ||book||.'
		],
		verb: [
			['break the fourth wall', 'broke the fourth wall', 'breaking the fourth wall'],
			['slam', 'slammed', 'slamming'],
			['workshop', 'workshopped', 'workshopping']
		],
		adj: [
			'bathetic',
			'bohemian',
			'liminal',
			'numinous',
			'trochaic'
		],
		adv: [

		],
		noun: [
			'mythos',
			'poetaster'
		],
		author: [
			'Carver',
			'Gogol',
			'Milton',
			'Plath'
		],
		book: [
			'Howl',
			'Paradise Lost',
			'Wild Animus'
		]
	};

	var math = {
		structure: [
			'Given ||person||\'s method of ||verb:2|| a ||adj|| ||noun||, the result is trivial.',
			'The ||adj|| ||noun|| is ||relation|| to each ||noun|| in a ||adj|| ||noun||.',
			'I just read a paper of ||person||\'s that has a good description of the ||adj|| ||theorem||.',
			'According to the ||theorem||, ||noun||s are equivalent to ||noun||s when the ||adj|| ||noun|| is ||adj||.',
			'The ||theorem||, independently proven by ||person|| and ||person||, opens up the field of ||adj|| ||noun||s.'
		],
		verb: [
			['bisect', 'bisected', 'bisecting'],
			['differentiate', 'differentiated', 'differentiating'],
			['expand', 'expanded', 'expanding'],
			['integrate', 'integrated', 'integrating'],
			['intersect', 'intersected', 'intersecting']
		],
		relation: [
			'congruent',
			'homomorphic',
			'isomorphic',
			'normal',
			'tangent'
		],
		adj: [
			'algebraic',
			'base-3',
			'concave',
			'congruent',
			'convergent',
			'convex',
			'cylindrical',
			'equidistant',
			'equivalent',
			'Fibonacci',
			'Frobenius',
			'finitely generated',
			'Gaussian',
			'geometric',
			'infinite',
			'isomorphic',
			'negative',
			'normal',
			'p-adic',
			'principal',
			'regular',
			'smooth',
			'squarefree',
			'tangent',
			'trivial'
		],
		noun: [
			'algebra',
			'chord',
			'cross product',
			'encryption scheme',
			'field',
			'group',
			'inner product',
			'mantissa',
			'module',
			'monoid',
			'p-norm',
			'ring',
			'secant line',
			'unit',
			'winding number'
		],
		person: [
			'Bernoulli',
			'Cayley',
			'Gauss',
			'Goldwasser',
			'Jordan',
			'Tate',
			'Taylor'
		],
		theorem: [
			'tubular neighborhood theorem',
			'fundamental theorem of finitely generated abelian groups',
			'Fermat\'s Little Theorem',
			'ABC conjecture'
		]
	}

	var economics, english, geology;

	return {
		foodandbeverage: foodandbeverage,
		chemistry: chemistry,
		economics: economics,
		english: english,
		geology: geology,
		math: math,
		topical: topical
	};
})();