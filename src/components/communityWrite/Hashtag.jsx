import React from 'react';
import styled from 'styled-components';

const Hashtag = () => {
    return (
        <Wrapper>
            #Spring
        </Wrapper>
    )
}

export default Hashtag;

/* CSS */
const Wrapper = styled.div`
    margin-right: 0.7em;
    padding: 0 1.2em;
    border-radius: 15px;
    height: 1.8182em;
    line-height: 1.8182em;
    background-color: #8E59FF;
    color: white;
    font-size: 0.6875em;
    font-weight: bold;
    text-align: center;
`;
