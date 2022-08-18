import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { MainReducer } from "./slices/mainSlice";
import { ThemeReducer } from "./slices/themeSlice";
import { UserReducer } from "./slices/userSlice";

const rootReducer = combineReducers({
	User: UserReducer,
	Main: MainReducer,
	Theme: ThemeReducer,
});

export const store = configureStore({
	reducer: persistReducer({ key: "root", storage }, rootReducer),
	middleware: (getDefaultMiddleware) => {
		const middleware = getDefaultMiddleware({ serializableCheck: false });
		return middleware;
	},
});

store.subscribe(() => console.log(store.getState()));

export type AppState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
