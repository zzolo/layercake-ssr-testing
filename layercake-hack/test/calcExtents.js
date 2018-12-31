/* globals describe it */
import calcExtents from '../src/lib/calcExtents.js';
import * as assert from 'assert';

const name = 'calcExtents';

const tests = [
	{ args: [[]], expected: null },
	{ args: [{}], expected: null },
	{ args: [[0, 1, 2], []], expected: null },
	{
		args: [[
			{x: 0, y: 1}, {x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}, {x: 4, y: 5}
		], [{field: 'x', accessor: d => d.x}]],
		expected: {x: [0, 4]}
	},
	{
		args: [[
			{x: '2010-01-04'}, {x: '2010-01-02'}, {x: '2010-01-04'}, {x: '2010-01-05'}, {x: '2010-01-06'}
		], [{field: 'x', accessor: d => d.x}]],
		expected: {x: ['2010-01-02', '2010-01-06']}
	},
	{
		args: [[
			{x: 0, y: 1}, {x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}, {x: 4, y: 5}
		], [{field: 'x', accessor: d => d.x}, {field: 'y', accessor: d => d.y}]],
		expected: {x: [0, 4], y: [1, 5]}
	},
	{
		args: [[
			{x: [-4, 0], y: [1, 6]}, {x: [-5, 1], y: [2, 7]}, {x: [-3, 2], y: [3, 8]}, {x: [-2, 3], y: [4, 9]}, {x: [-1, 4], y: [5, 10]}
		], [{field: 'x', accessor: d => d.x}, {field: 'y', accessor: d => d.y}]],
		expected: {x: [-5, 4], y: [1, 10]}
	}
];

describe(name, function () {
	tests.forEach(test => {
		describe(JSON.stringify(test.args), function () {
			it(`should equal ${JSON.stringify(test.expected)}`, function () {
				const actual = calcExtents(...test.args);
				assert.deepStrictEqual(actual, test.expected);
			});
		});
	});
});
