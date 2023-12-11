import React, { useContext }  from "react";
import { LoginContext } from "./LoginContext";

import Form from 'react-bootstrap/Form';


function Login(){

const {setUsername ,setPrice , setQuantity , setDescription, setShowprofile}=useContext(LoginContext)

   
    
    return(
        <div>
            <Form className="input mx-auto mt-3 "  >
                <h2>FOODS</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="ENTER NAME :"  
                    onChange={(e)=>{
                        setUsername(e.target.value)

                    }}
                  />
                </Form.Group>
            

              
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="ENTER PRICE :" 
                    onChange={(e)=>{
                        setPrice(e.target.value)

                    }}
                  />
                </Form.Group>
           

             
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="ENTER QUANTITY :" 
                    onChange={(e)=>{
                        setQuantity(e.target.value)

                    }}
                  />
                </Form.Group>
             

             
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="ENTER YOUR DESCRIPTION :" 
                    onChange={(e)=>{
                        setDescription(e.target.value)

                    }}
                  />
                </Form.Group>
              
                <input class="btn btn-primary" 
                            onClick={()=>{
                        setShowprofile(true)
                        }} 
                        type="SUBMIT">
                </input>


             </Form>     
                    



              
        </div>
    )
}
export default Login;