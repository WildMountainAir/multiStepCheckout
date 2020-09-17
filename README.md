# Multi Step Checkout
Build a single-page app that takes a user through a series of forms that simulate a shopping cart checkout experience.

Basic Requirements
Build a single-page app that takes a user through a series of forms that simulate a shopping cart checkout experience. You should:

Use Express to serve up an index.html file and its associated assets
Build your UI using ReactJS and pre-compile your views using Babel
Use MongoDB or MySQL to store your user data
Build your Express app inside server.js and your client app inside the client folder. For the basic requirements, you MUST place all of your React components into one file, app.jsx. Link your transpiled component file from index.html. DO NOT USE WEBPACK

For ease of development, be sure to set Babel to watch for changes in your app.js file to recompile those changes immediately. Additionally, be sure to use nodemon to watch for changes in server.js.

The homepage of your application should have a Checkout button, which when clicked, takes the user to the first of several forms. We'll call the forms F1, F2, F3.

F1 collects name, email, and password for account creation.
F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
F3 collects credit card #, expiry date, CVV, and billing zip code.
At each step, a Next button allows the user to progress to the next step in the checkout process. The final step is a confirmation page which summarizes the data collected in the prior three steps. This page contains a Purchase button that completes the purchase. When the purchase is complete, the user is returned to the homepage.

No actual shopping cart or products are necessary; you are modeling the checkout process only.

Every run through the checkout process (each time Checkout is clicked) creates a new record in your server's database, and each step in the checkout process saves its piece of the data to that record (the data is saved when Next is clicked).

Use the coding best practices you learned previously to ensure a clear separation of concerns with well-defined interfaces.

If you get stuck or are not sure how to proceed, you may look at the hints file for this challenge to help you along.

Advanced Content
Don't allow the user to proceed until all the required fields are filled in. Address line 2 should be optional. Be sure to display appropriate error messages to the user, so they know why they are not allowed to proceed.
Validate the form fields. Don't allow the user to proceed to the next step and do not save the data until the fields are valid. Validation means that you must prevent the user from entering haha as the email address -- the email address have a valid data-shape. You'll have to decide which fields deserve validation and which do not. Be sure to display appropriate error messages to the user, so they know why they are not allowed to proceed.
If the window is closed and reopened, the checkout process should continue at the same step the user was on when the window was closed (it's ok if the fields on the "current" step are blank when the window is reopened). The app should continue to put the remaining data into the same record it was using before the window was closed. Once Purchase is clicked, it should not be possible to continue.
Allow the user to move back and forward through the checkout process.
When the user reaches the confirmation page, let the user edit any prior step. After editing fields in that step, the user should be returned to the confirmation page.
Write tests and use Nightwatch.js to confirm your entire checkout flow is working correctly.
Nightmare Mode
Refactor to use Redux to store your state.
If the window is closed and reopened, restore the form field values that were present when the user closed the window.
Integrate with Google Maps API, adding an address search to verify the ship to address.
Test your app (either by hand or via automated tests) using different browsers. Fix any issues that arise.
