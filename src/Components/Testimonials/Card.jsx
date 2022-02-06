import React from 'react';

const Cards = (props) => {
    return (
        <div className="t_box">
            <div className="t_image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="t_text">
                <p>{props.text}</p>
                <p className='name'>{props.name}</p>
                <span>{props.work}</span>
            </div>
        </div>

    )
};

export default Cards;
