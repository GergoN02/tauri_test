# Multisync Frontend

This is the top level Documentation for the Multisync fronted repository.
Here is most of the _Getting Started_ steps, as well as links to more specific Documentation.
Further documentation can be found in the [docs](./docs/) folder.

## Prequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn v1.x](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) (Why yarn and not npm? [see here](https://www.knowledgehut.com/blog/web-development/yarn-vs-npm))
- [Vite](https://vitejs.dev/) (Why not something like CRA? (https://vitejs.dev/guide/why.html))

## Project Setup

**Install Dependencies**

```
yarn
```

**Run the dev server**

```
yarn dev
```

## Linting

There is a heavily opinionated linting configuration enabled on this repo.
It is set up this way to avoid as much confusion and silly errors as possible.
If you encounter issues with linting, or some rules seem to cause issues,
please raise this with the group so a discussion can be had about the necessity of said plugin/rule.

## Committing

The project is set up to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)
rules and syntax. It's done this way, so the git history is clear and easy to understand, and can later be
used to generate changelogs.

Commits are linted at the time of commit, so messages not abiding by this standard will be flagged, and the
commit will be discarded. If you use VSCode's built-in git tools, installing the Conventional Commit extension
is recommended.

If command-line use is preferred, stage your changes first (`git add .`), then run `yarn commit` to run the commit CLI tool.
Please refrain from using `git commit -m "message"` as this escapes the commit linting process and could result in nasty errors.
