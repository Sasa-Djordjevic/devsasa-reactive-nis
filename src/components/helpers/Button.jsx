import mystyles from './Button.module.css';

const Button = (props) => {
    
    return (
        <button 
            className={`${mystyles.btn} ${props.activeClass ? mystyles.active : ''}`} 
            onClick={() => {props.categorieChanger(props.categorie)}}
        >{props.title}
        </button>
    );
};

export default Button;