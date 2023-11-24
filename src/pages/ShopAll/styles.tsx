import styled from 'styled-components'

export const ShopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    input {
        width: 70%;
        padding: 8px 0 8px 20px;
        border: none;
        box-shadow: 5px 5px 15px #c7c7c7;
        outline: none;
        border-radius: 50px;
        margin-top: 30px;
    }
`

export const ShopContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 30px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #FFF;
        border-radius: 5px;
        padding: 20px 50px;
        cursor: pointer;
        box-shadow: 10px 10px 20px #c5c5c5;

        h4{
            color: #140e08;
            font-weight: 100;
            font-style: italic;
            font-size: 17px;
            margin-bottom: 15px;
        }

        p{
            color: #362212;
            letter-spacing: 1px;
            text-transform: uppercase;
            background-color: transparent;
            font-size: 16px;
        }

        button{
            padding: 5px 20px;
            border-radius: 2px;
            letter-spacing: 1px;
            text-transform: uppercase;
            border: none;
            border-bottom: 1px solid #140e08;
            transition: all .3s;
            cursor: pointer;
            font-weight: 100;
            color: #362212;
            margin-top: 20px; 
            background-color: transparent;
        }

        button:hover{
            border-bottom: 1px solid #ba8014;
        }
    }


    img{
        width: 80px;
    }

    @media(max-width: 773px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 567px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const FlavourOrder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FFF;
    padding: 20px 30px;
    border-radius: 5px;
    box-shadow: 10px 10px 20px #c5c5c5;

    div{
        width: 100%;
        overflow-y: auto;
        max-height: 300px;
    }

    h2{
        color: #140e08;
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 20px;
    }

    h3{
        color: #140e08;
        text-transform: uppercase;
        font-size: 17px;
        margin-bottom: 5px;
    }

    h4{
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 800;
        color: #362212;
        font-size: 15px;
        margin-top: 15px;
    }

    p{
        color: #140e08;
        font-weight: 500;
    }

    .choice_text{
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 100;
        color: #362212;
        font-size: 15px;
    }

    button{
        padding: 5px 20px;
        border-radius: 2px;
        letter-spacing: 1px;
        text-transform: uppercase;
        border: none;
        border-bottom: 1px solid #140e08;
        transition: all .3s;
        cursor: pointer;
        font-weight: 100;
        color: #362212;
        margin: 20px 0;
        background-color: transparent; 
    }

    button:hover{
        border-bottom: 1px solid #ba8014;
    }

    .buy_button{
        width: 70%;
        background: transparent;
        box-shadow: 5px 5px 15px #c7c7c7;
        border: none;
        border-radius: 50px;
        padding: 10px 20px;
        margin-top: 15px;
        cursor: pointer;
        color: #221C1E;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all ease .4s;
        font-size: 13px;
    }

    .buy_button:hover{
        background-color: #221C1E;
        color: #c5c5c5;
        border: none;
    }


`