

## About Jekyll build errors

If you are publishing from a branch, sometimes will not attempt to build your site after you push changes to your site's publishing source.
* The person who pushed the changes hasn't verified their email address. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address)."
* You're pushing with a deploy key. If you want to automate pushes to your site's repository, you can set up a machine user instead. For more information, see "[AUTOTITLE](/authentication/connecting-to-github-with-ssh/managing-deploy-keys#machine-users)."
* You're using a CI service that isn't configured to build your publishing source. For example, Travis CI won't build the `gh-pages` branch unless you add the branch to a safe list. For more information, see "[Customizing the build](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)" on Travis CI, or your CI service's documentation.



**Note:** It can take up to 10 minutes for changes to your site to publish after you push the changes to .




If Jekyll does attempt to build your site and encounters an error, you will receive a build error message. There are two main types of Jekyll build error messages.
* A "Page build warning" message means your build completed successfully, but you may need to make changes to prevent future problems.
* A "Page build failed" message means your build failed to complete. If Jekyll is able to detect a reason for the failure, you'll see a descriptive error message.


For more information about troubleshooting build errors, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)."



## Viewing Jekyll build error messages with 

By default, your site is built and deployed with a  workflow run unless you've configured your site to use a different CI tool. To find potential build errors, you can check the workflow run for your site by reviewing your repository's workflow runs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."  For more information about how to re-run the workflow in case of an error, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."




## Viewing your repository's build failures on 

You can see build failures (but not build warnings) for your site on  in the **Settings** tab of your site's repository.


## Viewing Jekyll build error messages locally

We recommend testing your site locally, which allows you to see build error messages on the command line, and addressing any build failures before pushing changes to . For more information, see "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)."

## Viewing Jekyll build error messages in your pull request

If you are publishing from a branch, when you create a pull request to update your publishing source on , you can see build error messages on the **Checks** tab of the pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."

If you are publishing with a custom  workflow, in order to see build error messages in your pull request, you must configure your workflow to run on the `pull_request` trigger. When you do this, we recommend that you skip any deploy steps if the workflow was triggered by the `pull_request` event. This will allow you to see any build errors without deploying the changes from your pull request to your site. For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request)" and "[AUTOTITLE](/actions/learn-github-actions/expressions)."

## Viewing Jekyll build errors by email

If you are publishing from a branch, when you push changes to your publishing source on , will attempt to build your site. If the build fails, you'll receive an email at your primary email address.

If you are publishing with a custom  workflow, in order to receive emails about build errors in your pull request, you must configure your workflow to run on the `pull_request` trigger. When you do this, we recommend that you skip any deploy steps if the workflow was triggered by the `pull_request` event. This will allow you to see any build errors without deploying the changes from your pull request to your site. For more information, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request)" and "[AUTOTITLE](/actions/learn-github-actions/expressions)."

## Viewing Jekyll build error messages in your pull request with a third-party CI service

You can configure a third-party service, such as [Travis CI](https://travis-ci.com/), to display error messages after each commit.

1. If you haven't already, add a file called _Gemfile_ in the root of your publishing source, with the following content:

   ```ruby
   source `https://rubygems.org`
   gem `github-pages`
   ```

1. Configure your site's repository for the testing service of your choice. For example, to use [Travis CI](https://travis-ci.com/), add a file named _.travis.yml_ in the root of your publishing source, with the following content:

   ```yaml
   language: ruby
   rvm:
     - 2.3
   script: "bundle exec jekyll build"
   ```

1. You may need to activate your repository with the third-party testing service. For more information, see your testing service's documentation.
