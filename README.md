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

const { Icon } = wp.components.extension;
const { getActiveStyle } = wp.richText.extension;

```

Compile and enqueue script.

```
<script type="text/javascript" src="/assets/gutenberg.js"></script>
```

### Use from download

`gutenberg.js`
```
( function( Icon, getActiveStyle ) {

}(
	wp.components.extension.Icon,
	wp.components.richText.getActiveStyle,
) );

```

Download [Release version](https://raw.githubusercontent.com/technote-space/gutenberg-utils/master/build/index.js) and enqueue scripts.
```
<script type="text/javascript" src="/assets/gutenberg-utils/index.js"></script>
<script type="text/javascript" src="/assets/gutenberg.js"></script>
```

## dependencies
- wp-components
- wp-rich-text
- wp-url

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
