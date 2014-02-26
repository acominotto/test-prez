'use strict';

describe('Javascript', function() {
  it('should add two numbers', function() {
    expect(1 + 1).toBe(2);
    expect(1.1 + 1.9).toBe(3)
  });
  it('should work well with booleans', function() {
    expect(true).toBeTruthy();
    expect(true).not.toBeFalsy();
  });
});

