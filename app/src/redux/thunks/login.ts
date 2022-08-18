import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../configs/axios";

interface ILoginRequest {
	username: string;
	password: string;
}

export const loginThunk = createAsyncThunk<string, ILoginRequest>(
	"/user/login",
	async (args, thunkAPI) => {
		try {
			const access_token = await axiosInstance
				.post("/auth/login", args)
				.then(({ data }) => data.access_token);
			return access_token;
		} catch (e) {
			return thunkAPI.rejectWithValue(e);
		}
	}
);
