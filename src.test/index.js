'use strict';

import Foo from '../src/index.js';

import {expect} from 'mai-chai';


describe ('Foo class', () => {
  it ('returns 42', () => {
    expect (Foo.answer ()).to.equal (42);
  })
  it ('returns a number', () => {
    expect (typeof Foo.answer ()).to.equal ('number');
  })
});
