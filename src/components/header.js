import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
 
    return (
        <header>
            <TopNav onWhatClicked={()=> props.onWhatClicked()} />
            <InfoModal class={props.class} onWhatClicked={() => props.onWhatClicked()}/>
            <h1>HOT or COLD</h1>
        </header>
    );
};
