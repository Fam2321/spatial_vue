module.exports = {
  devServer: {
    port: 3030,
    proxy: "https://goaldiggerspring.azurewebsites.net",
  },
  lintOnSave: true,
  transpileDependencies: ["vuetify"],
};
