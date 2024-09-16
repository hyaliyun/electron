



## Prerequisites

Before you can use Jekyll to create a site, you must install Jekyll and Git. For more information, see [Installation](https://jekyllrb.com/docs/installation/) in the Jekyll documentation and "[AUTOTITLE](/get-started/getting-started-with-git/set-up-git)."





## Creating a repository for your site


## Creating your site






1. If you don't already have a local copy of your repository, navigate to the location where you want to store your site's source files, replacing PARENT-FOLDER with the folder you want to contain the folder for your repository.

   ```shell
   cd PARENT-FOLDER
   ```

1. If you haven't already, initialize a local Git repository, replacing REPOSITORY-NAME with the name of your repository.

   ```shell
   $ git init REPOSITORY-NAME
   > Initialized empty Git repository in /REPOSITORY-NAME/.git/
   # Creates a new folder on your computer, initialized as a Git repository
   ```

1. Change directories to the repository.

   ```shell
   $ cd REPOSITORY-NAME
   # Changes the working directory
   ```



  For example, if you chose to publish your site from the `docs` folder on the default branch, create and change directories to the `docs` folder.

    ```shell
    $ mkdir docs
    # Creates a new folder called docs
    $ cd docs
    ```

    If you chose to publish your site from the `gh-pages` branch, create and checkout the `gh-pages` branch.

    ```shell
    $ git checkout --orphan gh-pages
    # Creates a new branch, with no history or contents, called gh-pages, and switches to the gh-pages branch
    $ git rm -rf .
    # Removes the contents from your default branch from the working directory
    ```

1. To create a new Jekyll site, use the `jekyll new` command:

   ```shell
   $ jekyll new --skip-bundle .
   # Creates a Jekyll site in the current directory
   ```

1. Open the Gemfile that Jekyll created.
1. Add "#" to the beginning of the line that starts with `gem "jekyll"` to comment out this line.
1. Add the `github-pages` gem by editing the line starting with `# gem "github-pages"`. Change this line to:

   ```ruby
   gem "github-pages", "~> GITHUB-PAGES-VERSION", group: :jekyll_plugins
   ```

   Replace GITHUB-PAGES-VERSION with the latest supported version of the `github-pages` gem. You can find this version here: "[Dependency versions](https://pages.github.com/versions/)."

   The correct version Jekyll will be installed as a dependency of the `github-pages` gem.
1. Save and close the Gemfile.
1. From the command line, run `bundle install`.
1. Open the `.gitignore` file that Jekyll created and ignore the gems lock file by adding this line:

   ```shell
   Gemfile.lock
   ```

1. Optionally, make any necessary edits to the `_config.yml` file. This is required for relative paths when the repository is hosted in a subdirectory.  For more information, see "[AUTOTITLE](/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository)."

   ```yaml
   domain: my-site.github.io       # if you want to force HTTPS, specify the domain without the http at the start, e.g. example.com
   url: https://my-site.github.io  # the base hostname and protocol for your site, e.g. http://example.com
   baseurl: /REPOSITORY-NAME/      # place folder name if the site is served in a subfolder
   ```

1. Optionally, test your site locally. For more information, see "[Testing your site locally with Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)."
1. Add and commit your work.

   ```shell
   git add .
   git commit -m 'Initial GitHub pages site with Jekyll'
   ```





1. Push the repository to , replacing BRANCH with the name of the branch you're working on.

   ```shell
   git push -u origin BRANCH
   ```


## Next steps

To add a new page or post to your site, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll)."

 For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)."
