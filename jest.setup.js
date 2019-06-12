import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure( {
	adapter: new Adapter(),
	snapshotSerializers: [ 'enzyme-to-json/serializer' ],
} );

const Mousetrap = require( 'mousetrap' );
const lodash = require( 'lodash' );
global.Mousetrap = Mousetrap;
global.window.lodash = lodash;
global.window.matchMedia = () => ( {
	matches: true, addListener: () => {
	},
} );
global.window.console.error = () => {
};
global.wpMock = {
	editor: {
		getColorObjectByColorValue: () => false,
	},
};

jest.mock( '@wordpress/editor', () => ( {
	...jest.requireActual( '@wordpress/editor' ),
	getColorObjectByColorValue: ( colors, value ) => global.wpMock.editor.getColorObjectByColorValue( colors, value ),
} ) );

const components = require( '@wordpress/components' );
const data = require( '@wordpress/data' );
const editor = require( '@wordpress/editor' );
const element = require( '@wordpress/element' );
const i18n = require( '@wordpress/i18n' );
const richText = require( '@wordpress/rich-text' );
const url = require( '@wordpress/url' );

global.wp = {
	components,
	data,
	editor,
	element,
	i18n,
	richText,
	url,
};
