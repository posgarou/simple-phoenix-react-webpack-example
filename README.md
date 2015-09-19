# Simple Phoenix React Webpack Example (Phoepack)

## Explanation

Phoenix comes enabled with brunch by default, but it can easily be used with webpack instead.  Here is a (very simple) sample webpack setup intended for use with React and SCSS.

To run after cloning, run `npm i` and then follow the steps in Starting Phoenix.

## Steps to Replicate

1. Start a new project without brunch: `mix phoenix.new . --no-brunch`
2. `npm init`
3. Install npm dependencies: `npm i --save-dev autoprefixer-loader babel-core babel-loader css-loader node-sass sass-loader style-loader webpack`.
4. Add webpack to the watchers array near the top of `config/dev.exs`: `watchers: [{Path.expand("node_modules/webpack/bin/webpack.js"), ["--watch", "--colors", "--progress"]}]`
5. Copy over `webpack.config.js`
6. Create a file at `web/static/js/index.jsx` or copy over the example contents of `web/static/js` from this repo

## Main Sources / See Also

Most of this follows closely:

1. [Automatically Building your Phoenix Assets with Webpack](http://manukall.de/2015/05/01/automatically-building-your-phoenix-assets-with-webpack/)
2. [Webpack and React](http://survivejs.com/webpack_react/webpack_and_react/)

## Starting Phoenix

To start your Phoenix app:

  1. Install dependencies with `mix deps.get`
  2. Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  3. Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: http://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
