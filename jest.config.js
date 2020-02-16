module.exports = {
	verbose: true,
	transform: {
		'^.+\\.js$': '<rootDir>/node_modules/babel-jest',
	},
	moduleFileExtensions: ['js'],
	setupFiles: ['<rootDir>/jest.setup.js'],
	coverageDirectory: 'coverage',
	moduleNameMapper: {
		'^.+\\.(css|less|scss|sass)$': 'babel-jest',
	},
};
