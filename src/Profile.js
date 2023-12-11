import React, { useContext }  from "react";
import { LoginContext } from "./LoginContext";

import Card from 'react-bootstrap/Card';

function Profile(){

    const {userName , price , quantity , description}=useContext(LoginContext)
    return(
        <div>
            <Card className="profile-card mx-auto mt-3">

                <Card.Header className="title "> PRODUCT </Card.Header>
                
                <Card.Body>
                    <Card.Img  src="img/Food-12.webp" style={{width:"250px"}} />
                    <Card.Text className="inner-text">FOOD NAME: {userName}</Card.Text>
                    <Card.Text className="inner-text">PRICE: {price}</Card.Text>
                    <Card.Text className="inner-text">QUANTITY: {quantity}</Card.Text>
                    <Card.Text className="inner-text">DESCRIPTION: {description}</Card.Text>
                </Card.Body>
            </Card>
    </div>
       
    )
}
export default Profile;