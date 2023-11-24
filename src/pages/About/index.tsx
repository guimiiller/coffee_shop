import * as X from './styles'

export const About = () =>{
    return(
        <>
            <X.AboutContainer1>
                <X.History1>
                    <h2>History</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <a href="#mission">Learn More</a>
                </X.History1>
                <X.History2></X.History2>
            </X.AboutContainer1>
            <X.AboutContainer2>
                <X.Mission1 id='mission'>
                    <h2>Mission</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <a href="#objective">Learn More</a>
                </X.Mission1>
                <X.Mission2></X.Mission2>
            </X.AboutContainer2>
            <X.AboutContainer3>
                <X.Objective1 id='objective'>
                    <h2>Objective</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </X.Objective1>
                <X.Objective2></X.Objective2>
            </X.AboutContainer3>
        </>
    )
}