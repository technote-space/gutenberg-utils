/* eslint-disable no-magic-numbers */
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DropdownButton } from '../../src/components';
import Dropdown from '../../src/components/dropdown-button/dropdown';

const { FontSizePicker, ColorPalette } = wp.components;

describe( 'DropdownButton', () => {
	const getSnapshotName = ( name, index ) => `${ name }--${ index }`;

	[
		{
			props: {
				icon: 'dashicons-admin-site',
				label: 'test1-label',
				tooltip: 'test1-tooltip',
				className: 'test1-class',
				position: 'bottom left',
				contentClassName: 'test1-content-class',
				renderContent: () => <div className={ 'popover1' }>test1</div>,
				isActive: true,
				isDisabled: false,
				isHiddenIndicator: true,
			},
			callback: ( wrapper, index ) => {
				expect( wrapper.find( '.test1-class' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test1-class button' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test1-class button' ).hostNodes().prop( 'disabled' ) ).toBeFalsy();
				expect( wrapper.find( '.test1-class button.is-active' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test1-class button .components-dropdown-button__indicator' ).hostNodes() ).toHaveLength( 0 );
				expect( wrapper.find( '.popover1' ).hostNodes() ).toHaveLength( 0 );

				wrapper.find( '.test1-class button' ).hostNodes().simulate( 'click' );

				expect( toJson( wrapper, { mode: 'deep' } ) ).toMatchSnapshot( getSnapshotName( 'open', index ) );

				expect( wrapper.find( '.popover1' ).hostNodes() ).toHaveLength( 1 );

				wrapper.setProps( { isDropdownDisabled: true } );
				wrapper.update();

				expect( wrapper.find( '.popover1' ).hostNodes() ).toHaveLength( 0 );
			},
		},
		{
			props: {
				label: 'test2-label',
				className: 'test2-class',
				contentClassName: 'test2-content-class',
				renderContent: () => <FontSizePicker
					fontSizes={ [
						{ name: 'test1', size: '10px', slug: 'test1' },
						{ name: 'test2', size: '20px', slug: 'test2' },
						{ name: 'test3', size: '30px', slug: 'test3' },
					] }
					value={ 20 }
					fallbackFontSize={ 20 }
					onChange={ () => null }
				/>,
			},
			callback: ( wrapper, index ) => {
				expect( wrapper.find( '.test2-class' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test2-class button' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test2-class button' ).hostNodes().prop( 'disabled' ) ).toBeFalsy();
				expect( wrapper.find( '.test2-class button.is-active' ).hostNodes() ).toHaveLength( 0 );
				expect( wrapper.find( '.test2-class button .components-dropdown-button__indicator' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.components-select-control__input' ).hostNodes() ).toHaveLength( 0 );

				{
					wrapper.find( '.test2-class .components-dropdown-button__toggle' ).hostNodes().simulate( 'click' );
					expect( toJson( wrapper, { mode: 'deep' } ) ).toMatchSnapshot( getSnapshotName( 'open', index ) );
					expect( wrapper.find( '.components-select-control__input' ).hostNodes() ).toHaveLength( 1 );

					const outerNode = document.createElement( 'div' );
					document.body.appendChild( outerNode );
					outerNode.dispatchEvent( new Event( 'click' ) );
					wrapper.update();

					expect( wrapper.find( '.components-select-control__input' ).hostNodes() ).toHaveLength( 0 );
				}
			},
		},
		{
			props: {
				label: 'test3-label',
				className: 'test3-class',
				contentClassName: 'test3-content-class',
				renderContent: () => <div className={ 'popover3' }>test3</div>,
				isActive: false,
				isDisabled: true,
			},
			callback: ( wrapper ) => {
				expect( wrapper.find( '.test3-class' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test3-class button' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test3-class button' ).hostNodes().prop( 'disabled' ) ).toBeTruthy();
				expect( wrapper.find( '.test3-class button.is-active' ).hostNodes() ).toHaveLength( 0 );
				expect( wrapper.find( '.test3-class button .components-dropdown-button__indicator' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.popover3' ).hostNodes() ).toHaveLength( 0 );
			},
		},
		{
			props: {
				label: 'test4-label',
				className: 'test4-class',
				contentClassName: 'test4-content-class',
				renderContent: () => <ColorPalette
					colors={ [
						{ name: 'test1', color: 'red', slug: 'test1' },
						{ name: 'test2', color: 'green', slug: 'test2' },
						{ name: 'test3', color: 'blue', slug: 'test3' },
					] }
					value={ 'green' }
					disableCustomColors={ false }
					onChange={ () => null }
				/>,
			},
			callback: ( wrapper, index ) => {
				expect( wrapper.find( '.test4-class' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test4-class button' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.test4-class button' ).hostNodes().prop( 'disabled' ) ).toBeFalsy();
				expect( wrapper.find( '.test4-class button.is-active' ).hostNodes() ).toHaveLength( 0 );
				expect( wrapper.find( '.test4-class button .components-dropdown-button__indicator' ).hostNodes() ).toHaveLength( 1 );
				expect( wrapper.find( '.components-color-palette' ).hostNodes() ).toHaveLength( 0 );

				{
					wrapper.find( '.test4-class .components-dropdown-button__toggle' ).hostNodes().simulate( 'click' );
					expect( toJson( wrapper, { mode: 'deep' } ) ).toMatchSnapshot( getSnapshotName( 'open', index ) );
					expect( wrapper.find( '.components-color-palette' ).hostNodes() ).toHaveLength( 1 );

					const outerNode = document.createElement( 'div' );
					document.body.appendChild( outerNode );
					outerNode.dispatchEvent( new Event( 'click' ) );
					wrapper.update();

					expect( wrapper.find( '.components-color-palette' ).hostNodes() ).toHaveLength( 0 );
				}

				{
					wrapper.find( '.test4-class .components-dropdown-button__toggle' ).hostNodes().simulate( 'click' );
					expect( wrapper.find( '.components-color-palette__custom-color' ).hostNodes() ).toHaveLength( 1 );
					expect( wrapper.find( '.components-color-picker' ).hostNodes() ).toHaveLength( 0 );

					wrapper.find( '.components-color-palette__custom-color .components-button' ).hostNodes().simulate( 'click' );
					expect( toJson( wrapper, { mode: 'deep' } ) ).toMatchSnapshot( getSnapshotName( 'open-color-picker', index ) );
					expect( wrapper.find( '.components-color-picker' ).hostNodes() ).toHaveLength( 1 );
					expect( wrapper.find( '.components-color-picker .components-button' ).hostNodes() ).toHaveLength( 1 );

					document.body.appendChild( wrapper.find( '.components-color-picker' ).hostNodes().instance() );
					const dropdown = wrapper.find( Dropdown ).instance();
					dropdown.closeIfClickOutside( { target: wrapper.find( '.components-color-picker .components-button' ).hostNodes().instance() } );
					wrapper.update();

					expect( wrapper.find( '.components-color-palette__custom-color' ).hostNodes() ).toHaveLength( 1 );

					wrapper.find( '.test4-class .components-dropdown-button__toggle' ).hostNodes().simulate( 'click' );
					expect( wrapper.find( '.components-color-palette__custom-color' ).hostNodes() ).toHaveLength( 0 );
				}

				{
					wrapper.find( '.test4-class .components-dropdown-button__toggle' ).hostNodes().simulate( 'click' );
					expect( wrapper.find( '.components-color-palette__custom-color' ).hostNodes() ).toHaveLength( 1 );

					wrapper.find( '.components-color-palette__custom-color .components-button' ).hostNodes().simulate( 'click' );
					expect( wrapper.find( '.components-color-picker .components-button' ).hostNodes() ).toHaveLength( 1 );

					const dropdown = wrapper.find( Dropdown ).instance();
					dropdown.closeIfClickOutside( { target: wrapper.find( '.test4-content-class' ).hostNodes().instance() } );
					wrapper.update();

					expect( wrapper.find( '.components-color-palette__custom-color' ).hostNodes() ).toHaveLength( 1 );
				}
			},
		},
	].forEach( ( { props, callback }, index ) => {
		it( `should render DropdownButton ${ index }`, () => {
			const wrapper = mount(
				<DropdownButton { ...props }/>,
			);

			expect( toJson( wrapper, { mode: 'deep' } ) ).toMatchSnapshot( getSnapshotName( 'test', index ) );

			callback( wrapper, index );
		} );
	} );
} );
