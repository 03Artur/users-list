import React, {Component} from 'react';
import styles from './UserItem.module.sass';
import checkIcon from '../../assets/icons/check-solid.svg'

class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            IsSelected: false,
        };

    }
    render() {return(
        <div className={styles["UserItem-container"]}>
            <div></div>
            <div></div>
            <div className="round">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
        </div>
        </div>
    );
    }

}