import React, { Component } from "react";

import styles from '@/comps/LeadershipBox/leadership.module.css'

import Image from 'next/image'

class LeadershipBox extends Component {
    /*
    Expects an image prop, which is a string
    This will then generate a div with the image
    If the string is blank, the uid will be used instead

    Props needed: name, title, email
    */

    // Check if any of the expected props are undefined


    render() {
        // Simple div with a title and value
        if (this.props.src !== undefined) {
            return (
                <div class = {styles.leadershipBox}>
                    <div class = {styles.alignImage}><Image src={this.props.src} alt={this.props.name + "Image"}></Image></div>
                    <p><em>{this.props.title}</em></p>
                    <p><a href={"mailto:" + this.props.email}>{this.props.email}</a></p>
                </div>
            )
        }
    }
}

export default LeadershipBox;