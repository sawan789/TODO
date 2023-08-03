import React from "react";
class List extends React.Component{
constructor(){
    super();
this.state = {
candidatedetails:[
    {id:1,candidatename:"sawan" ,gender:"male"} ,
    {id:2,candidatename:"ketul" ,gender:"male"} ,
    {id:3,candidatename:"vivek" ,gender:"male"} 

]

};


}


render(){





    return(<>
    
    <h1>CURRENT CANDIDATE DETAILS</h1>
    <ul>
{this.state.candidatedetails.map((candidate)=>(
<li key={candidate.id}>
    <p> Name:{candidate.candidatename}</p> 
     <p>Gender:{candidate.gender}</p>
     <br />
     </li>))}


    </ul>
    
    </>)
}




}
export default List ;