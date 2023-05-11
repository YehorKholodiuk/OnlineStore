import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={props.toggle} className="me-md-2">
                <img alt='img' src='https://tse3.mm.bing.net/th?id=OIP.Ui-5abj2avrunNRnQewKXQHaHa&pid=Api&P=0' width={70} height={25}/>
            </button>
            <button onClick={props.toggle} style={{float:'right'}}>
                <i className="fas fa-cart-plus"> </i>
            </button>
            <div className="input-group mb-3">
                <input value={props.searchInput}  onChange={(event) => props.setSearchInput(event.target.value)}
                       type="text" className="form-control" placeholder="enter product"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
            </div>
        </div>
    );
};

export default Header;
