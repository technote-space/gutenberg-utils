# Gutenberg Utils

[![npm version](https://badge.fury.io/js/%40technote-space%2Fgutenberg-utils.svg)](https://badge.fury.io/js/%40technote-space%2Fgutenberg-utils)
[![Build Status](https://travis-ci.com/technote-space/gutenberg-utils.svg?branch=master)](https://travis-ci.com/technote-space/gutenberg-utils)
[![Coverage Status](https://coveralls.io/repos/github/technote-space/gutenberg-utils/badge.svg?branch=master)](https://coveralls.io/github/technote-space/gutenberg-utils?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/43d4fd84117c4e4ca9ba0b7a39fef42b)](https://www.codacy.com/app/technote-space/gutenberg-utils?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=technote-space/gutenberg-utils&amp;utm_campaign=Badge_Grade)
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
import { Components, Helpers } from '@technote-space/gutenberg-utils';

const { Icon, DropdownButton } = Components;
const { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle } = Helpers;
const { isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes } = Helpers;
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
	Technote.Gutenberg.Common.Components.Icon,
	Technote.Gutenberg.Common.Components.DropdownButton,
	Technote.Gutenberg.Common.Helpers.getActiveStyle,
	Technote.Gutenberg.Common.Helpers.addActiveAttributes,
	Technote.Gutenberg.Common.Helpers.setActiveStyle,
	Technote.Gutenberg.Common.Helpers.onChangeStyle,
	Technote.Gutenberg.Common.Helpers.isValidCustomColors,
	Technote.Gutenberg.Common.Helpers.isValidCustomFontSizes,
	Technote.Gutenberg.Common.Helpers.getColors,
	Technote.Gutenberg.Common.Helpers.getFontSizes,
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
- wp-editor
- wp-element
- wp-i18n
- wp-rich-text
- wp-url
- lodash

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
