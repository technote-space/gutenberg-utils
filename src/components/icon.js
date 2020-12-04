import classnames from 'classnames';

const {SVG, Dashicon} = wp.components;
const {isURL}         = wp.url;

const {isString} = window.lodash;
import {ICON_SIZE} from '../constant';

const isSVG      = icon => isString(icon) && (isURL(icon) || /^data:image/.test(icon));
const isDashicon = icon => isString(icon) && /^dashicons-/.test(icon);

const createSVG      = (icon, className) => <SVG
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width={`${ICON_SIZE}px`}
  height={`${ICON_SIZE}px`}
  viewBox={`0 0 ${ICON_SIZE} ${ICON_SIZE}`}
  enableBackground={`new 0 0 ${ICON_SIZE} ${ICON_SIZE}`}
  className={className}
>
  <image
    width={ICON_SIZE}
    height={ICON_SIZE}
    x="0"
    y="0"
    xlinkHref={icon}
  />
</SVG>;
const createDashicon = (icon, className) => <Dashicon
  icon={icon.replace(/^dashicons-/, '')}
  className={className}
/>;

/**
 * @param {*} icon icon
 * @param {string} className class name
 * @param {*} defaultIcon default icon
 * @returns {null|*|null|*} icon
 * @constructor
 */
const Icon = (
  {
    icon,
    className,
    defaultIcon = false,
  },
) => {
  if (isSVG(icon)) {
    return createSVG(icon, classnames('components-icon components-icon__svg', className));
  }

  if (isDashicon(icon)) {
    return createDashicon(icon, classnames('components-icon components-icon__dashicon', className));
  }

  if (!icon && defaultIcon) {
    return Icon({
      icon: defaultIcon,
      className: className,
    });
  }

  if (!icon) {
    return null;
  }

  return icon;
};

export default Icon;
