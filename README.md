## Setup and startup

This project was made with Node version `24.12.0`, I cannot give guarantees for other versions.

Initial setup is done, by running `npm install` in the root folder.

To start the project run `npm run start`.

To run the unit tests you can `npm run test`, however these will all fail, see Discussion point 1.

I have added a postman collection `raffle_demo.postman_collection.json`, which can be used to test by hand.


## Discussion

1. I unfortunately was not able to make the Jest unit tests work within the allotted time. For some reason the Sequelize dependencies do not properly inject into the test module, and I couldn't figure it out.

2. The error handling leaves a lot to be desired. There is some validation, but failing those validations returns a 500 error which is not very descriptive.

3. The way I implemented picking the winner is by only considering participants with `hasParticipated: false`, and setting all of them to `true` after a winner is picked. This means that if the cronjob for some reason fails or is delayed the raffle pool will be larger than normal.

4. Some of the packages have deprecated warnings, which is not good for production environments. To make it ready for production we would probably need to find a database engine other than `sqlite`.


## Other Nest js commands to run the project.

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

