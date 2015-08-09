'use strict';

module.exports = (function () {
  return {
    db: process.env.MONGOLAB_URI,
    port: 5555
  };
})();
