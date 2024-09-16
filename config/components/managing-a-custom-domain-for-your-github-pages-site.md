

People with admin permissions for a repository can configure a custom domain for a site.

## About custom domain configuration



Make sure you add your custom domain to your site before configuring your custom domain with your DNS provider. Configuring your custom domain with your DNS provider without adding your custom domain to  could result in someone else being able to host a site on one of your subdomains.



The `dig` command, which can be used to verify correct configuration of DNS records, is not included in Windows. To verify that your DNS records are configured correctly, you can use the `Resolve-DnsName` PowerShell command or install [BIND](https://www.isc.org/bind/).





**Note:** DNS changes can take up to 24 hours to propagate.



## Configuring an apex domain

To set up an apex domain, such as `example.com`, you must configure a custom domain in your repository settings and at least one `ALIAS`, `ANAME`, or `A` record with your DNS provider.




1. Under "Custom domain", type your custom domain, then click **Save**. If you are publishing your site from a branch, this will create a commit that adds a `CNAME` file directly to the root of your source branch. If you are publishing your site with a custom  workflow, no `CNAME` file is created, so you need to create one manually (containing only a line of text with your custom domain). For more information about your publishing source, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
1. Navigate to your DNS provider and create either an `ALIAS`, `ANAME`, or `A` record. You can also create `AAAA` records for IPv6 support. If you're implementing IPv6 support, we highly recommend using an `A` record in addition to your `AAAA` record, due to slow adoption of IPv6 globally. 
    * To create an `ALIAS` or `ANAME` record, point your apex domain to the default domain for your site. 
    * To create `A` records, point your apex domain to the IP addresses for .

      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```

    * To create `AAAA` records, point your apex domain to the IP addresses for .

      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```



1. To confirm that your DNS record configured correctly, use the `dig` command, replacing _EXAMPLE.COM_ with your apex domain. Confirm that the results match the IP addresses for above.
   * For `A` records:

     ```shell
     $ dig EXAMPLE.COM +noall +answer -t A
     > EXAMPLE.COM    3600    IN A     185.199.108.153
     > EXAMPLE.COM    3600    IN A     185.199.109.153
     > EXAMPLE.COM    3600    IN A     185.199.110.153
     > EXAMPLE.COM    3600    IN A     185.199.111.153
     ```

   * For `AAAA` records:

     ```shell
     $ dig EXAMPLE.COM +noall +answer -t AAAA
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
     ```

      Remember to also check your `A` record.



### Configuring an apex domain and the `www` subdomain variant



**Note:** Setting up a `www` subdomain alongside an apex domain is recommended for HTTPS secured websites.



 For more information, see "[Configuring a subdomain](#configuring-a-subdomain)."

Navigate to your DNS provider and create a `CNAME` record for the `www` subdomain that points to your default domain. For example, if your site is located at `<user>.github.io`, you should create a `CNAME` record that points `www.example.com` to `<user>.github.io` Similarly, for an organization site located at `<organization>.github.io`, you should create a `CNAME` record that points `www.example.com` to `<organization>.github.io`. Ensure that the `CNAME` record points directly to `<user>.github.io` or `<organization>.github.io` without including the repository name.

 

## Configuring a subdomain

To set up a `www` or custom subdomain, such as `www.example.com` or `blog.example.com`, you must add your domain in the repository settings. After that, configure a CNAME record with your DNS provider.




1. Under "Custom domain", type your custom domain, then click **Save**. If you are publishing your site from a branch, this will create a commit that adds a `CNAME` file directly to the root of your source branch. If you are publishing your site with a custom  workflow, no `CNAME` file is created, so you need to create one manually (containing only a line of text with your custom domain). For more information about your publishing source, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

   

   **Note:** If your custom domain is an internationalized domain name, you must enter the Punycode encoded version.

   For more information on Punycodes, see [Internationalized domain name](https://en.wikipedia.org/wiki/Internationalized_domain_name).

   

1. Navigate to your DNS provider and create a `CNAME` record that points your subdomain to the default domain for your site. For example, if you want to use the subdomain `www.example.com` for your user site, create a `CNAME` record that points `www.example.com` to `<user>.github.io`. If you want to use the subdomain `another.example.com` for your organization site, create a `CNAME` record that points `another.example.com` to `<organization>.github.io`. The `CNAME` record should always point to `<user>.github.io` or `<organization>.github.io`, excluding the repository name.  



1. To confirm that your DNS record configured correctly, use the `dig` command, replacing _WWW.EXAMPLE.COM_ with your subdomain.

   ```shell
   $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
   > ;WWW.EXAMPLE.COM.                    IN      A
   > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
   > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
   > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
   ```




   

   **Note:** If you point your custom subdomain to your apex domain, you will encounter issues with enforcing HTTPS to your website, and you may encounter issues where your subdomain does not reach your site at all.

   

## DNS records for your custom domain

If you are familiar with the process of configuring your domain for a site, you can use the table below to find the DNS values for your specific scenario and the DNS record types that your DNS provider supports. For more information, including how to configure your site on  and how to verify the configuration using the `dig` command, refer to the sections above.

To configure an apex domain, you only need to pick a single DNS record type from the table below. To configure an apex domain and `www` subdomain (for example, `example.com` and `www.example.com`), configure the apex domain and then the subdomain. For more information, see "[Configuring an apex domain and the `www` subdomain variant](#configuring-an-apex-domain-and-the-www-subdomain-variant)."



| Scenario | DNS record type | DNS record name | DNS record value(s) |
|---|---|---|---|
| Apex domain<br />(`example.com`) | `A` | `@` | `185.199.108.153`<br />`185.199.109.153`<br />`185.199.110.153`<br />`185.199.111.153` |
| Apex domain<br />(`example.com`) | `AAAA` | `@` | `2606:50c0:8000::153`<br />`2606:50c0:8001::153`<br />`2606:50c0:8002::153`<br />`2606:50c0:8003::153` |
| Apex domain<br />(`example.com`) | `ALIAS` or `ANAME` | `@` | `USERNAME.github.io` or<br /> `ORGANIZATION.github.io` |
| Subdomain<br />(`ww​w.example.com`,<br />`blog.example.com`) | `CNAME` | `SUBDOMAIN` | `USERNAME.github.io` or<br /> `ORGANIZATION.github.io` |

## Removing a custom domain

If you get an error about a custom domain being taken, you may need to remove the custom domain from another repository.




1. Under "Custom domain," click **Remove**.

   ![Screenshot of a settings box to save or remove a custom domain on . To the right of a text box reading "example.com" is a button labeled "Remove" in red type.]

## Securing your custom domain

 For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."

## Further reading

* "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)"
