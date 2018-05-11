import React, { Component } from 'react';
import './App.css';
import Day from './Day';
import AddNewDay from './AddNewDay';

const days = [
    {
        goals: [
            {
                name: "Wash Face",
                isComplete: false,
            },
            {
                name: "Buy Eggs from store",
                isComplete: false,
            },
            {
                name: "Run for 30 minutes",
                isComplete: false,
            },
        ],
        thoughts: "",
        mood: "",
    },
    {
        goals: [
            {
                name: "Wash Feet",
                isComplete: false,
            },
            {
                name: "Buy Milk from store",
                isComplete: false,
            },
            {
                name: "Run for 30000 minutes",
                isComplete: false,
            },
        ],
        thoughts: "",
        mood: "",
    },
]
;


if(localStorage.getItem('days') === null) {
    localStorage.setItem('days', JSON.stringify(days));
    localStorage.setItem('view', 0);
}
else {
    console.log("local has something");
}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            days: JSON.parse(localStorage.getItem('days')),
            currentDay: 0,
            currentView: Number(localStorage.getItem('view')),
        }

        this.onUpdateGoals = this.onUpdateGoals.bind(this);
        this.onUpdateThoughts = this.onUpdateThoughts.bind(this);
        this.onUpdateMood = this.onUpdateMood.bind(this);
        this.addDay = this.addDay.bind(this);
        this.forward = this.forward.bind(this);
        this.back = this.back.bind(this);
        this.deleteDay = this.deleteDay.bind(this);
    }

    componentWillMount() {
        const days = this.getDays();

        this.setState({ days });
    }

    getDays = () => {
        return this.state.days;
    }

    updateMainState = (id, object) => {
        let updatedDaysObject = this.state.days;

        for (let i = 0; i < updatedDaysObject.length; i++) {
            if (i === id) {
                updatedDaysObject[i] = object;
                console.log(updatedDaysObject[i]);
                break;
            }
        }
        this.setState({ days: updatedDaysObject });

        localStorage.setItem('days', JSON.stringify(this.state.days));

    }

    onUpdateGoals = (day, newGoals) => {
        let newObj = {...this.state.days[day], goals: newGoals};

        this.updateMainState(day,newObj);
    }

    onUpdateThoughts = (day, newThoughts) => {
        let newObj = {...this.state.days[day], thoughts: newThoughts };

        this.updateMainState(day,newObj);
    }

    onUpdateMood = (day, newMood) => {
        let newObj = {...this.state.days[day], mood : newMood };

        this.updateMainState(day,newObj);
    }

    addDay = () => {
        let newObj = {
            goals: [],
            thoughts: "",
            mood: "",
        }
        let mutableState = this.state.days;

        mutableState.push(newObj);

        this.setState({days: mutableState});

        localStorage.setItem('days', JSON.stringify(this.state.days));

        this.setState({ currentView: this.state.days.length-1 });

    }

    back() {
        if (this.state.currentView - 1 === -1) {
            return false;
        }
        this.setState({ currentView: this.state.currentView - 1 }, () => {
            localStorage.setItem('view', this.state.currentView);
        });
    }

    forward () {
        if (this.state.currentView + 1 > this.state.days.length-1) {
            return false;
        }
        this.setState({ currentView: this.state.currentView + 1 }, () => {
            localStorage.setItem('view', this.state.currentView);
        });
    }

    deleteDay = () => {
        let dayArray = this.getDays();
        if(this.state.days.length-1 === 0){
            return false;
        }
        dayArray.splice(this.state.currentView, 1);

        this.setState({days: dayArray});

        localStorage.setItem('days', JSON.stringify(this.state.days));

    }

    render() {

        return (
            <div className="App">
                <AddNewDay 
                currentDay = {this.state.currentView}
                addDay = {this.addDay}
                totalDays = {this.state.days.length} 
                back = {this.back}
                forward = {this.forward} 
                deleteDay = {this.deleteDay} />
                <Day 
                mainObject={this.state.days[this.state.currentView]}
                currentView={this.state.currentView}
                onUpdateGoals={this.onUpdateGoals}
                onUpdateThoughts={this.onUpdateThoughts} 
                onUpdateMood={this.onUpdateMood} />
            </div>
        );
    }
}

export default App;
