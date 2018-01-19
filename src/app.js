import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Footer,  About, PingMe, Projects, Skills } from './components'

class App extends Component {
    render() {
        return (
            <div id="wrapper" className="divided">

                <About />

                <section className="wrapper style1 align-center" id="first">
                    <div className="inner">
                        <h2>What I Know</h2>
                        <p>Tools which were used in day to day activities for Developing, Analysis and implementing Solutions</p>
                        <div className="items style3 small onscroll-fade-in">
                            <Skills imgUrl="https://i.imgur.com/oxLKpFE.png" skillName="React JS"/>
                            <Skills imgUrl="https://i.imgur.com/KlIzepP.png" skillName="Angular JS"/>
                            <Skills imgUrl="https://i.imgur.com/BYrElfN.png" skillName="JAVA"/>


                            <Skills imgUrl="https://i.imgur.com/W1T3Rx9.png" skillName="Git"/>

                            <Skills imgUrl="https://i.imgur.com/5VHxwZr.png" skillName="MySql"/>

                            <Skills imgUrl="https://i.imgur.com/pdFZDhd.png" skillName=" R "/>
                            <Skills imgUrl="https://i.imgur.com/GXEbs42.png" skillName="Excel"/>

                            <Skills imgUrl="https://i.imgur.com/tv7IRJY.jpg" skillName="FrontLine Solver"/>
                            <Skills imgUrl="https://i.imgur.com/wxltAUL.jpg" skillName="ODL"/>

                            <Skills imgUrl="https://i.imgur.com/pnCdPoP.png" skillName="Linux"/>
                        </div>

                    </div>
                </section>


                <section className="wrapper style1 align-center" >
                    <div className="inner">
                        <h2>What I do</h2>
                        <p>
                            <b>Business Analyst </b>
                            - Profit Loss Statement, Business Modelling, Logistics Cost Optimization
                            <br/>
                            <b>Supply Chain Planning And Management </b>
                            - Logistics Planning, Demand Forecasting, Product Pricing
                            <br/>
                            <b>Front-End </b>
                            - AngularJs, ReactJs, Javascript
                            <br/>
                            <b>Back-end </b>
                            - Java
                        </p>
                    </div>
                    <div className="gallery style2 medium lightbox onscroll-fade-in">
                        <Projects imgUrl="https://i.imgur.com/fqE5DoK.jpg" projectTitle="Logistics Planning"
                                  projectDesc="Transfer of Goods from Distribution Hub to Customer includes planning of
                                  No of Vehicles to be used, Vehicle Type, no of Customer per Vehicle and Cost Optimization
                                  Routes based of Geo-location" />
                        <Projects imgUrl="https://i.imgur.com/fqE5DoK.jpg" projectTitle="projectTitle1" projectDesc="projectDesc" />
                        <Projects imgUrl="https://i.imgur.com/fqE5DoK.jpg" projectTitle="projectTitle2" projectDesc="projectDesc" />
                        <Projects imgUrl="https://i.imgur.com/fqE5DoK.jpg" projectTitle="projectTitle3" projectDesc="projectDesc" />
                        <Projects imgUrl="https://i.imgur.com/fqE5DoK.jpg" projectTitle="projectTitle4" projectDesc="projectDesc" />
                    </div>

                </section>


                <section className="wrapper style1 align-center">
                    <div className="inner">
                        <h2>EXPERIENCE</h2>
                    </div>
                    <section
                        className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
                        <div className="content">
                            <h2>Magna etiam feugiat</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra
                                lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus.
                                Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor
                                sit amet.</p>
                            <ul className="actions vertical">
                                <li><a href="#" className="button">Learn More</a></li>
                            </ul>
                        </div>
                        <div className="image">
                            <img src="images/spotlight01.jpg" alt=""/>
                        </div>
                    </section>
                </section>


                <PingMe/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))