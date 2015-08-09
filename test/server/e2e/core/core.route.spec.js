'use strict';

var request = require('supertest');
var app = require('./../../../../config/express');

describe ('Application Server', function () {

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
