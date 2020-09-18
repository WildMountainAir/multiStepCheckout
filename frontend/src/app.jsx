import React from 'react';

class App extends React.Component {
  constructor(props) {
    this.state = {
      currentForm: 1
    }
    // handlers that need to be bound
  } 

  render () {
    var correctForm = this.state.currentForm === 3 ? <Form3/> : this.state.currentForm === 2 ? <Form2/> : <Form1/>;
      return (
        <div className="app">
          {/* forms on submit will call setState and update current form state to next form and trigger render of form to appear  */}
          {
            correctForm
          }
        </div>
      );
  }
}

//////COMPONENTS//////

// collects name, email, and password for account creation.
const Form1 = (props) => (
  <div>
  </div>
);
// collects ship to address (line 1, line 2, city, state, zip code) and phone number
const Form2 = (props) => (
  <div>
  </div>
);
// collects credit card #, expiry date, CVV, and billing zip code.
const Form3 = (props) => (
  <div>
  </div>
);

export default App;