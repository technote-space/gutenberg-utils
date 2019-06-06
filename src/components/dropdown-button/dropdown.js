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
			const colorPicker = document.querySelector( '.components-color-picker' );
			if ( colorPicker && colorPicker.contains( event.target ) ) {
				return;
			}
			this.close();
		}
	}
}

export default Dropdown;
