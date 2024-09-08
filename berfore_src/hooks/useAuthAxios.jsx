import { useSelector } from 'react-redux';
import axios from 'axios';
import { useMemo } from 'react';

const useAuthAxios = () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const refreshToken = useSelector((state) => state.auth.refreshToken);

    const axiosAuthInstance = useMemo(() => axios.create({
        baseURL: import.meta.env.VITE_REACT_APP_LOCAL_URL,
        timeout: 30000,
        headers: { 
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${accessToken}`,
            "RefreshToken" : `Bearer ${refreshToken}`
        }
    }), [accessToken, refreshToken]);

    return axiosAuthInstance;
};

export default useAuthAxios;


//사용 예시
// import React, { useEffect } from 'react';
// import useAuthAxios from './useAuthAxios';

// const ExampleComponent = () => {
//     const axiosAuthInstance = useAuthAxios();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axiosAuthInstance.get('/protected-endpoint');
//                 console.log('Data:', response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [axiosAuthInstance]);

//     return <div>Example Component</div>;
// };

// export default ExampleComponent;