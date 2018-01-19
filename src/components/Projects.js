import React, {Component} from 'react'

export default (props) => {
    const imgUrl = props.imgUrl
    const projectTitle = props.projectTitle
    const projectDesc =props.projectDesc

    return(
        <article>
            <a href={imgUrl} className="image">
                <img src={imgUrl}alt=""/>
            </a>
            <div className="caption">
                <h3>{projectTitle}</h3>
                <p>{projectDesc}</p>
                <ul className="actions">
                    <li><span className="button small">Details</span></li>
                </ul>
            </div>
        </article>
    )
}


