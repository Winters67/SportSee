import React, { useState, useEffect } from 'react';
import "../Home/Home.scss"
import DataService from '../../data/DataService';
import Nutritional from '../../components/Nutritional/Nutritional';
import calories from '../../assets/icons/calories-icon.png'
import protein from '../../assets/icons/protein-icon.png'
import carbs from '../../assets/icons/carbs-icon.png'
import fat from '../../assets/icons/fat-icon.png'
import CustomBarChart from '../../components/CustomBarChart/CustomBarChart';
import CustomLineChart from '../../components/CustomLineChart/CustomLineChart';
import CustomRadarChart from '../../components/CustomRadarChart/CustomRadarChart';
import CustomRadialBarChart from '../../components/CustomPieChart/CustomPieChart';




const Home = () => {
    const [userData, setUserData] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userAverageSessions, setUserSession] = useState();
    const [userPerformance, setUserPerformance] = useState();

    // True ou false dataMock

    useEffect(() => {
        const fetchUserData = async () => {
            const result = await DataService.getUserData(12
            );
            // const result = dataMock ? serviceMock : await DataService.getUserData(12);
            console.log(result.data)
            setUserData(result.data);
        };

        const fetchUserActivity = async () => {
            const result = await DataService.getUserActivity(12);
            console.log(result.data)
            setUserActivity(result.data);
        };

        const fetchAverageSessions = async () => {
            const result = await DataService.getUserAverageSessions(12
            );
            console.log(result.data)
            setUserSession(result.data);
        };

        const fetchPerformance = async () => {
            const result = await DataService.getUserPerformance(12
            );
            console.log(result.data.data)
            setUserPerformance(result.data);
        };


        fetchUserData();
        fetchUserActivity()
        fetchAverageSessions();
        fetchPerformance();
    }, []);

    if (!userData || !userActivity || !userAverageSessions) {
        return <div>Loading...</div>;
    }



    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.data.keyData;

    return (
        <div className='homeContainer' >
            <h1>Bonjour <span>{userData.data.userInfos.firstName}</span></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            <div className='customContainer'>


                <div className='sectionContainer'>
                    <div className='ChartContainer'>
                        <CustomBarChart data={userActivity.data} />
                    </div>
                    <div className='containerChardCustom'>
                        <div className='LineContainer items'><CustomLineChart data={userAverageSessions.data} />    </div>
                        <div className='RadarContainer items'><CustomRadarChart data={userPerformance.data} /> </div>
                        <div className='CustomRadialBarChart items'><CustomRadialBarChart data={userData.data.todayScore} /></div>


                    </div>
                </div>
                <div className='containerNutritional'>

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