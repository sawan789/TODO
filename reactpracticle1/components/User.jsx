import React from 'react' ;

 class User extends React.Component {

    constructor(){

        super();

        this.state = {inputvalue:""}

this.handleinput=this.handleinput.bind(this);

    }

handleinput(event){
    // console.log("event changed" ,event);
    console.log("event changed" ,event.target.value);
// var updatedstate = {...this.state ,inputvalue :"new value"}
this.setState({...this.state ,inputvalue :event.target.value});
}




  render() {
    return (
      <>
        <h2>USERNAME:</h2>
<input value={this.state.inputvalue} onChange={this.handleinput} /> <br /> <br />
      </>
    )
  }
}
 export default User ;

