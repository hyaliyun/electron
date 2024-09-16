

## About Jekyll

Jekyll is a static site generator with built-in support for and a simplified build process. Jekyll takes Markdown and HTML files and creates a complete static website based on your choice of layouts. Jekyll supports Markdown and Liquid, a templating language that loads dynamic content on your site. For more information, see [Jekyll](https://jekyllrb.com/).

Jekyll is not officially supported for Windows. For more information, see "[Jekyll on Windows](https://jekyllrb.com/docs/windows/#installation)" in the Jekyll documentation.

We recommend using Jekyll with . If you prefer, you can use other static site generators or customize your own build process locally or on another server. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#static-site-generators)."

## Configuring Jekyll in your site

You can configure most Jekyll settings, such as your site's theme and plugins, by editing your `_config.yml` file. For more information, see "[Configuration](https://jekyllrb.com/docs/configuration/)" in the Jekyll documentation.

Some configuration settings cannot be changed for sites.

```yaml
lsi: false
safe: true
source: [your repo's top level directory]
incremental: false
highlighter: rouge
gist:
  noscript: false
kramdown:
  math_engine: mathjax
  syntax_highlighter: rouge
```

By default, Jekyll doesn't build files or folders that:
* Are located in a folder called `/node_modules` or `/vendor`
* Start with `_`, `.`, or `#`
* End with `~`
* Are excluded by the `exclude` setting in your configuration file

If you want Jekyll to process any of these files, you can use the `include` setting in your configuration file.

## Front matter



You can add `site.github` to a post or page to add any repository references metadata to your site. For more information, see "[Using `site.github`](https://jekyll.github.io/github-metadata/site.github/)" in the Jekyll Metadata documentation.

## Themes

For more information, see "[Themes](https://jekyllrb.com/docs/themes/)" in the Jekyll documentation.


You can add a supported theme to your site on . For more information, see "[Supported themes](https://pages.github.com/themes/)" on the site and "[Adding a theme to your site using Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)".

To use any other open source Jekyll theme hosted on , you can add the theme manually. You can add a theme to your site manually. For more information, see [themes hosted on ](https://github.com/topics/jekyll-theme) and "[Supported themes](https://pages.github.com/themes/)" on the site and "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)".

You can override any of your theme's defaults by editing the theme's files. For more information, see your theme's documentation and "[Overriding your theme's defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)" in the Jekyll documentation.

## Plugins

You can download or create Jekyll plugins to extend the functionality of Jekyll for your site. For example, the [jemoji](https://github.com/jekyll/jemoji) plugin lets you use -flavored emoji in any page on your site the same way you would on . For more information, see "[Plugins](https://jekyllrb.com/docs/plugins/)" in the Jekyll documentation.

uses plugins that are enabled by default and cannot be disabled:
* [`jekyll-coffeescript`](https://github.com/jekyll/jekyll-coffeescript)
* [`jekyll-default-layout`](https://github.com/benbalter/jekyll-default-layout)
* [`jekyll-gist`](https://github.com/jekyll/jekyll-gist)
* [`jekyll-github-metadata`](https://github.com/jekyll/github-metadata)
* [`jekyll-optional-front-matter`](https://github.com/benbalter/jekyll-optional-front-matter)
* [`jekyll-paginate`](https://github.com/jekyll/jekyll-paginate)
* [`jekyll-readme-index`](https://github.com/benbalter/jekyll-readme-index)
* [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings)
* [`jekyll-relative-links`](https://github.com/benbalter/jekyll-relative-links)

You can enable additional plugins by adding the plugin's gem to the `plugins` setting in your `_config.yml` file. For more information, see "[Configuration](https://jekyllrb.com/docs/configuration/)" in the Jekyll documentation.

For a list of supported plugins, see "[Dependency versions](https://pages.github.com/versions/)" on the site.  For usage information for a specific plugin, see the plugin's documentation.



**Tip:** You can make sure you're using the latest version of all plugins by keeping the gem updated. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll#updating-the-github-pages-gem)" and "[Dependency versions](https://pages.github.com/versions/)" on the site.



cannot build sites using unsupported plugins. If you want to use unsupported plugins, generate your site locally and then push your site's static files to .

## Syntax highlighting

To make your site easier to read, code snippets are highlighted on sites the same way they're highlighted on . For more information about syntax highlighting on , see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)."

By default, code blocks on your site will be highlighted by Jekyll. Jekyll uses the [Rouge](https://github.com/rouge-ruby/rouge) highlighter (which is compatible with [Pygments](https://pygments.org/)). If you specify Pygments in your `_config.yml` file, Rouge will be used as the fallback instead. Jekyll cannot use any other syntax highlighter, and you'll get a page build warning if you specify another syntax highlighter in your `_config.yml` file. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-jekyll-build-errors-for-github-pages-sites)."

If you want to use another highlighter, such as [highlight.js](https://github.com/highlightjs/highlight.js), you must disable Jekyll's syntax highlighting by updating your project's `_config.yml` file.

```yaml
kramdown:
  syntax_highlighter_opts:
    disable : true
```

If your theme doesn't include CSS for syntax highlighting, you can generate 's syntax highlighting CSS and add it to your project's `style.css` file.

```shell
rougify style github > style.css
```

## Building your site locally


