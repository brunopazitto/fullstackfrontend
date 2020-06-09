import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './index.css';

export default class AddUserBar extends Component{
    render(){
        return(
            <div className='AddUserBar-container'>
                <span>Cadastro de Desenvolvedor</span>
                <Link to='/adduser'>
                    <button type='submit'>Cadastrar</button>
                </Link>

                <span>Informações</span>
                <p>
                    Este é um app desenvolvido durante o curso de ReactJS 
                    com o objetivo de cadastrar desenvolvedores
                    do githubp para que os mesmos possam encontrar vagas de emprego.
                </p>
            </div>
        )
    }
}