

## Supported custom domains



On works with two types of domains: subdomains and apex domains. For a list of unsupported custom domains, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#custom-domain-names-that-are-unsupported)."

| Supported custom domain type | Example |
|---|---|
| `www` subdomain | `www.example.com` |
| Custom subdomain | `blog.example.com` |
| Apex domain        | `example.com` |

You can set up either or both of apex and `www` subdomain configurations for your site. For more information on apex domains, see "[Using an apex domain for your  site](#using-an-apex-domain-for-your-github-pages-site)."

We recommend always using a `www` subdomain, even if you also use an apex domain. When you create a new site with an apex domain, we automatically attempt to secure the `www` subdomain for use when serving your site's content, but you need to make the DNS changes to use the `www` subdomain. If you configure a `www` subdomain, we automatically attempt to secure the associated apex domain. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)."

## Using a custom domain across multiple repositories

If you set a custom domain for a user or organization site, by default, the same custom domain will be used for all project sites owned by the same account. For more information about site types, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

For example, if the custom domain for your user site is `www.octocat.com`, and you have a project site with no custom domain configured that is published from a repository called `octo-project`, the site for that repository will be available at `www.octocat.com/octo-project`.

You can override the default custom domain by adding a custom domain to the individual repository.



**Note:** The URLs for project sites that are privately published are not affected by the custom domain for your user or organization site. For more information about privately published sites, see "[AUTOTITLE](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)in the 



To remove the default custom domain, you must remove the custom domain from your user or organization site.

## Using a subdomain for your site

A subdomain is the part of a URL before the root domain. You can configure your subdomain as `www` or as a distinct section of your site, like `blog.example.com`.

Subdomains are configured with a `CNAME` record through your DNS provider. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)."

### `www` subdomains

A `www` subdomain is the most commonly used type of subdomain. For example, `www.example.com` includes a `www` subdomain.

`www` subdomains are the most stable type of custom domain because `www` subdomains are not affected by changes to the IP addresses of s servers.

### Custom subdomains

A custom subdomain is a type of subdomain that doesn't use the standard `www` variant. Custom subdomains are mostly used when you want two distinct sections of your site. For example, you can create a site called `blog.example.com` and customize that section independently from `www.example.com`.

## Using an apex domain for your site

An apex domain is a custom domain that does not contain a subdomain, such as `example.com`. Apex domains are also known as base, bare, naked, root apex, or zone apex domains.

An apex domain is configured with an `A`, `ALIAS`, or `ANAME` record through your DNS provider. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)."

 For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)."

## Securing the custom domain for your site

For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)" and "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)."

There are a couple of reasons your site might be automatically disabled.


## Further reading

* "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)"
