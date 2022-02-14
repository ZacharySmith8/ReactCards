import React,{useState} from 'react';


function Card (props){
    const [rotation] = useState(Math.random() * 360);
    
    return(
            <img
            style={{
                position: "absolute",
                transform: `rotate(${rotation}deg)`
            }}
            src={props.image}
            
            />
    )
}



export default Card;