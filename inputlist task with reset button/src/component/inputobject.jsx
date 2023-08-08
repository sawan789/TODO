import React from "react";
class Inputobject extends React.Component{
    constructor(){

super();
this.state = {
       inputvalue : " " ,
list : [ ]
};
this.handleinput = this.handleinput.bind(this);
this.inputlist = this.inputlist.bind(this);
this.onResetClick = this.onResetClick.bind(this);
    }

handleinput(event){

    this.setState({ inputvalue:event.target.value });

}


 inputlist(){
    
this.setState({list :[...this.state.list,{name:this.state.inputvalue , id: "xxx"}],inputvalue:"" });

 }
 onResetClick() {
    
    this.setState({...this.state.list , list :[]} );
}

 

    render()
    {

return(
<>

<h2>inputlist</h2>

<input value={this.state.inputvalue} onChange={this.handleinput}/>

<br /> <br />

<button style={{backgroundColor:"blueviolet"}} onClick={this.inputlist}>submit</button>
<button style={{backgroundColor:"blueviolet" , marginLeft :"20px"}} onClick={this.onResetClick}>Reset</button>



{
    this.state.list.map((candidate)=>(
    <>
<ul>
        <li key={candidate.id}>
        Name :{candidate.name}


        </li>
        </ul>
        </>))
}



</>



)



    }

}


export default Inputobject ;