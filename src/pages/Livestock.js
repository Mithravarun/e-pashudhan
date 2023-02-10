import React from 'react';
import Card from '../components/Card';
import { LivestockData } from "../data/LivestockData";
import "../styles/LivestockStyles.css";

const Livestock = () => {
  return (
    <>
    <div className="container mt-5">
    <h1>Types of Livestocks</h1>
    <section>
    {LivestockData.map((item, index) =>{
        return <Card key={index} item={item} />
    })}
    </section>
    </div>
    </>
  )
}

export default Livestock