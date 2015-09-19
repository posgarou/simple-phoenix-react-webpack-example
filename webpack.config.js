var path = require("path");

var SRC_DIR = "./web/static";
var JS_SRC_DIR = SRC_DIR + "/js";

var DEST_DIR = "./priv/static";

module.exports = {
  entry: JS_SRC_DIR + "/index.jsx",

  resolve: {
    extensions: ["", ".js", ".jsx"]
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: path.resolve(JS_SRC_DIR)
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "autoprefixer", "sass"],
        include: path.resolve(SRC_DIR)
      }
    ]
  },

  output: {
    path: DEST_DIR + "/js",
    filename: "app.js"
  }
};
