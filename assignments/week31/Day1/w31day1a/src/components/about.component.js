import React, { Component } from 'react'

export class about extends Component {
    render() {
        return (
            <div className="auth-inner">
                <div className="container">
                    <div className="row">
                        <div className="span4 well">
                            <div className="row">
                                <div className="aboutus">
                                    <h2 className="aboutus-title">About Us</h2>
                                    <p className="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                    <p className="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                                    <a className="aboutus-more" href="/">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default about
