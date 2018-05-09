'use strict';

/**
 * Filter path with ..
 * @param {number} timeInSecond
 * @return {string}
 */
module.exports = function(timeInSecond) {

  var hours = Math.floor(timeInSecond/60);
  var minutes = timeInSecond % 60;
  var str = hours + ":" + minutes;
  return str;

   
};
