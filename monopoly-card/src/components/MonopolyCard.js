import React from 'react';
import './MonopolyCard.css';

const MonopolyCard = ({
    name,
    color,
    price,
    rent,
    houseCost,
    rentPerHouse
}) => {
    return (
        <div className="square">
            <div>{name}</div>
            <div>{color}</div>
            <div>${new Intl.NumberFormat({
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(price)}</div>
            <div>${new Intl.NumberFormat({
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(rent)}</div>
            <div>${new Intl.NumberFormat({
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(houseCost)}</div>
            <div>${new Intl.NumberFormat({
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(rentPerHouse)}</div>
        </div>
    );
}

export default MonopolyCard;