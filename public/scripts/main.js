//main.js

var data = [
  {key: 2, name: "Paulary engagement party", description: "", createDate: '2013-10-1'},
  {key: 1, name: "Grace and Rahul's wedding", description: "Grace and Rahul's wedding weekend Oct 11, 2014", createDate: '2014-10-1'}
];

var user = { name: "Grace Moy", email: "grace.h.moy@gmail.com", id: "grace.h.moy@gmail.com" };

var MyEvents = React.createClass({
  loadEventsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({events: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadEventsFromServer();
  },
  getInitialState: function() {
    return {events: []};
  },
  handleEventSubmit: function(event) {
    console.log("In handleEventSubmit")
    //var events = this.state.events;
    // Optimistically set an id on the new comment. It will be replaced by an
    // id generated by the server. In a production application you would likely
    // not use Date.now() for this and would have a more robust system in place.
    //event.key = Date.now();
    //var newEvents = events.concat([event]);
    //this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: event,
      success: function(data) {
        console.log("In post success");
        console.log(data);
        this.setState({events: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="myEvents">
        <h1>Guest List</h1>
        <EventForm onEventSubmit={this.handleEventSubmit} />
        <EventList events={this.state.events}/>
      </div>
    );
  }
});

var EventForm = React.createClass({
  getInitialState: function() {
    return {name: '', description: ''};
  },
  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },
  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },
  handleSubmit: function(e) {
    console.log("In handle submit");
    e.preventDefault();
    var name = this.state.name.trim();
    var description = this.state.description.trim();
    if (!name) {
      return;
    }
    console.log("Values not empty");
    this.props.onEventSubmit({name: name, description: description});
    this.setState({name: '', description: ''});
  },
  render: function() {
    return (
      <form className="eventForm" onSubmit={this.handleSubmit}>
        <h3>Create a new event:</h3>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name of your event (e.g. Grace's wedding weekend)"
          value={this.state.name}
          onChange={this.handleNameChange}
          size="60"
        />
        <br/>
        <label>Description:</label>
        <input
          type="text"
          placeholder="Event description..."
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          size="60"
        />
        <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
});

var EventList = React.createClass({
  render: function() {
    var eventNodes = this.props.events.map(function(event) {
      return (
        <li key={event.key}>
          <a href="event.html?key=1">{event.name}</a>
        </li>
      );
    });
    return (
      <div className="eventList">
        <h3>{user.name}'s Events</h3>
        <ul>
        {eventNodes}
        </ul>
      </div>
    );
  }
});

var Event = React.createClass({
  render: function() {
    return (
      <div className="event">
        <h2 className="eventName">
          {this.props.name}
        </h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
});

ReactDOM.render(
  // <Router history={browserHistory}>
  //   <Route path="/" component={App}>
  //     <Route path="event/:eventKey" component={User} />
  //   </Route>
  // </Router>
  <MyEvents url="/api/events" user={user}/>,
  document.getElementById('content')
);
