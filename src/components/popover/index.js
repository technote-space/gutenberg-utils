import { isValidUseRef } from '../../helpers/misc';
import './style.scss';

let popover;
/* istanbul ignore next */
if ( isValidUseRef() ) {
	popover = require( './implement' ).default;
} else {
	/* istanbul ignore next */
	popover = wp.components.Popover;
}
export default popover;
