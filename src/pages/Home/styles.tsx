import styled from 'styled-components'
import backgroundMain from '../../assets/bg_coffee.jpg'


export const BannerContainer = styled.div`
    height: calc(100vh - 55px);
    background-image: linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)),url(${backgroundMain});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

`

export const BannerText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FFF;
    text-transform: uppercase;
    width: 50%;
    max-width: 1140px;

    img{
        width: 60px;
    }

    h1{
        font-size: 40px;
        text-transform: uppercase;
        font-style: italic;
    }

    h2{
        font-size: 25px;
        font-weight: 100;
        margin-bottom: 40px;
    }


    a{
        width: 40%;
        background: #FFF;
        border: none;
        border-radius: 50px;
        padding: 10px 20px;
        margin-top: 30px;
        cursor: pointer;
        color: #221C1E;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all ease .4s;
        font-size: 13px;
        text-align: center;
        font-weight: bold;
    }

    a:hover{
        background-color: #221C1E;
        color: #c5c5c5;
    }

    @media(max-width: 845px){
        a{
            width: 100%;
        }
    }
`

export const StoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    padding: 30px;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const StoreText = styled.div`
    text-align: center;
    flex: 1;

    h3{
        font-style: italic;
        color: #ba8014;
        letter-spacing: 1px;
        font-size: 23px;
    }

    h2{
        text-transform: uppercase;
        color: #362212;
        letter-spacing: 1px;
    }

    p{
        font-size: 13px;
        color: #362212;
        letter-spacing: 1px;
        font-style: italic;
        line-height: 20px;
        margin: 15px 0;
    }

    a{
        border: none;
        color: #362212;
        letter-spacing: 1px;
        text-transform: uppercase;
        border-bottom: 1px solid #362212;
        background-color: transparent;
        cursor: pointer;
        transition: all .3s;
        font-size: 13px;
    }

    a:hover{
        border-bottom: 1px solid #ba8014;
    }

    h4{
        color: #362212;
        font-size: 15px;
        margin-top: 15px;
    }

    h6{
        font-size: 14px;
        color: #c7c7c7;
        font-weight: 100;
    }
`

export const StoreImage = styled.div`
    flex: 1;
    img{
        width: 100%;
    }
`

export const ServicesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #221C1E;
    padding: 50px;
`

export const ServicesText = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3{
        font-style: italic;
        color: #ba8014;
        letter-spacing: 1px;
        font-size: 23px;
    }
    
    h2{
        text-transform: uppercase;
        color: #FFF;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }

`

export const ServicesContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 40px;

    @media(max-width: 768px){
        flex-direction: column;
    }

    .card_container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 20px;
    }

    .geometric{
        width: 78px;
        height: 78px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        margin: 15px 20px;

        img{
            width: 30px;
        }
    }

    .service_card{
        background-color: #FFF;
        text-align: center;
        margin: 10px 20px 0 20px;
        padding: 30px 20px 60px 20px;
        width: 100%;
        border-radius: 5px;
    }


    h3{
        color: #362212;
        font-size: 23px;
        font-weight: 100;
        margin-bottom: 15px;
    }
    
    p{
        font-size: 11px;
        color: #362212;
        letter-spacing: 1px;
        line-height: 23px;
    }
` 

export const ReservationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    padding: 50px;
`

export const ReservationContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-shadow: 10px 10px 20px #c5c5c5;
    
    @media(max-width: 768px){
        flex-direction: column;

        .reserve1{
            width: 100%
        }

        .reserve2{
            padding: 20px;
        }
    }

    .reserve1{
        flex: 1;
        background-color: #221C1E;
        text-align: center;
        padding: 50px 20px 80px 20px;

        h2{
            color: #FFF;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        h3{
            letter-spacing: 2px;
            color: #ba8014;
            font-style: italic;
        }

        h4{
            margin-top: 20px;
            color: #c3c3c3;
            text-transform: uppercase;
            font-size: 15px;
            line-height: 30px;
        }

        h5{
            color: #ba8014;
            font-size: 17px;
            letter-spacing: 1px;
            font-weight: 100;
            margin-top: 30px;
        }

        p{
            color: #FFF;
            font-size: 12px;
            line-height: 20px;
        }
    }

    .reserve2{
        flex: 4;
        background-color: #FFF;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h3{
            font-style: italic;
            color: #ba8014;
            letter-spacing: 1px;
        }

        h2{
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #140e08;
            margin-bottom: 30px;
        }

        form{
            width: 100%;
        }

        input{
            margin: 20px;
            border: none;
            border-bottom: 1px solid #362211;
            width: 25%;
            outline: none;
        }
    }
`

export const FlavorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px; 
`

export const FlavorText = styled.div`
    text-align: center;

    h2{
        color: #362211;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    h3{
        letter-spacing: 2px;
        color: #ba8014;
        font-style: italic;
    }
`

export const FlavorContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;

       
    @media(max-width: 768px){
        width: 100%;
        flex-direction: column;  
    }
`

export const FlavorCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 390px;
    padding: 30px;
    margin: 30px;


    .flavour_container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px 20px 50px 20px;  

        button{
            width: 50%;
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
        }

        button:hover{
            background-color: #221C1E;
            color: #c5c5c5;
        }
    }    
    .swiper-slide{
        cursor: pointer;
    }

    .swiper-pagination-bullet{
        background-color: #000;
        width: 30px;
        height: 6px;
        border-radius: 2px;
    }

    .swiper-pagination-bullet-active{
        background-color: #221C1E;
    }

    .swiper-button-prev,
    .swiper-button-next{
        color: #000;
    }

    img{
        width: 60px;
        height: 60px;
        object-fit: cover;
    }

    
    @media(max-width: 394px){
        max-width: 300px;
    }
`


export const FlavorCardsP2 = styled.div`
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
        padding: 20px;
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

`

export const FlavorOrder = styled.div`
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
export const SlideContainer = styled.div`
    background-color: #131313;
    display: flex;
    align-items: center;
    justify-content: center;

    .swiper-slide{
        cursor: pointer;
    }

    .swiper-pagination-bullet{
        background-color: #000;
        width: 30px;
        height: 6px;
        border-radius: 2px;

    }

    .swiper-pagination-bullet-active{
        background-color: #ba8014;
    }

    .swiper-button-prev,
    .swiper-button-next{
        color: #000;
    }

    img{
        width: 100%;
        height: 600px;
        object-fit: cover;
    }
`

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #131313;
    padding: 40px;

    @media(max-width: 996px){
        flex-direction: column;
        text-align: center;
    }
`

export const ContactP1 = styled.div`
    flex: 2;
    margin-left: 40px;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;


    h3{
        color: #ba8014;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-style: italic;
        font-size: 24px;
        font-weight: 100;
    }

    p{
        color: #c5c5c5;
        font-size: 12px;
        width: 400px;
        line-height: 20px;
    }

    @media(max-width: 996px){
        p{
            width: 250px;
        }
    }

`

export const ContactP2 = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h4{
        color: #c5c5c5;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 18px;
        font-weight: 100;
    }

    input{
        width: 60%;
        background-color: transparent;
        outline: none;
        border: 1px solid #2B2A28;
        color: #c5c5c5;
        padding: 8px 50px 8px 15px;
        margin-top: 10px;
    }

    .follow_icons{
        display: flex;
        margin-top: 25px; 

        img{
            width: 23px;
            height: 23px;
            margin-left: 15px;
            margin-top: 2px;
        }
    }

    @media(max-width: 996px){
        flex-direction: column;
        align-items: center;
        margin-top: 40px;

        input{
            width: 100%;
        }
    }

`