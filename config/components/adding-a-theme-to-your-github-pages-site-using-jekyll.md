

People with write permissions for a repository can add a theme to a site using Jekyll.



## Adding a theme



1. Navigate to __config.yml_.

1. Add a new line to the file for the theme name.
   * To use a supported theme, type `theme: THEME-NAME`, replacing _THEME-NAME_ with the name of the theme as shown in the `_config.yml` of the theme's repository (most themes follow a `jekyll-theme-NAME` naming convention). For a list of supported themes, see "[Supported themes](https://pages.github.com/themes/)" on the site. For example, to select the Minimal theme, type `theme: jekyll-theme-minimal`.
   * To use any other Jekyll theme hosted on , type `remote_theme: THEME-NAME`, replacing THEME-NAME with the name of the theme as shown in the README of the theme's repository.





## Customizing your theme's CSS




1. Create a new file called _/assets/css/style.scss_.
1. Add the following content to the top of the file:

 

1. Add any custom CSS or Sass (including imports) you'd like immediately after the `@import` line.

## Customizing your theme's HTML layout


1. On , navigate to your theme's source repository. For example, the source repository for Minimal is https://github.com/pages-themes/minimal.
1. In the __layouts_ folder, navigate to your theme's _default.html_ file.
1. Copy the contents of the file.


1. Create a file called __layouts/default.html_.
1. Paste the default layout content you copied earlier.
1. Customize the layout as you'd like.

## Further reading

* "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)"
