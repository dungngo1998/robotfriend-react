import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));

    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
        
      
    } 
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
 
            return (
                <div className='tc'>
                    <h1 className='f1'>RobotFriend</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                        
                    </Scroll>
                   
                </div>
                
            );
        }
        
    }
    

    


export default App;