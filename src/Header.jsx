import React from 'react';
import Logo from './assets/logo.jpg'

function Header() {

        let div = {
            position: 'sticky',
            top: 0, // Make sure to set the top value
            width: '100%',
            height: '100px',
            backgroundColor: 'red',
        }
        let image = {
           
            width : '568px',
            height : '100%',
        }
        return(
            <div style ={div} >
            <img src={Logo} alt="" style ={image} />
            </div>
        );


}
export default Header