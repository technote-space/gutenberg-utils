import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe( 'BaseControl', () => {
	let label;
	beforeEach( () => {
		label = wp.components.BaseControl.VisualLabel;
	} );

	afterEach( () => {
		wp.components.BaseControl.VisualLabel = label;
		jest.resetModules();
	} );

	it( 'should have VisualLabel 1', () => {
		wp.components.BaseControl.VisualLabel = () => {
		};
		const control = require( '../../src/components/base-control' ).default;
		expect( control ).toHaveProperty( 'VisualLabel' );
	} );

	it( 'should have VisualLabel 2', () => {
		delete wp.components.BaseControl.VisualLabel;
		const control = require( '../../src/components/base-control' ).default;
		expect( control ).toHaveProperty( 'VisualLabel' );
	} );

	it( 'should render VisualLabel', () => {
		delete wp.components.BaseControl.VisualLabel;
		const BaseControl = require( '../../src/components/base-control' ).default;
		const wrapper = shallow(
			<BaseControl.VisualLabel className='test-label'>
				test label
			</BaseControl.VisualLabel>,
		);
		expect( toJson( wrapper ) ).toMatchSnapshot();
		expect( wrapper.hasClass( 'test-label' ) ).toBeTruthy();
		expect( wrapper.text() ).toBe( 'test label' );
	} );
} );
