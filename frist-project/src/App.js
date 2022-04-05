import React from 'react';
import Card from './components/Card';
import Team from './components/Team';
import Data from './data.json';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import STATE from './STATE'
import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING/index'
import Event_Handeler_Class from './components/Event_Handeler_Class/index';

function App(){
    let items = [];
    //for (let x=0; x<Data.length; x++){
    //    items.push(<Card TitleText= {Data[x].TitleText} DescText = {Data[x].DescText} />)
    //}
    items = Data.map((item) => <Card TitleText={item.TitleText} DescText = {item.DescText} />);
    return <div>
        <h2 className="headingStyle">Welcome to React project</h2>
        <Card TitleText="This is Card" DescText="Our Country Name is Bangladesh " FooterText="This is Footer Text"/>
        <Team TitleText= {Data[0].TitleText} DescText = {Data[0].DescText}  />
        <Card TitleText="This is second Card" DescText="Onec upon a time we are pakistani" FooterText="Second Footer"/>
        {items}
        <Card2 TitleText="This is Class Title"/>
        <Card3 TitleText="My name is Rakib"/>
        <STATE />
        <CONDITIONAL_RENDERING />
        <Event_Handeler_Class />
    </div>;
}

export default App;