'use strict';

const isCi = process.env.CI !== undefined;

process.exit(isCi ? 0 : 1);
