import {
	computePopoverPosition,
	computePopoverYAxisPosition,
	computePopoverXAxisPosition,
} from '../../../src/components/popover/utils';

describe( 'computePopoverYAxisPosition', () => {
	it( 'should leave the position as is there’s enought space', () => {
		const anchorRect = {
			top: 10,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		expect( computePopoverYAxisPosition( anchorRect, contentSize, 'bottom' ) ).toEqual( {
			contentHeight: null,
			popoverTop: 30,
			yAxis: 'bottom',
		} );
	} );

	it( 'should switch to bottom position if there\'s not enough space', () => {
		const anchorRect = {
			top: 10,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		expect( computePopoverYAxisPosition( anchorRect, contentSize, 'top' ) ).toEqual( {
			contentHeight: null,
			popoverTop: 30,
			yAxis: 'bottom',
		} );
	} );

	it( 'should set a maxHeight if there\'s not enough space in any direction', () => {
		const anchorRect = {
			top: 400,
			left: 10,
			bottom: 420,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 500,
		};

		expect( computePopoverYAxisPosition( anchorRect, contentSize, 'bottom' ) ).toEqual( {
			contentHeight: 390,
			popoverTop: 400,
			yAxis: 'top',
		} );
	} );

	it( 'should position a popover in the middle', () => {
		const anchorRect = {
			top: 400,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		expect( computePopoverYAxisPosition( anchorRect, contentSize, 'middle' ) ).toEqual( {
			contentHeight: null,
			popoverTop: 410,
			yAxis: 'middle',
		} );
	} );

	it( 'should position a popover in the top', () => {
		const originalHeight = window.innerHeight;
		const anchorRect = {
			top: 500,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		window.innerHeight = 100;
		expect( computePopoverYAxisPosition( anchorRect, contentSize, 'top' ) ).toEqual( {
			contentHeight: null,
			popoverTop: 500,
			yAxis: 'top',
		} );
		window.innerHeight = originalHeight;
	} );
} );

describe( 'computePopoverXAxisPosition', () => {
	it( 'should leave the position as is there’s enought space', () => {
		const anchorRect = {
			top: 10,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		expect( computePopoverXAxisPosition( anchorRect, contentSize, 'right' ) ).toEqual( {
			contentWidth: null,
			popoverLeft: 20,
			xAxis: 'right',
		} );
	} );

	it( 'should switch to right position if there\'s not enough space', () => {
		const anchorRect = {
			top: 10,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		expect( computePopoverXAxisPosition( anchorRect, contentSize, 'center' ) ).toEqual( {
			contentWidth: null,
			popoverLeft: 20,
			xAxis: 'right',
		} );
	} );

	it( 'should set a maxWidth if there\'s not enough space in any direction', () => {
		const anchorRect = {
			top: 10,
			left: 400,
			bottom: 30,
			right: 420,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 800,
			height: 300,
		};

		expect( computePopoverXAxisPosition( anchorRect, contentSize, 'right' ) ).toEqual( {
			contentWidth: 614,
			popoverLeft: 410,
			xAxis: 'right',
		} );
	} );

	it( 'should position a popover in the left (isRTL)', () => {
		const anchorRect = {
			top: 10,
			left: 400,
			bottom: 30,
			right: 420,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 800,
			height: 300,
		};

		const dir = document.documentElement.dir;
		document.documentElement.dir = 'rtl';
		expect( computePopoverXAxisPosition( anchorRect, contentSize, 'left', '' ) ).toEqual( {
			contentWidth: 614,
			popoverLeft: 410,
			xAxis: 'right',
		} );
		document.documentElement.dir = dir;
	} );

	it( 'should position a popover in the right (isRTL)', () => {
		const anchorRect = {
			top: 10,
			left: 400,
			bottom: 30,
			right: 420,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 100,
			height: 300,
		};

		const dir = document.documentElement.dir;
		document.documentElement.dir = 'rtl';
		expect( computePopoverXAxisPosition( anchorRect, contentSize, 'right', '' ) ).toEqual( {
			contentWidth: null,
			popoverLeft: 410,
			xAxis: 'left',
		} );
		document.documentElement.dir = dir;
	} );

	it( 'should position a popover in the middle', () => {
		const originalWidth = window.innerWidth;
		const anchorRect = {
			top: 10,
			left: 400,
			bottom: 30,
			right: 420,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 1000,
			height: 300,
		};

		window.innerWidth = 100;
		expect( computePopoverXAxisPosition( anchorRect, contentSize, 'right', 'middle' ) ).toEqual( {
			contentWidth: 400,
			popoverLeft: 400,
			xAxis: 'left',
		} );
		window.innerWidth = originalWidth;
	} );
} );

describe( 'computePopoverPosition', () => {
	it( 'should leave the position as is there’s enought space', () => {
		const anchorRect = {
			top: 10,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		expect( computePopoverPosition( anchorRect, contentSize, 'bottom right', false ) ).toEqual( {
			contentWidth: null,
			popoverLeft: 20,
			xAxis: 'right',
			contentHeight: null,
			popoverTop: 30,
			yAxis: 'bottom',
			isMobile: false,
		} );
	} );

	it( 'should set isMobile to true on small viewPosts', () => {
		const originalWidth = window.innerWidth;

		const anchorRect = {
			top: 10,
			left: 10,
			bottom: 30,
			right: 30,
			width: 20,
			height: 20,
		};

		const contentSize = {
			width: 200,
			height: 300,
		};

		window.innerWidth = 200;
		expect( computePopoverPosition( anchorRect, contentSize, 'bottom right', true ).isMobile ).toBe( true );
		window.innerWidth = originalWidth;
	} );
} );