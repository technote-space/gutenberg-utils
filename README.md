# Gutenberg Utils

[![License: GPL v2+](https://img.shields.io/badge/License-GPL%20v2%2B-blue.svg)](http://www.gnu.org/licenses/gpl-2.0.html)
[![WordPress: >=5.0](https://img.shields.io/badge/WordPress-%3E%3D5.0-brightgreen.svg)](https://wordpress.org/)

This is a gutenberg's utils.

## How to use
### Use from npm
[https://www.npmjs.com/package/@technote-space/gutenberg-utils](https://www.npmjs.com/package/@technote-space/gutenberg-utils)

```
npm install --save @technote-space/gutenberg-utils
```

`gutenberg.js`
```
require( '@technote-space/gutenberg-utils' );

const { Icon, DropdownButton } = wp.components.extension;
const { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle } = wp.richText.extension;
const { isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes } = wp.editor.extension;
```

Compile and enqueue script.

```
<script type="text/javascript" src="/assets/gutenberg.js"></script>
```

### Use from download

`gutenberg.js`
```
( function(
	Icon, DropdownButton,
	getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle,
	isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes,
) {
}(
	wp.components.extension.Icon,
	wp.components.extension.DropdownButton,
	wp.richText.extension.getActiveStyle,
	wp.richText.extension.addActiveAttributes,
	wp.richText.extension.setActiveStyle,
	wp.richText.extension.onChangeStyle,
	wp.editor.extension.isValidCustomColors,
	wp.editor.extension.isValidCustomFontSizes,
	wp.editor.extension.getColors,
	wp.editor.extension.getFontSizes,
) );
```

Download [Release version](https://raw.githubusercontent.com/technote-space/gutenberg-utils/master/build/index.js) and enqueue scripts.
```
<script type="text/javascript" src="/assets/gutenberg-utils/index.js"></script>
<script type="text/javascript" src="/assets/gutenberg.js"></script>
```

## dependencies
- wp-components
- wp-data
- wp-rich-text
- wp-url
- lodash

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
