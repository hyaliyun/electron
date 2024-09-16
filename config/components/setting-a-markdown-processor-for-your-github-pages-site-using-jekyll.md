

People with write permissions for a repository can set the Markdown processor for a site.

supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and 's own Markdown processor, which is used to render [ Flavored Markdown (GFM)](https://github.github.com/gfm/) throughout . For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)."

You can use  Flavored Markdown with either processor, but only our GFM processor will always match the results you see on .


1. In your repository, browse to the __config.yml_ file.

1. Find the line that starts with `markdown:` and change the value to `kramdown` or `GFM`. The full line should read `markdown: kramdown` or `markdown: GFM`.





## Further reading

* [kramdown Documentation](https://kramdown.gettalong.org/documentation.html)
* [ Flavored Markdown Spec](https://github.github.com/gfm/)
