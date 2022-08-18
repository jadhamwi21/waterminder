import {
	ChakraProvider,
	createStandaloneToast,
	extendTheme,
} from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { store } from "./redux/store";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const shadows = {
	outline: "0 0 0 3px var(--chakra-colors-main-500)",
};

const theme = extendTheme({
	shadows,
	colors: {
		main: "#57a4ff",
	},
});

export const { toast } = createStandaloneToast({
	defaultOptions: {
		duration: 3000,
		isClosable: true,
		position: "top-right",
	},
});

const persistor = persistStore(store);

root.render(
	<HashRouter>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<PersistGate persistor={persistor} />
				<App />
			</ChakraProvider>
		</Provider>
	</HashRouter>
);
