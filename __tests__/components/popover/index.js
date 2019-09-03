/* eslint-disable no-magic-numbers */
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const { useRef } = wp.element;
import Popover, {
	useThrottledWindowScrollOrResizeFunc,
	refreshAnchorRectFunc,
	intervalRefreshAnchorRectFunc,
	useFocusContentOnMountFunc,
	renderPopover,
} from '../../../src/components/popover';

const { Component } = wp.element;
const { SlotFillProvider, IsolatedEventContainer } = wp.components;

jest.useFakeTimers();

class PopoverWrapper extends Component {
	render() {
		return <Popover { ...this.props } />;
	}
}

describe( 'Popover', () => {
	const onKeyDown = jest.fn();
	const wrapper = mount(
		<SlotFillProvider>
			<PopoverWrapper
				onKeyDown={ onKeyDown }
			>
				Hello
			</PopoverWrapper>
			<Popover.Slot/>
		</SlotFillProvider>,
	);

	beforeEach( () => {
		onKeyDown.mockClear();
		jest.advanceTimersByTime( 1 );
	} );

	afterEach( () => {
		if ( document.activeElement ) {
			document.activeElement.blur();
		}
	} );

	it( 'should render content', () => {
		expect( toJson( wrapper ) ).toMatchSnapshot();
	} );

	it( 'should call onKeyDown', () => {
		wrapper.find( IsolatedEventContainer ).props().onKeyDown( { keyCode: 38 } ); // ↑
		expect( onKeyDown ).toHaveBeenCalledTimes( 1 );
		expect( onKeyDown ).toHaveBeenCalledWith( { keyCode: 38 } );
	} );
} );

describe( 'Popover', () => {
	const onClose = jest.fn();
	const wrapper = mount(
		<SlotFillProvider>
			<PopoverWrapper
				onClose={ onClose }
			>
				Hello
			</PopoverWrapper>
			<Popover.Slot/>
		</SlotFillProvider>,
	);

	beforeEach( () => {
		onClose.mockClear();
		jest.advanceTimersByTime( 1 );
	} );

	afterEach( () => {
		if ( document.activeElement ) {
			document.activeElement.blur();
		}
	} );

	it( 'should render content', () => {
		expect( toJson( wrapper ) ).toMatchSnapshot();
	} );

	it( 'should call onClose', () => {
		const stopPropagation = jest.fn();
		wrapper.find( IsolatedEventContainer ).props().onKeyDown( {
			keyCode: 27,
			stopPropagation,
		} ); // esc
		expect( onClose ).toHaveBeenCalledTimes( 1 );
		expect( stopPropagation ).toHaveBeenCalledTimes( 1 );
	} );
} );

describe( 'Popover', () => {
	it( 'should render mobile content', () => {
		const width = window.innerWidth;
		window.innerWidth = 600;
		const wrapper = mount(
			<SlotFillProvider>
				<PopoverWrapper
					expandOnMobile={ true }
					position='middle'
				>
					Hello
				</PopoverWrapper>
				<Popover.Slot/>
			</SlotFillProvider>,
		);
		expect( toJson( wrapper ) ).toMatchSnapshot();
		window.innerWidth = width;
	} );
} );

describe( 'useThrottledWindowScrollOrResizeFunc', () => {
	beforeEach( () => {
		jest.spyOn( window, 'requestAnimationFrame' ).mockImplementation( cb => cb() );
	} );

	afterEach( () => {
		window.requestAnimationFrame.mockRestore();
	} );

	it( 'should setup refresh event 1', () => {
		const handler = jest.fn();
		const contains = jest.fn( () => false );
		const remove = useThrottledWindowScrollOrResizeFunc( handler, { current: { contains } } );
		expect( typeof remove ).toBe( 'function' );

		window.dispatchEvent( new Event( 'resize' ) );
		expect( contains ).toHaveBeenCalledTimes( 0 );
		expect( handler ).toHaveBeenCalledTimes( 1 );
		contains.mockClear();
		handler.mockClear();

		window.dispatchEvent( new Event( 'scroll' ) );
		expect( contains ).toHaveBeenCalledTimes( 1 );
		expect( handler ).toHaveBeenCalledTimes( 1 );
		contains.mockClear();
		handler.mockClear();

		remove();
		window.dispatchEvent( new Event( 'scroll' ) );
		expect( contains ).toHaveBeenCalledTimes( 0 );
		expect( handler ).toHaveBeenCalledTimes( 0 );
	} );

	it( 'should setup refresh event 2', () => {
		const handler = jest.fn();
		const contains = jest.fn( () => true );
		const remove = useThrottledWindowScrollOrResizeFunc( handler, { current: { contains } } );
		expect( typeof remove ).toBe( 'function' );

		window.dispatchEvent( new Event( 'scroll' ) );
		expect( contains ).toHaveBeenCalledTimes( 1 );
		expect( handler ).toHaveBeenCalledTimes( 0 );
	} );

	it( 'should setup refresh event 3', () => {
		const handler = jest.fn();
		const contains = jest.fn( () => false );
		const remove = useThrottledWindowScrollOrResizeFunc( handler, null );
		expect( typeof remove ).toBe( 'function' );

		window.dispatchEvent( new Event( 'resize' ) );
		expect( contains ).toHaveBeenCalledTimes( 0 );
		expect( handler ).toHaveBeenCalledTimes( 1 );
		contains.mockClear();
		handler.mockClear();

		window.dispatchEvent( new Event( 'scroll' ) );
		expect( contains ).toHaveBeenCalledTimes( 0 );
		expect( handler ).toHaveBeenCalledTimes( 1 );
	} );
} );

describe( 'refreshAnchorRectFunc', () => {
	it( 'should do nothing 1', () => {
		const getAnchorRect = jest.fn();
		const setAnchor = jest.fn();
		expect( refreshAnchorRectFunc( { current: null }, null, getAnchorRect, {}, setAnchor ) ).toBeFalsy();
		expect( getAnchorRect ).toHaveBeenCalledTimes( 0 );
		expect( setAnchor ).toHaveBeenCalledTimes( 0 );
	} );

	it( 'should do nothing 2', () => {
		const getAnchorRect = jest.fn();
		const setAnchor = jest.fn();
		expect( refreshAnchorRectFunc( { current: {} }, { x: 0 }, getAnchorRect, { x: 0 }, setAnchor ) ).toBeFalsy();
		expect( getAnchorRect ).toHaveBeenCalledTimes( 0 );
		expect( setAnchor ).toHaveBeenCalledTimes( 0 );
	} );

	it( 'should set anchorRect', () => {
		const getAnchorRect = jest.fn();
		const setAnchor = jest.fn();
		expect( refreshAnchorRectFunc( { current: {} }, {
			x: 123,
			y: 456,
		}, getAnchorRect, {}, setAnchor ) ).toBeTruthy();
		expect( getAnchorRect ).toHaveBeenCalledTimes( 0 );
		expect( setAnchor ).toHaveBeenCalledTimes( 1 );
		expect( setAnchor ).toHaveBeenCalledWith( {
			x: 123,
			y: 456,
		} );
	} );

	it( 'should set getAnchorRect', () => {
		const getAnchorRect = jest.fn( () => ( {
			x: 456,
			y: 789,
		} ) );
		const setAnchor = jest.fn();
		expect( refreshAnchorRectFunc( {
			current: {
				test: 'test',
			},
		}, null, getAnchorRect, {}, setAnchor ) ).toBeTruthy();
		expect( getAnchorRect ).toHaveBeenCalledTimes( 1 );
		expect( getAnchorRect ).toHaveBeenCalledWith( { test: 'test' } );
		expect( setAnchor ).toHaveBeenCalledTimes( 1 );
		expect( setAnchor ).toHaveBeenCalledWith( {
			x: 456,
			y: 789,
		} );
	} );
} );

describe( 'intervalRefreshAnchorRectFunc', () => {
	it( 'should setup setInterval', () => {
		const callback = jest.fn();
		const func = intervalRefreshAnchorRectFunc( null, callback );
		expect( typeof func ).toBe( 'function' );
		expect( callback ).toHaveBeenCalledTimes( 0 );
		jest.advanceTimersByTime( 600 );
		expect( callback ).toHaveBeenCalledTimes( 1 );

		func();

		jest.advanceTimersByTime( 600 );
		expect( callback ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'should not setInterval', () => {
		const callback = jest.fn();
		const func = intervalRefreshAnchorRectFunc( {}, callback );
		expect( typeof func ).toBe( 'undefined' );
		expect( callback ).toHaveBeenCalledTimes( 0 );
		jest.advanceTimersByTime( 600 );
		expect( callback ).toHaveBeenCalledTimes( 0 );
	} );
} );

describe( 'useFocusContentOnMountFunc', () => {
	it( 'should do nothing', () => {
		expect( useFocusContentOnMountFunc( null, { current: {} }, {} ) ).toBeFalsy();
		expect( useFocusContentOnMountFunc( 'firstElement', {}, {} ) ).toBeFalsy();
		expect( useFocusContentOnMountFunc( 'test', { current: {} }, {} ) ).toBeFalsy();
	} );

	it( 'should call focus 1', () => {
		const focus = jest.fn();
		expect( useFocusContentOnMountFunc( 'firstElement', {
			current: {},
		}, {
			tabbable: {
				find: () => [
					{ focus },
				],
			},
		} ) ).toBeTruthy();
		expect( focus ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'should call focus 2', () => {
		const focus = jest.fn();
		expect( useFocusContentOnMountFunc( 'firstElement', {
			current: { focus },
		}, {
			tabbable: {
				find: () => [],
			},
		} ) ).toBeTruthy();
		expect( focus ).toHaveBeenCalledTimes( 1 );
	} );

	it( 'should call focus 3', () => {
		const focus = jest.fn();
		expect( useFocusContentOnMountFunc( 'container', {
			current: { focus },
		}, {
			tabbable: {
				find: () => [],
			},
		} ) ).toBeTruthy();
		expect( focus ).toHaveBeenCalledTimes( 1 );
	} );
} );

describe( 'renderPopover', () => {
	it( 'should render popover', () => {
		const anchorRef = useRef( null );
		const contentRef = useRef( null );
		const popoverPosition = {
			popoverLeft: 10,
			popoverTop: 20,
			yAxis: 'middle',
			xAxis: 'center',
			contentHeight: 30,
			contentWidth: 40,
			isMobile: false,
		};

		class WrapperComponent extends Component {
			render() {
				return renderPopover( {
					anchorRef,
					contentRef,
					contentSize: null,
					popoverPosition,
					headerTitle: '',
					expandOnMobile: false,
					contentProps: {},
					children: null,
					onClose: jest.fn(),
					onKeyDown: jest.fn(),
					onClickOutside: jest.fn(),
				} );
			}
		}

		const wrapper = mount(
			<SlotFillProvider>
				<WrapperComponent/>
				<Popover.Slot/>
			</SlotFillProvider>,
		);
		expect( toJson( wrapper ) ).toMatchSnapshot();
	} );

	it( 'should render mobile popover', () => {
		const anchorRef = useRef( null );
		const contentRef = useRef( null );
		const popoverPosition = {
			popoverLeft: 10,
			popoverTop: 20,
			yAxis: 'middle',
			xAxis: 'center',
			contentHeight: 30,
			contentWidth: 40,
			isMobile: true,
		};

		class WrapperComponent extends Component {
			render() {
				return renderPopover( {
					anchorRef,
					contentRef,
					contentSize: null,
					popoverPosition,
					headerTitle: '',
					expandOnMobile: true,
					contentProps: {},
					children: null,
					onClose: jest.fn(),
					onKeyDown: jest.fn(),
					onClickOutside: jest.fn(),
				} );
			}
		}

		const wrapper = mount(
			<SlotFillProvider>
				<WrapperComponent/>
				<Popover.Slot/>
			</SlotFillProvider>,
		);
		expect( toJson( wrapper ) ).toMatchSnapshot();
	} );
} );
