import React, { useEffect,useState } from 'react';
import CardArray from '../Components/CardArray';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import './App.css';


function App () {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield:''
    //     }
    // }
	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(answer => answer.json())
	// 		.then(users => this.setState({ robots: users }));
	// }

	const [robots, setRobots] = useState([])
	const [searchfield,setSearchfield] = useState('')
	const [count, setCount] = useState(0)

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(answer => answer.json())
		.then(users => {setRobots(users)});
	},[])

	const onSearchChange = (event) => {
			setSearchfield( event.target.value)
	}

	const filteredRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	
		return !robots.length ?
		<h1 className='tc'>Loading</h1> :
		(	
			<div className = 'tc'>.
				<h1 className= 'f1'> Robofriends</h1>
				<SearchBar searchChange={onSearchChange}/>
				<Scroll>
					<CardArray robots={filteredRobots}/>
				</Scroll>
			</div>
		);
}
export default App;