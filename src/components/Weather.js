import React from "react";
const Weather=(props)=>  {
    const temp=props.temperature;
        return(
            <div className="info">
                {
                    props.temperature &&
                     <p className="info_key">Temperature: 
                     <span className="info_value"> {Math.trunc(temp/10)} </span></p>
                }
                {
                    props.city &&
                     <p className="info_key">City: 
                     <span className="info_value"> {props.city} </span></p>
                }
                {
                    props.country &&
                     <p className="info_key">Country: 
                     <span className="info_value"> {props.country} </span></p>
                }
                {
                    props.humidity &&
                     <p className="info_key">Humidity: 
                     <span className="info_value"> {props.humidity} </span></p>
                }
                {
                    props.description &&
                     <p className="info_key">Description: 
                     <span className="info_value"> {props.description} </span></p>
                }

            </div>
        )
    
}
export default Weather;