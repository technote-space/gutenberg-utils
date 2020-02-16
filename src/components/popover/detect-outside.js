import clickOutside from 'react-click-outside';

const { Component } = wp.element;

/**
 * PopoverDetectOutside
 */
class PopoverDetectOutside extends Component {

	/**
	 * @param {object} props props
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * @param {Event} event event
	 */
	handleClickOutside(event) {
		this.props.onClickOutside(event);
	}

	/**
	 * @returns {*} render
	 */
	render() {
		return this.props.children;
	}
}

export default clickOutside(PopoverDetectOutside);
