/* @flow */
import React from 'react';
import { render } from 'react-dom';
import TodoApp from './TodoApp/TodoApp';
// import { createTheremin } from './lib/Theremin';

class App extends React.Component {
	render() {
		return <TodoApp />;
	}
}


// let styles = {}

// styles.theremin = {
//   height: 200,
//   width: 200,
//   fontSize: 10,
//   border: '1px solid',
//   cursor: 'crosshair',
//   margin: 10,
//   display: 'inline-block'
// }

// class App extends React.Component {

//   componentWillMount () {
//     this.theremin = createTheremin()
//   }

//   play = () => {
//     this.theremin.play()
//   }

//   stop = () => {
//     this.theremin.stop()
//   }

//   changeTone = (event) => {
//     let { clientX, clientY } = event
//     let { top, right, bottom, left } = event.target.getBoundingClientRect()
//     let pitch = (clientX - left) / 200
//     let volume = 1 - (clientY - top) / 200
//     this.theremin.setPitchBend(pitch)
//     this.theremin.setVolume(volume)
//   }

//   render () {
//     return (
//       <div>
//         <h1>What does it mean to be declarative?</h1>
//         <div
//           style={styles.theremin}
//           onMouseEnter={this.play}
//           onMouseLeave={this.stop}
//           onMouseMove={this.changeTone}
//         />
//       </div>
//     )
//   }
// };

render(<App/>, document.getElementById('app'));