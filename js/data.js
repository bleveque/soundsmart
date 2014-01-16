var Data = (function() {

	var opera = {
		structure: [
			'This recording of ||show|| is passable, but I prefer ||singer||\'s ||adj|| interpretation of ||show||.',
			'The second act of ||show|| showcases ||singer|| as a ||adv|| ||adj|| ||role||.',
			'||composer|| was most known for his ||adj|| style, but his use of ||noun|| is just as intriguing.',
			'Act three could have used more ||adj|| ||role||s ||verb:2|| ||adv|| in the ||set||.'
		],
		verb: [
			['sing', 'sang', 'singing'],
			['die', 'died', 'dying'],
			['marry', 'marrying', 'married'],
			['fall in love', 'fell in love', 'falling in love']
		],
		adv: [
			'tragically',
			'convincingly',
			'melodramatically',
			'powerfully',
			'comically',
			'jealously',
			'secretly'
		],
		adj: [
			'cantabile',
			'bel canto',
			'buffa',
			'seria',
			'vibratto',
			'classical',
			'tragic',
			'comic',
			'alluring',
			'deceitful',
			'devious',
			'backstabbing'
		],
		noun: [
			'tremolo',
			'crescendo',
			'recitative',
			'leitmotif',
			'aria',
			'coloratura',
			'intermezzo',
			'divertissement',
			'castrati'
		],
		composer: [
			'Verdi',
			'Mozart',
			'Strauss',
			'Gershwin',
			'Monteverdi',
			'Rossini',
			'Bizet'
		],
		role: [
			'diva',
			'soprano',
			'castrato',
			'tenor',
			'baritone',
			'mezzo-soprano',
			'alto',
			'peasant',
			'courtier',
			'prince',
			'prostitute',
			'king',
			'queen',
			'dwarf',
			'god',
			'assassin',
			'jester',
			'clown',
			'bacchant'
		],
		set: [
			'castle',
			'river',
			'forest',
			'prison',
			'dungeon',
			'palace',
			'back alley'
		],
		singer: [
			'Joan Sutherland',
			'Luciano Pavarotti',
			'Maria Callas',
			'Leontyne Price',
			'Greer Grimsley',
			'Jos&#233; Carreras',
			'Arthur Woodsley'
		],
		show: [
			'The Marriage of Figaro',
			'Carmen',
			'The Barber of Seville',
			'Rigoletto',
			'The Magic Flute',
			'Norma',
			'Salome',
			'Das Rheingold',
			'Paggliacci'
		]
	}

	var starwars = {
		structure: [
			'||title|| would have been way better if ||person|| had used the ||adj|| ||noun|| (instead of the ||adj|| ||noun||) to fight ||person|| on ||place||.',
			'When ||person|| went to ||place||, why didn\'t ||person|| ||verb:0|| with ||person||?'
		],
		verb: [
			['bring balance to the force', 'brought balance to the force', 'bringing balance to the force'],
			['duel', 'dueled', 'dueling'],
			['battle', 'battled', 'battling'],
			['rebel', 'rebelled', 'rebelling'],
			['force-push', 'force-pushed', 'force-pushing'],
			['explode', 'exploded', 'exploding']
		],
		adj: [
			'galactic',
			'imperial',
			'star',
			'land',
			'sith',
			'ray'
		],
		noun: [
			'lightsaber',
			'blaster',
			'protocol droid',
			'pod racer',
			'tie fighter',
			'X-wing',
			'star destroyer',
			'padawan',
			'droid',
			'rebel'
		],
		person: [
			'Watto',
			'the Rancor',
			'the Sarlacc',
			'Luke',
			'Leia',
			'Han Solo',
			'Chewbacca',
			'Greedo',
			'Kit Fisto',
			'Sebulba',
			'Anakin',
			'Darth Vader',
			'Emperor Palpatine',
			'Hayden Christensen',
			'Ki Adi Mundi',
			'Mace Windu',
			'Boba Fett',
			'Jango Fett',
			'Jabba the Hutt',
			'Lando Calrissian',
			'Bib Fortuna'
		],
		place: [
			'Coruscant',
			'Tatooine',
			'Kashyyyk',
			'Hoth',
			'Dagobah'
		],
		title: [
			'The Phantom Menace',
			'The Attack of the Clones',
			'The Revenge of the Sith',
			'A New Hope',
			'The Empire Strikes Back',
			'The Return of the Jedi'
		]
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
			['precipitate', 'precipitated', 'precipitating']
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

	var computerscience = {
		structure: [
			'If your program isn\'t ||verb:3||, I would recommend ||verb:3|| a ||noun|| in ||language||.',
			'If you have the ||noun|| for it, you should upgrade to a non-||verb:3|| ||adj|| ||noun||. It has a ||number||-||size||||unit|| ||adj|| ||noun||.',
			'I used to use ||language||, but now I use a custom ||framework||-inspired ||language|| framework.',
			'There\'s a ||adj|| ||noun|| in ||place|| working at ||number|| ||size||||unit||s. Nobody knows how to ||verb:0|| it.'
		],
		verb: [
			['segfault', 'segfaults', 'segfaulted', 'segfaulting'],
			['breach', 'breaches', 'breached', 'breaching'],
			['compile', 'compiles', 'compiled', 'compiling'],
			['respond', 'responds', 'responded', 'responding'],
			['hack', 'hacks', 'hacked', 'hacking'],
			['fork', 'forks', 'forked', 'forking'],
		],
		place: [
			'Norway',
			'Nevada',
			'China'
		],
		noun: [
			'router',
			'modem',
			'node',
			'motherboard',
			'mainframe',
			'server',
			'network',
			'tower',
			'thread',
			'process',
			'bytecode',
			'machine language'
		],
		error: [
			'segfault',
			'crash'
		],
		number: [
			'256',
			'495',
			'783',
			'122',
			'8'
		],
		language: [
			'Markdown',
			'Visual Basic',
			'Pyret',
			'JSON',
			'Java',
			'HTML',
			'CSS',
			'Python',
			'Scheme',
			'Cython',
			'Clojure',
			'Racket',
			'Scala',
			'Ruby',
			'MySQL',
			'Git'
		],
		framework: [
			'Rails',
			'Django',
			'Node',
			'Spring'
		],
		adj: [
			'titanium',
			'unknown',
			'interpreted',
			'compiled',
			'parallel',
			'quad-core',
			'finite',
			'pure',
			'Turing-complete',
			'NP-hard',
			'deterministic',
			'non-deterministic',
			'initial',
			'permutable',
			'intrinsic'
		],
		size: [
			'mega',
			'giga',
			'tera',
			'peda',
			'milli',
			'centi',
			'kilo'
		],
		unit: [
			'flop',
			'byte',
			'bit',
			'hertz'
		],
		company: [
			'Microsoft',
			'Oracle',
			'Apple'
		]
	}

	var arthistory = {

		structure: [
			'||artist||\'s ||interpretation|| of ||piece|| ||verb:1|| a ||noun|| when viewed from the perspective of early ||movement||.',
			'I went to the ||artist|| show at ||museum||, and I experienced a ||adj|| impression of ||noun|| that just wasn\'t there in ||timeperiod||.'
		],
		interpretation: [
			'rendition',
			'depiction',
			'interpretation',
			'forgery'
		],
		technique: [
			
		],
		medium: [

		],
		verb: [
			['symbolize', 'symbolizes', 'symbolized', 'symbolizing'],
			['oppress', 'oppresses', 'oppressed', 'oppressing'],
			['represent', 'represents', 'represented', 'representing']
		],
		museum: [
			'the Louvre',
			'MOMA',
			'the Frye'
		],
		modifier: [
			'light wash'
		],
		timeperiod: [
			'the late 15th Century',
			'the early Reformation',
			'the Renaissance',
			'the mid-50s'
		],
		adv: [

		],
		noun: [
			'flying buttress',
			'canvas',
			'hidden meaning',
			'hierarchy of scale',
			'perspective',
			'foreshortening',
			'foil painting',
			'young woman',
			'golden light',
			'God',
			'the lower class'
		],
		adj: [
			'baroque',
			'neo-classical',
			'naturalistic',
			'delicate',
			'idealistic'
		],
		movement: [
			'pop art',
			'impressionism',
			'realism',
			'surrealism',
			'cubism',
			'dadaism'
		],
		piece: [
			'Perseus and Medusa',
			'the Mona Lisa'
		],
		artist: [
			'Cellini',
			'Bernini',
			'Giambologna',
			'Vermeer',
			'Caravaggio',
			'da Vinci',
			'Michelangelo',
			'Raphael',
			'Titian',
			'Andy Warhol'
		]
	}

	var economics, english, geology;

	return {
		arthistory: arthistory,
		chemistry: chemistry,
		computerscience: computerscience,
		economics: economics,
		english: english,
		foodandbeverage: foodandbeverage,
		geology: geology,
		math: math,
		opera: opera,
		starwars: starwars,
		topical: topical
	};
})();