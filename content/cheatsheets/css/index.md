---
title: CSS CheatSheet
date: 2023-03-13T14:00:00.000Z
image: featured.png
description: >-
  A comprehensive CSS cheatsheet covering essential properties, selectors, and
  best practices for styling web pages.

  slug: css-cheatsheet
slug: css-cheatsheet
summary: A complete CSS cheatsheet that includes a compilation of commonly used
  CSS properties, selectors, and best practices for efficient web styling.
showSummary: true
showTableOfContents: true
showWordCount: true
showComments: true
newsletter: false
showDate: true
showDateUpdated: false
showHeadingAnchors: true
showPagination: true
showReadingTime: true
showTaxonomies: true
tags:
  - CSS
categories:
  - CheatSheet
keywords:
  - CSS
  - CheatSheet
  - Web Development
  - CSS Properties
  - CSS Selectors
series:
  - Frontend Development
series_order: "2"
author: Armoghan-ul-Mohmin
draft: false
---
## Font

Font properties allow you to control the appearance of text, including the font type, size, style, and weight.

### Font-Family

```html
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Font-Style

```html
font-style: italic;
```

### Font-Variant

```html
font-variant: small-caps;
```

### Font-Weight

```html
font-weight: bold;
```

### Font-Size

```html
font-size: 16px;
```

### Font (Shorthand)

```html
font: italic small-caps bold 16px/1.5 'Segoe UI';
```

### Responsive Font Size

```html
font-size: clamp(1rem, 2.5vw, 2rem);
```

## Text

Text properties allow you to control the formatting and alignment of text content, including spacing and decoration.

### Text-Align

```html
text-align: center;
```

### Letter-Spacing

```html
letter-spacing: 0.1em;
```

### Text-Decoration

```html
text-decoration: underline;
```

### Word-Spacing

```html
word-spacing: 0.25em;
```

### Text-Transform

```html
text-transform: uppercase;
```

### Text-Indent

```html
text-indent: 2em;
```

### Line-Height

```html
line-height: 1.6;
```

### White-Space

```html
white-space: nowrap;
```

### Text-Shadow

```html
text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
```

## Background

Background properties allow you to define the background color, image, position, size, and other related properties of an element.

### Background-Color

```html
background-color: #ffcc00;
```

### Background-Image

```html
background-image: url('path/to/image.jpg');
```

### Background-Position

```html
background-position: center center;
```

### Background-Size

```html
background-size: cover;
```

### Background-Repeat

```html
background-repeat: no-repeat;
```

### Background-Attachment

```html
background-attachment: fixed;
```

### Background (Shorthand)

```html
background: #ffcc00 url('path/to/image.jpg') no-repeat fixed center;
```

### Gradient Background

```html
background: linear-gradient(to right, #ff7e5f, #feb47b);
```

## Border

Border properties allow you to define the border style, width, and color around elements.

### Border-Width

```html
border-width: 2px;
```

### Border-Style

```html
border-style: solid;
```

### Border-Color

```html
border-color: #333;
```

### Border-Radius

```html
border-radius: 10px;
```

### Border (Shorthand)

```html
border: 2px solid #333;
```

### Box-Shadow

```html
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
```

## Box Model

The CSS box model consists of the margins, borders, padding, and the content area of an element.

### Margin

```html
margin: 20px 10px 15px 5px;
```

### Padding

```html
padding: 10px 20px;
```

### Border-Box

```html
box-sizing: border-box;
```

### Display

```html
display: block;
```

### Height

```html
height: 100vh;
```

### Width

```html
width: 100%;
```

### Overflow

```html
overflow: hidden;
```

### Visibility

```html
visibility: hidden;
```

### Float

```html
float: left;
```

### Clear

```html
clear: both;
```

## Colors

Color properties allow you to define the color of text, borders, backgrounds, and more.

### Color

```html
color: #333;
```

### Opacity

```html
opacity: 0.8;
```

### RGBA Colors

```html
background-color: rgba(255, 99, 71, 0.5);
```

### HSLA Colors

```html
color: hsla(240, 100%, 50%, 0.7);
```

## Positioning

Positioning properties allow you to control the placement of elements on the page.

### Position

```html
position: absolute;
```

### Top, Right, Bottom, Left

```html
top: 10px; right: 20px;
```

### Z-Index

```html
z-index: 100;
```

### Sticky Positioning

```html
position: sticky; top: 0;
```

### Centering Elements

```html
position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
```

## Flexbox

Flexbox is a layout model that allows you to design complex layouts using alignment, distribution, and spacing of elements.

### Display Flex

```html
display: flex;
```

### Flex-Direction

```html
flex-direction: row | column;
```

### Justify-Content

```html
justify-content: space-between;
```

### Align-Items

```html
align-items: center;
```

### Flex-Wrap

```html
flex-wrap: wrap;
```

### Align-Self

```html
align-self: flex-end;
```

### Order

```html
order: 2;
```

## Grid

CSS Grid is a powerful layout system for creating two-dimensional grid layouts with rows and columns.

### Display Grid

```html
display: grid;
```

### Grid-Template-Columns

```html
grid-template-columns: repeat(3, 1fr);
```

### Grid-Template-Rows

```html
grid-template-rows: 100px auto;
```

### Gap

```html
gap: 10px;
```

### Grid-Auto-Flow

```html
grid-auto-flow: dense;
```

### Align-Items

```html
align-items: start;
```

### Justify-Items

```html
justify-items: center;
```

### Grid-Area

```html
grid-area: header;
```

### Grid-Column

```html
grid-column: 1 / span 2;
```

### Grid-Row

```html
grid-row: 1 / 3;
```

## Animation

Animation properties allow you to add animation effects to elements, making your design more dynamic.

### Keyframes

```html
@keyframes example { 0% { background-color: red; } 100% { background-color:
yellow; } }
```

### Animation

```html
animation: example 5s infinite;
```

### Animation-Delay

```html
animation-delay: 2s;
```

### Animation-Duration

```html
animation-duration: 3s;
```

### Animation-Iteration-Count

```html
animation-iteration-count: infinite;
```

### Animation-Timing-Function

```html
animation-timing-function: ease-in-out;
```

## Media Queries

Media queries allow you to apply styles based on the screen size, device type, or other characteristics.

### Basic Media Query

```html
@media screen and (max-width: 600px) { body { background-color: lightblue; } }
```

### Orientation Media Query

```html
@media (orientation: landscape) { body { background-color: lightgreen; } }
```

### Resolution Media Query

```html
@media (min-resolution: 2dppx) { body { background-color: lightcoral; } }
```

### Print Media Query

```html
@media print { body { font-size: 12pt; } }
```

## Miscellaneous

This section covers various other CSS properties and techniques that don't fit into the other categories.

### Cursor

```html
cursor: pointer;
```

### Transition

```html
transition: all 0.3s ease;
```

### Transform

```html
transform: scale(0.75, 1.5);
```

### Transform-Origin

```html
transform-origin: top;
```

### Clip-Path

```html
clip-path: circle(50% at 50% 50%);
```

### Filter

```html
filter: blur(5px);
```

### Object-Fit

```html
object-fit: cover;
```

### Aspect-Ratio

```html
aspect-ratio: 16 / 9;
```
