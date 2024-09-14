import React from 'react';
import Logo from './assets/logo.jpg'
import Sidebar from './assets/sidebar.svg'
import Whatsapp from './assets/whatsapp.svg'
import Phone from './assets/phone.svg'
import "./header.css"

function Header() {

        let div = {
            position: 'sticky',
            top: 0, // Make sure to set the top value
            width: '100%',
            height: '100px',
            backgroundColor: 'red',
            //overflow: 'hidden',
            position: 'fixed'    
        }

        let left = {
            width : '50%',
            height : 'auto',
            display: 'inline-block',
        }

        let right = {
            width : '50%',
            height : 'auto',
            display: 'inline-block',
        }

        let image = {
            paddingTop : '10px',
            paddingLeft : '10px',
            width : '250px',
            height : '80px',
        }
        let butt = {
            borderRadius : '5px',
            alignLeft : 0,
            width : '80px',
            height : '50px',
            float: "right",
        }


        return(
            <div style ={div} >
                <div style ={left}>
                    <img src={Logo} alt="" style ={image} />
                </div>
                <div style ={right}>
                    <img src={Sidebar} alt="sidebar" style = {butt}/>
                    <img src={Phone} alt="call" style = {butt} />
                    <img src={Whatsapp} alt="whatsapp" style = {butt} />
                    <button style = {butt} >Khoya hua</button>
                </div>
            </div>
        );


}
export default Header