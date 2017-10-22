# E-Drums project Website

The E-Drums project website is built using [Jekyll][jekyll], using [Node.js][node]
and [Grunt][grunt] to compile all static assets including the
[Bootstrap][bootstrap] library the site is built on along with the
[Font Awesome][fa] icon set using [LESS][less] stylesheets. Most of the content
on the website is written using [Markdown][markdown], making it extremely easy
to write and maintain.

[jekyll]: http://jekyllrb.com/
[node]: http://nodejs.org/
[grunt]: http://gruntjs.com/
[bootstrap]: http://getbootstrap.com/
[fa]: http://fontawesome.io/
[less]: http://www.lesscss.org/
[markdown]: https://daringfireball.net/projects/markdown/

## Quick-start Guide

Run `grunt` to compile all assets, and run `jekyll` to
start up the built-in webserver that will automatically re-generate all pages
any time it's corresponding file is changed here.

    $ npm install --no-bin-links
    $ grunt
    $ jekyll serve --watch

Note that you only need to run `npm install` once per new checkout. Now you can
edit content at verify your changes by pulling up the website running
(after restarting Jekyll): <http://localhost:4000/>

## Minimal Setup for Content Editing Only

If you only want to modify some page contents and are not going to touch any
CSS or JavaScript code, you can avoid installing [Grunt][] as it is only
really needed to produce the minified CSS and JavaScript files which can be
retrieved from the main site:

    $ curl https://edrums.github.io/assets/css/style.min.css > assets/css/style.min.css
    $ curl https://edrums.github.io/assets/js/scripts.min.js > assets/js/scripts.min.js

Then you only have to install [Jekyll][] and run it in order to preview your
changes locally before pushing them out.
