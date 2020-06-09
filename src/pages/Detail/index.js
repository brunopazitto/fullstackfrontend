import React,{Component} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import './index.css'

export default class Detail extends Component{
    state ={
        dados : {}

    }
    async loadData(){       
        const {id} = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({dados : response.data})
    }

    componentDidMount(){
        this.loadData();
    }


    render(){
        return(
            <div>
                <Header/>
                    {
                      <div className='detail-container'>
                         <div className='card'>
                             <img id='avatar' src={this.state.dados.avatar_url} alt=''/>
                             <div id='info'>
                                 <span>Nome: {this.state.dados.name}</span>
                                 <p><span>Empresa: {this.state.dados.company}</span></p>
                                 <p><span>Biografia: {this.state.dados.bio}</span></p>
                                 <p><span>Repositórios: {this.state.dados.public_repos}</span></p>
                                 <p><span>Seguidores: {this.state.dados.followers}</span></p>
                             </div>
                         </div>
     
                     </div>
                    }
            </div>
        )
    }
}