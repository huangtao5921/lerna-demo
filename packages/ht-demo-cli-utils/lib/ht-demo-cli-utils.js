/* eslint-disable */
'use strict';

module.exports = htDemoCliUtils;
var moment = require('moment');

function htDemoCliUtils() {
    console.log('现在时间是：', moment().format("YYYY-MM-DD HH:mm:ss"))
    console.log('htDemoCliUtils do...');
}
