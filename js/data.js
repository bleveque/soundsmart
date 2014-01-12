var Data = (function() {

	var math = {
		structure: [
			'Given ||person||\'s method of ||verb:2|| a ||adj|| ||noun||, the result is trivial.',
			'The ||adj|| ||noun|| is ||relation|| to each ||noun|| in a ||adj|| ||noun||.',
			'I just read a paper of ||person||\'s that has a good description of the ||adj|| ||theorem||.',
			'According to the ||theorem||, ||noun||s are equivalent to ||noun||s when the ||adj|| ||noun|| is ||adj||.'
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
			'Jordan',
			'Tate',
			'Taylor'
		],
		theorem: [
			'tubular neighborhood theorem',
			'fundamental theorem of finitely generated abelian groups',
			'Fermat\'s Little Theorem',
			'the ABC conjecture'
		]
	}

	var economics, english, geology;

	return {
		economics: economics,
		english: english,
		geology: geology,
		math: math,
	};
})();