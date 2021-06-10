# Contribution Guidelines

## Table Of Contents

- [1. Local Setup]()
- [1. Local Setup]()
- [1. Local Setup]()

## Introduction

Thank you for your interest in helping to develop and leverage even more the power of MaTheX2Java. We are really eager to have you here! This project focuses on providing not only a functional but a maintainable and scalable application which provides its users and developers a great experience. In order to offer this a set of guidelines were defined so that these are followed and respected by each contributor of this project. Please carefully read through them and if in any doubts feel free to open an issue.

## Local Setup

##### Prerequisites

1. Antlr4

``

If you'd like to contribute to the project or just want to test MaTheX2Java locally, please follow the below steps:

1. Pull necessary dependencies:

`$ npm install`

#### Branches

There are two main branches in this repository:

- `master`: used for promotion of changes to the live environment (to our users).
- `development`: used for aggregating changes to be pushed to `master` for deployment of a new version of the application (beta stage). Note that before pushing to master all the action items/features for a specific version must be first implemented. This however is overriden when a hotfix is to be deployed.

When developing new features, bug fixes or any other change a new branch forked from `development` must be created. Ideally this should be one per issue.
These shall follow a naming format:

- `fix/<succint-name>`: used for fixing bugs or unwanted issues.
- `dev/<succint-name>`: used for refactors and development-related issues (e.g. testing).
- `feature/<succint-name>`: used for the implementation of features.