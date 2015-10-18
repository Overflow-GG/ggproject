# GG Project

## Overview

##### The cheapest and most fun way of getting games

With GG Project you don't need to traffic human organs to pay for the latest games, you can get them for as low as $0,99 and have fun for free at the same time!

Compite against skilled players like you and win both reputation and the latest games in the market. 

*GG Project: Pay with your skill, not your money*

## Development process

#### Developing

* Develop every new functionality or bugfix in a new branch
* When you have finnished your code, squash every commit from the new branch.

#### Building

* To build locally, run the command `meteor` inside the folder that contains `.meteor`
* The application will be available in `localhost:3000` 

#### Merging

* **Never merge directly**, make a Pull Request from your code's branch to `stage` and assign that PR to another developer for Code Review.
* Every code needs to be linted before making a merge
* Marge only after you have received a thumbs up from the code reviewer
* After your code has been merged, delete every branch that you used to developed it from the repository

#### Deploying

* Make a deploy with `meteor deploy my_app_name.meteor.com`
* Add a `tag` to any new version of the `production` branch
