let popover;
/* istanbul ignore next */
if ( wp.element.useRef ) {
	popover = require( './implement' ).default;
} else {
	/* istanbul ignore next */
	popover = wp.components.Popover;
}
export default popover;
