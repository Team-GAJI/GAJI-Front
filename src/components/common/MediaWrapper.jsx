import styled from "styled-components";

export const ContentWrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 80%;
    margin : 0 auto;
    
    @media(max-width: 768px) {
        width : 90%;
    }

`