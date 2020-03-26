import React, { Component } from 'react'
import styled from 'styled-components'

import {Spinner} from 'reactstrap'

const Parent = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index:9999;
  top:0;
  left:0;
`

const Child = styled(Spinner)`
  color: #fff;
  width: 4rem;
  height: 4rem;
`

export default class Loading extends Component {
  render() {
    return (
      <Parent>
        <Child/>
      </Parent>
    )
  }
}