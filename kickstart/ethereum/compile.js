const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery');