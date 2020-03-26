import React from 'react'
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'
import history from './utils/history'

/* Custom Component */
import Navbar from './components/Navbar'

/* Pages */
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLogin: false
    }
    this.checkLogin = () => {
      if(localStorage.getItem('token')){
        this.setState({isLogin: true})
      }else{
        this.setState({isLogin: false})
      }
    }
  }
  componentDidMount(){
    this.checkLogin()
  }
  render(){
    return(
      <BrowserRouter>
        <Router history={history}>
          <Navbar isLogin={this.state.isLogin} check={()=>this.checkLogin()} />
          <Switch>
            <Route path='/' exact>Hello</Route>
            <Route path='/login' render={(props)=><Login {...props} check={()=>this.checkLogin()}  />} exact />
            <Route path='/dashboard' render={(props)=><Dashboard {...props} />} exact></Route>
          </Switch>
        </Router>
      </BrowserRouter>
    )
  }
}

export default App
