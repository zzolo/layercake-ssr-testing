// rollup.config.js
import svelte from "rollup-plugin-svelte";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";

export default {
	input: "src/client.js",
	output: {
		file: "build/bundle.js",
		format: "iife"
	},
	plugins: [
		svelte({
			emitCss: false,
			hydratable: true
		}),

		nodeResolve({
			jsnext: true,
			main: true
		}),

		commonjs(),

		json()
	]
};
