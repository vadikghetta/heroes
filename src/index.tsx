import "./global.scss";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";


const rootNode = document.getElementById("root");



if (!rootNode) {
	throw new Error("Not found root");
}

createRoot(rootNode).render(

	<Provider store={store}>
		<App />
	</Provider>
);


