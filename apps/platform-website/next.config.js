// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const path = require('path');
const withTM = require('next-transpile-modules')(['/home/momaqbol/Documents/WebDev/DevLaunchers/nx-next'], {
  debug: true,
  resolveSymlinks: true,
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  
};

module.exports = withNx(nextConfig);
// module.exports = withPlugins([withTM], nextConfig);
