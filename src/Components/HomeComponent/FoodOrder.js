import React from 'react';
import '../../Css/Menu1.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { coconutrice, curdrice, lemon, mango, muttonbiriyani, sambarrice, tomato, whiterice,
aloosamosa, masalvada, mixture, samosa, vadai, pacoda, panipoori, dosa, idly, poori, chapathi
} from './Image'
import {connect} from 'react-redux'
import {NoOfCount} from '../../ReduxStore/ActionCreator'
import {FoodOrderNames} from '../../ReduxStore/ActionCreator'
import FoodCard from './FoodCard'



function Content(props) {
 
       let values = props.Food;
       let Rates = props.Rate;
       const dispatchHandler = props.dispatch
       const FooddispatchHandler = props.Dispatcher


       const ClickHandler =async e => { 
             Rates.push(parseInt(e.target.dataset.price));
              values.push(e.target.value)
            await dispatchHandler()
            FooddispatchHandler(values, Rates)
        
       }

    return (
      <div>
        <header className="head">
           <h3 className="h3">Lunch</h3>
        </header>

        <div className="menu">
          <FoodCard img={coconutrice}  name='CoconutRice' price='60' ClickHandler={ClickHandler}/> 
          <FoodCard img={curdrice}  name='CurdRice' price='40' ClickHandler={ClickHandler}/> 
          <FoodCard img={lemon}  name='LemonRice' price='50' ClickHandler={ClickHandler}/> 
          <FoodCard img={mango}  name='MangoRice' price='40' ClickHandler={ClickHandler}/> 
          <FoodCard img={muttonbiriyani}  name='Mutton Biriyani' price='120' ClickHandler={ClickHandler}/> 
          <FoodCard img={sambarrice}  name='SambarRice ' price='70' ClickHandler={ClickHandler}/> 
          <FoodCard img={tomato}  name='TomatoRice' price='45' ClickHandler={ClickHandler}/> 
          <FoodCard img={whiterice}  name='WhiteRice' price='50' ClickHandler={ClickHandler}/> 
       </div> 
     
      <div className="sec-img"></div>

     <div className="head">
        <h3 className="h3">Snacks</h3>
     </div>

     <div className="menu">
          <FoodCard img={aloosamosa}  name='aloosamosa (1per)' price='10' ClickHandler={ClickHandler}/> 
          <FoodCard img={masalvada}  name='Masala vadai(1per)' price='7' ClickHandler={ClickHandler}/> 
          <FoodCard img={mixture}  name='Mixture (100g)' price='20' ClickHandler={ClickHandler}/> 
          <FoodCard img={samosa}  name='Samosa (1per)' price='5' ClickHandler={ClickHandler}/> 
          <FoodCard img={vadai}  name='Vadai (1per)' price='7' ClickHandler={ClickHandler}/> 
          <FoodCard img={pacoda}  name='Paccoda (100g)' price='15' ClickHandler={ClickHandler}/> 
          <FoodCard img={panipoori}  name='Paccoda (100g)' price='10' ClickHandler={ClickHandler}/> 
          <FoodCard img={pacoda}  name='chicken pacoda (100g)' price='25' ClickHandler={ClickHandler}/> 
     </div>

     <div className="sec-img" id="sec-img1"> </div>

     <div className="head">
        <h3 className="h3">BreakFast</h3>
     </div>

    <div className="menu">
          <FoodCard img={dosa}  name='dosa (1per) ' price='15' ClickHandler={ClickHandler}/> 
          <FoodCard img={idly}  name='idly (1per)' price='5' ClickHandler={ClickHandler}/> 
          <FoodCard img={poori}  name='poori(1per)' price='10' ClickHandler={ClickHandler}/> 
          <FoodCard img={chapathi}  name='chapathi (1per)' price='8' ClickHandler={ClickHandler}/> 
     </div>  
</div>
    );
}


const mapStateToProps = state => {
       return { 
            number : state.NoOfCount,
            Food : state.Food.Food,
            Rate : state.Food.Rate
       }
}   
const  mapDispatchToProps = dispatch => {
       return { 
            dispatch : ()=> dispatch(NoOfCount()),
            Dispatcher : (values, rate)=> dispatch(FoodOrderNames(values, rate))
       }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);