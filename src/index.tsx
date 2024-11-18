import "./sass/global.scss";
import { createRoot } from "react-dom/client";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./app";


const rootNode = document.getElementById("root");



if (!rootNode) {
	throw new Error("Not found root");
}

createRoot(rootNode).render(

	<Provider store={store}>
		<App />
	</Provider>
);


