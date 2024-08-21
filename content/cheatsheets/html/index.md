---
title: HTML CheatSheet
date: 2023-03-11T14:00:00.000Z
image: featured.jpg
description: A comprehensive HTML cheatsheet covering essential tags,
  attributes, and best practices for web development.
slug: html-cheatsheet
summary: An essential HTML cheatsheet that includes a compilation of commonly
  used HTML tags, attributes, and best practices for efficient web development.
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
  - HTML
categories:
  - CheatSheet
keywords:
  - HTML
  - CheatSheet
  - Web Development
  - HTML Tags
  - HTML Attributes
series:
  - Frontend Development
series_order: "1"
author: Armoghan-ul-Mohmin
draft: false
---
Boilerplate
-----------

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!-- Body -->
    </body>
    </html>

Headings
--------

Headings in HTML are used to define the importance and hierarchy of content.

### h1 Tag

    <h1>Heading 1</h1>

Primary heading, usually used for the main title of the page.

### h2 Tag

    <h2>Heading 2</h2>

Secondary heading, used for sub-sections under the main heading.

### h3 Tag

    <h3>Heading 3</h3>

Tertiary heading, used for further divisions within sub-sections.

### h4 Tag

    <h4>Heading 4</h4>

Quaternary heading, used for minor sub-sections.

### h5 Tag

    <h5>Heading 5</h5>

Quinary heading, used for additional details.

### h6 Tag

    <h6>Heading 6</h6>

Senary heading, the smallest heading, used for the least important sections.

Container Tags
--------------

Container tags are used to group other elements and apply styles or layout.

### div Tag

    <div>This is a div block</div>

Creates a block-level container. Commonly used for layout purposes.

### span Tag

    <span>This is a span block</span>

Creates an inline container. Often used for styling a part of text or other inline elements.

### p Tag

    <p>This is a paragraph</p>

Defines a paragraph. Automatically adds space before and after the content.

### pre Tag

    <pre>Hello World</pre>

Displays pre-formatted text. Preserves whitespace and line breaks.

### code Tag

    <code>
    import python
    </code>

Displays a single line of code or text in a monospaced font.

Text Formatting
---------------

Text formatting tags are used to enhance the appearance of text.

### b Tag

    <b>I'm bold text</b>

Makes text bold. Use `<strong>` for semantically important bold text.

### strong Tag

    <strong>I'm important text</strong>

Represents important text, usually displayed in bold.

### i Tag

    <i>I'm italic text</i>

Makes text italic. Use `<em>` for emphasizing text.

### em Tag

    <em>Emphasized text</em>

Represents text with emphasis, typically displayed in italics.

### sub Tag

    <sub>Subscript</sub>

Displays text as subscript.

### sup Tag

    <sup>Superscript</sup>

Displays text as superscript.

Lists
-----

Lists are used to group items in an ordered or unordered fashion.

### ol Tag

Ordered List:

    <ol>
        <li>Data 1</li>
        <li>Data 2</li>
        <li>Data 3</li>
    </ol>

Creates a numbered list. Each list item is defined using `<li>`.

### ul Tag

Unordered List:

    <ul>
        <li>Your Data</li>
        <li>Your Data</li>
    </ul>

Creates a bulleted list. Each list item is defined using `<li>`.

Media
-----

Media elements embed images, audio, and video in the webpage.

### audio Tag

    <audio controls>
        <source src="demo.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>

Embeds audio content. The `controls` attribute adds playback controls.

### img Tag

    <img src="Source_of_image" alt="Alternate text">

Embeds an image. The `alt` attribute provides alternative text if the image cannot be displayed.

### video Tag

    <video width="480" height="320" controls>
        <source src="demo_move.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

Embeds video content. The `controls` attribute adds playback controls. `width` and `height` attributes set the dimensions of the video.

Table
-----

Tables are used to display data in rows and columns.

### Table Structure

    <table>
        <caption>Demo Table</caption>
        <thead>
            <tr>
                <th>Column1</th>
                <th colspan="2">Column2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data1</td>
                <td>Data2</td>
                <td>Data2</td>
            </tr>
            <tr>
                <td>Data1</td>
                <td>Data2</td>
                <td>Data2</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td> </td>
                <td>Data</td>
                <td>Data</td>
            </tr>
        </tfoot>
    </table>

Defines a table with a caption, header, body, and footer sections. Uses `<tr>` for rows, `<th>` for header cells, and `<td>` for standard cells.

Links
-----

Links create navigable paths to other resources or pages.

### a Tag

    <a href="https://www.codewithharry.com/">Visit CodeWithHarry.com!</a>

Defines a hyperlink. The `href` attribute specifies the URL. The `target="_blank"` attribute opens the link in a new tab.

Form
----

Forms collect user input and submit data to a server.

### Sample Form

    <form action="/action.php" method="post">
        Name: <input name="name" type="text" /> <br />
        Age: <input max="90" min="1" name="age" step="1" type="number" value="18" /> <br />
        <select name="gender">
            <option selected="selected" value="male">Male</option>
            <option value="female">Female</option>
        </select><br />
        <input checked="checked" name="newsletter" type="radio" value="daily" /> Daily 
        <input name="newsletter" type="radio" value="weekly" /> Weekly<br />
        <textarea cols="20" name="comments" rows="5">Comment</textarea><br />
        <label><input name="terms" type="checkbox" value="tandc" />Accept terms</label> <br />
        <input type="submit" value="Submit" />
    </form>

Defines a form with various input types, including text fields, number inputs, radio buttons, checkboxes, dropdowns, and textareas. The `action` attribute specifies the URL to send the form data to, and the `method` attribute specifies the HTTP method.

Characters & Symbols
--------------------

Some symbols are not directly present on the keyboard, but there are ways to use them in HTML documents.

### Copyright Symbol (©)

    &copy;

### Less than (<)

    &lt;

### Greater than (>)

    &gt;

### Ampersand (&)

    &amp;

### Dollar ($)

    &dollar;

### Trademark (™)

    &trade;

### Registered Trademark (®)

    &reg;

Semantic Elements
-----------------

Semantic elements provide meaning to the structure of a document and improve accessibility and SEO.

### section Tag

    <section>This is a section</section>

Defines a section in the document.

### article Tag

    <article>Enter your data here</article>

Represents self-contained content that could be distributed independently.

### aside Tag

    <aside>Your data</aside>

Defines content that is tangentially related to the content around it, often used for sidebars.

### footer Tag

    <footer>This is the footer</footer>

Defines the footer for a section or page, typically containing metadata or copyright information.

### header Tag

    <header>This is the header</header>

Defines the introductory content or navigational links for a section or page.

### nav Tag

    <nav>Navigation links here</nav>

Defines a section with navigation links.

### main Tag

    <main>Main content here</main>

Defines the main content of the document, excluding headers, footers, and sidebars.

Forms and Input Attributes
--------------------------

Additional attributes for form elements to enhance functionality.

### input Tag Attributes

#### Placeholder

    <input type="text" placeholder="Enter your name">

Displays a placeholder text inside the input field.

#### Disabled

    <input type="text" disabled>

Disables the input field, preventing user interaction.

#### Readonly

    <input type="text" readonly value="Read-only text">

Makes the input field read-only, preventing user edits.

#### Required

    <input type="text" required>

Specifies that the input field must be filled out before submitting the form.

#### Pattern

    <input type="text" pattern="[A-Za-z]+" title="Only letters allowed">

Specifies a regular expression pattern for input validation.

HTML Entities
-------------

HTML entities represent special characters and symbols.

### Less than Symbol (<)

    &lt;

### Greater than Symbol (>)

    &gt;

### Ampersand Symbol (&)

    &amp;

### Double Quote (")

    &quot;

### Single Quote (')

    &apos;

Meta Tags
---------

Meta tags provide metadata about the HTML document, such as description, keywords, and author.

### Description

    <meta name="description" content="This is a description">

Specifies a description of the document, often used by search engines.

### Keywords

    <meta name="keywords" content="HTML, CSS, JavaScript">

Defines keywords relevant to the document content for search engines.

### Author

    <meta name="author" content="John Doe">

Specifies the author of the document.

### Viewport

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

Controls the viewport's size and scaling on different devices.
