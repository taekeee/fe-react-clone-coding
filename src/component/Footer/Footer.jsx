import React from 'react';
import styled from "styled-components";

const FooterBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 305px;
    padding-right: 305px;

`
const Text1 = styled.p`
    
`
const Text2 = styled.p`
    
`

const Footer = () => {
    return (
        <>
        <FooterBlock>
            <Text1>Album example is © Bootstrap, but please download and customize it for yourself!<br/>
            New to Bootstrap? Visit the homepage or read our getting started guide.</Text1>
            <Text2>Back to top</Text2>
        </FooterBlock>
        </>
    );
};

export default Footer;