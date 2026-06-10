---
type: guide
version: 0.1.1 2026-04-07
author: "matheraptor"
tags: ["markdown", "guide"]
---

# Markdown Syntax {#top}

# Markdown Guide

## Everything you need to learn Markdown

Markdown makes writing on the web fast and easy. _The Markdown Guide_ teaches you how to use it.

| [Learn the ropes.](https://www.markdownguide.org/basic-syntax/)                                                                                                                 | [Dive into the syntax](https://www.markdownguide.org/extended-syntax/)                                                                                                            | [Take it up a notch.](https://www.markdownguide.org/extended-syntax/)                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Start using Markdown right now by following along with the [Getting Started](https://www.markdownguide.org/getting-started/) guide. It's designed for everyone, even novices._ | _Whether you're new to Markdown or a seasoned pro, you'll find the answers to your formatting questions on the [basic syntax page](https://www.markdownguide.org/basic-syntax/)._ | _Make your Markdown documents awesome by using [extended syntax](https://www.markdownguide.org/extended-syntax/) to create tables, fenced code blocks, automatic links, and more._ |

Stay in the loop.
Sign up now to get priority notifications about The Markdown Guide.

[Sign up now](https://pika.forklabs.com/subscription/form)

## table of contents

- [Getting Started](#getting-started)
- [What is Markdown?](#what-is-markdown)
- [Why use Markdown?](#why-use-markdown)
- [Markdown Flavors](#markdown-flavors)
- [Additional Resources](#additional-resources)
- [Cheat Sheet](#cheat-sheet)
- [Basic Syntax](#basic-syntax)
- [Headings](#headings)
- [Alternate Syntax](#alternate-syntax)
- [Blockquotes](#blockquotes)
- [Code](#code)
- [Emphasis](#emphasis)
- [Lists](#lists)
- [Links](#links)
- [Images](#images)
- [Horizontal Rules](#horizontal-rules)
- [Extended Syntax](#extended-syntax)
- [Tables](#tables)
- [Fenced Code Blocks](#fenced-code-blocks)
- [Automatic Links](#automatic-links)
- [Footnotes](#footnotes)
- [Task Lists](#task-lists)
- [HTML](#html)
- [Escaping](#escaping)

[Back to top ⤴️](#top)

---

## Getting Started

### What is Markdown?

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by [John Gruber](https://daringfireball.net/projects/markdown/) in 2004, Markdown is now one of the world’s most popular markup languages.

Using Markdown is different than using a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.

For example, to denote a heading, you add a number sign before it (e.g., `# Heading One`). Or to make a phrase bold, you add two asterisks before and after it (e.g., `**this text is bold**`). It may take a while to get used to seeing Markdown syntax in your text, especially if you’re accustomed to WYSIWYG applications. The screenshot below shows a Markdown file displayed in the [Visual Studio Code text editor](https://www.markdownguide.org/tools/vscode/).

![Markdown file in the Visual Studio Code text editor](https://www.markdownguide.org/assets/images/generated/assets/images/vscode-1080.png)

You can add Markdown formatting elements to a plaintext file using a text editor application. Or you can use one of the many Markdown applications for macOS, Windows, Linux, iOS, and Android operating systems. There are also several web-based applications specifically designed for writing in Markdown.

Depending on the application you use, you may not be able to preview the formatted document in real time. But that’s okay. [According to Gruber](https://daringfireball.net/projects/markdown/), Markdown syntax is designed to be readable and unobtrusive, so the text in Markdown files can be read even if it isn’t rendered.

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.

## Why Use Markdown?

You might be wondering why people use Markdown instead of a WYSIWYG editor. Why write with Markdown when you can press buttons in an interface to format your text? As it turns out, there are several reasons why people use Markdown instead of WYSIWYG editors.

- Markdown can be used for everything. People use it to create [websites](#websites), [documents](#documents), [notes](#notes), [books](#books), [presentations](#presentations), [email messages](#email), and [technical documentation](#documentation).
- Markdown is portable. Files containing Markdown-formatted text can be opened using virtually any application. If you decide you don’t like the Markdown application you’re currently using, you can import your Markdown files into another Markdown application. That’s in stark contrast to word processing applications like Microsoft Word that lock your content into a proprietary file format.
- Markdown is platform independent. You can create Markdown-formatted text on any device running any operating system.
- Markdown is future proof. Even if the application you’re using stops working at some point in the future, you’ll still be able to read your Markdown-formatted text using a text editing application. This is an important consideration when it comes to books, university theses, and other milestone documents that need to be preserved indefinitely.
- Markdown is everywhere. Websites like [Reddit](https://www.markdownguide.org/tools/reddit/) and GitHub support Markdown, and lots of desktop and web-based applications support it.

## Kicking the Tires

The best way to get started with Markdown is to use it. That’s easier than ever before thanks to a variety of free tools.

You don’t even need to download anything. There are several online Markdown editors that you can use to try writing in Markdown. [JotBird](https://www.jotbird.com/) (which I built) is one of the best online Markdown editors. Just open the site and start typing in the left pane. A preview of the rendered document appears in the right pane.

![JotBird Markdown editor](https://www.markdownguide.org/assets/images/generated/assets/images/jotbird-1080.png)

You’ll probably want to keep the JotBird website open as you read through this guide. That way you can try the syntax as you learn about it. After you’ve become familiar with Markdown, you may want to use a Markdown application that can be installed on your desktop computer or mobile device.

## How Does it Work?

JotBird makes writing in Markdown easy because it hides the stuff happening behind the scenes, but it’s worth exploring how the process works in general.

When you write in Markdown, the text is stored in a plaintext file that has an `.md` or `.markdown` extension. But then what? How is your Markdown-formatted file converted into HTML or a print-ready document?

The short answer is that you need a _Markdown application_ capable of processing the Markdown file. There are lots of applications available — everything from simple scripts to desktop applications that look like Microsoft Word. Despite their visual differences, all of the applications do the same thing. Like JotBird, they all convert Markdown-formatted text to HTML so it can be displayed in web browsers.

Markdown applications use something called a _Markdown processor_ (also commonly referred to as a “parser” or an “implementation”) to take the Markdown-formatted text and output it to HTML format. At that point, your document can be viewed in a web browser or combined with a style sheet and printed. You can see a visual representation of this process below.

**Note:** The Markdown application and processor are two separate components. For the sake of brevity, I've combined them into one element ("Markdown app") in the figure below.

![The Markdown Process](https://www.markdownguide.org/assets/images/generated/assets/images/markdown-flowchart-1080.png)

To summarize, this is a four-part process:

1. Create a Markdown file using a text editor or a dedicated Markdown application. The file should have an `.md` or `.markdown` extension.
2. Open the Markdown file in a Markdown application.
3. Use the Markdown application to convert the Markdown file to an HTML document.
4. View the HTML file in a web browser or use the Markdown application to convert it to another file format, like PDF.

From your perspective, the process will vary somewhat depending on the application you use. For example, JotBird essentially combines steps 1-3 into a single, seamless interface — all you have to do is type in the left pane and the rendered output magically appears in the right pane. But if you use other tools, like a text editor with a static website generator, you’ll find that the process is much more visible.

## What’s Markdown Good For?

Markdown is a fast and easy way to take notes, create content for a website, and produce print-ready documents.

It doesn’t take long to learn the Markdown syntax, and once you know how to use it, you can write using Markdown just about everywhere. Most people use Markdown to create content for the web, but Markdown is good for formatting everything from email messages to grocery lists.

Here are some examples of what you can do with Markdown.

### Websites

Markdown was designed for the web, so it should come as no surprise that there are plenty of applications specifically designed for creating website content.

If you’re looking for the simplest possible way to create a website with Markdown files, check out [blot.im](https://blot.im/). After you sign up for Blot, it creates a Dropbox folder on your computer. Just drag and drop your Markdown files into the folder and — poof! — they’re on your website. It couldn’t be easier.

If you’re familiar with HTML, CSS, and version control, check out [Jekyll](https://www.markdownguide.org/tools/jekyll/), a popular static site generator that takes Markdown files and builds an HTML website. One advantage to this approach is that [GitHub Pages](https://www.markdownguide.org/tools/github-pages/) provides free hosting for Jekyll-generated websites. If Jekyll isn’t your cup of tea, just pick one of the [many other static site generators available](https://jamstack.org/generators/).

**Note:** Shameless plug! If you want to learn how to build static websites from scratch, check out [_The Static Site Guide_](https://www.staticguide.org/), another book I wrote.

If you’d like to use a content management system (CMS) to power your website, take a look at [Ghost](https://www.markdownguide.org/tools/ghost/). It’s a free and open-source blogging platform with a nice Markdown editor. If you’re a WordPress user, you’ll be happy to know there’s [Markdown support](https://wordpress.com/support/wordpress-editor/blocks/markdown-block/) for websites hosted on WordPress.com. Self-hosted WordPress sites can use the [Jetpack plugin](https://jetpack.com/support/jetpack-blocks/markdown/).

### Documents

Markdown doesn’t have all the bells and whistles of word processors like Microsoft Word, but it’s good enough for creating basic documents like assignments and letters. You can use a Markdown document authoring application to create and export Markdown-formatted documents to PDF or HTML file format. The PDF part is key, because once you have a PDF document, you can do anything with it — print it, email it, or upload it to a website.

Here are some Markdown document authoring applications I recommend:

- **Mac:** [MacDown](https://www.markdownguide.org/tools/macdown/), [iA Writer](https://www.markdownguide.org/tools/ia-writer/), or [Marked 2](https://www.markdownguide.org/tools/marked-2/)
- **iOS / Android:** [iA Writer](https://www.markdownguide.org/tools/ia-writer/)
- **Windows:** [ghostwriter](https://kde.github.io/ghostwriter/) or [Markdown Monster](https://markdownmonster.west-wind.com/)
- **Linux:** [ReText](https://github.com/retext-project/retext) or [ghostwriter](https://kde.github.io/ghostwriter/)
- **Web:** [JotBird](https://www.markdownguide.org/tools/jotbird/), [Dillinger](https://www.markdownguide.org/tools/dillinger/), or [StackEdit](https://www.markdownguide.org/tools/stackedit/)

**Tip:** [iA Writer](https://ia.net/writer/templates/) provides templates for previewing, printing, and exporting Markdown-formatted documents. For example, the "Academic – MLA Style" template indents paragraphs and adds double sentence spacing.

### Notes

In nearly every way, Markdown is the ideal syntax for taking notes. Sadly, [Evernote](https://evernote.com/) and [OneNote](https://www.onenote.com/), two of the most popular note applications, don’t currently support Markdown. The good news is that several other note applications _do_ support Markdown:

- [Obsidian](https://www.markdownguide.org/tools/obsidian/) is a popular Markdown note-taking application loaded with features.
- [Simplenote](https://www.markdownguide.org/tools/simplenote/) is a free, barebones note-taking application available for every platform.
- [Notable](https://www.markdownguide.org/tools/notable/) is a note-taking application that runs on a variety of platforms.
- [Bear](https://www.markdownguide.org/tools/bear/) is an Evernote-like application available for Mac and iOS devices. It doesn’t exclusively use Markdown by default, but you can enable Markdown compatibility mode.
- [Joplin](https://www.markdownguide.org/tools/joplin/) is a note taking application that respects your privacy. It’s available for every platform.

If you can’t part with Evernote, check out [Marxico](https://marxi.co/), a subscription-based Markdown editor for Evernote, or use [Markdown Here](https://www.markdownguide.org/tools/markdown-here/) with the Evernote website.

### Books

Looking to self-publish a novel? Try [Leanpub](https://leanpub.com/), a service that takes your Markdown-formatted files and turns them into an electronic book. Leanpub outputs your book in PDF, EPUB, and MOBI file format. If you’d like to create paperback copies of your book, you can upload the PDF file to another service such as [Kindle Direct Publishing](https://kdp.amazon.com/). To learn more about writing and self-publishing a book using Markdown, read [this blog post](https://medium.com/techspiration-ideas-making-it-happen/how-i-wrote-and-published-my-novel-using-only-open-source-tools-5cdfbd7c00ca).

### Presentations

Believe it or not, you can generate presentations from Markdown-formatted files. Creating presentations in Markdown takes a little getting used to, but once you get the hang of it, it’s a lot faster and easier than using an application like PowerPoint or Keynote. [Remark](https://remarkjs.com/) ([GitHub project](https://github.com/gnab/remark)) is a popular browser-based Markdown slideshow tool, as are [Cleaver](https://jdan.github.io/cleaver/) ([GitHub project](https://github.com/jdan/cleaver)) and [Marp](https://marp.app/) ([GitHub project](https://github.com/marp-team/marp)). If you use a Mac and would prefer to use an application, check out [Deckset](https://www.decksetapp.com/) or [Hyperdeck](https://hyperdeck.io/).

### Email

If you send a lot of email and you’re tired of the formatting controls available on most email provider websites, you’ll be happy to learn there’s an easy way to write email messages using Markdown. [Markdown Here](https://www.markdownguide.org/tools/markdown-here/) is a free and open-source browser extension that converts Markdown-formatted text into HTML that’s ready to send.

### Collaboration

Collaboration and team messaging applications are a popular way of communicating with coworkers and friends at work and home. These applications don’t utilize all of Markdown’s features, but the features they do provide are fairly useful. For example, the ability to bold and italicize text without using the WYSIWYG interface is pretty handy. [Slack](https://www.markdownguide.org/tools/slack/), [Discord](https://www.markdownguide.org/tools/discord/), [Wiki.js](https://www.markdownguide.org/tools/wiki-js/), and [Mattermost](https://www.markdownguide.org/tools/mattermost/) are all good collaboration applications.

### Documentation

Markdown is a natural fit for technical documentation. Companies like GitHub are increasingly switching to Markdown for their documentation — check out their [blog post](https://github.com/blog/1939-how-github-uses-github-to-document-github) about how they migrated their Markdown-formatted documentation to [Jekyll](https://www.markdownguide.org/tools/jekyll/). If you write documentation for a product or service, take a look at these handy tools:

- [Read the Docs](https://readthedocs.org/) can generate a documentation website from your open source Markdown files. Just connect your GitHub repository to their service and push — Read the Docs does the rest. They also have a [service for commercial entities](https://readthedocs.com/).
- [MkDocs](https://www.markdownguide.org/tools/mkdocs/) is a fast and simple static site generator that’s geared towards building project documentation. Documentation source files are written in Markdown and configured with a single YAML configuration file. MkDocs has several [built in themes](https://www.mkdocs.org/user-guide/styling-your-docs/), including a port of the [Read the Docs](https://readthedocs.org/) documentation theme for use with MkDocs. One of the newest themes is [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).
- [Docusaurus](https://www.markdownguide.org/tools/docusaurus/) is a static site generator designed exclusively for creating documentation websites. It supports translations, search, and versioning.
- [VuePress](https://vuepress.vuejs.org/) is a static site generator powered by [Vue](https://vuejs.org/) and optimized for writing technical documentation.
- [Jekyll](https://www.markdownguide.org/tools/jekyll/) was mentioned earlier in the section on websites, but it’s also a good option for generating a documentation website from Markdown files. If you go this route, be sure to check out the [Jekyll documentation theme](https://idratherbewriting.com/documentation-theme-jekyll/).

## Flavors of Markdown

One of the most confusing aspects of using Markdown is that practically every Markdown application implements a slightly different version of Markdown. These variants of Markdown are commonly referred to as _flavors_. It’s your job to master whatever flavor of Markdown your application has implemented.

To wrap your head around the concept of Markdown flavors, it might help to think of them as language dialects. People in New York City speak English just like the people in London, but there are substantial differences between the dialects used in both cities. The same is true for people using different Markdown applications. Using [JotBird](https://www.jotbird.com/) to write with Markdown is a vastly different experience than using [Ulysses](https://www.markdownguide.org/tools/ulysses/).

Practically speaking, this means you never know exactly what a company means when they say they support “Markdown.” Are they talking about only the [basic syntax elements](https://www.markdownguide.org/basic-syntax/), or all of the basic and [extended syntax elements](https://www.markdownguide.org/extended-syntax/) combined, or some arbitrary combination of syntax elements? You won’t know until you read the documentation or start using the application.

If you’re just starting out, the best advice I can give you is to pick a Markdown application with good Markdown support. That’ll go a long way towards maintaining the portability of your Markdown files. You might want to store and use your Markdown files in other applications, and to do that you need to start with an application that provides good support. You can use the [tool directory](https://www.markdownguide.org/tools/) to find an application that fits the bill.

## Additional Resources

There are lots of resources you can use to learn Markdown. Here are some other introductory resources:

- [John Gruber’s Markdown documentation](https://daringfireball.net/projects/markdown/). The original guide written by the creator of Markdown.
- [Markdown Tutorial](https://www.markdowntutorial.com/). An open source website that allows you to try Markdown in your web browser.
- [Awesome Markdown](https://github.com/mundimark/awesome-markdown). A list of Markdown tools and learning resources.
- [Typesetting Markdown](https://dave.autonoma.ca/blog/2019/05/22/typesetting-markdown-part-1). A multi-part series that describes an ecosystem for typesetting Markdown documents using [pandoc](https://pandoc.org/) and [ConTeXt](https://www.contextgarden.net/).

[![Markdown Guide book cover](https://www.markdownguide.org/assets/images/generated/assets/images/book-cover-1080.jpg)](https://www.markdownguide.org/book/)

### Take your Markdown skills to the next level.

Learn Markdown in 60 pages. Designed for both novices and experts, _The Markdown Guide_ book is a comprehensive reference that has everything you need to get started and master Markdown syntax.

[Get the Book](https://www.markdownguide.org/book/)

Don't stop now! 🚀 Star the [GitHub repository](https://github.com/mattcone/markdown-guide) and then enter your email address below to receive new Markdown tutorials via email. No spam!

[Back to top ⤴️](#top)

---

### Overview

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for basic syntax and extended syntax.

### Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

| Element         | Markdown Syntax                                        |
| --------------- | ------------------------------------------------------ |
| Heading         | \# H1<br>\#\# H2<br>\#\#\# H3                          |
| Bold            | \*\*bold text\*\*                                      |
| Italic          | \*italicized text\*                                    |
| Blockquote      | \> blockquote                                          |
| Ordered List    | `1. First item`<br>`2. Second item`<br>`3. Third item` |
| Unordered List  | `- First item`<br>`- Second item`<br>`- Third item`    |
| Code            | <code>\`code\`</code>                                  |
| Horizontal Rule | \---                                                   |
| Link            | \[title](https://www.example.com)                      |
| Image           | \![alt text]\(image.jpg)                               |

### Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

| Element                                                                  | Markdown Syntax                                                                                                 |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Table                                                                    | <pre>\| Syntax \| Description \|<br>\| --- \| --- \|<br>\| Header \| Title \|<br>\| Paragraph \| Text \| </pre> |
| Fenced Code Block                                                        | <pre>\```<br> { <br>"firstName": "John",<br>"lastName": "Smith",<br>"age": 25<br>}<br>\```</pre>                |
| Footnote                                                                 | Here's a sentence with a footnote. [^1] <br> [^1]: This is the footnote.                                        |
| Heading ID                                                               | `### My Great Heading {#custom-id}`                                                                             |
| Definition List                                                          | `term` <br> `: definition`                                                                                      |
| Strikethrough                                                            | <pre>\~~The world is flat.~~</pre>                                                                              |
| Task List                                                                | <pre>- [x] Write the press release<br>- [ ] Update the website<br>- [ ] Contact the media</pre>                 |
| Emoji<br>(see also [Copying and Pasting Emoji](#using-emoji-shortcodes)) | That is so funny! \:joy:                                                                                        |
| Highlight                                                                | I need to highlight these \==very important words==.                                                            |
| Subscript                                                                | H\~2\~O                                                                                                         |
| Superscript                                                              | X\^2\^                                                                                                          |

[Back to top ⤴️](#top)

---

## Basic Syntax

### Overview

Nearly all Markdown applications support the basic syntax outlined in the original Markdown design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (<h3>), use three number signs (e.g., ### My Header).

```plaintext
### My Header
```

| Markdown                 | HTML                       | Rendered Output    |
| ------------------------ | -------------------------- | ------------------ |
| `# Heading level 1`      | `<h1>Heading level 1</h1>` | ## Heading level 1 |
| `## Heading level 2`     | `<h2>Heading level 2</h2>` | ## Heading level 2 |
| `### Heading level 3`    | `<h3>Heading level 3</h3>` | ## Heading level 3 |
| `#### Heading level 4`   | `<h4>Heading level 4</h4>` | ## Heading level 4 |
| `##### Heading level 5`  | `<h5>Heading level 5</h5>` | ## Heading level 5 |
| `###### Heading level 6` | `<h6>Heading level 6</h6>` | ## Heading level 6 |

### Alternate Syntax

Alternatively, on the line below the text, add any number of `==` characters for heading level 1 or `--` characters for heading level 2.

| Markdown                           | HTML                       | Rendered Output    |
| ---------------------------------- | -------------------------- | ------------------ |
| Heading level 1<br>=============== | `<h1>Heading level 1</h1>` | ## Heading level 1 |
| Heading level 2<br>--------------- | `<h2>Heading level 2</h2>` | ## Heading level 2 |

### Heading Best Practices

Markdown applications don’t agree on how to handle a missing space between the number signs (#) and the heading name. For compatibility, always put a space between the number signs and the heading name.

| ✅  Do this          | ❌  Don't do this   |
| -------------------- | ------------------- |
| `# Here's a Heading` | `#Here's a Heading` |

You should also put blank lines before and after a heading for compatibility.

| ✅  Do this                                                               | ❌  Don't do this                                                              |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Try to put a blank line before...<br># Heading<br>...and after a heading. | Without blank lines, this might not look right.<br># Heading<br>Don't do this! |

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown                                                                                            | HTML                                                                                                              | Rendered Output                                                                                 |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `I really like using Markdown.`<br>`I think I'll use it to format all of my documents from now on.` | `<p>I really like using Markdown.</p>`<br>`<p>I think I'll use it to format all of my documents from now on.</p>` | I really like using Markdown.<br>I think I'll use it to format all of my documents from now on. |

### Paragraph Best Practices

Unless the [paragraph is in a list](https://www.markdownguide.org/basic-syntax/#paragraphs), don’t indent paragraphs with spaces or tabs.

**Note:** If you need to indent paragraphs in the output, see the section on how to [indent (tab)](https://www.markdownguide.org/hacks/#indent-tab).

| ✅  Do this                                                                                     | ❌  Don't do this                                                                                          |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `Don't put tabs or spaces in front of your paragraphs.`<br>`Keep lines left-aligned like this.` | `This can result in unexpected formatting problems.`<br>`Don't add tabs or spaces in front of paragraphs.` |

## Line Breaks

To create a line break or new line (<br>), end a line with two or more spaces, and then type return.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

|`This is the first line.    
And this is the second line.`|<p>This is the first line.<br>  
And this is the second line.</p>|This is the first line.  
And this is the second line.|

### Line Break Best Practices

You can use two or more spaces (commonly referred to as “trailing whitespace”) for line breaks in nearly every Markdown application, but it’s controversial. It’s hard to see trailing whitespace in an editor, and many people accidentally or intentionally put two spaces after every sentence. For this reason, you may want to use something other than trailing whitespace for line breaks. If your Markdown application [supports HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
<br>
```

HTML tag.

For compatibility, use trailing white space or the

```plaintext
<br>
```

HTML tag at the end of the line.

There are two other options I don’t recommend using. CommonMark and a few other lightweight markup languages let you type a backslash (

```plaintext
\
```

) at the end of the line, but not all Markdown applications support this, so it isn’t a great option from a compatibility perspective. And at least a couple lightweight markup languages don’t require anything at the end of the line — just type return and they’ll create a line break.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
          First line with two spaces after.  
          And the next line.

          First line with the HTML tag after.<br>
          And the next line.


```

|

```

        First line with a backslash after.\
        And the next line.

        First line with nothing after.
        And the next line.


```

|

## Emphasis[](#emphasis)

You can add emphasis by making text bold or italic.

### Bold[](#bold)

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
I just love **bold text**.
```

|

```
I just love <strong>bold text</strong>.
```

| I just love **bold text**. |

```
I just love __bold text__.
```

|

```
I just love <strong>bold text</strong>.
```

| I just love **bold text**. |

```
Love**is**bold
```

|

```
Love<strong>is</strong>bold
```

| Love**is**bold |

#### Bold Best Practices[](#bold-best-practices)

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold the middle of a word for emphasis.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
          Love**is**bold

```

|

```

          Love__is__bold

```

|

### Italic[](#italic)

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
Italicized text is the *cat's meow*.
```

|

```
Italicized text is the <em>cat's meow</em>.
```

| Italicized text is the _cat’s meow_. |

```
Italicized text is the _cat's meow_.
```

|

```
Italicized text is the <em>cat's meow</em>.
```

| Italicized text is the _cat’s meow_. |

```
A*cat*meow
```

|

```
A<em>cat</em>meow
```

| A_cat_meow |

#### Italic Best Practices[](#italic-best-practices)

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to italicize the middle of a word for emphasis.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
          A*cat*meow

```

|

```

          A_cat_meow

```

|

### Bold and Italic[](#bold-and-italic)

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
This text is ***really important***.
```

|

```
This text is <em><strong>really important</strong></em>.
```

| This text is _**really important**_. |

```
This text is ___really important___.
```

|

```
This text is <em><strong>really important</strong></em>.
```

| This text is _**really important**_. |

```
This text is __*really important*__.
```

|

```
This text is <em><strong>really important</strong></em>.
```

| This text is _**really important**_. |

```
This text is **_really important_**.
```

|

```
This text is <em><strong>really important</strong></em>.
```

| This text is _**really important**_. |

```
This is really***very***important text.
```

|

```
This is really<em><strong>very</strong></em>important text.
```

| This is really\_**very**\_important text. |

**Note:** The order of the

```
em
```

and

```
strong
```

tags might be reversed depending on the Markdown processor you're using.

#### Bold and Italic Best Practices[](#bold-and-italic-best-practices)

Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold and italicize the middle of a word for emphasis.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
          This is really***very***important text.

```

|

```

          This is really___very___important text.

```

|

## Blockquotes[](#blockquotes-1)

To create a blockquote, add a

```plaintext
>
```

in front of a paragraph.

```
> Dorothy followed her through many of the beautiful rooms in her castle.

```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.

### Blockquotes with Multiple Paragraphs[](#blockquotes-with-multiple-paragraphs)

Blockquotes can contain multiple paragraphs. Add a

```plaintext
>
```

on the blank lines between the paragraphs.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Nested Blockquotes[](#nested-blockquotes)

Blockquotes can be nested. Add a

```plaintext
>>
```

in front of the paragraph you want to nest.

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

```

The rendered output looks like this:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Blockquotes with Other Elements[](#blockquotes-with-other-elements)

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

```
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

```

The rendered output looks like this:

> #### The quarterly results look great
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
> _Everything_ is going according to **plan**.

### Blockquotes Best Practices[](#blockquotes-best-practices)

For compatibility, put blank lines before and after blockquotes.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
        Try to put a blank line before...

        > This is a blockquote

        ...and after a blockquote.



```

|

```

        Without blank lines, this might not look right.
        > This is a blockquote
        Don't do this!

```

|

## Lists[](#lists-1)

You can organize items into ordered and unordered lists.

### Ordered Lists[](#ordered-lists)

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
        1. First item
        2. Second item
        3. Third item
        4. Fourth item

```

|

```

        <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>
        </ol>

```

| 1. First item 2. Second item 3. Third item 4. Fourth item
|

```

          1. First item
          1. Second item
          1. Third item
          1. Fourth item

```

|

```

          <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
          </ol>

```

| 1. First item 2. Second item 3. Third item 4. Fourth item
|

```

          1. First item
          8. Second item
          3. Third item
          5. Fourth item

```

|

```

          <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
          </ol>

```

| 1. First item 2. Second item 3. Third item 4. Fourth item
|

```

          1. First item
          2. Second item
          3. Third item
              1. Indented item
              2. Indented item
          4. Fourth item

```

|

```

          <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item
                  <ol>
                      <li>Indented item</li>
                      <li>Indented item</li>
                  </ol>
              </li>
              <li>Fourth item</li>
          </ol>

```

| 1. First item 2. Second item 3. Third item 1. Indented item 2. Indented item

1. Fourth item
   |

#### Ordered List Best Practices[](#ordered-list-best-practices)

CommonMark and a few other lightweight markup languages let you use a parenthesis (

```plaintext
)
```

) as a delimiter (e.g.,

```plaintext
1) First item
```

), but not all Markdown applications support this, so it isn’t a great option from a compatibility perspective. For compatibility, use periods only.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
          1. First item
          2. Second item

```

|

```

          1) First item
          2) Second item

```

|

### Unordered Lists[](#unordered-lists)

To create an unordered list, add dashes (

```plaintext
-
```

), asterisks (

```plaintext
*
```

), or plus signs (

```plaintext
+
```

) in front of line items. Indent one or more items to create a nested list.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
          - First item
          - Second item
          - Third item
          - Fourth item

```

|

```

          <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
          </ul>

```

| - First item

- Second item
- Third item
- Fourth item
  |

```

          * First item
          * Second item
          * Third item
          * Fourth item

```

|

```

          <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
          </ul>

```

| - First item

- Second item
- Third item
- Fourth item
  |

```

          + First item
          + Second item
          + Third item
          + Fourth item

```

|

```

          <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
          </ul>

```

| - First item

- Second item
- Third item
- Fourth item
  |

```

          - First item
          - Second item
          - Third item
              - Indented item
              - Indented item
          - Fourth item

```

|

```

          <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item
                  <ul>
                      <li>Indented item</li>
                      <li>Indented item</li>
                  </ul>
              </li>
              <li>Fourth item</li>
          </ul>

```

| - First item

- Second item
- Third item - Indented item
  - Indented item

- Fourth item
  |

#### Starting Unordered List Items With Numbers[](#starting-unordered-list-items-with-numbers)

If you need to start an unordered list item with a number followed by a period, you can use a backslash (

```plaintext
\
```

) to [escape](#escaping-characters) the period.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
          - 1968\. A great year!
          - I think 1969 was second best.

```

|

```

          <ul>
              <li>1968. A great year!</li>
              <li>I think 1969 was second best.</li>
          </ul>

```

| - 1968\. A great year!

- I think 1969 was second best.
  |

#### Unordered List Best Practices[](#unordered-list-best-practices)

Markdown applications don’t agree on how to handle different delimiters in the same list. For compatibility, don’t mix and match delimiters in the same list — pick one and stick with it.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
          - First item
          - Second item
          - Third item
          - Fourth item

```

|

```

          + First item
          * Second item
          - Third item
          + Fourth item

```

|

### Adding Elements in Lists[](#adding-elements-in-lists)

To add another element in a list while preserving the continuity of the list, indent the element four spaces or one tab, as shown in the following examples.

**Tip:** If things don't appear the way you expect, double check that you've indented the elements in the list four spaces or one tab.

#### Paragraphs[](#paragraphs)

```
* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.

* And here's the third list item.

```

The rendered output looks like this:

- This is the first list item.
- Here’s the second list item.

  I need to add another paragraph below the second list item.

- And here’s the third list item.

#### Blockquotes[](#blockquotes)

```
* This is the first list item.
* Here's the second list item.

    > A blockquote would look great below the second list item.

* And here's the third list item.

```

The rendered output looks like this:

- This is the first list item.
- Here’s the second list item.

  > A blockquote would look great below the second list item.

- And here’s the third list item.

#### Code Blocks[](#code-blocks-1)

[Code blocks](#code-blocks) are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.

```
1. Open the file.
2. Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3. Update the title to match the name of your website.

```

The rendered output looks like this:

1. Open the file.
2. Find the following code block on line 21:

   ```
    <html>
      <head>
        <title>Test</title>
      </head>

   ```

3. Update the title to match the name of your website.

#### Images[](#images)

```
1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

    ![Tux, the Linux mascot](/assets/images/tux.png)

3. Close the file.

```

The rendered output looks like this:

1. Open the file containing the Linux mascot.
2. Marvel at its beauty.

   ![Tux, the Linux mascot](https://www.markdownguide.org/assets/images/generated/assets/images/tux-1080.png)

3. Close the file.

#### Lists[](#lists)

You can nest an unordered list in an ordered list, or vice versa.

```
1. First item
2. Second item
3. Third item
    - Indented item
    - Indented item
4. Fourth item

```

The rendered output looks like this:

1. First item
2. Second item
3. Third item - Indented item 4. Indented item

4. Fourth item

## Code[](#code)

To denote a word or phrase as code, enclose it in backticks (

```plaintext
`
```

).

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
At the command prompt, type `nano`.
```

|

```
At the command prompt, type <code>nano</code>.
```

| At the command prompt, type

```
nano
```

. |

### Escaping Backticks[](#escaping-backticks)

If the word or phrase you want to denote as code includes one or more backticks, you can escape it by enclosing the word or phrase in double backticks (

```
``
```

).

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
``Use `code` in your Markdown file.``
```

|

```
<code>Use `code` in your Markdown file.</code>
```

|

```
Use `code` in your Markdown file.
```

|

### Code Blocks[](#code-blocks)

To create code blocks, indent every line of the block by at least four spaces or one tab.

```
    <html>
      <head>
      </head>
    </html>

```

The rendered output looks like this:

```
<html>
  <head>
  </head>
</html>

```

**Note:** To create code blocks without indenting lines, use [fenced code blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks).

## Horizontal Rules[](#horizontal-rules)

To create a horizontal rule, use three or more asterisks (

```plaintext
***
```

), dashes (

```plaintext
---
```

), or underscores (

```plaintext
___
```

) on a line by themselves.

```
***

---

_________________

```

The rendered output of all three looks identical:

---

### Horizontal Rule Best Practices[](#horizontal-rule-best-practices)

For compatibility, put blank lines before and after horizontal rules.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
        Try to put a blank line before...

        ---

        ...and after a horizontal rule.



```

|

```

        Without blank lines, this would be a heading.
        ---
        Don't do this!

```

|

## Links[](#links)

To create a link, enclose the link text in brackets (e.g.,

```plaintext
[Duck Duck Go]
```

) and then follow it immediately with the URL in parentheses (e.g.,

```plaintext
(https://duckduckgo.com)
```

).

```
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

```

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com/).

**Note:** To link to an element on the same page, see [linking to heading IDs](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids). To create a link that opens in a new tab or window, see the section on [link targets](https://www.markdownguide.org/hacks/#link-targets).

### Adding Titles[](#adding-titles)

You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in quotation marks after the URL.

```
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

```

The rendered output looks like this:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com/ "The best search engine for privacy").

### URLs and Email Addresses[](#urls-and-email-addresses)

To quickly turn a URL or email address into a link, enclose it in angle brackets.

```
<https://www.markdownguide.org>
<fake@example.com>

```

The rendered output looks like this:

[https://www.markdownguide.org](https://www.markdownguide.org/)  
[fake@example.com](mailto:fake@example.com)

### Formatting Links[](#formatting-links)

To [emphasize](#emphasis) links, add asterisks before and after the brackets and parentheses. To denote links as [code](#code), add backticks in the brackets.

```
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

```

The rendered output looks like this:

I love supporting the **[EFF](https://eff.org/)**.  
This is the _[Markdown Guide](https://www.markdownguide.org/)_.  
See the section on [

```plaintext
code
```

](#code).

### Reference-style Links[](#reference-style-links)

Reference-style links are a special kind of link that make URLs easier to display and read in Markdown. Reference-style links are constructed in two parts: the part you keep inline with your text and the part you store somewhere else in the file to keep the text easy to read.

#### Formatting the First Part of the Link[](#formatting-the-first-part-of-the-link)

The first part of a reference-style link is formatted with two sets of brackets. The first set of brackets surrounds the text that should appear linked. The second set of brackets displays a label used to point to the link you’re storing elsewhere in your document.

Although not required, you can include a space between the first and second set of brackets. The label in the second set of brackets is not case sensitive and can include letters, numbers, spaces, or punctuation.

This means the following example formats are roughly equivalent for the first part of the link:

- ```plaintext
    [hobbit-hole][1]
  ```

- ```plaintext
    [hobbit-hole] [1]
  ```

#### Formatting the Second Part of the Link[](#formatting-the-second-part-of-the-link)

The second part of a reference-style link is formatted with the following attributes:

1. The label, in brackets, followed immediately by a colon and at least one space (e.g.,

   ```plaintext
   [label]:
   ```

   ).

2. The URL for the link, which you can optionally enclose in angle brackets.
3. The optional title for the link, which you can enclose in double quotes, single quotes, or parentheses.

This means the following example formats are all roughly equivalent for the second part of the link:

- ```plaintext
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle
  ```

- ```plaintext
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"
  ```

- ```plaintext
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'
  ```

- ```plaintext
    [1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)
  ```

- ```plaintext
    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"
  ```

- ```plaintext
    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'
  ```

- ```plaintext
    [1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)
  ```

You can place this second part of the link anywhere in your Markdown document. Some people place them immediately after the paragraph in which they appear while other people place them at the end of the document (like endnotes or footnotes).

#### An Example Putting the Parts Together[](#an-example-putting-the-parts-together)

Say you add a URL as a [standard URL link](#links) to a paragraph and it looks like this in Markdown:

```
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.

```

Though it may point to interesting additional information, the URL as displayed really doesn’t add much to the existing raw text other than making it harder to read. To fix that, you could format the URL like this instead:

```
In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

```

In both instances above, the rendered output would be identical:

> In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.

and the HTML for the link would be:

```
<a href="https://en.wikipedia.org/wiki/Hobbit#Lifestyle" title="Hobbit lifestyles">hobbit-hole</a>

```

### Link Best Practices[](#link-best-practices)

Markdown applications don’t agree on how to handle spaces in the middle of a URL. For compatibility, try to URL encode any spaces with

```plaintext
%20
```

. Alternatively, if your Markdown application [supports HTML](#html), you could use the

```plaintext
a
```

HTML tag.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
        [link](https://www.example.com/my%20great%20page)

        <a href="https://www.example.com/my great page">link</a>


```

|

```

        [link](https://www.example.com/my great page)
```

|

Parentheses in the middle of a URL can also be problematic. For compatibility, try to URL encode the opening parenthesis (

```plaintext
(
```

) with

```plaintext
%28
```

and the closing parenthesis (

```plaintext
)
```

) with

```plaintext
%29
```

. Alternatively, if your Markdown application [supports HTML](#html), you could use the

```plaintext
a
```

HTML tag.

| ✅  Do this | ❌  Don't do this |
| ----------- | ----------------- |

```
        [a novel](https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_%28novel%29)

        <a href="https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_(novel)">a novel</a>


```

|

```

        [a novel](https://en.wikipedia.org/wiki/The_Milagro_Beanfield_War_(novel))

```

|

## Images[](#images-1)

To add an image, add an exclamation mark (

```plaintext
!
```

), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

```
![The San Juan Mountains are beautiful](/assets/images/san-juan-mountains.jpg "San Juan Mountains")

```

The rendered output looks like this:

![The San Juan Mountains are beautiful](https://www.markdownguide.org/assets/images/generated/assets/images/san-juan-mountains-1080.jpg "San Juan Mountains")

**Note:** To resize an image, see the section on [image size](https://www.markdownguide.org/hacks/#image-size). To add a caption, see the section on [image captions](https://www.markdownguide.org/hacks/#image-captions).

### Linking Images[](#linking-images)

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```
[![An old rock in the desert](/assets/images/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

```

The rendered output looks like this:

[![An old rock in the desert](https://www.markdownguide.org/assets/images/generated/assets/images/shiprock-1080.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

## Escaping Characters[](#escaping-characters)

To display a literal character that would otherwise be used to format text in a Markdown document, add a backslash (

```plaintext
\
```

) in front of the character.

```
\* Without the backslash, this would be a bullet in an unordered list.

```

The rendered output looks like this:

\* Without the backslash, this would be a bullet in an unordered list.

### Characters You Can Escape[](#characters-you-can-escape)

You can use a backslash to escape the following characters.

| Character | Name                                                                  |
| --------- | --------------------------------------------------------------------- |
| \\        | backslash                                                             |
| \`        | backtick (see also [escaping backticks in code](#escaping-backticks)) |
| \*        | asterisk                                                              |
| \_        | underscore                                                            |
| { }       | curly braces                                                          |
| \[ \]     | brackets                                                              |
| < >       | angle brackets                                                        |
| ( )       | parentheses                                                           |

# | pound sign |

- | plus sign |
  \- | minus sign (hyphen) |
  . | dot |
  ! | exclamation mark |
  \| | pipe (see also [escaping pipe in tables](https://www.markdownguide.org/extended-syntax/#escaping-pipe-characters-in-tables)) |

## HTML[](#html)

Many Markdown applications allow you to use HTML tags in Markdown-formatted text. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you need to change the attributes of an element, like specifying the [color of text](https://www.markdownguide.org/hacks/#color) or changing the width of an image.

To use HTML, place the tags in the text of your Markdown-formatted file.

```
This **word** is bold. This <em>word</em> is italic.

```

The rendered output looks like this:

This **word** is bold. This _word_ is italic.

### HTML Best Practices[](#html-best-practices)

For security reasons, not all Markdown applications support HTML in Markdown documents. When in doubt, check your Markdown application’s documentation. Some applications support only a subset of HTML tags.

Use blank lines to separate block-level HTML elements like

```plaintext
<div>
```

,

```plaintext
<table>
```

,

```plaintext
<pre>
```

, and

```plaintext
<p>
```

from the surrounding content. Try not to indent the tags with tabs or spaces — that can interfere with the formatting.

You can’t use Markdown syntax inside block-level HTML tags. For example,

```plaintext
<p>italic and **bold**</p>
```

won’t work.

[![Markdown Guide book cover](https://www.markdownguide.org/assets/images/generated/assets/images/book-cover-1080.jpg)](https://www.markdownguide.org/book/)

##### Take your Markdown skills to the next level

Learn Markdown in 60 pages. Designed for both novices and experts, _The Markdown Guide_ book is a comprehensive reference that has everything you need to get started and master Markdown syntax.

[Get the Book](https://www.markdownguide.org/book/)

Don't stop now! 🚀 Star the [GitHub repository](https://github.com/mattcone/markdown-guide) and then enter your email address below to receive new Markdown tutorials via email. No spam!

---

# Extended Syntax | Markdown Guide

## Overview[](#overview)

The [basic syntax](https://www.markdownguide.org/basic-syntax/) outlined in the original Markdown design document added many of the elements needed on a day-to-day basis, but it wasn’t enough for some people. That’s where extended syntax comes in.

Several individuals and organizations took it upon themselves to extend the basic syntax by adding additional elements like tables, code blocks, syntax highlighting, URL auto-linking, and footnotes. These elements can be enabled by using a lightweight markup language that builds upon the basic Markdown syntax, or by adding an extension to a compatible Markdown processor.

## Availability[](#availability)

Not all Markdown applications support extended syntax elements. You’ll need to check whether or not the lightweight markup language your application is using supports the extended syntax elements you want to use. If it doesn’t, it may still be possible to enable extensions in your Markdown processor.

### Lightweight Markup Languages[](#lightweight-markup-languages)

There are several lightweight markup languages that are _supersets_ of Markdown. They include basic syntax and build upon it by adding additional elements like tables, code blocks, syntax highlighting, URL auto-linking, and footnotes. Many of the most popular Markdown applications use one of the following lightweight markup languages:

- [CommonMark](https://commonmark.org/)
- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/)
- [Markdown Extra](https://michelf.ca/projects/php-markdown/extra/)
- [MultiMarkdown](https://fletcherpenney.net/multimarkdown/)
- [R Markdown](https://rmarkdown.rstudio.com/)

### Markdown Processors[](#markdown-processors)

There are [dozens of Markdown processors](https://github.com/markdown/markdown.github.com/wiki/Implementations) available. Many of them allow you to add extensions that enable extended syntax elements. Check your processor’s documentation for more information.

## Tables[](#tables)

To add a table, use three or more hyphens (

```plaintext
---
```

) to create each column’s header, and use pipes (

```plaintext
|
```

) to separate each column. For compatibility, you should also add a pipe on either end of the row.

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

```

The rendered output looks like this:

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

Cell widths can vary, as shown below. The rendered output will look the same.

```
| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

```

**Tip:** Creating tables with hyphens and pipes can be tedious. To speed up the process, try using the [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) or [AnyWayData Markdown Export](https://anywaydata.com/). Build a table using the graphical interface, and then copy the generated Markdown-formatted text into your file.

### Alignment[](#alignment)

You can align text in the columns to the left, right, or center by adding a colon (

```plaintext
:
```

) to the left, right, or on both side of the hyphens within the header row.

```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

```

The rendered output looks like this:

| Syntax    | Description | Test Text   |
| --------- | ----------- | ----------- |
| Header    | Title       | Here’s this |
| Paragraph | Text        | And more    |

### Formatting Text in Tables[](#formatting-text-in-tables)

You can format the text within tables. For example, you can add [links](https://www.markdownguide.org/basic-syntax/#links), [code](https://www.markdownguide.org/basic-syntax/#code-1) (words or phrases in backticks (

```plaintext
`
```

) only, not [code blocks](https://www.markdownguide.org/basic-syntax/#code-blocks)), and [emphasis](https://www.markdownguide.org/basic-syntax/#emphasis).

You can’t use headings, blockquotes, lists, horizontal rules, images, or most HTML tags.

**Tip:** You can use HTML to create [line breaks](https://www.markdownguide.org/hacks/#line-breaks-within-table-cells) and add [lists](https://www.markdownguide.org/hacks/#lists-within-table-cells) within table cells.

### Escaping Pipe Characters in Tables[](#escaping-pipe-characters-in-tables)

You can display a pipe (

```plaintext
|
```

) character in a table by using its HTML character code (

```plaintext
&#124;
```

).

## Fenced Code Blocks[](#fenced-code-blocks)

The basic Markdown syntax allows you to create [code blocks](https://www.markdownguide.org/basic-syntax/#code-blocks) by indenting lines by four spaces or one tab. If you find that inconvenient, try using fenced code blocks. Depending on your Markdown processor or editor, you’ll use three backticks (

```

```

````
) or three tildes (
```plaintext
~~~
````

) on the lines before and after the code block. The best part? You don’t have to indent any lines!

```

```

{
"firstName": "John",
"lastName": "Smith",
"age": 25
}

```

```

The rendered output looks like this:

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}

```

**Tip:** Need to display backticks inside a code block? See [this section](https://www.markdownguide.org/basic-syntax/#escaping-backticks) to learn how to escape them.

### Syntax Highlighting[](#syntax-highlighting)

Many Markdown processors support syntax highlighting for fenced code blocks. This feature allows you to add color highlighting for whatever language your code was written in. To add syntax highlighting, specify a language next to the backticks before the fenced code block.

````
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
````

```

The rendered output looks like this:

```

{"firstName":"John","lastName":"Smith","age":25}

````

## Footnotes[](#footnotes)

Footnotes allow you to add notes and references without cluttering the body of the document. When you create a footnote, a superscript number with a link appears where you added the footnote reference. Readers can click the link to jump to the content of the footnote at the bottom of the page.

To create a footnote reference, add a caret and an identifier inside brackets (
```plaintext
[^1]
````

). Identifiers can be numbers or words, but they can’t contain spaces or tabs. Identifiers only correlate the footnote reference with the footnote itself — in the output, footnotes are numbered sequentially.

Add the footnote using another caret and number inside brackets with a colon and text (

```plaintext
[^1]: My footnote.
```

). You don’t have to put footnotes at the end of the document. You can put them anywhere except inside other elements like lists, block quotes, and tables.

```
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

```

The rendered output looks like this:

Here’s a simple footnote,<sup>[1](#fn:1)</sup> and here’s a longer one.<sup>[2](#fn:bignote)</sup>

1.  This is the first footnote. [↩](#fnref:1)
2.  Here’s one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    ```plaintext
    { my code }
    ```

    Add as many paragraphs as you like. [↩](#fnref:bignote)

## Heading IDs[](#heading-ids)

Many Markdown processors support custom IDs for [headings](https://www.markdownguide.org/basic-syntax/#headings) — some Markdown processors automatically add them. Adding custom IDs allows you to link directly to headings and modify them with CSS. To add a custom heading ID, enclose the custom ID in curly braces on the same line as the heading.

```
### My Great Heading {#custom-id}

```

The HTML looks like this:

```
<h3 id="custom-id">My Great Heading</h3>

```

### Linking to Heading IDs[](#linking-to-heading-ids)

You can link to headings with custom IDs in the file by creating a [standard link](https://www.markdownguide.org/basic-syntax/#links) with a number sign (

```plaintext
#
```

) followed by the custom heading ID. These are commonly referred to as _anchor links_.

| Markdown | HTML | Rendered Output |
| -------- | ---- | --------------- |

```
[Heading IDs](#heading-ids)
```

|

```
 <a href="#heading-ids">Heading IDs</a>
```

| [Heading IDs](#heading-ids) |

Other websites can link to the heading by adding the custom heading ID to the full URL of the webpage (e.g,

```plaintext
[Heading IDs](https://www.markdownguide.org/extended-syntax#heading-ids)
```

).

## Definition Lists[](#definition-lists)

Some Markdown processors allow you to create _definition lists_ of terms and their corresponding definitions. To create a definition list, type the term on the first line. On the next line, type a colon followed by a space and the definition.

```
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

```

The HTML looks like this:

```
<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>

```

The rendered output looks like this:

First Term

This is the definition of the first term.

Second Term

This is one definition of the second term.

This is another definition of the second term.

## Strikethrough[](#strikethrough)

You can strikethrough words by putting a horizontal line through the center of them. The result looks ~like this~. This feature allows you to indicate that certain words are a mistake not meant for inclusion in the document. To strikethrough words, use two tilde symbols (

```plaintext
~~
```

) before and after the words.

```
~~The world is flat.~~ We now know that the world is round.

```

The rendered output looks like this:

~The world is flat.~ We now know that the world is round.

## Task Lists[](#task-lists)

Task lists (also referred to as _checklists_ and _todo_ lists) allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes (

```plaintext
-
```

) and brackets with a space (

```plaintext
[ ]
```

) in front of task list items. To select a checkbox, add an

```plaintext
x
```

in between the brackets (

```plaintext
[x]
```

).

```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

```

The rendered output looks like this:

![Markdown task list](https://www.markdownguide.org/assets/images/tasklist.png)

## Emoji[](#emoji)

There are two ways to add emoji to Markdown files: copy and paste the emoji into your Markdown-formatted text, or type _emoji shortcodes_.

### Copying and Pasting Emoji[](#copying-and-pasting-emoji)

In most cases, you can simply copy an emoji from a source like [Emojipedia](https://emojipedia.org/) and paste it into your document. Many Markdown applications will automatically display the emoji in the Markdown-formatted text. The HTML and PDF files you export from your Markdown application should display the emoji.

**Tip:** If you're using a static site generator, make sure you [encode HTML pages as UTF-8](https://www.w3.org/International/tutorials/tutorial-char-enc/).

### Using Emoji Shortcodes[](#using-emoji-shortcodes)

Some Markdown applications allow you to insert emoji by typing emoji shortcodes. These begin and end with a colon and include the name of an emoji.

```
Gone camping! :tent: Be back soon.

That is so funny! :joy:

```

The rendered output looks like this:

Gone camping! ⛺ Be back soon.

That is so funny! 😂

**Note:** You can use this [list of emoji shortcodes](https://gist.github.com/rxaviers/7360908), but keep in mind that emoji shortcodes vary from application to application. Refer to your Markdown application's documentation for more information.

## Highlight[](#highlight)

This isn’t common, but some Markdown processors allow you to highlight text. The result looks like this. To highlight words, use two equal signs (

```plaintext
==
```

) before and after the words.

```
I need to highlight these ==very important words==.

```

The rendered output looks like this:

I need to highlight these very important words.

Alternatively, if your Markdown application supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
mark
```

HTML tag.

```
I need to highlight these <mark>very important words</mark>.

```

## Subscript[](#subscript)

This isn’t common, but some Markdown processors allow you to use _subscript_ to position one or more characters slightly below the normal line of type. To create a subscript, use one tilde symbol (

```plaintext
~
```

) before and after the characters.

```
H~2~O

```

The rendered output looks like this:

H<sub>2</sub>O

**Tip:** Be sure to test this in your Markdown application before using it. Some Markdown applications use one tilde symbol before and after words not for subscript, but for [strikethrough](https://www.markdownguide.org/extended-syntax/#strikethrough).

Alternatively, if your Markdown application supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
sub
```

HTML tag.

```
H<sub>2</sub>O

```

## Superscript[](#superscript)

This isn’t common, but some Markdown processors allow you to use _superscript_ to position one or more characters slightly above the normal line of type. To create a superscript, use one caret symbol (

```plaintext
^
```

) before and after the characters.

```
X^2^

```

The rendered output looks like this:

X<sup>2</sup>

Alternatively, if your Markdown application supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
sup
```

HTML tag.

```
X<sup>2</sup>

```

## Automatic URL Linking[](#automatic-url-linking)

Many Markdown processors automatically turn URLs into links. That means if you type http://www.example.com, your Markdown processor will automatically turn it into a link even though you haven’t [used brackets](https://www.markdownguide.org/basic-syntax/#links).

```
http://www.example.com

```

The rendered output looks like this:

[http://www.example.com](http://www.example.com/)

## Disabling Automatic URL Linking[](#disabling-automatic-url-linking)

If you don’t want a URL to be automatically linked, you can remove the link by [denoting the URL as code](https://www.markdownguide.org/basic-syntax/#code) with backticks.

```
`http://www.example.com`

```

The rendered output looks like this:

```plaintext
http://www.example.com
```

[![Markdown Guide book cover](https://www.markdownguide.org/assets/images/generated/assets/images/book-cover-1080.jpg)](https://www.markdownguide.org/book/)

##### Take your Markdown skills to the next level.

Learn Markdown in 60 pages. Designed for both novices and experts, _The Markdown Guide_ book is a comprehensive reference that has everything you need to get started and master Markdown syntax.

[Get the Book](https://www.markdownguide.org/book/)

Don't stop now! 🚀 Star the [GitHub repository](https://github.com/mattcone/markdown-guide) and then enter your email address below to receive new Markdown tutorials via email. No spam!

---

# Hacks | Markdown Guide

## Overview[](#overview)

The majority of people using Markdown will find that the [basic](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/) elements cover their needs. But chances are that if you use Markdown long enough, you’ll inevitably discover that it doesn’t support something you need. This page provides tips and tricks for working around Markdown’s limitations.

**Tip:** These hacks aren't guaranteed to work in your Markdown application. If you need to use these hacks frequently, you should consider writing using something other than Markdown.

## Underline[](#underline)

Underlined text is not something you typically see in web writing, probably because underlined text is nearly synonymous with links. However, if you’re writing a paper or a report, you may need the ability to underline words and phrases. A couple of applications like [Bear](https://www.markdownguide.org/tools/bear/) and [Simplenote](https://www.markdownguide.org/tools/simplenote/) provide support for underlining text, but Markdown doesn’t natively support underlining. If your Markdown processor supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
<ins>
```

HTML tag to underline text in your document.

```
Some of these words <ins>will be underlined</ins>.

```

The rendered output looks like this:

Some of these words will be underlined.

## Indent (Tab)[](#indent-tab)

Tabs and whitespace have a special meaning in Markdown. You can use trailing whitespace to create [line breaks](https://www.markdownguide.org/basic-syntax/#line-breaks), and you can use tabs to create [code blocks](https://www.markdownguide.org/basic-syntax/#code-blocks). But what if you need to indent a paragraph the old-fashioned way, using the tab key? Markdown doesn’t provide an easy way of doing that.

Your best bet might be to use a Markdown editor that supports indentation. This is common in applications that are more oriented towards desktop publishing. For example, [iA Writer](https://www.markdownguide.org/tools/ia-writer/) allows you to customize indentation settings for the editor in the application preferences. It also provides template customization options so that you can make the rendered document look the way you expect it to, indentation and all.

Another option, if your Markdown processor supports [HTML](https://www.markdownguide.org/basic-syntax/#html), is to use the HTML entity for non-breaking space (

```plaintext
&nbsp;
```

). This should probably be your option of last resort as it can get awkward. Basically, every

```plaintext
&nbsp;
```

in your Markdown source will be replaced with a space in the rendered output. So if you stick four instances of

```plaintext
&nbsp;
```

before a paragraph, the paragraph will look like it’s indented four spaces.

```
&nbsp;&nbsp;&nbsp;&nbsp;This is the first sentence of my indented paragraph.

```

The rendered output looks like this:

    This is the first sentence of my indented paragraph.

## Center[](#center)

Having the ability to center text is a necessity when writing a paper or a report. Unfortunately, Markdown doesn’t have any concept of text alignment (one possible exception is when using [tables](https://www.markdownguide.org/extended-syntax/#alignment)). The good news is that there’s an HTML tag you can use:

```plaintext
<center>
```

. If your Markdown processor supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can place these tags around whatever text you want to center align.

```
<center>This text is centered.</center>

```

The rendered output looks like this:

This text is centered.

The

```plaintext
<center>
```

HTML tag is technically supported but officially [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center), which means it works for now but you’re not supposed to be using it. Unfortunately, there’s not another pure HTML alternative. You could try using one of the CSS alternatives. Not all Markdown applications provide CSS support, but if the one you’re using does, here’s an alternative to the

```plaintext
<center>
```

tag:

```
<p style="text-align:center">Center this text</p>

```

If this is supported by your Markdown application, the output looks like this:

Center this text

## Color[](#color)

Markdown doesn’t allow you to change the color of text, but if your Markdown processor supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
<font>
```

HTML tag. The

```plaintext
color
```

attribute allows you to specify the font color using a color’s name or the hexadecimal

```plaintext
#RRGGBB
```

code.

```
<font color="red">This text is red!</font>

```

The rendered output looks like this:

This text is red!

The

```plaintext
<font>
```

HTML tag is technically supported but officially [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font), which means it works for now but you’re not supposed to be using it. Unfortunately, there’s not another pure HTML alternative. You could try using one of the CSS alternatives. Not all Markdown applications provide CSS support, but if the one you’re using does, here’s an alternative to the

```plaintext
<font>
```

tag:

```
<p style="color:blue">Make this text blue.</p>

```

If this is supported by your Markdown application, the output looks like this:

Make this text blue.

Some people need the ability to write sentences in their Markdown files that _will not_ appear in the rendered output. These comments are essentially hidden text. The text is viewable by the author of the document, but it’s not printed on the webpage or PDF. Markdown doesn’t natively support comments, but several enterprising individuals have devised a solution.

To add a comment, place text inside brackets followed by a colon, a space, and a pound sign (e.g.,

```plaintext
[comment]: #
```

). You should put blank lines before and after a comment.

```
Here's a paragraph that will be visible.

[This is a comment that will be hidden.]: #

And here's another paragraph that's visible.

```

The rendered output looks like this:

Here’s a paragraph that will be visible.

And here’s another paragraph that’s visible.

**Tip:** This tip comes from [Stack Overflow](https://stackoverflow.com/questions/4823468/comments-in-markdown). It's been peer-reviewed and used by thousands of people!

## Admonitions[](#admonitions)

Admonitions are frequently used in documentation to call attention to warnings, notes, and tips. Markdown doesn’t provide special syntax for admonitions, and most Markdown applications don’t provide support for admonitions (one exception is [MkDocs](https://www.markdownguide.org/tools/mkdocs/)).

However, if you need to add admonitions, you might be able to use [blockquotes](https://www.markdownguide.org/basic-syntax/#blockquotes-1) with [emoji](https://www.markdownguide.org/extended-syntax/#emoji) and [emphasis](https://www.markdownguide.org/basic-syntax/#emphasis) to create something that looks similar to the admonitions you see on other websites.

```
> :warning: **Warning:** Do not push the big red button.

> :memo: **Note:** Sunrises are beautiful.

> :bulb: **Tip:** Remember to appreciate the little things in life.

```

The rendered output looks like this:

> ⚠️ **Warning:** Do not push the big red button.

> 📝 **Note:** Sunrises are beautiful.

> 💡 **Tip:** Remember to appreciate the little things in life.

## Image Size[](#image-size)

The Markdown syntax for [images](https://www.markdownguide.org/basic-syntax/#images-1) doesn’t allow you to specify the width and height of images. If you need to resize an image and your Markdown processor supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
img
```

HTML tag with the

```plaintext
width
```

and

```plaintext
height
```

attributes to set the dimensions of an image in pixels.

```
<img src="image.png" width="200" height="100">

```

The rendered output will contain the image resized to the dimensions you specified.

## Image Captions[](#image-captions)

Markdown doesn’t natively support image captions, but there are two possible workarounds. If your Markdown application supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the

```plaintext
figure
```

and

```plaintext
figcaption
```

HTML tags to add a caption for your image.

```
<figure>
    <img src="/assets/images/albuquerque.jpg"
         alt="Albuquerque, New Mexico">
    <figcaption>A single track trail outside of Albuquerque, New Mexico.</figcaption>
</figure>

```

The rendered output looks like this:

![Albuquerque, New Mexico](https://www.markdownguide.org/assets/images/generated/assets/images/albuquerque-1080.jpg)

A single track trail outside of Albuquerque, New Mexico.

**Tip:** If your Markdown application supports CSS, you can use CSS to style the appearance of the caption.

If your Markdown application doesn’t support HTML, you could try placing the caption directly below the image and using [emphasis](https://www.markdownguide.org/basic-syntax/#emphasis).

```
![Albuquerque, New Mexico](/assets/images/albuquerque.jpg)
*A single track trail outside of Albuquerque, New Mexico.*

```

The rendered output looks like this:

![Albuquerque, New Mexico](https://www.markdownguide.org/assets/images/generated/assets/images/albuquerque-1080.jpg)

_A single track trail outside of Albuquerque, New Mexico._

## Link Targets[](#link-targets)

Some people like creating links that open in new tabs or windows. The Markdown syntax for [links](https://www.markdownguide.org/basic-syntax/#links) doesn’t allow you to specify the

```plaintext
target
```

attribute, but if your Markdown processor supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use HTML to create these links.

```
<a href="https://www.markdownguide.org" target="_blank">Learn Markdown!</a>

```

The rendered output looks like this:

[Learn Markdown!](https://www.markdownguide.org/)

## Symbols[](#symbols)

Markdown doesn’t provide special syntax for symbols. However, in most cases, you can copy and paste whatever symbol you want to use into your Markdown document. For example, if you need to display Pi (π), just find the symbol on a webpage and copy and paste it into your document. The symbol should appear as expected in the rendered output.

Alternatively, if your Markdown application supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you can use the HTML entity for whatever symbol you want to use. For example, if you want to display the copyright sign (©), you can copy and paste the HTML entity for copyright (

```plaintext
&copy;
```

) into your Markdown document.

Here’s a partial list of HTML entities for symbols:

- Copyright (©) —
  ```plaintext
  &copy;
  ```
- Registered trademark (®) —
  ```plaintext
  &reg;
  ```
- Trademark (™) —
  ```plaintext
  &trade;
  ```
- Euro (€) —
  ```plaintext
  &euro;
  ```
- Left arrow (←) —
  ```plaintext
  &larr;
  ```
- Up arrow (↑) —
  ```plaintext
  &uarr;
  ```
- Right arrow (→) —
  ```plaintext
  &rarr;
  ```
- Down arrow (↓) —
  ```plaintext
  &darr;
  ```
- Degree (°) —
  ```plaintext
  &#176;
  ```
- Pi (π) —
  ```plaintext
  &#960;
  ```

For a complete list of available HTML entities, refer to Wikipedia’s page on [HTML entities](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references).

## Table Formatting[](#table-formatting)

Markdown [tables](https://www.markdownguide.org/extended-syntax/#tables) are notoriously finicky. You can’t use many Markdown syntax elements to format the text in table cells. But there are workarounds for at least two common table issues: Line breaks and lists.

### Line Breaks Within Table Cells[](#line-breaks-within-table-cells)

You can separate paragraphs within a table cell by using one or more

```plaintext
<br>
```

HTML tags.

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title |
| Paragraph   | First paragraph. <br><br> Second paragraph. |

```

The rendered output looks like this:

| Syntax    | Description      |
| --------- | ---------------- |
| Header    | Title            |
| Paragraph | First paragraph. |

Second paragraph.

|

### Lists Within Table Cells[](#lists-within-table-cells)

You can add a list within a table cell by using HTML tags.

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title |
| List        | Here's a list! <ul><li>Item one.</li><li>Item two.</li></ul> |

```

The rendered output looks like this:

| Syntax | Description               |
| ------ | ------------------------- |
| Header | Title                     |
| List   | Here's a list!- Item one. |

- Item two.
  |

## Table of Contents[](#table-of-contents)

Some Markdown applications like [Markdeep](https://www.markdownguide.org/tools/markdeep/) can automatically generate a table of contents (also referred to as a _toc_) from your [headings](https://www.markdownguide.org/basic-syntax/#headings), but this isn’t a feature provided by all Markdown applications. However, if your Markdown application supports [heading IDs](https://www.markdownguide.org/extended-syntax/#heading-ids), you can create a table of contents for your Markdown file using a [list](https://www.markdownguide.org/basic-syntax/#lists-1) and some [links](https://www.markdownguide.org/basic-syntax/#links).

```
#### Table of Contents

- [Underline](#underline)
- [Indent](#indent)
- [Center](#center)
- [Color](#color)

```

The rendered output looks like this:

#### Table of Contents

- [Underline](#underline)
- [Indent](#indent)
- [Center](#center)
- [Color](#color)

## Videos[](#videos)

If your Markdown application supports [HTML](https://www.markdownguide.org/basic-syntax/#html), you should be able to embed a video in your Markdown file by copying and pasting the HTML code provided by a video website like YouTube or Vimeo. If your Markdown application doesn’t support HTML, you can’t embed a video, but you can come close by adding an [image](https://www.markdownguide.org/basic-syntax/#images-1) and a link to the video. You could do this with practically any video on any video service.

Since YouTube makes this easy, we’ll use them as an example. Take this video, for instance:

```plaintext
https://www.youtube.com/watch?v=8q2IjQOzVpE
```

. The last part of the URL (

```plaintext
8q2IjQOzVpE
```

) is the ID of the video. We can take that ID and put it in the following template:

```
[![Image alt text](https://img.youtube.com/vi/YOUTUBE-ID/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE-ID)

```

YouTube automatically generates an image for every video (

```plaintext
https://img.youtube.com/vi/YOUTUBE-ID/0.jpg
```

), so we can use that and [link the image](https://www.markdownguide.org/basic-syntax/#linking-images) to the video on YouTube. After we replace the image alt text and add the ID of the video, our example looks like this:

```
[![Less Than Jake — Scott Farcas Takes It On The Chin](https://img.youtube.com/vi/PYCxct2e0zI/0.jpg)](https://www.youtube.com/watch?v=PYCxct2e0zI)

```

The rendered output looks like this:

[![Less Than Jake — Scott Farcas Takes It On The Chin](https://img.youtube.com/vi/PYCxct2e0zI/0.jpg)](https://www.youtube.com/watch?v=PYCxct2e0zI)

[![Markdown Guide book cover](https://www.markdownguide.org/assets/images/generated/assets/images/book-cover-1080.jpg)](https://www.markdownguide.org/book/)

##### Take your Markdown skills to the next level.

Learn Markdown in 60 pages. Designed for both novices and experts, _The Markdown Guide_ book is a comprehensive reference that has everything you need to get started and master Markdown syntax.

[Get the Book](https://www.markdownguide.org/book/)

Don't stop now! 🚀 Star the [GitHub repository](https://github.com/mattcone/markdown-guide) and then enter your email address below to receive new Markdown tutorials via email. No spam!

---
