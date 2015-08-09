'use strict';

var request = require('supertest');
var config = require('./../../../../config/config');
var app = require('./../../../../config/express');

var env = process.env.NODE_ENV;
var testDB = 'mongodb://localhost/team-updates-test';
var stagingDB =
'mongodb://admin:team-updates@ds031193.mongolab.com:31193/team-updates-test';

describe ('Application Server', function () {

  describe ('Database connection tests', function () {

    beforeEach(function (done) {
      done();
    });

    it('should return the right database connection string', function (done) {
      expect(
        (env === 'test') && (config.db === testDB) ?
        !((env === 'staging') && (config.db === stagingDB)) :
        ((env === 'staging') && (config.db === stagingDB))
      ).toBe(true);
      done();
    });
  });

  describe ('GET /', function () {

    it('should respond with a string', function (done) {
      request(app)
        .get('/')
        .expect(200)
        .end(function (error, response) {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
});
