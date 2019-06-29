import React from 'react'
import propTypes from "prop-types"

const Useritem = ({user: {login, avatar, html}}) => {

        return (
            <div className= "card text-center">
                <img src={avatar} className='round-img' style= {{ width: '60px'}} alt=""/>
                <h3>{login}</h3>

                <div>
                    <a href={html}>More</a>
                </div>
            </div>
        )
}

Useritem.propTypes = {
    user:propTypes.object.isRequired,
}

export default Useritem
