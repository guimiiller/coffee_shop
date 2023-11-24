import styled from 'styled-components'

export const NotContainer = styled.div`
    height: calc(100vh - 55px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #FFF;
    color: #221C1E;

    button{
        margin: 20px 0 30px 0;
        padding: 10px 50px;
        background: transparent;
        border: 2px solid #221C1E;
        border-radius: 30px;
        color: #221C1E;
        font-size: 15px;
        cursor: pointer;
        transition: all ease .2s;
    }

    button:hover{
        background-color: #221C1E;
        color: #FFF;
    }

`