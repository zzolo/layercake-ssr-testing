Some experimenting with SSR in [LayerCake](https://github.com/mhkeller/layercake). [Specific discussion here](https://github.com/mhkeller/layercake/issues/5).

## Development

To develop or get things running locally

1. `npm install`
1. `npm run build && npm run dev`
   - The live reload browser stuff doesn't seem to work all the time, so sometimes you have to manually refresh the page.

## What's going on here

The basic goal is to use the same components to both render an SSR version (i.e. static) and an interactive version for the client. We have two separate build processes for these:

1. SSR is done with the custom `generate-ssr.js` file. This uses Svelte directly, pulls in the data, and renders out an HTML file in the `build/` folder.
1. The client version is built with Rollup to is pointed at `src/client.js` which instantiates the main component with the data.

## Other notable parts

- `layercake-hack/`: Custom altered LayerCake.
- `src/example-data.json`: Data to be used in SSR and client.
- `components/Page.html`: The main shared component.
- `components/Chart.html`: The main LayerCake component.
