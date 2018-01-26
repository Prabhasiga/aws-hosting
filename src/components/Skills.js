import React, {Component} from 'react'

export default (props) => {
    const imgUrl = props.imgUrl
    const skillName = props.skillName

    return (
        <section>
            <img src={imgUrl} alt="" height="64px" width="aspect-ratio"/>
            <h4>{skillName}</h4>
        </section>
    )
}