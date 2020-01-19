/**
 * Module constants
 */
const HEIGHT_OFFSET = 10; // used by the arrow and a bit of empty space
// eslint-disable-next-line no-magic-numbers
const isMobileViewport = () => window.innerWidth < 782;
const isRTL = () => document.documentElement.dir === 'rtl';

/**
 * @param {object} anchorRect       Anchor Rect.
 * @param {number} width            width
 * @param {string} chosenYAxis      yAxis to be used.
 * @returns {object} choices
 */
const getXAxisAlignmentChoices = ( anchorRect, width, chosenYAxis ) => {
	// eslint-disable-next-line no-magic-numbers
	const anchorMidPoint = Math.round( anchorRect.left + ( anchorRect.width / 2 ) );
	const centerAlignment = {
		popoverLeft: anchorMidPoint,
		contentWidth: (
			// eslint-disable-next-line no-magic-numbers
			( anchorMidPoint - ( width / 2 ) > 0 ? ( width / 2 ) : anchorMidPoint ) +
			// eslint-disable-next-line no-magic-numbers
			( anchorMidPoint + ( width / 2 ) > window.innerWidth ? window.innerWidth - anchorMidPoint : ( width / 2 ) )
		),
	};
	const leftAlignmentX = chosenYAxis === 'middle' ? anchorRect.left : anchorMidPoint;
	const leftAlignment = {
		popoverLeft: leftAlignmentX,
		// eslint-disable-next-line no-magic-numbers
		contentWidth: leftAlignmentX - width > 0 ? width : leftAlignmentX,
	};
	const rightAlignmentX = chosenYAxis === 'middle' ? anchorRect.right : anchorMidPoint;
	const rightAlignment = {
		popoverLeft: rightAlignmentX,
		contentWidth: rightAlignmentX + width > window.innerWidth ? window.innerWidth - rightAlignmentX : width,
	};
	return { centerAlignment, leftAlignment, rightAlignment };
};

/**
 * @param {string} xAxis x axis
 * @param {number} width width
 * @param {object} centerAlignment  center alignment
 * @param {object} leftAlignment  left alignment
 * @param {object} rightAlignment  right alignment
 * @returns {object} x axis
 */
const chooseXAxis = ( xAxis, width, centerAlignment, leftAlignment, rightAlignment ) => {
	let chosenXAxis;
	let contentWidth = null;
	if ( xAxis === 'center' && centerAlignment.contentWidth === width ) {
		chosenXAxis = 'center';
	} else if ( xAxis === 'left' && leftAlignment.contentWidth === width ) {
		chosenXAxis = 'left';
	} else if ( xAxis === 'right' && rightAlignment.contentWidth === width ) {
		chosenXAxis = 'right';
	} else {
		chosenXAxis = leftAlignment.contentWidth > rightAlignment.contentWidth ? 'left' : 'right';
		const chosenWidth = chosenXAxis === 'left' ? leftAlignment.contentWidth : rightAlignment.contentWidth;
		contentWidth = chosenWidth !== width ? chosenWidth : null;
	}

	let popoverLeft;
	if ( chosenXAxis === 'center' ) {
		popoverLeft = centerAlignment.popoverLeft;
	} else if ( chosenXAxis === 'left' ) {
		popoverLeft = leftAlignment.popoverLeft;
	} else {
		popoverLeft = rightAlignment.popoverLeft;
	}

	return { chosenXAxis, contentWidth, popoverLeft };
};

/**
 * Utility used to compute the popover position over the xAxis
 *
 * @param {object} anchorRect       Anchor Rect.
 * @param {object} contentSize      Content Size.
 * @param {string} xAxis            Desired xAxis.
 * @param {string} chosenYAxis      yAxis to be used.
 *
 * @return {object} Popover xAxis position and constraints.
 */
export function computePopoverXAxisPosition( anchorRect, contentSize, xAxis, chosenYAxis ) {
	const { width } = contentSize;
	// Correct xAxis for RTL support
	if ( xAxis === 'left' && isRTL() ) {
		xAxis = 'right';
	} else if ( xAxis === 'right' && isRTL() ) {
		xAxis = 'left';
	}

	// x axis alignment choices
	const { centerAlignment, leftAlignment, rightAlignment } = getXAxisAlignmentChoices( anchorRect, width, chosenYAxis );

	// Choosing the x axis
	const { chosenXAxis, contentWidth, popoverLeft } = chooseXAxis( xAxis, width, centerAlignment, leftAlignment, rightAlignment );

	return {
		xAxis: chosenXAxis,
		popoverLeft,
		contentWidth,
	};
}

/**
 * @param {object} anchorRect anchor rect
 * @param {number} height height
 * @returns {object} choices
 */
const getYAxisAlignmentChoices = ( anchorRect, height ) => {
	// eslint-disable-next-line no-magic-numbers
	const anchorMidPoint = anchorRect.top + ( anchorRect.height / 2 );
	const middleAlignment = {
		popoverTop: anchorMidPoint,
		contentHeight: (
			// eslint-disable-next-line no-magic-numbers
			( anchorMidPoint - ( height / 2 ) > 0 ? ( height / 2 ) : anchorMidPoint ) +
			// eslint-disable-next-line no-magic-numbers
			( anchorMidPoint + ( height / 2 ) > window.innerHeight ? window.innerHeight - anchorMidPoint : ( height / 2 ) )
		),
	};
	const topAlignment = {
		popoverTop: anchorRect.top,
		// eslint-disable-next-line no-magic-numbers
		contentHeight: anchorRect.top - HEIGHT_OFFSET - height > 0 ? height : anchorRect.top - HEIGHT_OFFSET,
	};
	const bottomAlignment = {
		popoverTop: anchorRect.bottom,
		contentHeight: anchorRect.bottom + HEIGHT_OFFSET + height > window.innerHeight ? window.innerHeight - HEIGHT_OFFSET - anchorRect.bottom : height,
	};

	return { middleAlignment, topAlignment, bottomAlignment };
};

/**
 * @param {string} yAxis y axis
 * @param {number} height height
 * @param {object} middleAlignment middle alignment
 * @param {object} topAlignment top alignment
 * @param {object} bottomAlignment bottom alignment
 * @returns {object} y axis
 */
const chooseYAxis = ( yAxis, height, middleAlignment, topAlignment, bottomAlignment ) => {
	let chosenYAxis;
	let contentHeight = null;
	if ( yAxis === 'middle' && middleAlignment.contentHeight === height ) {
		chosenYAxis = 'middle';
	} else if ( yAxis === 'top' && topAlignment.contentHeight === height ) {
		chosenYAxis = 'top';
	} else if ( yAxis === 'bottom' && bottomAlignment.contentHeight === height ) {
		chosenYAxis = 'bottom';
	} else {
		chosenYAxis = topAlignment.contentHeight > bottomAlignment.contentHeight ? 'top' : 'bottom';
		const chosenHeight = chosenYAxis === 'top' ? topAlignment.contentHeight : bottomAlignment.contentHeight;
		contentHeight = chosenHeight !== height ? chosenHeight : null;
	}

	let popoverTop;
	if ( chosenYAxis === 'middle' ) {
		popoverTop = middleAlignment.popoverTop;
	} else if ( chosenYAxis === 'top' ) {
		popoverTop = topAlignment.popoverTop;
	} else {
		popoverTop = bottomAlignment.popoverTop;
	}

	return { chosenYAxis, contentHeight, popoverTop };
};

/**
 * Utility used to compute the popover position over the yAxis
 *
 * @param {object} anchorRect       Anchor Rect.
 * @param {object} contentSize      Content Size.
 * @param {string} yAxis            Desired yAxis.
 *
 * @return {object} Popover xAxis position and constraints.
 */
export function computePopoverYAxisPosition( anchorRect, contentSize, yAxis ) {
	const { height } = contentSize;

	// y axis alignment choices
	const { middleAlignment, topAlignment, bottomAlignment } = getYAxisAlignmentChoices( anchorRect, height );

	// Choosing the y axis
	const { chosenYAxis, contentHeight, popoverTop } = chooseYAxis( yAxis, height, middleAlignment, topAlignment, bottomAlignment );

	return {
		yAxis: chosenYAxis,
		popoverTop,
		contentHeight,
	};
}

/**
 * Utility used to compute the popover position and the content max width/height for a popover
 * given its anchor rect and its content size.
 *
 * @param {object} anchorRect       Anchor Rect.
 * @param {object} contentSize      Content Size.
 * @param {string} position         Position.
 * @param {boolean} expandOnMobile  Whether to expand the popover on mobile or not.
 *
 * @return {object} Popover position and constraints.
 */
export function computePopoverPosition( anchorRect, contentSize, position, expandOnMobile ) {
	const [ yAxis, xAxis = 'center' ] = position.split( ' ' );

	const yAxisPosition = computePopoverYAxisPosition( anchorRect, contentSize, yAxis );
	const xAxisPosition = computePopoverXAxisPosition( anchorRect, contentSize, xAxis, yAxisPosition.yAxis );

	return {
		isMobile: isMobileViewport() && expandOnMobile,
		...xAxisPosition,
		...yAxisPosition,
	};
}