

When you unpublish your site, your current deployment is removed and the site will no longer be available. Any existing repository settings or content will not be affected.

Unpublishing a site does not permanently delete the site. For information on deleting a site, see "[AUTOTITLE](/pages/getting-started-with-github-pages/deleting-a-github-pages-site)."


1. Under ****, next to the **Your site is live at** message, click .
1. In the menu that appears, select **Unpublish site**.
   ![Screenshot of settings showing the URL of a live Pages site. Under the horizontal kebab icon to the right, the "Unpublish site" dropdown option is outlined in dark orange.]

## Re-enabling a site that has been unpublished

Unpublishing your site removes your current deployment. To make your site available again, you can create a new deployment.

### Re-enable using 

A successful workflow run in the repository for your site will create a new deployment. Trigger a workflow run to redeploy your site.

### Re-enabling your site when publishing from a branch

1. Configure your publishing source to publish from a branch of your choosing. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch)."
1. Commit to your publishing source to create a new deployment.
