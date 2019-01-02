// Support for ESM
require = require("esm")(module);

// Svelte SSR require register
require("svelte/ssr/register");

// Get app
const App = require("./components/Page.html");

// Get data
const exampleData = require("./src/example-data.json");

// Render
let { html, css, head } = App.render({
	cleint: false,
	exampleData
});

// Output
console.log(`<!doctype html>
<html lang="en">
	<head>
    ${head}
		<style>
			${css ? css.code : ""}
		</style>
  </head>
	<body>
		<div class="client-side-selector">
			${html}
		</div>
	</body>
</html>
`);
