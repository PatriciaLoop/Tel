import React from 'react';

import {  BrowserRouter, Switch, Route} from 'react-router-dom';

//ADMIN

import Dashboard from './pages/admin/dashboard';

import Usuarios from './pages/admin/usuarios';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';
import UsuarioEditar from './pages/admin/usuarios/usuarios.editar';


//USUÁRIOS
import Home from './pages/client/home';
import Login from './pages/admin/login';
import PrivateRoute from './services/wAuth';




export default function Routes(){
    return(
        <BrowserRouter>
        <switch>
            <Route path="/" exact component= {Home} />
            <Route path="/login" exact component={Login} />

            <PrivateRoute path="/admin" exact component= {Dashboard} />

            <PrivateRoute path="/admin/usuarios" exact component= {Usuarios} />
            <Route path="/cadastrar" exact component= {UsuarioCadastrar} />
            <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component= {UsuarioEditar} />

        


        </switch>
        </BrowserRouter>
    )
}