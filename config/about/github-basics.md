# Introduction to GitHub

This lesson covers the basics of GitHub, a platform to host and manage changes to your code.

![Intro to GitHub]
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Introduction

In this lesson, we'll cover:

- tracking the work you do on your machine
- working on projects with others
- how to contribute to open source software

### Prerequisites

Before you begin, you'll need to check if Git is installed. In the terminal type: 
`git --version`

If Git is not installed, [download Git](https://git-scm.com/downloads). Then, setup your local Git profile in the terminal:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

To check if Git is already configured you can type:
`git config --list`

You'll also need a GitHub account, a code editor (like Visual Studio Code), and you'll need to open your terminal (or: command prompt).

Navigate to [github.com](https://github.com/) and create an account if you haven't already, or log in and fill out your profile. 

✅ GitHub isn't the only code repository in the world; there are others, but GitHub is the best known

### Preparation

You'll need both a folder with a code project on your local machine (laptop or PC), and a public repository on GitHub, which will serve as an example for how to contribute to the projects of others.  

---

## Code management

Let's say you have a folder locally with some code project and you want to start tracking your progress using git - the version control system. Some people compare using git to writing a love letter to your future self. Reading your commit messages days or weeks or months later you'll be able to recall why you made a decision, or "rollback" a change - that is, when you write good "commit messages".

### Task: Make a repository and commit code  

> Check out video
> 
> [![Git and GitHub basics video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)


1. **Create repository on GitHub**. On GitHub.com, in the repositories tab, or from the navigation bar top-right, find the **new repo** button.

   1. Give your repository (folder) a name
   1. Select **create repository**.

1. **Navigate to your working folder**. In your terminal, switch to the folder (also known as the directory) you want to start tracking. Type:

   ```bash
   cd [name of your folder]
   ```

1. **Initialize a git repository**. In your project type:

   ```bash
   git init
   ```

1. **Check status**. To check the status of your repository type:

   ```bash
   git status
   ```

   the output can look something like this:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Typically a `git status` command tells you things like what files are ready to be _saved_ to the repo or has changes on it that you might want to persist.

1. **Add all files for tracking**
   This also called as staging files/ adding files to the staging area.

   ```bash
   git add .
   ```

   The `git add` plus `.` argument indicates that all your files & changes for tracking. 

1. **Add selected files for tracking**

   ```bash
   git add [file or folder name]
   ```

   This helps us to add only selected files to the staging area when we don't want to commit all files at once.

1. **Unstage all files**

   ```bash
   git reset
   ```

   This command helps us to unstage all files at once.

1. **Unstage a particular file**

   ```bash
   git reset [file or folder name]
   ```

   This command helps us to unstage only a particular file at once that we don't want to include for the next commit.


