import React, { useState, useEffect } from 'react';
import '../Home/Home.scss';
import DataService from '../../data/DataService';
import Nutritional from '../../components/Nutritional/Nutritional';
import calories from '../../assets/icons/calories-icon.png';
import protein from '../../assets/icons/protein-icon.png';
import carbs from '../../assets/icons/carbs-icon.png';
import fat from '../../assets/icons/fat-icon.png';
import CustomBarChart from '../../components/CustomBarChart/CustomBarChart';
import CustomLineChart from '../../components/CustomLineChart/CustomLineChart';
import CustomRadarChart from '../../components/CustomRadarChart/CustomRadarChart';
import CustomRadialBarChart from '../../components/CustomPieChart/CustomPieChart';
import mockData from '../../data/mockData';

const useMockData = true; // Utiliser ou non les données fictives

const Home = () => {
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userAverageSessions, setUserAverageSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);

    console.log(userData)
    // console.log(userActivity)
    // console.log(userAverageSessions)
    console.log(userPerformance)


    const fetchData = async (id, useMock) => {
        if (useMock) {
            const mockUserData = mockData.USER_MAIN_DATA.find(data => data.data.id === id);
            const mockUserActivity = mockData.USER_ACTIVITY.find(data => data.data.userId === id);
            const mockUserAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(data => data.data.userId === id);
            const mockUserPerformance = mockData.USER_PERFORMANCE.find(data => data.data.userId === id);


            console.log(mockData.USER_MAIN_DATA);

            setUserData(mockUserData);
            setUserActivity(mockUserActivity);
            setUserAverageSessions(mockUserAverageSessions);
            setUserPerformance(mockUserPerformance);
        } else {
            try {
                const resultUserData = await DataService.getUserData(id);
                const resultUserActivity = await DataService.getUserActivity(id);
                const resultUserAverageSessions = await DataService.getUserAverageSessions(id);
                const resultUserPerformance = await DataService.getUserPerformance(id);

                console.log(resultUserData);

                setUserData(resultUserData.data);
                setUserActivity(resultUserActivity.data);
                setUserAverageSessions(resultUserAverageSessions.data);
                setUserPerformance(resultUserPerformance.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    useEffect(() => {
        const userId = 18; // ID spécifique à utiliser
        fetchData(userId, useMockData);
    }, []);

    if (!userData || !userActivity || !userAverageSessions) {
        return <div>Loading...</div>;
    }



    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.data.keyData
    console.log(userData.data.keyData)

    return (
        <div className="homeContainer">
            <h1>Bonjour <span>{userData.data.userInfos.firstName}</span></h1>
            <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
            <div className="customContainer">
                <div className="sectionContainer">
                    <div className="ChartContainer">
                        <CustomBarChart data={userActivity.data} />
                    </div>
                    <div className="containerChardCustom">
                        <div className="LineContainer items">
                            <CustomLineChart data={userAverageSessions.data} />
                        </div>
                        <div className="RadarContainer items">
                            <CustomRadarChart data={userPerformance.data} />
                        </div>
                        <div className="CustomRadialBarChart items">
                            <CustomRadialBarChart data={userData.data.todayScore || userData.data.score} />
                        </div>
                    </div>
                </div>
                <div className="containerNutritional">
                    <Nutritional logo={calories} title="Calories" value={calorieCount} unit="kcal" />
                    <Nutritional logo={protein} title="Protéines" value={proteinCount} unit="g" />
                    <Nutritional logo={carbs} title="Glucides" value={carbohydrateCount} unit="g" />
                    <Nutritional logo={fat} title="Lipides" value={lipidCount} unit="g" />
                </div>
            </div>
        </div>
    );
};

export default Home;
