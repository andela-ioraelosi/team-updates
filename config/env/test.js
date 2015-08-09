'use strict';

module.exports = (function () {
  return {
    db: process.env.TEAM_MONGOLAB_URI_TEST,
    port: 5555
  };
})();
