import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Cardetails from './carDetails'


class App extends Component {
  state = {
    selectedOption: null
     };

  
  constructor(props)
  {
   
    super(props);
    this.state={value:'{models:1}',drpdownclassname: 'dropdown-noshow', selectedModel:{id:0,name:''} };
    //this.state={ expandDropDown: true};
    this.selectModel=this.selectModel.bind(this);
    this.ShowModels=this.ShowModels.bind(this);
   
  }
 
selectModel(id,name)
{
  this.setState({selectedModel:{id,name}});
  this.ShowModels();
}


  componentWillMount() {
    
      axios.get('http://localhost:3002/models/')
      .then(res=>{ 
              this.setState({value:res.data});
      })
      .catch(error=>{
        localStorage.setItem('Error 12 ','2#'+ error);
      });
    
  }
  ShowModels()
  {
    if (this.state.drpdownclassname==='dropdown-noshow')
    this.setState({drpdownclassname:'dropdown-show'});
    else
    this.setState({drpdownclassname:'dropdown-noshow'});

  }
 

  render() {
    const models=this.state.value.models;
   
   
    return (
    <div>
   <button onClick={()=>this.ShowModels()}>...</button>
     <table className={this.state.drpdownclassname}>
       <tbody >
        <tr><td>  
        </td ></tr>
       { models && models.map((model)=>(<tr  > 
       <td onClick={()=>this.selectModel(model.id,model.name)} >  {model.id + '-' + model.name } </td> </tr>))}
     
       </tbody>
     </table>
     <Cardetails selectedModel={this.state.selectedModel} ></Cardetails>
    </div>
      
    );
  }
}

export default App;
