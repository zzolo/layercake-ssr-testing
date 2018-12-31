Layer Cake  [<img src="https://github.com/mhkeller/layercake-examples/raw/master/static/layercake-logo-500x400.png" width="115" align="right" alt="layercake-logo">](https://mhkeller.github.io/layercake)
===

> a framework for mostly-reusable graphics with [svelte](https://github.com/sveltejs/svelte)

[![Travis (.org) branch](https://img.shields.io/travis/mhkeller/layercake/master.svg?style=flat-square)](https://travis-ci.org/mhkeller/layercake) [![npm version](https://img.shields.io/npm/v/layercake.svg?style=flat-square)](https://npmjs.org/package/layercake)

 🍰 [See examples](https://layercake.graphics)
 🍰 [Read the guide](https://layercake.graphics/guide)
 🍰 [API docs](https://layercake.graphics/guide#store-api)
 🍰

## Example

```js
import LayerCake from 'LayerCake';

const myCake = new LayerCake({
    padding: { top: 0, right: 0, bottom: 20, left: 25 },
    x: 'x',
    y: 'y',
    yDomain: [0, null],
    data: points,
    target: document.getElementById('chart-target')
  })

// Returns a Svelte store that you can use on your own own...
console.log(myCake.get());

// Or to render out components
myCake
  .svgLayers([
    { component: AxisX },
    { component: AxisY },
    { component: Line },
    { component: Area }
  ])
  .htmlLayers([
    { component: TextAnnotations, opts: { annos } },
  ])
  .render();
```

## Install

LayerCake lives in your `devDependencies` alongside Svelte, which it lists as a `peerDependency`.

```sh
npm install --save-dev layercake
```

## Using in your project

It currently only exports an ES6 module since I've been using it in the basic Svelte and Sapper templates. But if you have another setup or other ideas about how this library could work in your project flow [let me know on this issue](https://github.com/mhkeller/layercake/issues/6).

## License

MIT
