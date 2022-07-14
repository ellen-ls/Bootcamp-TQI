import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
padding:8px;

input{
    border:1px solid #ccc;
    border-radius:8px;
    width:100%;
    height:40px;
    
}

button{
    background-color:#ccc;
    padding:8px 16px;
    margin:8px;
    border-radius:8px;

    &:hover{
        background-color:#ccc;
        box-shadow:5px 3px 5px #483D8B;
    }
}
`