import React, { Component } from 'react'

export class profile extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="span4 well">
                        <div class="row">
                            <div class="span1"><img src="https://res.cloudinary.com/dtappasld/image/upload/v1593208750/s9otj8t6h5qpxfmmqylp.png" alt="" width="100px" height="100px"/></div>
                                <div class="span3">
                                    <p>Admin</p>
                                    <p><strong>Anik Ghosh</strong></p>
                                    <span class=" badge badge-warning">8 messages</span> <span class=" badge badge-info">15 followers</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default profile
