import { TMetodType } from "@/types/general.types";
import { useCallback } from "react";


const defaultHeaders = { "Content-Type": "application/json" };
export const useHttp = <T,>() => {
	// const [process, setProcess] = useState('waiting');

	const request = useCallback(async (url: string, method: TMetodType, body?: Record<string, string>, headers?: Record<string, string>) => {

		// setProcess('loading');

		try {
			const response = await fetch(url, { method, body: JSON.stringify(body), headers: { ...defaultHeaders, ...headers } });
			if (!response.ok) {
				throw new Error(`Could not fetch ${url}, status: ${response.status}`);
			}
			const data: T = await response.json();
			console.log(data);

			return data;
		} catch (e) {
			return null;
		}
	}, []);

	return {
		request
		// clearError, 
		// process, 
		// setProcess
	};
};