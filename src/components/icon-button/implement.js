const { forwardRef } = wp.element;
const Button = wp.components.Button;

const IconButton = ({
	labelPosition,
	size,
	tooltip,
	label,
	...props
}, ref) => {
	return (
		<Button
			{...props}
			ref={ref}
			tooltipPosition={labelPosition}
			iconSize={size}
			showTooltip={tooltip !== undefined ? !!tooltip : undefined}
			label={tooltip || label}
		/>
	);
};

export default forwardRef(IconButton);
