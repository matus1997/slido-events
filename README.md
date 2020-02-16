# Slido Events App

Simple React/MobX application to showcase my programming habits as a part of a interview at [Slido](https://www.sli.do/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Demo

https://slido-events.netlify.com

### Prerequisites

* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

### Installation

```
git clone https://github.com/matus1997/slido-events.git
npm install
```

## Usage

Create `.env` file from `.env-example` and add required variables. 

Start a development server by running:

```
npm start
```

This project uses [tslint](https://palantir.github.io/tslint/) and [stylelint](https://github.com/stylelint/stylelint) in order maintain uniform codebase.

You can run tslint and stylelint by following commands:
```
npm run lint
npm run stylelint
``` 

## Build & Deploy

* Develop build ```npm run build:develop```
* Production build ```npm run build:production```

Deploys are set up to automatically build `master` branch with netlify pipelines.

## Testing

Tests can be run by executing following command:

```
npm run test
```

## Technologies used

* [React](https://github.com/facebook/react)
* [MobX](https://github.com/mobxjs/mobx)
* [InversifyJS](https://github.com/inversify/InversifyJS)

## Why React&MobX

The reason why I’ve chosen React & MobX combo is mostly that I’m most comfortable with using then both together and I've been working with those technologies for a long time.

React is a great fit for this particular app as it's lightweight and in combination with MobX and Inversify  can provide a well scalable yet easy-to-understand codebase.
