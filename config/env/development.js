'use strict';

module.exports = (function () {
  return {
    db: process.env.TEAM_MONGOLAB_URI,
    port: 1337
  };
})();
