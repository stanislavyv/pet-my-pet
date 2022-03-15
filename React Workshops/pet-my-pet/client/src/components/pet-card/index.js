import { Link } from 'react-router-dom';
import Button from '../shared/button';

const PetCard = (props) => {
    return (
        <li className="otherPet">
        <h3>Name: {props.name}</h3>
        <p>Category: {props.category}</p>
        <p className="img">
            <img
                src={props.imageURL} alt="pet"
            />
        </p>
        <p className="description">{props.description}</p>
        <div className="pet-info">
            <a href="#"
                ><button className="button">
                    <i className="fas fa-heart"></i> Pet
                </button></a
            >
            <Link to={`/pets/edit/${props.id}`}>
                <button className="button">Details</button>
            </Link>
            <i className="fas fa-heart"></i> <span>{props.likes}</span>
        </div>
        </li>
    );
};

export default PetCard;