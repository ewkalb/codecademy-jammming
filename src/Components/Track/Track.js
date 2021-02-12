import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {
    // renderAction() {
    //     if (isRemoval) {
    //         <button className="Track-action">+</button>
    //     } else {
    //         <button className="Track-action">-</button>
    //     }
    // }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>TRACK NAME</h3>
                    <p>TRACK ARTIST | TRACK ALBUM</p>
                </div>
                {/* {this.renderAction()} */}
            </div>
        )
    }
}

export default Track;