# WordPress Gutenberg Example Blocks

### The Blocks

  1. [Basic](#01---basic)
  2. [Text Control](#02---text-control)
  3. [ACF](#03---acf)
  4. [Preview Mode](#04---preview-mode)
  5. [IFrame Preview](#05---iframe-preview)
  6. [Block Template](#06---block-template)
  7. [ACF IFrame Preview](#07---acf-iframe-preview)

### The Blocks Plugin

[The blocks plugin](/blocks-plugin/) handles the basics for:

  * Adding a custom block category
  * Enqueuing the necessary scripts and styles
  * Registering the ACF block

I've made this plugin so the examples are easy to try out. For theme development similar code can be used in the standard WordPress [theme functions](https://developer.wordpress.org/themes/basics/theme-functions/).

See ["Notes on Webpack"](#notes-on-webpack) below for more information.

## 01 - Basic

![A basic Gutenberg block example](/.github/gutenberg-01-basic.png)

The first example is the most basic of Gutenberg blocks created with React. The editor and front-end render the same uneditable content. The block has no functionality.

## 02 - Text Control

![A Gutenberg block example with a Text Control](/.github/gutenberg-02-text-control.png)

The second example takes the basic block and makes the content editable. The Gutenberg editor renders a [text control](https://github.com/WordPress/gutenberg/tree/master/packages/components/src/text-control) that updates the related [block attribute](https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/). The front-end renders the block using the `text` attribute value.

## 03 - ACF

![A Gutenberg block example registered with the ACF plugin](/.github/gutenberg-03-acf.gif)

The third example takes a detour away from React. It uses the [Advanced Custom Fields (ACF) plugin](https://www.advancedcustomfields.com/) to register the block with PHP.

See ["Notes on ACF"](#notes-on-acf) below for more information.

## 04 - Preview Mode

![A Gutenberg block example with an edit/preview toggle](/.github/gutenberg-04-preview-mode.gif)

The fourth example — inspired by ACF — moves back to React and adds an edit/preview toggle to the text control block. This allows the front-end block render to be visible in the Gutenberg editor.

## 05 - IFrame Preview

🧪 **Experimental!** ✨

The fifth example renders the block preview inside an iframe in the Gutenberg editor. CSS and JavaScript are effectively scoped to avoid conflicts with the unknown WordPress admin assets. The iframe automatically resizes based on its content height.

## 06 - Block Template

🧪 **Experimental!** ✨

The sixth example implements a [block template](https://developer.wordpress.org/block-editor/developers/block-api/block-templates/) to combine a React block and an ACF block. The [`render_block` filter](https://developer.wordpress.org/reference/functions/render_block/) is hooked into to provide a single PHP template using attributes from both blocks.

[See my blog article](https://dbushell.com/2020/04/24/wordpress-gutenberg-react-and-advanced-custom-fields/) for the rational behind this method.

## 07 - ACF IFrame Preview

The seventh example takes the ACF block from **example three** and renders it inside an iframe like **example five**.

* * *

## Notes on Webpack

This project includes a [Webpack](https://webpack.js.org/) config file to compile the React source code from `/blocks/`.

This can be run with:

```
npm install
npm run build
```

See `package.json` for full commands.

Both development and production modes are generated to:

```
/blocks-plugin/my-blocks.js
/blocks-plugin/my-blocks.min.js
```

The WordPress plugin will automatically switch to loading the dev mode unminified version if `WP_DEBUG` is defined and `true`.

* * *

## Notes on ACF

The advantages of ACF blocks are:

  * Built in edit/preview toggle in the Gutenberg editor
  * Render blocks with PHP templates (easy access to WordPress functions)
  * ACF admin UI to configure fields (screenshot below)

![A Gutenberg block example registered with the ACF plugin](/.github/gutenberg-03-acf-configuration.png)

The disadvantages of ACF blocks are:

  * Limited control over field layout in the editor
  * No access to the lower level React components and APIs

Possible pros and cons depending on requirements:

  * HTML is not saved to the post content (only JSON encoded block data)
  * Block preview requires a slower server-side render
  * The [ACF plugin](https://www.advancedcustomfields.com/) dependency must be activated

* * *

## Docker WordPress Scripts

Need a quick way to spin up WordPress for local development?

I have another example starter project:

[![Docker WordPress Scripts](/.github/dws-logo.svg)](https://github.com/dbushell/docker-wordpress-scripts)

[Docker WordPress Scripts](https://github.com/dbushell/docker-wordpress-scripts) is a small set of scripts to manage WordPress containers in Docker. It uses an [nginx-proxy](https://github.com/jwilder/nginx-proxy/) for `*.localhost` domains to avoid manual port assignment.

* * *

[MIT License](/LICENSE) | Copyright © 2020 [David Bushell](https://dbushell.com)
