import React, { Component } from 'react';
import axios from 'axios';



class carDetails extends Component {

    constructor(props)
    {
        super(props);
        this.state={valuepassed:'',value:''};
    }

    componentWillMount() {
if(this.props.selectedModel){
        axios.get('http://localhost:3002/models/'+ this.props.selectedModel.id  + '/cars')
        .then(res=>{ 
                this.setState({value:res.data});
        })
        .catch(error=>{
          localStorage.setItem('Error 12 ','2#'+ error);
        });
    }
    }

    componentWillUpdate()
    {
        axios.get('http://localhost:3002/models/'+ this.props.selectedModel.id  + '/cars')
        .then(res=>{ 
                this.setState({value:res.data});
        })
        .catch(error=>{
          localStorage.setItem('Error 12 ','2#'+ error);
        });

    }

    componentWillReceiveProps(nextProps, nextState){
      
  /*      axios.get('http://localhost:3002/models/'+ this.props.selectedModel.id  + '/cars')
        .then(res=>{ 
                this.setState({value:res.data});
        })
        .catch(error=>{
          localStorage.setItem('Error 12 ','2#'+ error);
        });
    */  
    }
  

    render()
    {
        const cars=this.state.value.cars;
   
        return (
                <table>
                          <tbody >
                                <tr>
                                    <td>Details</td>
                                    <td><b>{this.props.selectedModel.name }</b></td>
                                    {cars && cars.map((car)=>(<td>{car.name}</td>))}
                                    </tr>
                          </tbody>
                </table>
                )

    }

}

export default carDetails;