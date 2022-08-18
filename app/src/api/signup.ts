import { axiosInstance } from "../configs/axios";

interface ILoginRequest {
	firstname: string;
	lastname: string;
	username: string;
	password: string;
}

export const signupUser = async (args: ILoginRequest): Promise<void> => {
	try {
		await axiosInstance.post("/auth/signup", args);
	} catch (e: any) {
		throw new Error(e);
	}
};
