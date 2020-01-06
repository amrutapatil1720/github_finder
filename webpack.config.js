const path = require("path");
const SRC_DIR = path.resolve(__dirname, "./client/src/components/");

module.exports = {
  entry: "./client/src/components/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client/dist"),
    publicPath: "/client/dist"
  },
  module: {
    rules: [
      {
        test: /\.m?js$|\.m?jsx$/,
        include: SRC_DIR,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [["@babel/plugin-proposal-class-properties"]]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
