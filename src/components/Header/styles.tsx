import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    
    .navigation {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 40px;
        max-width: 1140px;
        transition: all 0.5s;
    }

    .logo{
        margin-left: 20px;
        flex: 1;
        font-style: italic;
        color: #000;
    }

    .navigation ul {
        display: flex;
        align-items: center;
        gap: 70px;
    }

    .navigation img{
        width: 22px;
        transition: transform .3s;
    }

    .navigation img:hover{
        transform: scale(1.1);
    }

    .navigation ul li a {
        font-size: 15px;
        font-weight: 500;
        transition: all 0.3s;
        color: #000;
        text-transform: uppercase;
    }

    .navigation ul li a:hover{
        color: #ba8014;
    }

    .menu {
        cursor: pointer;
        display: none;
    }

    .menu .bar {
        display: block;
        width: 28px;
        height: 3px;
        border-radius: 3px;
        background-color: #140e08;
        margin: 5px auto;
        transition: all 0.3s;
    }

    @media (max-width: 852px){

        .navigation{
            padding: 13px 20px;
            max-width: unset;
        }
    
        .menu{
            display: block;
            z-index: 999;
        }

        .menu.active{
            position: fixed;
        }
    
        .menu.active .bar:nth-child(1){
            transform: translateY(8px) rotate(45deg);
            background-color: #000;
        }
    
        .menu.active .bar:nth-child(2){
            opacity: 0;
            background-color: #000;
        }
    
        .menu.active .bar:nth-child(3){
            transform: translateY(-8px) rotate(-45deg);
            background-color: #000;
        }
    
        .nav_menu{
            position: fixed;
            right: -100%;
            top: 0px;
            width: 100%; 
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background-color: #FFF;
            gap: -10px;
            transition: 0.3s;
            z-index: 999;
        }

        .nav_menu.active{
            right: 0;
        }
    
        .nav_item{
            margin: 16px 0;
        }
    }

`