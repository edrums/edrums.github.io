# E-Drums project Website

The website is built using the following software and technologies:

- [Bootstrap] UI toolkit, code under MIT license, docs under [Creative Commons]
- [Favicon Generator] for favicons
- [Font Awesome] for icons, [SIL OFL 1.1] license
- [highlight.js] for syntax highlighting, BSD 3-Clause license
- [Markdown] markup language
- [Node.js] to compile all static assets, including the Bootstrap library, [see license]
- [SASS] for stylesheets, MIT license

## Quick-start Guide

```sh
pip install mkdocs mkdocs-blogging-plugin
```

- Install `yarn`
- Use the automatic setup via `setup.sh`

## Creating posts

This can be done either manually by creating a new .md file
in the `docs/en/news/posts` directory, paying attention for a correct filename,
date and [front-matter], or by running the following command:

```bash
$ ./new_post.sh "New post title" "<author_name>"
```


[Bootstrap]:         https://getbootstrap.com/
[Favicon Generator]: https://realfavicongenerator.net/
[Font Awesome]:      https://fontawesome.io/
[front-matter]:      https://www.mkdocs.org/user-guide/writing-your-docs/#meta-data
[highlight.js]:      https://highlightjs.org/
[Markdown]:          https://daringfireball.net/projects/markdown/
[Node.js]:           https://nodejs.org/
[SASS]:              https://sass-lang.com/
[see license]:       https://github.com/nodejs/node/blob/main/LICENSE
[SIL OFL 1.1]:       https://scripts.sil.org/cms/scripts/page.php?item
