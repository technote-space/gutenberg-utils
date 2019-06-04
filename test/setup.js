const Mousetrap = require( 'mousetrap' );
global.Mousetrap = Mousetrap;
global.window.matchMedia = () => ( {
	matches: true, addListener: () => {
	},
} );

const components = require( '@wordpress/components' );
const richText = require( '@wordpress/rich-text' );
const url = require( '@wordpress/url' );

global.wp = {
	components,
	richText,
	url,
};
