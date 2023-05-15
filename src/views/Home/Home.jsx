import React, { useState, useEffect } from 'react';
import "../Home/Home.scss"
import DataService from '../../data/DataService';
import Nutritional from '../../components/Nutritional/Nutritional';
import calories from '../../assets/icons/calories-icon.png'
import protein from '../../assets/icons/protein-icon.png'
import carbs from '../../assets/icons/carbs-icon.png'
import fat from '../../assets/icons/fat-icon.png'
import CustomBarChart from '../../components/CustomBarChart/CustomBarChart';



const Home = () => {
    const [userData, setUserData] = useState(); // Déclaration de l'état userData
    const [userActivity, setUserActivity] = useState();



    useEffect(() => {
        const fetchUserData = async () => {
            const result = await DataService.getUserData(12
            );
            console.log(result.data)
            setUserData(result.data);
            console.log("Result:", result); //
        };

        const fetchUserActivity = async () => {
            const result = await DataService.getUserActivity(12);
            console.log(result.data)
            setUserActivity(result.data);
        };


        fetchUserData();
        fetchUserActivity();
    }, []);

    if (!userData || !userActivity) {
        return <div>Loading...</div>;
    }



    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.data.keyData;

    return (
        <div className='homeContainer' >
            <h1>Bonjour <span>{userData.data.userInfos.firstName}</span></h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            <section className='sectionContainer'> 

            <div className='ChartContainer'>
            <CustomBarChart data={userActivity.data} />
            </div>
            <div className='containerNutritional'>
                <div className='containerNutritional'>
                    <Nutritional logo={calories} title="Calories" value={calorieCount} unit="kcal" />
                    <Nutritional logo={protein} title="Protéines" value={proteinCount} unit="g" />
                    <Nutritional logo={carbs} title="Glucides" value={carbohydrateCount} unit="g" />
                    <Nutritional logo={fat} title="Lipides" value={lipidCount} unit="g" />
                </div>
            </div>
            </section>


        </div> 
    );
};

export default Home;