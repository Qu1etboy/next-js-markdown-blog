---
title: 'Git 101 for beginners'
metaTitle: 'git 101 for beginners'
metaDesc: 'How to use git for beginners'
thumbnail: '/images/thumbnail.jpg'
date: '6/17/2022'
---

*written by Weerawong Vonggatunyu 11/6/2022*

This post we will talk about why we use git and basic commands of git so you can use it faster. p.s. sorry for my bad english.
I write this as a note to not forget about git. It not 100% accuarate but I want to share it anyway. If you see some thing wrong feel free to say so I can fix it.

## Why we use git?
git is a version control. Imagin you want to change some thing in a project but don't want to mess it up so you need to do some kind of backup. luckily with git you don't need to do that. Git lets you go back to previous state of the project so you can make changes with no worry.

## Installation
download git from [here](https://git-scm.com/downloads)

## Basic commands
- `git init` 
    
    Initialize git in your directory
    
- `git config` 

    Let's git know who you are when push to github by setup a username and email
    - `git config --global user.name` 
    - `git config --global user.email` 
    
    The global mean it will use this username and email for all the repository. If you use local you need to setup everytime you initialize git.

- `git clone [url]` 

    Clone a repository to your local machine e.g. from github.

- `git status` 

    Check the state of files 
    - untracked
    - tracked

- `git add [name]` 

    Use to track the file before commit.

- `git commit` 
    
    Commit the file to push to repository.
    - `git commit -m "message"` 
        
        use `-m` to write a commit message.

- `git remote`

    Check the list of remote repository name.

- `git remote add [name] [url]`

    Add a remote repository to your local repository so you can make a push. you do this if you have not clone from github.
    We usually use origin as a name.

- `git remote [name] show` 

    This command will show the path where it remote into.

- `git push origin main` 

    Push a file to remote repository e.g. Github.

- `git pull [name] [branch]` 

    When your remote repository got an update use this command to make your local repository up to date. For example you work in a mutiple devices likes laptop and desktop. You push your work to github via your laptop. When you come home and want to work from your desktop you can just pull everything make it up to date and can work continuously.

- `git checkout -b [branch name]` 

    Create a new branch to work.
Such as when you want to add a new feature to your project but not sure it will work. The thing you do in new branch will not effect a main branch so you can do everything you want.

- `git checkout [branch name]` 

    Use to go to different branch.

- `git merge [branch name]`

     When you are done. you can merge it to main. Make sure to be in main branch.

## Reference
- [git documentation](https://git-scm.com/doc)

***