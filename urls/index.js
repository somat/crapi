/**
 * URL definition
 */

let url = {};

url = Object.assign(
	require('./chat'),
	require('./category')
)

module.exports = url;
