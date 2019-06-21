import React, { Component } from 'react'

class Useritem extends Component {
    constructor () {
        super();
        this.state = {
            id: 'id',
            login: 'mojombo',
            avatar: 'https://avatars0.githubusercontent.com/u/1?v=4',
            html: 'https://github.com/mojombo'
        }
    }


    render() {
        return (
            <div className= "card text-center">
                <img src="{this.state.avatar}" className='round-img' style= {{ width: '60px'}} alt=""/>
                <h3>{this.state.login}</h3>

                <div>
                    <a href="this.state.html">More</a>
                </div>
            </div>
        )
    }
}

export default Useritem
