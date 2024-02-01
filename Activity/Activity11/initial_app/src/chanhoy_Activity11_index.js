/**
 * Author: Chanho Yang
 * ISU Netid: chanhoy
 * Date: March 25, 2023
 */

import React from 'react';
import ReactDom from 'react-dom/client';
import {UserCard} from "./UserCard";

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<div>
    <UserCard name="Elton John" amount={3000} married = {true} points={[100,101.1,202,2]} address={{street: "123 Bellmont Rd", city:"Ames", state:"Iowa"}}/>
    <UserCard name="John Travolta" amount={3500} married={false} points={[1,2,3,4]} address={{street: "5010 Av Some", city:"Tempe", state:"AZ"}}/>
    </div>);

