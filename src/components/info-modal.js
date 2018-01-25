import React from 'react';

import './info-modal.css';

export default function InfoModal(props) {
    return (
        <div className={'overlay'+props.class} id="modal">
            <div className={props.class}>
                <h3>What do I do?</h3><br/>
                <div>
                    <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p><br />
                    <ul>
                        <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li><br /><br />
                        <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li><br /><br />
                        <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li><br /><br />
                    </ul>
                    <br /><p>So, Are you ready?</p>
                    <br /><button className="close" onClick={() => props.onWhatClicked()} href="#">Got It!</button>
                </div>
            </div>
        </div>
    );
}
