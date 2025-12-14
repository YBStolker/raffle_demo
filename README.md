## Setup
```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Discussion

1. I unfortunately was not able to make the Jest unit tests work. For some reason the Sequelize dependencies do not properly inject into the test module, and I was not able to figure it out within the allotted time.

2. The error handling leaves a lot to be desired. There is some validation, but failing those validations returns a 500 error which is not very descriptive.

3. The way I implemented picking the winner is by only considering participants with `hasParticipated: false`, and setting all of them to `true` after a winner is picked. This means that if the cronjob for some reason fails or is delayed the raffle pool will be larger than normal.

4. Some of the packages have deprecated warnings, which is not good for production environments. But these packages are related to the sqlite database, which also is not good for production environments. So I left those be.
