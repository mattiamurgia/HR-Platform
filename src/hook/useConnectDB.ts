import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { urlSupaBase, keySupaBase } from '../accessKey';

const url = urlSupaBase;
const key = keySupaBase;
const supabase = createClient(url, key);

export const useGetTableDB = (name: string, col = '*') => {
	const [data, setData] = useState<any[]>([]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const { data, error, status } = await supabase.from(name).select(col);
		if (!error) {
			setData(data as unknown[]);
			console.log("Sono data di getData nell'hook ✅: ", data, status);
		} else {
			throw new Error('Error fetching data ⛔️: ' + error + error.code);
		}
	};
	return data;
};

export default useGetTableDB;
