import React from "react";
class User extends React.Component{
    constructor(){

super();
this.state = {

    inputvalue :"",
    addedname : [ ] 
};
this.handleinput = this.handleinput.bind(this);
this.inputlist = this.inputlist.bind(this);
    }

handleinput(event){

    this.setState({...this.state , inputvalue:event.target.value });

}


 inputlist(event){
    
    this.setState({...this.state , addedname:[...this.state.addedname ,this.state.inputvalue] ,inputvalue:" "});




    
    
 }







    render()
    {

return(
<>

<h2>inputlist</h2>

<input value={this.state.inputvalue} onChange={this.handleinput}/>

<br /> <br />

<button style={{backgroundColor:"blueviolet"}} onClick={this.inputlist}>submit</button>

<ol >

{
    this.state.addedname.map((val , index)=>(
    <>

        <li key={index}>
        {val}
        </li>
        </>))
}

</ol>


</>



)



    }

}


export default User;