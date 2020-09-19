import React from 'react';

class App extends React.Component {
  constructor(props) {
    this.state = {
      currentForm: 1
    }; // handlers that need to be bound
  }

  render() {
    // var correctForm = this.state.currentForm === 3 ? <Form3 /> : this.state.currentForm === 2 ? <Form2 /> : <Form1 />;
    return /*#__PURE__*/React.createElement("div", {
      className: "app"
    }, "hello world");
  }

} //////COMPONENTS//////
// collects name, email, and password for account creation.


const Form1 = props => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "name"
})), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "email"
})), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "pass"
}))); // collects ship to address (line 1, line 2, city, state, zip code) and phone number


const Form2 = props => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Address Line 1:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "addressLine1"
})), /*#__PURE__*/React.createElement("label", null, "Address Line 2:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "addressLine2"
})), /*#__PURE__*/React.createElement("label", null, "City:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "city"
})), /*#__PURE__*/React.createElement("label", null, "State/Providence:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "stateprovidence"
})), /*#__PURE__*/React.createElement("label", null, "Zip Code:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "zip"
})), /*#__PURE__*/React.createElement("label", null, "Zip Code:", /*#__PURE__*/React.createElement("input", {
  type: "text",
  name: "phone"
}))); // collects credit card #, expiry date, CVV, and billing zip code.


const Form3 = props => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Credit Card Number (no spaces or dashes):", /*#__PURE__*/React.createElement("input", {
  type: "number",
  name: "creditCardNum"
})), /*#__PURE__*/React.createElement("label", null, "Expiry Date (no spaces or dashes):", /*#__PURE__*/React.createElement("input", {
  type: "number",
  name: "expiryDate"
})), /*#__PURE__*/React.createElement("label", null, "Credit Card Number (no spaces or dashes):", /*#__PURE__*/React.createElement("input", {
  type: "number",
  name: "creditCardNum"
})));

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Zyb250ZW5kL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudEZvcm0iLCJyZW5kZXIiLCJGb3JtMSIsIkZvcm0yIiwiRm9ybTMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkQsS0FBSyxDQUFDRSxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFdBQVcsRUFBRTtBQURGLEtBQWIsQ0FEaUIsQ0FJakI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1A7QUFDQSx3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYscUJBREY7QUFTRDs7QUFuQitCLEMsQ0FzQmxDO0FBRUE7OztBQUNBLE1BQU1DLEtBQUssR0FBSUosS0FBRCxpQkFDWiw4Q0FDRSx5REFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxJQUFJLEVBQUM7QUFBeEIsRUFGQSxDQURGLGVBS0UsMERBRUE7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsSUFBSSxFQUFDO0FBQXhCLEVBRkEsQ0FMRixlQVNFLDZEQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLElBQUksRUFBQztBQUF4QixFQUZBLENBVEYsQ0FERixDLENBZ0JBOzs7QUFDQSxNQUFNSyxLQUFLLEdBQUlMLEtBQUQsaUJBQ1osOENBQ0UsbUVBRUE7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsSUFBSSxFQUFDO0FBQXhCLEVBRkEsQ0FERixlQUtFLG1FQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLElBQUksRUFBQztBQUF4QixFQUZBLENBTEYsZUFTRSx5REFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxJQUFJLEVBQUM7QUFBeEIsRUFGQSxDQVRGLGVBYUUscUVBRUE7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsSUFBSSxFQUFDO0FBQXhCLEVBRkEsQ0FiRixlQWlCRSw2REFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxJQUFJLEVBQUM7QUFBeEIsRUFGQSxDQWpCRixlQXFCRSw2REFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxJQUFJLEVBQUM7QUFBeEIsRUFGQSxDQXJCRixDQURGLEMsQ0E0QkE7OztBQUNBLE1BQU1NLEtBQUssR0FBSU4sS0FBRCxpQkFDWiw4Q0FDRSw2RkFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsRUFBQSxJQUFJLEVBQUM7QUFBMUIsRUFGQSxDQURGLGVBS0Usc0ZBRUE7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsSUFBSSxFQUFDO0FBQTFCLEVBRkEsQ0FMRixlQVNFLDZGQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixFQUFBLElBQUksRUFBQztBQUExQixFQUZBLENBVEYsQ0FERjs7QUFpQkEsZUFBZUgsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRGb3JtOiAxXG4gICAgfVxuICAgIC8vIGhhbmRsZXJzIHRoYXQgbmVlZCB0byBiZSBib3VuZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHZhciBjb3JyZWN0Rm9ybSA9IHRoaXMuc3RhdGUuY3VycmVudEZvcm0gPT09IDMgPyA8Rm9ybTMgLz4gOiB0aGlzLnN0YXRlLmN1cnJlbnRGb3JtID09PSAyID8gPEZvcm0yIC8+IDogPEZvcm0xIC8+O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICBoZWxsbyB3b3JsZFxuICAgICAgICB7LyogZm9ybXMgb24gc3VibWl0IHdpbGwgY2FsbCBzZXRTdGF0ZSBhbmQgdXBkYXRlIGN1cnJlbnQgZm9ybSBzdGF0ZSB0byBuZXh0IGZvcm0gYW5kIHRyaWdnZXIgcmVuZGVyIG9mIGZvcm0gdG8gYXBwZWFyICAqL31cbiAgICAgICAgey8qIHtcbiAgICAgICAgICBjb3JyZWN0Rm9ybVxuICAgICAgICB9ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLy8vLy9DT01QT05FTlRTLy8vLy8vXG5cbi8vIGNvbGxlY3RzIG5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgZm9yIGFjY291bnQgY3JlYXRpb24uXG5jb25zdCBGb3JtMSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxsYWJlbD5cbiAgICAgIE5hbWU6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgRW1haWw6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbD5cbiAgICAgIFBhc3N3b3JkOlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzXCIgLz5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbik7XG4vLyBjb2xsZWN0cyBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXJcbmNvbnN0IEZvcm0yID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGxhYmVsPlxuICAgICAgQWRkcmVzcyBMaW5lIDE6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHJlc3NMaW5lMVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICBBZGRyZXNzIExpbmUgMjpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc0xpbmUyXCIgLz5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbD5cbiAgICAgIENpdHk6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgU3RhdGUvUHJvdmlkZW5jZTpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVwcm92aWRlbmNlXCIgLz5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbD5cbiAgICAgIFppcCBDb2RlOlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgWmlwIENvZGU6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgLz5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbik7XG4vLyBjb2xsZWN0cyBjcmVkaXQgY2FyZCAjLCBleHBpcnkgZGF0ZSwgQ1ZWLCBhbmQgYmlsbGluZyB6aXAgY29kZS5cbmNvbnN0IEZvcm0zID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGxhYmVsPlxuICAgICAgQ3JlZGl0IENhcmQgTnVtYmVyIChubyBzcGFjZXMgb3IgZGFzaGVzKTpcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjcmVkaXRDYXJkTnVtXCIgLz5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbD5cbiAgICAgIEV4cGlyeSBEYXRlIChubyBzcGFjZXMgb3IgZGFzaGVzKTpcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJleHBpcnlEYXRlXCIgLz5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbD5cbiAgICAgIENyZWRpdCBDYXJkIE51bWJlciAobm8gc3BhY2VzIG9yIGRhc2hlcyk6XG4gICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiY3JlZGl0Q2FyZE51bVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19