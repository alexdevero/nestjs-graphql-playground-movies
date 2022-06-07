# MNest.js & GraphQL playground

## Description

Backend playground built with Nest.js and GraphQL.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Setup Heroku

```bash
# Login to Heroku
$ heroku login

# Create local git
$ git init

# Connect local project to existing Heroku project
$ heroku git:remote -a <heroku-app-name>

# Stage files
$ git add .

# Commit changes
$ git commit -m "Deploying on heroku"

# Push changes to Heroku, trigger deploy
$ git push heroku master
```

## Update Heroku variables

```bash
$ heroku config:set PORT=8080

$ heroku config:set NODE_ENV=production

$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

## License

This project is licensed under [MIT licensed](LICENSE).
