import React, { useEffect, useState } from 'react';

function Midtext() {
    const [visible, setVisible] = useState(false); // State to control visibility

    useEffect(() => {
        // Trigger the fade-in after the component mounts
        setTimeout(() => {
            setVisible(true);
        }, 100); // Small delay to ensure smoothness
    }, []);

    let mid = {
        backgroundColor: 'red',
        height: '100px',
        width: '200px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '0.5',
        opacity: visible ? 1 : 0, // Control visibility with opacity
        transition: 'opacity 2s ease-in-out', // Transition effect for the fade-in
    }
    
    let parentStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'lightgray',
    }

    return (
        <div style={parentStyle}>
            <div style={mid}>Bus Bhai Tuth gaya mai to jyada nahi hota ab</div>
        </div>
    );
}

export default Midtext;
