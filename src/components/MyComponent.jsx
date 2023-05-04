import React, { useState, useEffect } from 'react';
import DataService from '../data/DataService';

const MyComponent = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetchUserData = async () => {
            const result = await DataService.getUserData(12);
            console.log(result.data)
            setUserData(result.data);
        };

        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>User name: {userData.data.userInfos.firstName} {userData.data.userInfos.lastName}</p>
            <p>User age: {userData.data.userInfos.age}</p>
            <p>User score: {userData.data.todayScore}</p>
        </div>
    );
}

export default MyComponent;
