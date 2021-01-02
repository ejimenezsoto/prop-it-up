import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {name: "Jane, Doe", age: 45, hairColor: "Black"},
                {name: "Smith, John", age: 88, hairColor: "Brown"},
                {name: "Fillmore, Millard", age: 50, hairColor: "Brown"},
                {name: "Smith, Maria", age: 62, hairColor: "Brown"}
            ]
        }
    }
    render(){
        return(
            <div>
                {this.state.people.map(people => (
                    <div>
                        <h1>{people.name}</h1>
                        <h5>Age:{people.age}</h5>
                        <h5>Hair Color:{people.age}</h5>
                    </div>
                ))};
            </div>
        );
    }
}

export default PersonCard