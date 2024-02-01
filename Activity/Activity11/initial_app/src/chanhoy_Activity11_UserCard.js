/**
 * Author: Chanho Yang
 * ISU Netid: chanhoy
 * Date: March 25, 2023
 */

export function UserCard(props){
    console.log(props);
    
    return <div><h1>{props.name}</h1>
    <p>💲{props.amount}</p>
    <p>{props.married ? 'married' : 'single'}</p>
    <p>
        <ul>
            <li>Street: {props.address.street}</li>
            <li>City: {props.address.city}</li>
            <li>State: {props.address.state}</li>                
        </ul>

    </p>
    </div>;
    
    
    
}