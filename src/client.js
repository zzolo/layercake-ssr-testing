import Page from "../components/Page.html";

setTimeout(() => {
	window.__page = new Page({
		hydrate: true,
		target: document.querySelector(".client-side-selector"),
		data: {
			client: true
		}
	});
}, 3000);
