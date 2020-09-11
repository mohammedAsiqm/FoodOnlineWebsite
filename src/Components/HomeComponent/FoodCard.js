import React from 'react';
import '../../Css/Menu1.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function FoodCard(props){
    return(
        <div className="food-menu card">
            <img  className="img" src={props.img} alt=" not found" height="212cm" width="230cm"/>
            <div className="card-body">
            <h5>{props.name}<span><b>&emsp;<br/> Rs.{props.price} </b></span></h5><br/>
            <button className="btn btn-primary btn-block" value={props.name} 
             onClick={props.ClickHandler} data-price = {props.price} >order</button>
            </div>
        </div>
    )
}


export default FoodCard

         