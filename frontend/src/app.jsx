import React from 'react';

class App extends React.Component {
  constructor(props) {
    this.state = {
      currentForm: 1
    }
    // handlers that need to be bound
  }

  render() {
    // var correctForm = this.state.currentForm === 3 ? <Form3 /> : this.state.currentForm === 2 ? <Form2 /> : <Form1 />;
    return (
      <div className="app">
        hello world
        {/* forms on submit will call setState and update current form state to next form and trigger render of form to appear  */}
        {/* {
          correctForm
        } */}
      </div>
    );
  }
}

//////COMPONENTS//////

// collects name, email, and password for account creation.
const Form1 = (props) => (
  <div>
    <label>
      Name:
    <input type="text" name="name" />
    </label>
    <label>
      Email:
    <input type="text" name="email" />
    </label>
    <label>
      Password:
    <input type="text" name="pass" />
    </label>
  </div>
);
// collects ship to address (line 1, line 2, city, state, zip code) and phone number
const Form2 = (props) => (
  <div>
    <label>
      Address Line 1:
    <input type="text" name="addressLine1" />
    </label>
    <label>
      Address Line 2:
    <input type="text" name="addressLine2" />
    </label>
    <label>
      City:
    <input type="text" name="city" />
    </label>
    <label>
      State/Providence:
    <input type="text" name="stateprovidence" />
    </label>
    <label>
      Zip Code:
    <input type="text" name="zip" />
    </label>
    <label>
      Zip Code:
    <input type="text" name="phone" />
    </label>
  </div>
);
// collects credit card #, expiry date, CVV, and billing zip code.
const Form3 = (props) => (
  <div>
    <label>
      Credit Card Number (no spaces or dashes):
    <input type="number" name="creditCardNum" />
    </label>
    <label>
      Expiry Date (no spaces or dashes):
    <input type="number" name="expiryDate" />
    </label>
    <label>
      Credit Card Number (no spaces or dashes):
    <input type="number" name="creditCardNum" />
    </label>
  </div>
);

export default App;