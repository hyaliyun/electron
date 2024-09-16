

## About 

is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on , optionally runs the files through a build process, and publishes a website. You can see examples of sites in the [examples collection](https://github.com/collections/github-pages-examples).


You can host your site on 's `github.io` domain or your own custom domain. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site)."






To get started, see "[AUTOTITLE](/pages/getting-started-with-github-pages/creating-a-github-pages-site)."

Organization owners can disable the publication of sites from the organization's repositories. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."

## Types of sites

There are three types of sites: project, user, and organization. Project sites are connected to a specific project hosted on , such as a JavaScript library or a recipe collection. User and organization sites are connected to a specific account on .

To publish a user site, you must create a repository owned by your personal account that's named `<username>.github.io``<username>.<hostname>`. To publish an organization site, you must create a repository owned by an organization that's named `<organization>.github.io``<organization>.<hostname>`. Unless you're using a custom domain, user and organization sites are available at `http(s)://<username>.github.io` or `http(s)://<organization>.github.io`.

The source files for a project site are stored in the same repository as their project. Unless you're using a custom domain, project sites are available at `http(s)://<username>.github.io/<repository>` or `http(s)://<organization>.github.io/<repository>`.


If you publish your site privately, the URL for your site will be different. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."



For more information about how custom domains affect the URL for your site, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-a-custom-domain-across-multiple-repositories)."


You can only create one user or organization site for each account on . Project sites, whether owned by an organization or a personal account, are unlimited.


The URL where your site is available depends on whether subdomain isolation is enabled for
| Type of site | Subdomain isolation enabled | Subdomain isolation disabled |
| ------------ | --------------------------- | ---------------------------- |
User | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
Organization | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
Project site owned by personal account | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
Project site owned by organization account | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)" or contact your site administrator.


## Publishing sources for sites





For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."



## Limitations for 

If you're a , your use of is limited.

* sites can only be published from repositories owned by organizations.
* sites are always privately published, and you cannot change this visibility. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
* You cannot create an organization site (a site published from a repository named `<organization>.github.io`)

For more information about , see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."


## Static site generators

publishes any static files that you push to your repository. You can create your own static files or use a static site generator to build your site for you. You can also customize your own build process locally or on another server.

If you use a custom build process or a static site generator other than Jekyll, you can write a  to build and publish your site.  provides workflow templates for several static site generators. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

If you publish your site from a source branch, will use Jekyll to build your site by default. If you want to use a static site generator other than Jekyll, we recommend that you write a  to build and publish your site instead. Otherwise, disable the Jekyll build process by creating an empty file called `.nojekyll` in the root of your publishing source, then follow your static site generator's instructions to build your site locally.

does not support server-side languages such as PHP, Ruby, or Python.

## Limits on use of 


sites created after June 15, 2016, and using `github.io` domains are served over HTTPS. If you created your site before June 15, 2016, you can enable HTTPS support for traffic to your site. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)."

### Prohibited uses


is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). 

In addition, your use of is subject to the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service), including the restrictions on get-rich-quick schemes, sexually obscene content, and violent or threatening content or activity.

### Educational exercises

Using to create a copy of an existing website as a learning exercise is not prohibited. However, in addition to complying with the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service), you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes.

### Usage limits

sites are subject to the following usage limits:

* source repositories have a recommended limit of 1 GB. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github#file-and-repository-size-limitations)"
* Published sites may be no larger than 1 GB.
* deployments will timeout if they take longer than 10 minutes.

* sites have a _soft_ bandwidth limit of 100 GB per month.
* sites have a _soft_ limit of 10 builds per hour. This limit does not apply if you build and publish your site with a custom  workflow.
* In order to provide consistent quality of service for all sites, rate limits may apply. These rate limits are not intended to interfere with legitimate uses of . If your request triggers rate limiting, you will receive an appropriate response with an HTTP status code of `429`, along with an informative HTML body.

If your site exceeds these usage quotas, we may not be able to serve your site, or you may receive a polite email from  suggesting strategies for reducing your site's impact on our servers, including putting a third-party content distribution network (CDN) in front of your site, making use of other  features such as releases, or moving to a different hosting service that might better fit your needs.



## MIME types on 

A MIME type is a header that a server sends to a browser, providing information about the nature and format of the files the browser requested. supports more than 750 MIME types across thousands of file extensions. The list of supported MIME types is generated from the [mime-db project](https://github.com/jshttp/mime-db).

While you can't specify custom MIME types on a per-file or per-repository basis, you can add or modify MIME types for use on . For more information, see [the mime-db contributing guidelines](https://github.com/jshttp/mime-db#adding-custom-media-types).


## Data collection

When a site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into  or not. For more information about 's security practices, see [ Privacy Statement](/site-policy/privacy-policies/github-privacy-statement).


## Further reading

* [](https://github.com/skills/github-pages) on 
* "[AUTOTITLE](/rest/repos#pages)"
