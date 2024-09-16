

## Troubleshooting 404 errors

In this guide you'll find common reasons you may be seeing a 404 error while building your site.

* ['s Status page](#githubs-status-page)
* [DNS setup](#dns-setup)
* [Browser cache](#browser-cache)
* [`index.html` file](#indexhtml-file)
* [Directory contents](#directory-contents)
* [Custom domain](#custom-domain)
* [Repository](#repository)

### 's Status page

If you see a 404 error while building a site, first check 's [Status page](https://githubstatus.com) for any active incidents. 

### DNS setup

Make sure 's DNS records are set up correctly with your DNS provider. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)."

### Browser cache

If your site is private and you see a 404 error, you may need to clear your browser's cache. For more information on clearing your cache, see your browser's documentation.

### `index.html` file

will look for an `index.html` file as the entry file for your site.

* Make sure you have an `index.html` file in the repository for your site on . For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)."
* The entry file must be at the top level of your chosen publishing source. For example, if your publishing source is the `/docs` directory on the `main` branch, your entry file must be located in the `/docs` directory on a branch called `main`.

  If your publishing source is a branch and directory, the entry file must be at the top level of the source directory on the source branch. For example, if your publishing source is the `/docs` directory on the `main` branch, your entry file must be located in the `/docs` directory on a branch called `main`.

  If your publishing source is a  workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your  workflow generate your entry file when the workflow runs.

* The name of the `index.html` file is case sensitive. For example, `Index.html` will not work.
* The name of the file should be `index.html`, not `index.HTML` or any other variation.

### Directory contents

Check that your directory contents are in the root directory.



### Custom domain

If you're using a custom domain, make sure it's set up correctly. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)."

* The `CNAME` record should always point to `<USER>.github.io` or `<ORGANIZATION>.github.io`, excluding the repository name. 
* If you are able to access your landing page, but encounter broken links throughout, it is likely because you either didn't have a custom domain name before or are reverting back from having a custom domain name. In such cases, changing the routing path does not initiate a rebuild of the page. The recommended solution is to ensure that your site rebuilds automatically when adding or removing a custom domain name. This may involve configuring a commit author and modifying the custom domain name settings.

### Repository

Check whether your repository meets the following requirements.

* The branch you are using to publish your site must be the `main` or default branch.
* The repository must have a commit pushed to it by someone with admin permissions for the repository, such as the repository owner.
* Switching the repository's visibility from public to private or vice versa will change the URL of your site, which will result in broken links until the site is rebuilt.
* If you are using a private repository for the site, please check if your , , or  subscription is still active. If you renew the plan, the site will be automatically re-deployed. Otherwise, you can change your repository's visibility to public to continue using for free.

If you are still receiving a 404 error, start a [ discussion](https://github.com/orgs/community/discussions/categories/pages) in the Pages category.
