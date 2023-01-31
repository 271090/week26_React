
function Card(props) {
    return (
      <div className="card">
        <div className="card__name">{props.name}</div>
                    <img className="card__img" src={props.photo} alt="image"/>
                    <div className="card__content">
                        <p className="card__text">Вселенная:{props.universe}</p>
                        <p className="card__text">Альтер эго:{props.alterego}</p>
                        <p className="card__text">Род деятельности:{props.occupation}</p>
                        <p className="card__text">Друзья:{props.friends}</p>
                        <p className="card__text">Суперсилы:{props.superpower}</p>
                    </div>
                    </div>
    );
  }
  
  export default Card;
  