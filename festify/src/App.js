import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav><p>this is where the nav bar will go FESTIFY EVENTS USER SEARCH PROFILE</p></nav>
        <div className="header-box">
                  {/* <img src={headerImg} className="header-photo" alt="header" /> */}
                  <h2 className='greeting'>Welcome to Festify! Where you can experience your favourite festivals in your room or on your way to the real thing! Choose an event and Festify will generate a Spotify playlist based on the event's lineup!</h2>
                </div>
      </header>
      <body>
        <div>
                <div> 
                  <p>this is where the events list will go</p>
                </div>
                {/* <EventList events={state.events} /> */}
          </div>
        </body>
    </div>
  );
}

export default App;
