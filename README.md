# Gutenberg Utils

[![npm version](https://badge.fury.io/js/%40technote-space%2Fgutenberg-utils.svg)](https://badge.fury.io/js/%40technote-space%2Fgutenberg-utils)
[![CI Status](https://github.com/technote-space/gutenberg-utils/workflows/CI/badge.svg)](https://github.com/technote-space/gutenberg-utils/actions)
[![Build Status](https://travis-ci.com/technote-space/gutenberg-utils.svg?branch=master)](https://travis-ci.com/technote-space/gutenberg-utils)
[![codecov](https://codecov.io/gh/technote-space/gutenberg-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/gutenberg-utils)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/gutenberg-utils/badge)](https://www.codefactor.io/repository/github/technote-space/gutenberg-utils)
[![License: GPL v2+](https://img.shields.io/badge/License-GPL%20v2%2B-blue.svg)](http://www.gnu.org/licenses/gpl-2.0.html)
[![WordPress: >=5.0](https://img.shields.io/badge/WordPress-%3E%3D5.0-brightgreen.svg)](https://wordpress.org/)

This is a gutenberg's utils.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [How to use](#how-to-use)
  - [npm](#npm)
  - [Browser](#browser)
- [dependencies](#dependencies)
- [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to use
[https://www.npmjs.com/package/@technote-space/gutenberg-utils](https://www.npmjs.com/package/@technote-space/gutenberg-utils)

```bash
yarn add --dev @technote-space/gutenberg-utils
```

`gutenberg.js`
```js
import { Components, Helpers } from '@technote-space/gutenberg-utils';

const { Icon, DropdownButton } = Components;
const { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle } = Helpers;
const { isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes } = Helpers;
const { getEditor, isPackageAvailable, getPackageVersion, comparePackageVersion } = Helpers;
```

Compile and enqueue script.

```html
<script type="text/javascript" src="/assets/gutenberg.js"></script>
```

Download [Release version](https://github.com/technote-space/gutenberg-utils/releases/latest/download/index.js) and enqueue scripts.
```html
<script type="text/javascript" src="/assets/gutenberg-utils/index.js"></script>
<script type="text/javascript" src="/assets/gutenberg.js"></script>
```

## dependencies
- wp-block-editor
- wp-components
- wp-core-data
- wp-data
- wp-dom
- wp-editor
- wp-element
- wp-i18n
- wp-is-shallow-equal
- wp-keycodes
- wp-rich-text
- wp-url
- lodash

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
