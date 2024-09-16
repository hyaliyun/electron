

## About domain verification for GitHub Pages

When you verify a custom domain for your personal account, only repositories owned by your personal account may be used to publish a site to the verified custom domain or the domain's immediate subdomains. Similarly, when you verify a custom domain for your organization, only repositories owned by that organization may be used to publish a site to the verified custom domain or the domain's immediate subdomains.

Verifying your domain stops other GitHub users from taking over your custom domain and using it to publish their own site. Domain takeovers can happen when you delete your repository, when your billing plan is downgraded, or after any other change which unlinks the custom domain or disables while the domain remains configured for and is not verified.

When you verify a domain, any immediate subdomains are also included in the verification. For example, if the `github.com` custom domain is verified, `docs.github.com`, `support.github.com`, and any other immediate subdomains will also be protected from takeovers.<!-- markdownlint-disable-line search-replace -->



It's also possible to verify a domain for your organization or enterprise, which displays a "Verified" badge on the organization or enterprise profile and, on ,  allows you to restrict notifications to email addresses using the verified domain. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."

### Verifying a domain that is already taken

You may be verifying a domain you own, which is currently in use by another user or organization, to make it available for your website. In this case, the domain will be immediately released from websites which are owned by other users or organizations. If you are attempting to verify an already verified domain (verified by another user or organization), the release process will not be successful.

## Verifying a domain for your user site


1. In the "Code, planning, and automation" section of the sidebar, click ** Pages**.

1. Wait for your DNS configuration to change, this may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `USERNAME` with your username and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
   ```



## Verifying a domain for your organization site

Organization owners can verify custom domains for their organization.



1. In the "Code, planning, and automation" section of the sidebar, click ** Pages**.

1. Wait for your DNS configuration to change. This may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `ORGANIZATION` with the name of your organization and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
   ```


