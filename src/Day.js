import React, { Component } from 'react';
import ThoughtLogger from './ThoughtLogger';
import GoalItem from './GoalItem';
import AddGoal from './AddGoal';
import MoodForm from './MoodForm';

class Day extends Component {

  constructor(props) {
    super(props);

    this.state = {
      goals: this.props.mainObject.goals,
    }
  }

  componentWillMount() {
    const goals = this.getgoals();

    this.setState({ goals });

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onThoughtsChange = this.onThoughtsChange.bind(this);
    this.onMoodSelect = this.onMoodSelect.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  getgoals = () => {
    return this.props.mainObject.goals;
  }

  onDelete = (name) => {
    console.log(name);
    const goals = this.getgoals();

    const filtergoals = goals.filter(goal => {
      return goal.name !== name;
    });

    console.log(filtergoals);

    this.setState({ goals : filtergoals })
  }

  onAdd = (name) => {
    console.log(name);
    const goals = this.getgoals();

    goals.push({ name , isComplete:false });

    this.setState({ goals });

    this.props.onUpdateGoals(this.props.currentView, goals);

  }

  onEditSubmit = (name,originalName) => {
    let goals = this.getgoals();

    goals.map(goal => {
      if(goal.name === originalName) {
        goal.name = name;
      }
      return goal;
    });

    this.setState({ goals });

    this.props.onUpdateGoals(this.props.currentView, goals);
  }

  onThoughtsChange = (text) => {
    //this.setState({ thoughts: text });

    this.props.onUpdateThoughts(this.props.currentView, text);
  }

  onMoodSelect = (selection) => {
    this.props.onUpdateMood(this.props.currentView, selection);
  }

  toggleComplete = (id) => {
    let goals = this.getgoals();

    goals.map(goal => {
      if (goal.name === id) {
        goal.name = goal.name;
        goal.isComplete = !goal.isComplete;
      }
      return goal;
    });

    this.setState({ goals });

    this.props.onUpdateGoals(this.props.currentView, goals);
  }

  render() {
    
    return (
      <div className="App">
        <h1>Today's Goals</h1>
        <MoodForm onMoodSelect = {this.onMoodSelect}/>

        <AddGoal 
          onAdd = {this.onAdd}
          />
        <ThoughtLogger thoughts = {this.props.mainObject.thoughts} onThoughtsChange = {this.onThoughtsChange} />
        {
          this.props.mainObject.goals.map(goal => {
            return (
              <GoalItem key={goal.name} {...goal} toggleComplete = {this.toggleComplete} onDelete = {this.onDelete} onEditSubmit = {this.onEditSubmit}/>
            );
          })
        }
      </div>
    );
  }
}

export default Day;
