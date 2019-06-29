import React from 'react'
import propTypes from "prop-types"

const Useritem = ({user: {login, avatar_url, html_url}}) => {

        return (
            <div className= "card text-center">
                <img src={avatar_url} className='round-img' style= {{ width: '60px'}} alt=""/>
                <h3>{login}</h3>

                <div>
                    <a href={html_url}>More</a>
                </div>
            </div>
        )
}

Useritem.propTypes = {
    user:propTypes.object.isRequired,
}

export default Useritem
