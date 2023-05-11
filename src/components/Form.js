import React from 'react';

const Form = (props) => {

    return (
        <div className='col-sm-4 col-md-2'>
            <div  className="card h-100  text-white bg-success mb-sm-3" style={{border:"3px solid black", margin:"-5px "}}>
                <div className="card-body" >
                    <img src={props.product.img}  alt="IMG" className="card-img-top img-fluid" style={{border:"2px solid black"}} width={50}/>
                    <h3 className="card-title"> {props.product.title}</h3>
                    <p className="card-text">$ {props.product.price}</p>
                    <p className="card-text">For {props.product.category}</p>
                    <button onClick={()=>props.putToBasket(props.product)} className="btn btn-dark btn-sm" type="button">Add to basket</button>
                </div>
            </div>
        </div>
    );
};

export default Form;
