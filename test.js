'use strict';
var assert = require('assert');
var isBinaryNumber = require('./');

it('should return true using those strings', function () {
	assert.strictEqual(isBinaryNumber('0'), true);
	assert.strictEqual(isBinaryNumber('1'), true);
	assert.strictEqual(isBinaryNumber('11'), true);
	assert.strictEqual(isBinaryNumber('1001'), true);
	assert.strictEqual(isBinaryNumber('1111111'), true);
	assert.strictEqual(isBinaryNumber('10000000000'), true);
	assert.strictEqual(isBinaryNumber('101110101100000'), true);
});

it('should return false using those strings', function () {
	assert.strictEqual(isBinaryNumber('01'), false);
	assert.strictEqual(isBinaryNumber('abc'), false);
	assert.strictEqual(isBinaryNumber('1113'), false);
	assert.strictEqual(isBinaryNumber('11011%'), false);
	assert.strictEqual(isBinaryNumber('0001'), false);
	assert.strictEqual(isBinaryNumber('0000'), false);
});

it('should return true using those numbers', function () {
	assert.strictEqual(isBinaryNumber(0), true);
	assert.strictEqual(isBinaryNumber(1), true);
	assert.strictEqual(isBinaryNumber(11), true);
	assert.strictEqual(isBinaryNumber(1001), true);
	assert.strictEqual(isBinaryNumber(1111111), true);
	assert.strictEqual(isBinaryNumber(10000000000), true);
	assert.strictEqual(isBinaryNumber(101110101100000), true);
});

it('should return false using those numbers', function () {
	assert.strictEqual(isBinaryNumber(1113), false);
	assert.strictEqual(isBinaryNumber(2), false);
	assert.strictEqual(isBinaryNumber(58159), false);
	assert.strictEqual(isBinaryNumber(1001004414101), false);
	assert.strictEqual(isBinaryNumber(NaN), false);
});
