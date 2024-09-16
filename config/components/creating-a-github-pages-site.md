



## Creating a repository for your site







## Creating your site







1. Create the entry file for your site. will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site.

   If your publishing source is a branch and folder, the entry file must be at the top level of the source folder on the source branch. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.

   If your publishing source is a  workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your  workflow generate your entry file when the workflow runs.


## Next steps

You can add more pages to your site by creating more new files. Each file will be available on your site in the same directory structure as your publishing source. For example, if the publishing source for your project site is the `gh-pages` branch, and you create a new file called `/about/contact-us.md` on the `gh-pages` branch, the file will be available at `https://<user>.github.io/<repository>`http(s)://<hostname>/pages/<username>/<repository>/about/contact-us.html`.

You can also add a theme to customize your site’s look and feel. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)".

To customize your site even more, you can use Jekyll, a static site generator with built-in support for . For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)".

## Further reading

* "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)"
* "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)"
* "[AUTOTITLE](/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)"
