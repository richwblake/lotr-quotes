const Character = ({ character }) => {
    const { name, race, image, weapon, status, quotes } = character;

    return (
        <div className="character">
            <h2>{name}</h2>
            <img src={image}/>
            <p>Race: <i>{race}</i></p>
            <p>Weapon of choice: <b>{weapon}</b></p> 
        </div>
    )
};

export default Character;