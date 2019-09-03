import clickOutside from 'react-click-outside';

const { Component } = wp.element;

class PopoverDetectOutside extends Component {
	handleClickOutside( event ) {
		this.props.onClickOutside( event );
	}

	render() {
		return this.props.children;
	}
}

export default clickOutside( PopoverDetectOutside );
