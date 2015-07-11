'use strict';
var multiTypeof = require('multi-typeof');

module.exports = function (val) {
	if (!multiTypeof(val, ['string', 'number'])) {
		throw new TypeError('Expected a string or a number');
	}

	return Array.isArray(String(val).match(/^1([01]+)?$/)) || String(val) === '0';
};
