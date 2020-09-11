import React from "react";
import { Container } from 'react-bootstrap';
import DefaultHeader from "./DefaultHeader"
import styled from "styled-components";
import history from '../history';
import { useSelector, useDispatch } from "react-redux";
import { isAuthSelector, logout } from "../store/auth";


const WrapperContainer = styled(Container)`
  padding: 2rem 0;
`
  
export default function Layout(props) {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    history.push('/login');
  }

  return (
    <div>
      <DefaultHeader isAuth={isAuth} handleLogout={handleLogout} />
      <WrapperContainer>
        {props.children}
      </WrapperContainer>
    </div>
  )
}
