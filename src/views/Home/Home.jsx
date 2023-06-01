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

// Option pour utiliser les données mockées.
const useMockData = true;

/**
 * The Home component is the main component of the application.
 * It manages user data, activity, average sessions and performance
 */

// Le composant Home est le composant principal de l'application.
//  il gère les données de l'utilisateur, l'activité, les sessions en moyenne et la performance.

const Home = () => {
    // Déclaration des états
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userAverageSessions, setUserAverageSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);

    /**
   * This function fetches user data based on the id.
   * If useMock is true, it will use mocked data. Otherwise, it will fetch the real data.
   * @param {number} id - The user's ID.
   * @param {boolean} useMock - Whether to use mocked data or not.
   */



    const fetchData = async (id, useMock) => {
        if (useMock) {
            // Utilisation de données mockées
            const mockUserData = mockData.USER_MAIN_DATA.find(data => data.data.id === id);
            const mockUserActivity = mockData.USER_ACTIVITY.find(data => data.data.userId === id);
            const mockUserAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(data => data.data.userId === id);
            const mockUserPerformance = mockData.USER_PERFORMANCE.find(data => data.data.userId === id);

            // Mise à jour des états avec les données mockées
            setUserData(mockUserData);
            setUserActivity(mockUserActivity);
            setUserAverageSessions(mockUserAverageSessions);
            setUserPerformance(mockUserPerformance);
        } else {
            // Récupération des données réelles
            try {
                const resultUserData = await DataService.getUserData(id);
                const resultUserActivity = await DataService.getUserActivity(id);
                const resultUserAverageSessions = await DataService.getUserAverageSessions(id);
                const resultUserPerformance = await DataService.getUserPerformance(id);

                // Mise à jour des états avec les données réelles
                setUserData(resultUserData.data);
                setUserActivity(resultUserActivity.data);
                setUserAverageSessions(resultUserAverageSessions.data);
                setUserPerformance(resultUserPerformance.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    };

    // Effet pour récupérer les données lors du montage du composant
    useEffect(() => {
        const userId = 18; // ID spécifique à utiliser
        fetchData(userId, useMockData);
    }, []);

    // Si les données ne sont pas encore chargées, afficher "Loading..."
    if (!userData || !userActivity || !userAverageSessions) {
        return <div>Loading...</div>;
    }

    // Récupération des données clés
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.data.keyData;

    // Rendu du composant

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
