

## About publishing sources





## Publishing from a branch

1. Make sure the branch you want to use as your publishing source already exists in your repository.



1. Under "Build and deployment", under "Source", select **Deploy from a branch**.
1. Under "Build and deployment", use the branch dropdown menu and select a publishing source.
   ![Screenshot of Pages settings in a  repository. A menu to select a branch for a publishing source, labeled "None," is outlined in dark orange.]
1. Optionally, use the folder dropdown menu to select a folder for your publishing source.
   ![Screenshot of Pages settings in a  repository. A menu to select a folder for a publishing source, labeled "/(root)," is outlined in dark orange.]
1. Click **Save**.

### Troubleshooting publishing from a branch





If you choose the `docs` folder on any branch as your publishing source, then later remove the `/docs` folder from that branch in your repository, your site won't build and you'll get a page build error message for a missing `/docs` folder. For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites#missing-docs-folder)."



Your site will always be deployed with a  workflow run, even if you've configured your site to be built using a different CI tool. Most external CI workflows "deploy" to by committing the build output to the `gh-pages` branch of the repository, and typically include a `.nojekyll` file. When this happens, the  workflow will detect the state that the branch does not need a build step, and will execute only the steps necessary to deploy the site to servers.

To find potential errors with either the build or deployment, you can check the workflow run for your site by reviewing your repository's workflow runs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)." For more information about how to re-run the workflow in case of an error, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."



## Publishing with a custom  workflow

To configure your site to publish with :




1. Under "Build and deployment", under "Source", select ****.
1.  will suggest several workflow templates. If you already have a workflow to publish your site, you can skip this step. Otherwise, choose one of the options to create a  workflow. For more information about creating your custom workflow, see "[Creating a custom  workflow to publish your site](#creating-a-custom-github-actions-workflow-to-publish-your-site)."

   does not associate a specific workflow to the settings. However, the settings will link to the workflow run that most recently deployed your site.

### Creating a custom  workflow to publish your site

For more information about , see "[AUTOTITLE](/actions)."

When you configure your site to publish with ,  will suggest workflow templates for common publishing scenarios. The general flow of a workflow is to:

1. Trigger whenever there is a push to the default branch of the repository or whenever the workflow is run manually from the Actions tab.
1. Use the [`actions/checkout`](https://github.com/actions/checkout) action to check out the repository contents.
1. If required by your site, build any static site files.
1. Use the [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) action to upload the static files as an artifact.
1. If the workflow was triggered by a push to the default branch, use the [`actions/deploy-pages`](https://github.com/actions/deploy-pages) action to deploy the artifact. This step is skipped if the workflow was triggered by a pull request.

The workflow templates use a deployment environment called `github-pages`. If your repository does not already include an environment called `github-pages`, the environment will be created automatically. We recommend that you add a deployment protection rule so that only the default branch can deploy to this environment. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."




**Note**: A `CNAME` file in your repository file does not automatically add or remove a custom domain. Instead, you must configure the custom domain through your repository settings or through the API. For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" and "[AUTOTITLE](/rest/pages#update-information-about-a-github-pages-site)."




### Troubleshooting publishing with a custom  workflow

For information about how to troubleshoot your  workflow, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/about-monitoring-and-troubleshooting)."
