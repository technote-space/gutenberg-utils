const Mousetrap = require( 'mousetrap' );
global.Mousetrap = Mousetrap;
global.window.matchMedia = () => ( {
	matches: true, addListener: () => {
	},
} );

const components = require( '@wordpress/components' );
const data = require( '@wordpress/data' );
const editor = require( '@wordpress/editor' );
const richText = require( '@wordpress/rich-text' );
const url = require( '@wordpress/url' );

global.wp = {
	components,
	data,
	editor,
	richText,
	url,
};
