import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="wrapper style1 align-center">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/PrabhaSiga/" className="icon style2 fa-twitter"><span
                            className="label">Twitter</span></a></li>
                        <li><a href="https://www.facebook.com/prabakaransigamani94/" className="icon style2 fa-facebook"><span className="label">Facebook</span></a>
                        </li>
                        <li><a href="https://www.instagram.com/prabhasiga94/" className="icon style2 fa-instagram"><span
                            className="label">Instagram</span></a></li>
                        <li><a href="https://www.linkedin.com/in/prabakaran-sigamani-a27586107/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a>
                        </li>
                        <li><a href="https://github.com/Prabhasiga/" className="icon style2 fa-github"><span
                            className="label">GitHub</span></a></li>
                    </ul>
                    <p>&copy; PrabakaranSigamanai. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                </div>
            </footer>
        )
    }
}

export default Footer