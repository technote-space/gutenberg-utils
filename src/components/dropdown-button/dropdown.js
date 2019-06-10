const OriginalDropdown = wp.components.Dropdown;

/**
 * Dropdown
 */
class Dropdown extends OriginalDropdown {
	/**
	 * constructor
	 */
	constructor() {
		super( ...arguments );
	}

	/**
	 * @param {MouseEvent} event event
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
}

export default Dropdown;
