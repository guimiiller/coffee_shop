import styled from 'styled-components'
import AboutGallery1 from '../../assets/GalleryAbout/about_gallery1.jpg'
import AboutGallery2 from '../../assets/GalleryAbout/about_gallery2.jpg'
import AboutGallery3 from '../../assets/GalleryAbout/about_gallery3.jpg'

export const AboutContainer1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: calc(100vh - 58.66px);
    background-color: #fff;

    @media(max-width: 700px){
        grid-template-columns: 1fr;
    }
`

export const History1 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #000;
    width: 90%;
    padding: 0 50px 50px 50px;
    background-color: #fff;

    h2{
        text-transform: uppercase;
        color: #221C1E;
        margin-bottom: 20px;
        font-size: 40px;
    }

    p{
        color: #221C1E;
        font-size: 15px;
        line-height: 28px;
    }

    a{
        width: 40%;
        background: transparent;
        box-shadow: 5px 5px 15px #c7c7c7;
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
    }

    a:hover{
        background-color: #221C1E;
        color: #c5c5c5;
    }

    @media(max-width: 938px){   
        a{
            width: 70%;
        }
    }

    @media(max-width: 768px){
        h2{
            font-size: 30px;
        }

        p{
            font-size: 15px;
        }
    }

    @media(max-width: 700px){
        width: 100%;
        padding: 40px;
        text-align: center;
        align-items: center;
    }
`

export const History2 = styled.div`
    background-image: url(${AboutGallery1});
    background-position: center;
    background-size: cover;
`

export const AboutContainer2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    background-color: #fff;
    @media(max-width: 700px){
        grid-template-columns: 1fr;
    }
`

export const Mission1 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #000;
    width: 90%;
    padding: 90px 50px 50px 50px;
    background-color: #fff;

    h2{
        text-transform: uppercase;
        color: #221C1E;
        margin-bottom: 20px;
        font-size: 40px;
    }

    p{
        color: #221C1E;
        font-size: 15px;
        line-height: 28px;
    }

    a{
        width: 40%;
        background: transparent;
        box-shadow: 5px 5px 15px #c7c7c7;
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
    }

    a:hover{
        background-color: #221C1E;
        color: #c5c5c5;
    }

    @media(max-width: 938px){   
        a{
            width: 70%;
        }
    }

    @media(max-width: 768px){
        h2{
            font-size: 30px;
        }

        p{
            font-size: 15px;
        }
    }

    @media(max-width: 700px){
        width: 100%;
        padding: 40px;
        text-align: center;
        align-items: center;
    }
`

export const Mission2 = styled.div`
    background-image: url(${AboutGallery2});
    background-position: center;
    background-size: cover;
    grid-column: 2 / 1;
    grid-row: 1 / 3;

    @media(max-width: 700px){
        grid-column: 2 / 1;
        grid-row: 2 / 3;
    }

`

export const AboutContainer3 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    background-color: #fff;

    @media(max-width: 700px){
        grid-template-columns: 1fr;
    }
`

export const Objective1 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #000;
    width: 90%;
    padding: 0 50px 50px 50px;
    background-color: #fff;

    h2{
        text-transform: uppercase;
        color: #221C1E;
        margin-bottom: 20px;
        font-size: 40px;
    }

    p{
        color: #221C1E;
        font-size: 15px;
        line-height: 28px;
    }

    @media(max-width: 768px){
        h2{
            font-size: 30px;
        }

        p{
            font-size: 15px;
        }
    }

    @media(max-width: 700px){
        width: 100%;
        padding: 40px;
        text-align: center;
    }
`

export const Objective2 = styled.div`
    background-image: url(${AboutGallery3});
    background-position: center;
    background-size: cover;
`