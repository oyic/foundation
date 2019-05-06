# WordPress Starter Theme Webpack Package (Foundation Sites) :metal:
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)

This is a package specifically for WordPress Development in macOS environment.

## Requirements
1. npm or yarn (yarn preffered) :metal:

## Installation
1.  Clone `git clone https://github.com/oyic/wp-theme-starter.git [folder_theme_name]` to your root theme folder.

## Usage
* ```composer install``` to add the TGPMA plugin and PDFCrowd
* ```yarn install``` - install necessary dependencies (foundatiom,jquery etc).
* ```yarn dev``` or ```yarn watch``` - for development compilation (watch for continues update of your source code).
* ```yarn dist``` - for final build up for productions (minify/uglify/delete hash).


## Includes
1. Foundation site 6.5.3
2. FontAwesome Free
3. Slick Carousel
4. [TGPMA](https://packagist.org/packages/tgmpa/tgm-plugin-activation) via composer (yeah composer!) :punch:

### Notes:
* Use BEM on styling by ```@include el(element)``` & ```@include mod(modifer)```


