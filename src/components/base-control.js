const { BaseControl } = wp.components;

import classnames from 'classnames';

if ( ! BaseControl.VisualLabel ) {
	BaseControl.VisualLabel = ( { className, children } ) => {
		className = classnames( 'components-base-control__label', className );
		return (
			<span className={ className }>
				{ children }
			</span>
		);
	};
}

export default BaseControl;
