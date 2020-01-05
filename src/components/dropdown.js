/**
 * Gutenberg v6.2
 */
import classnames from 'classnames';
import Popover from './popover';
import { getAnimationUseClass } from '../helpers/misc';

const { Component, createRef } = wp.element;

/**
 * Dropdown
 */
class Dropdown extends Component {

	constructor( props ) {
		super( props );

		this.toggle = this.toggle.bind( this );
		this.close = this.close.bind( this );
		this.closeIfClickOutside = this.closeIfClickOutside.bind( this );

		this.containerRef = createRef();
		this.state = {
			isOpen: false,
		};
	}

	componentWillUnmount() {
		const { isOpen } = this.state;
		const { onToggle } = this.props;
		if ( isOpen && onToggle ) {
			onToggle( false );
		}
	}

	componentDidUpdate( prevProps, prevState ) {
		const { isOpen } = this.state;
		const { onToggle } = this.props;
		if ( prevState.isOpen !== isOpen && onToggle ) {
			onToggle( isOpen );
		}
	}

	toggle() {
		this.setState( state => ( {
			isOpen: ! state.isOpen,
		} ) );
	}

	/**
	 * @param {Event} event event
	 */
	closeIfClickOutside( event ) {
		if ( ! this.containerRef.current.contains( event.target ) ) {
			const target = document.querySelector( '.components-color-picker, .components-font-size-picker__dropdown-content' );
			if ( target && target.contains( event.target ) ) {
				return;
			}
			this.close();
		}
	}

	close() {
		this.setState( { isOpen: false } );
	}

	render() {
		const { isOpen } = this.state;
		const {
			renderContent,
			renderToggle,
			position = 'bottom',
			className,
			contentClassName,
			expandOnMobile,
			headerTitle,
			focusOnMount,
			popoverProps,
		} = this.props;

		const args = { isOpen, onToggle: this.toggle, onClose: this.close };

		return (
			<div className={ className } ref={ this.containerRef }>
				{ renderToggle( args ) }
				{ isOpen && (
					<Popover
						className={ classnames( contentClassName, 'gutenberg-utils-dropdown', getAnimationUseClass() ) }
						position={ position }
						onClose={ this.close }
						onClickOutside={ this.closeIfClickOutside }
						expandOnMobile={ expandOnMobile }
						headerTitle={ headerTitle }
						focusOnMount={ focusOnMount }
						{ ...popoverProps }
					>
						{ renderContent( args ) }
					</Popover>
				) }
			</div>
		);
	}
}

export default Dropdown;
