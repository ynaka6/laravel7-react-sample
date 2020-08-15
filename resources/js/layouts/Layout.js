import React from "react";
import { Container } from 'react-bootstrap';
import DefaultHeader from "./DefaultHeader"
import styled from "styled-components";

const WrapperContainer = styled(Container)`
  padding: 2rem 0;
`
  
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <DefaultHeader />
        <WrapperContainer>
          {this.props.children}
        </WrapperContainer>
      </div>
    )
  }
}
  