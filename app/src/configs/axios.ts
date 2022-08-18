import axios from "axios";
import { toast } from "../index";
import { store } from "../redux/store";
import { shouldToastBeCreatedFromThisObject } from "../utils/utils";

export const axiosInstance = axios.create({
	baseURL: "https://wm-gateway-svc-jadhamwi21.cloud.okteto.net",
});

axiosInstance.interceptors.request.use((req) => {
	const { isAuthenticated, access_token } = store.getState().User;

	if (isAuthenticated) {
		req.headers!["Authorization"] = `Bearer ${access_token}`;
	}

	return req;
});

axiosInstance.interceptors.response.use(
	(res) => {
		const { message } = res.data;
		if (message) {
			if (shouldToastBeCreatedFromThisObject(message)) {
				toast({
					title: message.title,
					description: message.description,
					status: "success",
				});
				delete res.data.message;
			}
		}
		return res;
	},
	(error) => {
		const { message } = error.response.data;
		if (message) {
			if (shouldToastBeCreatedFromThisObject(message)) {
				toast({
					title: message.title,
					description: message.description,
					status: "error",
				});
				delete error.response.data.message;
			}
		}
		return Promise.reject(error);
	}
);
