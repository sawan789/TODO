import React from "react";
class Inputvalsum extends React.Component{
    constructor(){

super();
this.state = {

    inputvalue1 :" ",
    inputvalue2 : " ",
    addedname : [ ] 
};
this.handleinput1 = this.handleinput1.bind(this);
this.handleinput2 = this.handleinput2.bind(this);

this.inputlist = this.inputlist.bind(this);
    }

handleinput1(event){

    this.setState({...this.state , inputvalue1:event.target.value });

}


handleinput2(event){

    this.setState({...this.state , inputvalue2:event.target.value });

}


 inputlist(event){


    this.setState({...this.state , addedname:[Number(this.state.inputvalue1) + Number(this.state.inputvalue2)] ,inputvalue1:" " ,inputvalue2 : " "});




    
    
 }







    render()
    {

return(
<>

<h2>inputvalue sum</h2>

<input style={{margin:"10px" ,padding :'5px' ,backgroundColor:'beige',textAlign:"center",border :"1px solid black"}}  value={this.state.inputvalue1} onChange={this.handleinput1}/>
                                +
 <input style={{margin:"10px" ,padding :'5px' ,backgroundColor:'beige',textAlign:"center",border :"1px solid black"}} value={this.state.inputvalue2} onChange={this.handleinput2}/>


<br /> <br />

<button style={{backgroundColor:"blueviolet"}} onClick={this.inputlist}>SUM</button>



{
    this.state.addedname.map((val)=>(
    <>

        <p>
        {val}
        </p>
        </>))
}




</>



)



    }

}


export default Inputvalsum;