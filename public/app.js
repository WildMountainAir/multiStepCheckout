class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 1
    }; // handlers that need to be bound
  }

  render() {
    var correctForm = this.state.currentForm === 3 ? /*#__PURE__*/React.createElement(Form3, null) : this.state.currentForm === 2 ? /*#__PURE__*/React.createElement(Form2, null) : /*#__PURE__*/React.createElement(Form1, null);
    return /*#__PURE__*/React.createElement("div", {
      className: "app"
    }, "hello world", correctForm);
  }

} //////STYLES//////
//////COMPONENTS//////
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

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2Zyb250ZW5kL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudEZvcm0iLCJyZW5kZXIiLCJjb3JyZWN0Rm9ybSIsIkZvcm0xIiwiRm9ybTIiLCJGb3JtMyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxXQUFXLEVBQUU7QUFERixLQUFiLENBRmlCLENBS2pCO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFFBQUlDLFdBQVcsR0FBRyxLQUFLSCxLQUFMLENBQVdDLFdBQVgsS0FBMkIsQ0FBM0IsZ0JBQStCLG9CQUFDLEtBQUQsT0FBL0IsR0FBMkMsS0FBS0QsS0FBTCxDQUFXQyxXQUFYLEtBQTJCLENBQTNCLGdCQUErQixvQkFBQyxLQUFELE9BQS9CLGdCQUEyQyxvQkFBQyxLQUFELE9BQXhHO0FBQ0Esd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLHNCQUlJRSxXQUpKLENBREY7QUFTRDs7QUFwQitCLEMsQ0F1QmxDO0FBR0E7QUFFQTs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJTCxLQUFELGlCQUNaLDhDQUNFLHlEQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLElBQUksRUFBQztBQUF4QixFQUZBLENBREYsZUFLRSwwREFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxJQUFJLEVBQUM7QUFBeEIsRUFGQSxDQUxGLGVBU0UsNkRBRUE7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsSUFBSSxFQUFDO0FBQXhCLEVBRkEsQ0FURixDQURGLEMsQ0FnQkE7OztBQUNBLE1BQU1NLEtBQUssR0FBSU4sS0FBRCxpQkFDWiw4Q0FDRSxtRUFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxJQUFJLEVBQUM7QUFBeEIsRUFGQSxDQURGLGVBS0UsbUVBRUE7QUFBTyxFQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLEVBQUEsSUFBSSxFQUFDO0FBQXhCLEVBRkEsQ0FMRixlQVNFLHlEQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLElBQUksRUFBQztBQUF4QixFQUZBLENBVEYsZUFhRSxxRUFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsRUFBQSxJQUFJLEVBQUM7QUFBeEIsRUFGQSxDQWJGLGVBaUJFLDZEQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLElBQUksRUFBQztBQUF4QixFQUZBLENBakJGLGVBcUJFLDZEQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixFQUFBLElBQUksRUFBQztBQUF4QixFQUZBLENBckJGLENBREYsQyxDQTRCQTs7O0FBQ0EsTUFBTU8sS0FBSyxHQUFJUCxLQUFELGlCQUNaLDhDQUNFLDZGQUVBO0FBQU8sRUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixFQUFBLElBQUksRUFBQztBQUExQixFQUZBLENBREYsZUFLRSxzRkFFQTtBQUFPLEVBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsRUFBQSxJQUFJLEVBQUM7QUFBMUIsRUFGQSxDQUxGLGVBU0UsNkZBRUE7QUFBTyxFQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLEVBQUEsSUFBSSxFQUFDO0FBQTFCLEVBRkEsQ0FURixDQURGOztBQWlCQVEsUUFBUSxDQUFDTCxNQUFULGVBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUlNLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUZKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50Rm9ybTogMVxuICAgIH1cbiAgICAvLyBoYW5kbGVycyB0aGF0IG5lZWQgdG8gYmUgYm91bmRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgY29ycmVjdEZvcm0gPSB0aGlzLnN0YXRlLmN1cnJlbnRGb3JtID09PSAzID8gPEZvcm0zIC8+IDogdGhpcy5zdGF0ZS5jdXJyZW50Rm9ybSA9PT0gMiA/IDxGb3JtMiAvPiA6IDxGb3JtMSAvPjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgaGVsbG8gd29ybGRcbiAgICAgICAgey8qIGZvcm1zIG9uIHN1Ym1pdCB3aWxsIGNhbGwgc2V0U3RhdGUgYW5kIHVwZGF0ZSBjdXJyZW50IGZvcm0gc3RhdGUgdG8gbmV4dCBmb3JtIGFuZCB0cmlnZ2VyIHJlbmRlciBvZiBmb3JtIHRvIGFwcGVhciAgKi99XG4gICAgICAgIHtcbiAgICAgICAgICBjb3JyZWN0Rm9ybVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vLy8vL1NUWUxFUy8vLy8vL1xuXG5cbi8vLy8vL0NPTVBPTkVOVFMvLy8vLy9cblxuLy8gY29sbGVjdHMgbmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZCBmb3IgYWNjb3VudCBjcmVhdGlvbi5cbmNvbnN0IEZvcm0xID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGxhYmVsPlxuICAgICAgTmFtZTpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICBFbWFpbDpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgUGFzc3dvcmQ6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3NcIiAvPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcbi8vIGNvbGxlY3RzIHNoaXAgdG8gYWRkcmVzcyAobGluZSAxLCBsaW5lIDIsIGNpdHksIHN0YXRlLCB6aXAgY29kZSkgYW5kIHBob25lIG51bWJlclxuY29uc3QgRm9ybTIgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8bGFiZWw+XG4gICAgICBBZGRyZXNzIExpbmUgMTpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc0xpbmUxXCIgLz5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbD5cbiAgICAgIEFkZHJlc3MgTGluZSAyOlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzTGluZTJcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgQ2l0eTpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICBTdGF0ZS9Qcm92aWRlbmNlOlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZXByb3ZpZGVuY2VcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgWmlwIENvZGU6XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcFwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICBaaXAgQ29kZTpcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiAvPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcbi8vIGNvbGxlY3RzIGNyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlLlxuY29uc3QgRm9ybTMgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8bGFiZWw+XG4gICAgICBDcmVkaXQgQ2FyZCBOdW1iZXIgKG5vIHNwYWNlcyBvciBkYXNoZXMpOlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImNyZWRpdENhcmROdW1cIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgRXhwaXJ5IERhdGUgKG5vIHNwYWNlcyBvciBkYXNoZXMpOlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImV4cGlyeURhdGVcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgQ3JlZGl0IENhcmQgTnVtYmVyIChubyBzcGFjZXMgb3IgZGFzaGVzKTpcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjcmVkaXRDYXJkTnVtXCIgLz5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdfQ==