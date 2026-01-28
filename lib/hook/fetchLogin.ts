

 
import { useMutation } from '@tanstack/react-query';
 

type ApiResponse = {
    access_token: string;
    refresh_token: string;
}
export interface FormData {
    email: string;
    password: string;
}

const fetchLogin = async (formData: FormData) => {

    const url = `https://api.escuelajs.co/api/v1/auth/login`
    try{
 const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
     if (!response.ok) {
        throw new Error(`Failed to fetch login (status: ${response.status})`);
    }
    const res: ApiResponse = await response.json();
    console.log("res>>>>>>>>>>>>>>>", res)
    return res;
    }
    catch(err){
        throw err;
    }
   
}


export const useFetchLogin = () => {
    return useMutation<ApiResponse, Error, FormData>({
        mutationKey: ['login'],
        mutationFn: (formData: FormData) => fetchLogin(formData),
    });
}

