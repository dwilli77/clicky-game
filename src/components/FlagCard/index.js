import React from 'react'
import './flagCard.css'

const FlagCard = props => {
    return (
    <div className="card">
        <img 
        className="card-img-top" 
        src={props.image} 
        alt={props.country} 
        data-id={props.id}
        onClick={props.handleClick}
        />
    </div>
    )
}

export default FlagCard;