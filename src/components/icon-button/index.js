import { comparePackageVersion } from '../../helpers/compatibility';

/**
 * @param {object} props props
 * @return {null|Component} icon button
 */
function IconButton(props) {
	let Component;

	/* istanbul ignore next */
	if (comparePackageVersion('wp-components', '8.5.0', '>=')) {
		Component = require('./implement').default;
	} else {
		/* istanbul ignore next */
		Component = wp.components.IconButton;
	}

	return (
		<Component {...props} />
	);
}

export default IconButton;
