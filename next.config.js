module.exports = {
  target: "serverless",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        module: 'empty'
      }
    }

    return config
  }
}