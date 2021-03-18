const { extendDefaultPlugins } = require('svgo');

// Settings based on https://feb.svg-is-smashing.com/#/optimising?id=post-export-optimising.
// I omitted anything that would reduce the fidelity of path data.

module.exports = {
  plugins: extendDefaultPlugins([
    { name: 'cleanupIDs', active: false },
    { name: 'mergePaths', active: false },
    { name: 'removeXMLNS', params: {} },
    { name: 'collapseGroups', active: false },
    { name: 'removeDimensions', params: {} },
  ]),
};
