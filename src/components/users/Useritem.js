import React, { Component } from 'react'

class Useritem extends Component {



    render() {
        const {login, avatar, html } = this.props.user;
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
}

export default Useritem
