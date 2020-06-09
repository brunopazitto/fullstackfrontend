import React,{Component} from 'react';
import jobIcon from '../../img/Aviso.png';

import api from '../../services/api';
import io from 'socket.io-client';

import './index.css';

export default class jobsCard extends Component{

    state = {
        jobs : []
    }

    async loadData(){
        const response = await api.get('/jobs');
        this.setState({jobs : response.data})
    }

    registerSocket(){
        const socket = io(process.env.REACT_APP_API_URL);
        //process.env.REACT_APP_API_URL
        socket.on('newjob', newjob=>{
            this.setState({jobs : [newjob,...this.state.jobs]});
            this.loadData();
        });
    }

    componentDidMount(){
        this.registerSocket();
        this.loadData();
    }

    render(){
        return(
            <div className='main-container'>
               {
                   this.state.jobs.map(job =>(
                       <div className='jobs-container'>
                            <img src={jobIcon} alt=''/>
                             <div className='jobsCard-desc'>
                                <span>{job.description}</span>
                                <p>{job.company}</p>
                                <p>{job.company_andress}</p>
                            </div>
                       </div>  
                   ))
               }

            </div>
        )
    }
}