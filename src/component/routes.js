import React, { Component } from 'react';

import {Router,Stack,Scene} from 'react-native-router-flux';
import RegistrationPage from './SignUp';
import LoginPageComponent from './LoginPage';



class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
               <Stack key="root">
                  <Scene key="login" component={LoginPageComponent} title="Login" initial/>
                  <Scene key="signup" component={RegistrationPage} title="Register"/>
                </Stack>
            </Router>
         );
    }
}
 
export default Routes;