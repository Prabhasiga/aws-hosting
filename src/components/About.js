import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <div>
                <section
                    className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                    <div className="content">
                        <h1>Prabakaran Sigamani</h1>
                        <p className="major">
                            Love to solve Real-World Problem through Data and Technology working with StartUp.
                            <br/>
                            Techie, Data-Guy, Bike-Rider, Traveller, Nature-Lover
                        </p>
                        <ul className="actions vertical">
                            <li><a href="#first" className="button big wide smooth-scroll-end">Explore More</a></li>
                        </ul>
                    </div>
                    <div className="image">
                        <img src="https://i.imgur.com/EdV2gFC.jpg" title="source: imgur.com" alt="Prabakaran Sigamani"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default About