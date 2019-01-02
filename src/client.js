import Page from "../components/Page.html";
import exampleData from "./example-data.json";

setTimeout(() => {
	window.__page = new Page({
		hydrate: true,
		target: document.querySelector(".client-side-selector"),
		data: {
			client: true,
			exampleData
		}
	});
}, 3000);
