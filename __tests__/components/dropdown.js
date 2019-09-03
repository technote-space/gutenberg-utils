/* eslint-disable no-magic-numbers */
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dropdown from '../../src/components/dropdown';

const { IconButton } = wp.components;

describe( 'Dropdown', () => {
	const onToggle = jest.fn();
	const wrapper = shallow( <Dropdown
			onToggle={ onToggle }
			renderContent={ () => <div className='render-content'>render content</div> }
			renderToggle={ ( { isOpen, onToggle } ) => <IconButton
				className='render-toggle'
				onClick={ onToggle }
			/> }
			className='test-dropdown'
		/>,
	);
	const button = wrapper.find( IconButton );

	beforeEach( () => {
		onToggle.mockClear();
	} );

	it( 'should render toggle button', () => {
		expect( toJson( wrapper ) ).toMatchSnapshot();
		expect( button ).toHaveLength( 1 );
	} );

	it( 'should open popup', () => {
		expect( wrapper.find( '.render-content' ) ).toHaveLength( 0 );
		button.simulate( 'click' );
		expect( toJson( wrapper ) ).toMatchSnapshot();
		expect( wrapper.find( '.render-content' ) ).toHaveLength( 1 );
	} );

	it( 'should call onToggle', () => {
		wrapper.instance().componentWillUnmount();
		expect( onToggle ).toHaveBeenCalledTimes( 1 );
		expect( onToggle ).toHaveBeenCalledWith( false );
	} );

	it( 'should call onToggle', () => {
		wrapper.instance().componentDidUpdate( {}, {
			isOpen: false,
		} );
		expect( onToggle ).toHaveBeenCalledTimes( 1 );
		expect( onToggle ).toHaveBeenCalledWith( true );
	} );
} );