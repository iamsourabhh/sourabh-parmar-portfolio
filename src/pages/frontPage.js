import React from 'react';
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const FrontPage = () => (
    <React.Fragment>
        <div style={{ position: '   ' }}>
            <h1 style={{ position: 'absolute', color: '#fff', textAlign: 'center', marginLeft: '15em', marginTop: '5em' }}>
                Hello, I'm Sourabh!
                <br />
                <small>
                    Full Stack Ninja | Open Source Enthusiast | Blogger
                </small>
                <br />

                <a target="_blank" href="https://github.com/iamsourabhh">
                    <Icon inverted name='github' size='large' />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/iamsourabhh/">
                    <Icon inverted name='linkedin' size='large' />
                </a>
                <a target="_blank" href="https://twitter.com/iamsourabhh">
                    <Icon inverted name='twitter' size='large' />
                </a>
                <a target="_blank" href="https://www.facebook.com/sourabh.parmar.35">
                    <Icon inverted name='facebook official' size='large' />
                </a>
                <a target="_blank" href="https://www.instagram.com/iamsourabhh/">
                    <Icon inverted name='instagram' size='large' />
                </a>

            </h1>

        </div>
    </React.Fragment>
);
export default FrontPage;