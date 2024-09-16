

## About custom workflows

Custom workflows allow sites to be built via the use of . You can still select the branch you would like to use via the workflow file, but you are able to do much more with the use of custom workflows. To start using custom workflows you must first enable them for your current repository. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)."

## Configuring the `configure-pages` action

 enables the use of through the `configure-pages` action, which also lets you gather different metadata about a website. For more information, see the [`configure-pages`](https://github.com/marketplace/actions/configure-github-pages) action.

To use the action place this snippet under your `jobs` in the desired workflow.

```yaml
- name: Configure GitHub Pages
  uses: actions/configure-pages@v3
```

This action helps support deployment from any static site generator to . To make this process less repetitive you can use workflow templates for some of the most widely used static site generators. For more information, see "[AUTOTITLE](/actions/learn-github-actions/using-starter-workflows)."

## Configuring the `upload-pages-artifact` action

The `upload-pages-artifact` actions enables you to package and upload artifacts. The artifact should be a compressed `gzip` archive containing a single `tar` file. The `tar` file must be under 10GB in size and should not contain any symbolic or hard links. For more information, see the [`upload-pages-artifact`](https://github.com/marketplace/actions/upload-github-pages-artifact) action.

To use the action in your current workflow place this snippet under `jobs`.

```yaml
- name: Upload GitHub Pages artifact
  uses: actions/upload-pages-artifact@v1
```

## Deploying artifacts

The `deploy-pages` action handles the necessary setup for deploying artifacts. To ensure proper functionality, the following requirements should be met:

* The job must have a minimum of `pages: write` and `id-token: write` permissions.
* The `needs` parameter must be set to the `id` of the build step. Not setting this parameter may result in an independent deployment that continuously searches for an artifact that hasn't been created.
* An `environment` must be established to enforce branch/deployment protection rules. The default environment is `github-pages`.
* To specify the URL of the page as an output, utilize the `url:` field.

For more information, see the [`deploy-pages`](https://github.com/marketplace/actions/deploy-github-pages-site) action.






## Linking separate build and deploy jobs

You can link your `build` and `deploy` jobs in a single workflow file,  eliminating the need to create two separate files to get the same result. To get started on your workflow file, under `jobs` you can define a `build` and `deploy` job to execute your jobs.



In certain cases, you might choose to combine everything into a single job, especially if there is no need for a build process. Consequently, you would solely focus on the deployment step.



You can define your jobs to be run on different runners, sequentially, or in parallel. For more information, see "[AUTOTITLE](/actions/using-jobs)."
