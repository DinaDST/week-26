import "./card.css";

function Card(props) {
    return (
        <div className = "card-body">
        <img src ={props.url} alt = "picture" className="card-img"/>
        <div className = "card-name">{props.name}</div> 
        <div className="card-transcription">{props.transcription}</div>
        <div className="card-translation">{props.translation}</div> 
        </div>
    );
}

export default Card;