//main.js

var MyEvent = React.createClass({
  componentDidMount: function() {
    console.log("componentDidMount");
    console.log(this.state);
    console.log(this.props);
    console.log(this.props.theState);
    console.log(this.props.params);
  },
  getInitialState: function() {
    console.log("getInitialState");
    return {};
  },
  render: function() {
    return (
      <div className="myEvent">
        <h1>Event</h1>
        <p>{this.state.key}</p>
        <p>{this.props.key}</p>
      </div>
    );
  }
});

// var EventForm = React.createClass({
//   getInitialState: function() {
//     return {name: '', description: ''};
//   },
//   handleNameChange: function(e) {
//     this.setState({name: e.target.value});
//   },
//   handleDescriptionChange: function(e) {
//     this.setState({description: e.target.value});
//   },
//   handleSubmit: function(e) {
//     console.log("In handle submit");
//     e.preventDefault();
//     var name = this.state.name.trim();
//     var description = this.state.description.trim();
//     if (!name) {
//       return;
//     }
//     console.log("Values not empty");
//     this.props.onEventSubmit({name: name, description: description});
//     this.setState({name: '', description: ''});
//   },
//   render: function() {
//     return (
//       <form className="eventForm" onSubmit={this.handleSubmit}>
//         <h3>Create a new event:</h3>
//         <label>Name:</label>
//         <input
//           type="text"
//           placeholder="Name of your event (e.g. Grace's wedding weekend)"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//           size="60"
//         />
//         <br/>
//         <label>Description:</label>
//         <input
//           type="text"
//           placeholder="Event description..."
//           value={this.state.description}
//           onChange={this.handleDescriptionChange}
//           size="60"
//         />
//         <br/>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// });

// var EventList = React.createClass({
//   render: function() {
//     var eventNodes = this.props.events.map(function(event) {
//       return (
//         <li key={event.key}>
//           <a href="">{event.name}</a>
//         </li>
//       );
//     });
//     return (
//       <div className="eventList">
//         <h3>{user.name}'s Events</h3>
//         <ul>
//         {eventNodes}
//         </ul>
//       </div>
//     );
//   }
// });

// var Event = React.createClass({
//   render: function() {
//     return (
//       <div className="event">
//         <h2 className="eventName">
//           {this.props.name}
//         </h2>
//         <p>{this.props.description}</p>
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <MyEvent/>,
  document.getElementById('content')
);
