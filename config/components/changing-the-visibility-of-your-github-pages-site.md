

## About access control for sites

With access control for , you can restrict access to your project site by publishing the site privately. A privately published site can only be accessed by people with read access to the repository the site is published from. You can use privately published sites to share your internal documentation or knowledge base with members of your enterprise.



Access control is available for project sites that are published from a private or internal repository that are owned by the organization. You cannot manage access control for an organization site. For more information about the types of sites, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

## About subdomains for privately published sites

Privately published sites are available at a different subdomain than publicly published sites. This ensures that your site is secure from the moment it's published:

* We automatically secure every subdomain of `*.pages.github.io` with a TLS certificate, and enforce HSTS to ensure that browsers always serve the page over HTTPS.
* We use a unique subdomain for the privately published site to ensure that other repositories in your organization cannot publish content on the same origin as the site. This protects your site from "[cookie tossing](https://github.blog/2013-04-09-yummy-cookies-across-domains/)". This is also why we don't host sites on the `github.com` domain.

You can see your site's unique subdomain in the "Pages" tab of your repository settings. If you're using a static site generator configured to build the site with the repository name as a path, you may need to update the settings for the static site generator when changing the site to private. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" or the documentation for your static site generator.

To use a shorter and more memorable domain for your privately published site, you can configure a custom domain. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site)."

## Changing the visibility of your site




1. Under "", select the **visibility** dropdown menu, then select a visibility.
1. To see your published site, under "", click 

   ![Screenshot of a confirmation message for listing the site's URL. To the right of a long blue URL, a button labeled "Visit site" is outlined in dark orange.]

  

 

  
