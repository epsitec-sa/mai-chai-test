/* global require describe it */

var expect = require ('mai-chai').expect;

/******************************************************************************/

describe ('Simple', function () {
  it ('expect succeeds', function () {
    expect (42).to.equal (42);
  });
});

/******************************************************************************/
