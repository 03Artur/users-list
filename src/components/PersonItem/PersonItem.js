import React from 'react';
import styles from './PersonItem.module.scss'
import checkMark from '../../assets/icons/check-solid.svg';

function PersonItem(props)  {

        return (
            <div className={styles["PersonItem-container"]}>

                <div style={{
                    backgroundImage: 'url("' + props.personValue.imageSrc + '")'
                }} className={styles["PersonItem-image"]}/>

                <div className={styles["PersonItem-information-container"]}>
                    <div className={styles["PersonItem-fullName"]}>
                        {props.personValue.firstName + ' ' + props.personValue.lastName}
                    </div>
                    <div className={styles["PersonItem-level"]}>{props.personValue.level}</div>
                </div>

                <div className={styles["PersonItem-select-button"]}>
                    <input type="checkbox" id={'checkbox' + props.personValue.id} checked={props.personValue.IsSelected} onChange={()=>{ props.myHandler(props.personValue);}}  />
                    <label htmlFor={'checkbox' + props.personValue.id} >
                        <img srcSet={checkMark} alt="V"/>
                    </label>
                </div>

            </div>
        );

}

export default PersonItem;