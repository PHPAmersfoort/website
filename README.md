# phpamersfoort.nl

This is the source code for the PHPAmersfoort website. It is a simple static HTML website built
with [Bootstrap](https://getbootstrap.com/).
Images are resized and optimized with [Webpack](https://webpack.js.org/).

The website is hosted as a static site on [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/).

## Local development

Run the following command to build the assets:

```bash
yarn install
./node_modules/.bin/webpack --mode=development
```

Add the `--watch` flag to the webpack command to automatically rebuild the assets when changes are made.

Open `dist/index.html` in your browser to view the website.

## Deployment

The website is automatically deployed when changes are pushed to the `main` branch.
