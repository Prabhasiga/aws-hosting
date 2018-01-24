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
                    <div>
                    </div>
                    <section
                        className="spotlight style2 orient-right content-align-left image-position-center onscroll-image-fade-in">
                        <div className="content">
                            <h2>Who I Am</h2>
                            <h4>Hi! I am Prabakaran Sigamani. I love analysing data and developing Products for better
                                solutions and reading books. I'm almost always smiling, till the Last :)</h4>
                            <p>Right Now, I help people creating awesome products to solve Age-Old Fresh Vegetable and Fruits
                                Supply Chain problems at Ninjacart, India's leading Agri-Marketing Platform connection Farmers to Store (B2B Platform).
                                Prior to Development, I was Business Analyst at Ninjacart. There, I focused on demand-forecasting,
                                business-modelling for building cost-effective, Low Waste and Good Quality (Freshness) Supply Chain from
                                scratch with founding Members of Ninjacart breaking the Age-Old Cost-inefficient, Higher Waste
                                and Moderate Quality Vegetable Supply Chain. Popularly know as <b>Scientist</b> :P
                            </p>
                            <p>
                                I'm originally from Pudhukuraipettai, a small town in Cuddalore. When I'm not solving
                                problems, you're likely to find me exploring nature, reading good content on philosophy,
                                personal development, biographies, technology, chit-chat with friends or taking a
                                breath-taking bike drive along Indian NHs.
                            </p>
                        </div>
                        <div className="image">
                            <img src="https://i.imgur.com/EdV2gFC.jpg" alt=""/>
                        </div>
                    </section>
                </section>

                /*<PingMe/>*/
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))