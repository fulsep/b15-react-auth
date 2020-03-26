import React, { Component } from 'react'
import {
  Container,
  Row, Col,
  ListGroup, ListGroupItem, Jumbotron
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.checkToken = () => {
      if(!localStorage.getItem('token')){
        alert('You must login first')
        props.history.push('/login')
      }
    }
  }
  componentDidMount(){
    this.checkToken()
  }
  render() {
    return (
      <Container className='mt-4'>
        <Jumbotron>
          <h3>Welcome back, username!</h3>
        </Jumbotron>
        <Row>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <Link to='/dashboard'>Home</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/'>Management User</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/'>Management Route</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/'>Management Agent</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/'>Management Busses</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to='/'>Management Schedule</Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={9}>
            Hello Dashboard
          </Col>
        </Row>
      </Container>
    )
  }
}
