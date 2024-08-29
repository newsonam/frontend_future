

import './Card.css';

const Card = ({ cards }) => {
    return (
        <div className='cardmain'>
            {cards.map((item) => (
                <div className="card">
                    <div className="card-title">{item.title}</div>
                    <div className="card-content">
                        {item.description}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Card;
