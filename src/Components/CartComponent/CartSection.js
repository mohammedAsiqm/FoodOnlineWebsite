import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "../../Css/CartSection.css";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Resetcount,
  ResetData,
  CountReducer,
} from "../../ReduxStore/ActionCreator";
import firebase from "firebase";




function CartSection(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  let OrderContainer = useSelector((state) => state.Food.Food);
  let RateContainer = useSelector((state) => state.Food.Rate);
  let total;
  const [userdetail, setdetail] = useState({})

  const EmptyCart = () => {
    return (
      <React.Fragment>
        <h4 className="empty">Empty cart</h4>
        <h6 className="empty">you must order food before buy.</h6>
      </React.Fragment>
    );
  };

  const BuyHandler = (e) => {


    let sure = window.confirm("Are you confirm to buy");
    if (sure) {
      var firebaseConfig = {
        apiKey: "AIzaSyBGyGQMxBf1MJ1JkWz2Nl-0Xb05Yu-xiwI",
        authDomain: "onlinefoodsystem-cc529.firebaseapp.com",
        projectId: "onlinefoodsystem-cc529",
        storageBucket: "onlinefoodsystem-cc529.appspot.com",
        messagingSenderId: "803541575602",
        appId: "1:803541575602:web:c0e2095fb4417fe9a066ab",
        measurementId: "G-B3PHM86NRY",
      };

      firebase.initializeApp(firebaseConfig);
      
      let db = firebase.firestore();

      db.collection("users")
        .add({
          orders : OrderContainer,
          rate : RateContainer,
          total : total,
          userdetail : userdetail

        })
        .then((docRef) => {
          dispatch(Resetcount());
          dispatch(ResetData());
          history.push("/purchased");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

      
    } else return null;
  };

  const ResetHandler = (e) => {
    dispatch(Resetcount());
    dispatch(ResetData());
  };

  const ReduceHandler = (e) => {
    let selectedarray = RateContainer[e.target.id];
    OrderContainer.splice(e.target.id, 1);
    RateContainer.splice(e.target.id, 1);
    total = total - selectedarray;
    history.push("/cart");
    dispatch(CountReducer());
  };

  return (
    <div>
      <div className="cart">
        <h1 className="cart-title">Cart page</h1>
      </div>

      <div className="orders">
        {RateContainer[0] === undefined ? (
          EmptyCart()
        ) : (
          <section className="table-grid table-responsive" id="section">
            <table className="table ">
              <thead className="thead">
                <tr>
                  <th>OrderName</th>
                </tr>
              </thead>
              <tbody className="parent">
                {OrderContainer.map((item, i) => (
                  <tr id={i} className="tdchanger">
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="table ">
              <thead className="thead">
                <tr>
                  <th className="w-auto">Rate</th>
                </tr>
              </thead>
              <tbody className="parent">
                {RateContainer.map((rate, i) => (
                  <tr id={i} className="tdchanger">
                    <td className="w-auto">{rate}</td>
                  </tr>
                ))}
                <tr className="tc">
                  <td>
                    <b>
                      {" "}
                      Total Cost :{" "}
                      {(total = RateContainer.reduce((acc, cur) => acc + cur))}
                    </b>
                    <br />
                    <br />
                    <button
                      className="btn btn-primary btn-sm ownprop ones"
                      data-bs-toggle="modal" data-bs-target="#exampleModal"
                     
                    >
                      Buy
                    </button>
                    <button
                      className="btn btn-primary btn-sm ownprop reset"
                      onClick={ResetHandler}
                    >
                      ResetCart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead className="thead ">
                <tr>
                  <th>-</th>
                </tr>
              </thead>
              <tbody className="parent2">
                {RateContainer.map((rate, i) => (
                  <tr id={i} className="tdchanger2">
                    <td>
                      <button
                        id={i}
                        className="btn btn-danger reduce"
                        onClick={ReduceHandler}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>



      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button> */}
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">User Detail</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">


        <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" 
     onChange= {(e)=> setdetail({...userdetail, name : e.target.value})  }
    />
    </div>


        <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label"> Address</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" 
     onChange= {(e)=> setdetail({...userdetail, Address : e.target.value})  }
    />
    </div>

        <div className="mb-3">
     <label htmlFor="exampleFormControlInput1" className="form-label">Mobile No</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile No" 
     onChange= {(e)=> setdetail({...userdetail, mobile : e.target.value})  }
    />
    </div>

    
        </div>
        <div className="modal-footer">
  
          <button type="button" className="btn btn-primary" onClick={BuyHandler} >Send</button>
        </div>
      </div>
    </div>
  </div>






    </div>
  );
}

export default CartSection;
