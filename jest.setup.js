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
	blockEditor: {
		getColorObjectByColorValue: () => false,
	},
};

jest.mock( '@wordpress/block-editor', () => ( {
	...jest.requireActual( '@wordpress/block-editor' ),
	getColorObjectByColorValue: ( colors, value ) => global.wpMock.blockEditor.getColorObjectByColorValue( colors, value ),
} ) );

const blockEditor = require( '@wordpress/block-editor' );
const components = require( '@wordpress/components' );
const coreData = require( '@wordpress/core-data' );
const data = require( '@wordpress/data' );
const editor = require( '@wordpress/editor' );
const element = require( '@wordpress/element' );
const i18n = require( '@wordpress/i18n' );
const richText = require( '@wordpress/rich-text' );
const url = require( '@wordpress/url' );

global.wp = {
	blockEditor,
	components,
	coreData,
	data,
	editor,
	element,
	i18n,
	richText,
	url,
};
