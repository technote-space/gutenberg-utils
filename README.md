# Gutenberg Utils

[![npm version](https://badge.fury.io/js/%40technote-space%2Fgutenberg-utils.svg)](https://badge.fury.io/js/%40technote-space%2Fgutenberg-utils)
[![CI Status](https://github.com/technote-space/gutenberg-utils/workflows/CI/badge.svg)](https://github.com/technote-space/gutenberg-utils/actions)
[![codecov](https://codecov.io/gh/technote-space/gutenberg-utils/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/gutenberg-utils)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/gutenberg-utils/badge)](https://www.codefactor.io/repository/github/technote-space/gutenberg-utils)
[![License: GPL v2+](https://img.shields.io/badge/License-GPL%20v2%2B-blue.svg)](http://www.gnu.org/licenses/gpl-2.0.html)
[![WordPress: >=5.4](https://img.shields.io/badge/WordPress-%3E%3D5.4-brightgreen.svg)](https://wordpress.org/)

This is a gutenberg's utils.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Usage](#usage)
- [dependencies](#dependencies)
- [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage
1. Install
   ```bash
   yarn add @technote-space/gutenberg-utils
   ```
1. Use  
   e.g. `assets/gutenberg.js`
   ```js
   import { Components, Helpers } from '@technote-space/gutenberg-utils';
   
   const { Icon, DropdownButton } = Components;
   const { getActiveStyle, addActiveAttributes, setActiveStyle, onChangeStyle } = Helpers;
   const { isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes } = Helpers;
   ```
1. Compile and enqueue script

   ```html
   <script type="text/javascript" src="/assets/gutenberg.js"></script>
   ```

## dependencies
- wp-block-editor
- wp-components
- wp-data
- wp-element
- wp-i18n
- wp-rich-text
- wp-url
- lodash

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
