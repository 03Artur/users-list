import React from 'react';
import styles from "./SelectedPersonList.module.scss";


class SelectedPersonList extends React.Component {

    constructor(props)
    {
        super(props);
        this.renderSelectedPersons=this.renderSelectedPersons.bind(this);

    }


    renderSelectedPersons() {

        return this.props.selectedPersons.map((person, index, array)=>{
            return (<span key={person.id} onClick={() => {
                this.props.onSelectHandler(person);
            }} className={styles["SelectedPersonList-item"]}>{

                person.firstName + ' ' + person.lastName + (index === array.length - 1 ? "" : ",")
            }</span>);
        });
    }

    render() {
        return (
            <section className={styles["SelectedPersonList-container"]}>
                <span>To:</span>
                {
                    this.renderSelectedPersons()
                }
            </section>

        );
    }
}

export default SelectedPersonList;