/**
 * Gutenberg v6.2
 */
import classnames from 'classnames';
import { computePopoverPosition } from './utils';
import PopoverDetectOutside from './detect-outside';

const { useRef, useState, useEffect } = wp.element;
const { focus } = wp.dom;
const { ESCAPE } = wp.keycodes;
const isShallowEqual = wp.isShallowEqual;
const { IconButton, ScrollLock, Animate, withFocusReturn, withConstrainedTabbing, IsolatedEventContainer, Slot, Fill } = wp.components;
const FocusManaged = withConstrainedTabbing(withFocusReturn(({ children }) => children));

/**
 * Name of slot in which popover should fill.
 *
 * @type {String}
 */
const SLOT_NAME = 'Popover';

export const useThrottledWindowScrollOrResizeFunc = (handler, ignoredScrollalbeRef) => {
	let refreshHandle;
	const throttledRefresh = (event) => {
		window.cancelAnimationFrame(refreshHandle);
		if (ignoredScrollalbeRef && event && event.type === 'scroll' && ignoredScrollalbeRef.current.contains(event.target)) {
			return;
		}
		refreshHandle = window.requestAnimationFrame(handler);
	};

	window.addEventListener('resize', throttledRefresh);
	window.addEventListener('scroll', throttledRefresh);

	return () => {
		window.removeEventListener('resize', throttledRefresh);
		window.removeEventListener('scroll', throttledRefresh);
	};
};

/**
 * Hook used trigger an event handler once the window is resized or scrolled.
 *
 * @param {function} handler              Event handler.
 * @param {object}   ignoredScrollalbeRef scroll events inside this element are ignored.
 */
function useThrottledWindowScrollOrResize(handler, ignoredScrollalbeRef) {
	// Refresh anchor rect on resize
	useEffect(() => {
		useThrottledWindowScrollOrResizeFunc(handler, ignoredScrollalbeRef);
	}, []);
}

/**
 * @param {object} anchorRef       reference to the popover anchor element.
 * @param {object} anchorRect      anchor Rect prop used to override the computed value.
 * @param {function} getAnchorRect function used to override the anchor value computation algorithm.
 * @param {object} anchor anchor
 * @param {function} setAnchor set anchor
 * @returns {boolean} result
 */
export const refreshAnchorRectFunc = (anchorRef, anchorRect, getAnchorRect, anchor, setAnchor) => {
	if (!anchorRef.current) {
		return false;
	}

	let newAnchor;
	if (anchorRect) {
		newAnchor = anchorRect;
	} else if (getAnchorRect) {
		newAnchor = getAnchorRect(anchorRef.current);
	} else {
		const rect = anchorRef.current.parentNode.getBoundingClientRect();
		// subtract padding
		const { paddingTop, paddingBottom } = window.getComputedStyle(anchorRef.current.parentNode);
		const topPad = parseInt(paddingTop, 10);
		const bottomPad = parseInt(paddingBottom, 10);
		newAnchor = {
			x: rect.left,
			y: rect.top + topPad,
			width: rect.width,
			height: rect.height - topPad - bottomPad,
			left: rect.left,
			right: rect.right,
			top: rect.top + topPad,
			bottom: rect.bottom - bottomPad,
		};
	}

	const didAnchorRectChange = !isShallowEqual(newAnchor, anchor);
	if (didAnchorRectChange) {
		setAnchor(newAnchor);
		return true;
	}
	return false;
};

/**
 * @param {object} anchorRect      anchor Rect prop used to override the computed value.
 * @param {function} refreshAnchorRect refresh anchor rect
 * @returns {function(): void} func
 */
export const intervalRefreshAnchorRectFunc = (anchorRect, refreshAnchorRect) => {
	if (!anchorRect) {
		/*
		* There are sometimes we need to reposition or resize the popover that are not
		* handled by the resize/scroll window events (i.e. CSS changes in the layout
		* that changes the position of the anchor).
		*
		* For these situations, we refresh the popover every 0.5s
		*/
		// eslint-disable-next-line no-magic-numbers
		const intervalHandle = setInterval(refreshAnchorRect, 500);

		return () => clearInterval(intervalHandle);
	}
};

/**
 * Hook used to compute and update the anchor position properly.
 *
 * @param {object} anchorRef       reference to the popover anchor element.
 * @param {object} contentRef      reference to the popover content element.
 * @param {object} anchorRect      anchor Rect prop used to override the computed value.
 * @param {function} getAnchorRect function used to override the anchor value computation algorithm.
 *
 * @return {object} Anchor position.
 */
function useAnchor(anchorRef, contentRef, anchorRect, getAnchorRect) {
	const [anchor, setAnchor] = useState(null);
	const refreshAnchorRect = () => {
		refreshAnchorRectFunc(anchorRef, anchorRect, getAnchorRect, anchor, setAnchor);
	};
	useEffect(refreshAnchorRect, [anchorRect, getAnchorRect]);
	useEffect(() => {
		intervalRefreshAnchorRectFunc(anchorRect, refreshAnchorRect);
	}, [anchorRect]);

	useThrottledWindowScrollOrResize(refreshAnchorRect, contentRef);

	return anchor;
}

/**
 * Hook used to compute the initial size of an element.
 * The popover applies styling to limit the height of the element,
 * we only care about the initial size.
 *
 * @param {object} ref Reference to the popover content element.
 *
 * @return {object} Content size.
 */
function useInitialContentSize(ref) {
	const [contentSize, setContentSize] = useState(null);
	useEffect(() => {
		const contentRect = ref.current.getBoundingClientRect();
		setContentSize({
			width: contentRect.width,
			height: contentRect.height,
		});
	}, []);

	return contentSize;
}

/**
 * Hook used to compute and update the position of the popover
 * based on the anchor position and the content size.
 *
 * @param {object} anchor          Anchor Position.
 * @param {object} contentSize     Content Size.
 * @param {string} position        Position prop.
 * @param {boolean} expandOnMobile Whether to show the popover full width on mobile.
 * @param {object} contentRef      Reference to the popover content element.
 *
 * @return {object} Popover position.
 */
function usePopoverPosition(anchor, contentSize, position, expandOnMobile, contentRef) {
	const [popoverPosition, setPopoverPosition] = useState({
		popoverLeft: null,
		popoverTop: null,
		yAxis: 'top',
		xAxis: 'center',
		contentHeight: null,
		contentWidth: null,
		isMobile: false,
	});
	const refreshPopoverPosition = () => {
		if (!anchor || !contentSize) {
			return;
		}

		const newPopoverPosition = computePopoverPosition(
			anchor,
			contentSize,
			position,
			expandOnMobile,
		);

		/* istanbul ignore next */
		if (
			popoverPosition.yAxis !== newPopoverPosition.yAxis ||
			popoverPosition.xAxis !== newPopoverPosition.xAxis ||
			popoverPosition.popoverLeft !== newPopoverPosition.popoverLeft ||
			popoverPosition.popoverTop !== newPopoverPosition.popoverTop ||
			popoverPosition.contentHeight !== newPopoverPosition.contentHeight ||
			popoverPosition.contentWidth !== newPopoverPosition.contentWidth ||
			popoverPosition.isMobile !== newPopoverPosition.isMobile
		) {
			setPopoverPosition(newPopoverPosition);
		}
	};
	useEffect(refreshPopoverPosition, [anchor, contentSize]);
	useThrottledWindowScrollOrResize(refreshPopoverPosition, contentRef);

	return popoverPosition;
}

/**
 * @param {boolean|string} focusOnMount Focus on mount mode.
 * @param {object} contentRef           Reference to the popover content element.
 * @param {object} focus focus
 * @returns {boolean} func
 */
export const useFocusContentOnMountFunc = (focusOnMount, contentRef, focus) => {
	if (!focusOnMount || !contentRef.current) {
		return false;
	}

	if (focusOnMount === 'firstElement') {
		// Find first tabbable node within content and shift focus, falling
		// back to the popover panel itself.
		const firstTabbable = focus.tabbable.find(contentRef.current)[ 0 ];
		if (firstTabbable) {
			firstTabbable.focus();
		} else {
			contentRef.current.focus();
		}

		return true;
	}

	if (focusOnMount === 'container') {
		// Focus the popover panel itself so items in the popover are easily
		// accessed via keyboard navigation.
		contentRef.current.focus();
		return true;
	}

	return false;
};

/**
 * Hook used to focus the first tabbable element on mount.
 *
 * @param {boolean|string} focusOnMount Focus on mount mode.
 * @param {object} contentRef           Reference to the popover content element.
 */
function useFocusContentOnMount(focusOnMount, contentRef) {
	// Focus handling
	useEffect(() => {
		const focusTimeout = setTimeout(() => {
			useFocusContentOnMountFunc(focusOnMount, contentRef, focus);
			// eslint-disable-next-line no-magic-numbers
		}, 0);

		return () => clearTimeout(focusTimeout);
	}, []);
}

/**
 * @param {object} anchorRef anchor ref
 * @param {object} contentRef content ref
 * @param {object} contentSize content size
 * @param {object} popoverPosition popover position
 * @param {string} headerTitle header title
 * @param {string} className class name
 * @param {boolean} noArrow no arrow
 * @param {boolean} expandOnMobile expand on mobile
 * @param {boolean} animate animate
 * @param {boolean} isReadyToAnimate is ready to animate
 * @param {object} contentProps content props
 * @param {object} children children
 * @param {function} onClose on close
 * @param {function} onKeyDown on key down
 * @param {function} onClickOutside on click outside
 * @returns {Component} popover
 */
export const renderPopover = ({
	anchorRef,
	contentRef,
	contentSize,
	popoverPosition,
	headerTitle,
	className,
	noArrow,
	expandOnMobile,
	animate,
	isReadyToAnimate,
	contentProps,
	children,
	onClose,
	onKeyDown,
	onClickOutside,
}) => {
	const classes = classnames(
		'components-popover',
		className,
		'is-' + popoverPosition.yAxis,
		'is-' + popoverPosition.xAxis,
		{
			'is-mobile': popoverPosition.isMobile,
			'is-without-arrow': noArrow || (
				popoverPosition.xAxis === 'center' &&
				popoverPosition.yAxis === 'middle'
			),
		},
	);

	// Compute the animation position
	const yAxisMapping = {
		top: 'bottom',
		bottom: 'top',
	};
	const xAxisMapping = {
		left: 'right',
		right: 'left',
	};
	const animateYAxis = yAxisMapping[ popoverPosition.yAxis ] || 'middle';
	const animateXAxis = xAxisMapping[ popoverPosition.xAxis ] || 'center';

	// Event handlers
	const maybeClose = (event) => {
		// Close on escape
		if (event.keyCode === ESCAPE && onClose) {
			event.stopPropagation();
			onClose();
		}

		// Preserve original content prop behavior
		if (onKeyDown) {
			onKeyDown(event);
		}
	};

	return <span ref={anchorRef}>
		{<Fill name={SLOT_NAME}>
			<FocusManaged>
				<PopoverDetectOutside onClickOutside={onClickOutside}>
					<Animate
						type={animate && isReadyToAnimate ? 'appear' : null}
						options={{ origin: animateYAxis + ' ' + animateXAxis }}
					>
						{({ className: animateClassName }) => (
							<IsolatedEventContainer
								className={classnames(classes, animateClassName)}
								style={{
									top: !popoverPosition.isMobile && popoverPosition.popoverTop ? popoverPosition.popoverTop + 'px' : undefined,
									left: !popoverPosition.isMobile && popoverPosition.popoverLeft ? popoverPosition.popoverLeft + 'px' : undefined,
									visibility: contentSize ? undefined : 'hidden',
								}}
								{...contentProps}
								onKeyDown={maybeClose}
							>
								{popoverPosition.isMobile && (
									<div className="components-popover__header">
										<span className="components-popover__header-title">
											{headerTitle}
										</span>
										<IconButton className="components-popover__close" icon="no-alt" onClick={onClose} />
									</div>
								)}
								<div
									ref={contentRef}
									className="components-popover__content"
									style={{
										maxHeight: !popoverPosition.isMobile && popoverPosition.contentHeight ? popoverPosition.contentHeight + 'px' : undefined,
										maxWidth: !popoverPosition.isMobile && popoverPosition.contentWidth ? popoverPosition.contentWidth + 'px' : undefined,
									}}
									tabIndex="-1"
								>
									{children}
								</div>
							</IsolatedEventContainer>
						)}
					</Animate>
				</PopoverDetectOutside>
			</FocusManaged>
		</Fill>}
		{popoverPosition.isMobile && expandOnMobile && <ScrollLock />}
	</span>;
};

/**
 * @param {string} headerTitle header title
 * @param {function} onClose on close
 * @param {function} onKeyDown on key down
 * @param {object} children children
 * @param {string} className class name
 * @param {function} onClickOutside on click outside
 * @param {boolean} noArrow no arrow
 * @param {string} position position
 * @param {string} focusOnMount focus on mount
 * @param {object} anchorRect anchor rect
 * @param {function} getAnchorRect get anchor rect
 * @param {boolean} expandOnMobile expand on mobile
 * @param {boolean} animate animate
 * @param {object} contentProps content props
 * @returns {Component} popover
 * @constructor
 */
const Popover = ({
	headerTitle,
	onClose,
	onKeyDown,
	children,
	className,
	onClickOutside = onClose,
	noArrow = false,
	position = 'top',
	focusOnMount = 'firstElement',
	anchorRect,
	getAnchorRect,
	expandOnMobile,
	animate = true,
	...contentProps
}) => {
	const anchorRef = useRef(null);
	const contentRef = useRef(null);

	// Animation
	const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);

	// Anchor position
	const anchor = useAnchor(anchorRef, contentRef, anchorRect, getAnchorRect);

	// Content size
	const contentSize = useInitialContentSize(contentRef);
	useEffect(() => {
		if (contentSize) {
			setIsReadyToAnimate(true);
		}
	}, [contentSize]);

	// Compute the position
	const popoverPosition = usePopoverPosition(
		anchor,
		contentSize,
		position,
		expandOnMobile,
		contentRef,
	);

	useFocusContentOnMount(focusOnMount, contentRef);

	return renderPopover({
		anchorRef,
		contentRef,
		contentSize,
		popoverPosition,
		headerTitle,
		className,
		noArrow,
		expandOnMobile,
		animate,
		isReadyToAnimate,
		contentProps,
		children,
		onClose,
		onKeyDown,
		onClickOutside,
	});
};

const PopoverContainer = Popover;

PopoverContainer.Slot = () => <Slot bubblesVirtually name={SLOT_NAME} />;

export default PopoverContainer;
