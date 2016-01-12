import test from 'ava';
import m from './';

test('should return true using those strings', t => {
	t.true(m('0'));
	t.true(m('1'));
	t.true(m('11'));
	t.true(m('1001'));
	t.true(m('1111111'));
	t.true(m('10000000000'));
	t.true(m('101110101100000'));
});

test('should return false using those strings', t => {
	t.false(m('01'));
	t.false(m('abc'));
	t.false(m('1113'));
	t.false(m('11011%'));
	t.false(m('0001'));
	t.false(m('0000'));
});

test('should return true using those numbers', t => {
	t.true(m(0));
	t.true(m(1));
	t.true(m(11));
	t.true(m(1001));
	t.true(m(1111111));
	t.true(m(10000000000));
	t.true(m(101110101100000));
});

test('should return false using those numbers', t => {
	t.false(m(1113));
	t.false(m(2));
	t.false(m(58159));
	t.false(m(1001004414101));
	t.false(m(NaN));
});
