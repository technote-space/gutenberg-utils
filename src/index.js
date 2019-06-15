// consider compatibility
if ( ! wp.blockEditor ) {
	wp.blockEditor = wp.editor;
	wp.blockEditor['isOldEditor'] = true;
}

import * as Components from './components';
import * as Helpers from './helpers';
import classnames from 'classnames';

export { Components, Helpers, classnames };
