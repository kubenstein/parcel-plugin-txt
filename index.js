module.exports = bundler => {
  bundler.addAssetType('.txt', require.resolve('./TxtAsset'));
};
