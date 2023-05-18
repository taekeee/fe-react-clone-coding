import React from 'react';
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { BiCamera } from "react-icons/bi";

const Top = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 3px;
    padding-bottom: 3px;
    background-color:#343A40;


`;

const Title = styled.h1`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left :300px;
  color:white;
`;

const Name = styled.h1`
    font-size: 19px;
    margin-left: 5px;
`
const Button = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 300px;
    padding:5px;
    padding-left: 12px;
    padding-right: 12px;
    border: 1px solid #9A9DA0;
    border-radius: 5px;
    cursor: pointer;
`
const Navigation = () => {
    return (
        <Top>
            <Title> 
                <BiCamera color="white" size="28px"/>
                <Name>Album</Name>
            </Title>
            <Button>
                <GoThreeBars color="#9A9DA0" size="28px"/>
            </Button>
        </Top>
    );
};

export default Navigation;