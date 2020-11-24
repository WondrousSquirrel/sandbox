const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx",
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle/[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TypeScript + React",
      template: "./resources/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
          },
          { loader: "sass-loader", options: {} }
        ]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};