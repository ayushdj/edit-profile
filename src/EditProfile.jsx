/*
  Importing all the necessary components
*/
import React from 'react'
import Bio from './components/Bio/Bio.jsx'
import Birhtday from './components/Birthday/Birthday.jsx'
import CoverPhoto from './components/CoverPhoto/CoverPhoto.jsx'
import ProfilePicture from './components/ProfilePicture/ProfilePicture.jsx'
import Location from './components/Location/Location.jsx'
import Email from './components/Email/Email.jsx'
import PhoneNumber from './components/PhoneNumber/PhoneNumber.jsx'
import Username from './components/Username/Username.jsx'
import FirstName from './components/Name/FirstName'
import LastName from './components/Name/LastName'

/*
  Importing the necessary hooks and other function components
*/
import {Row, Col, Form, Button, Alert} from 'react-bootstrap'
import {useState} from 'react'
import { validateEmail, validateBio, validateUsername } from './utils/validations.js'


/**
 * Main function that gets rendered by react
 * @returns JSX for the edit profile page
 */
function EditProfile() {

  // creating the state variables representing each input field
  const [values, setValues] = useState({
    email: '',
    userName: '',
    bio: '',
    birthday: new Date(),
    location: '',
    firstName: '',
    lastName: '',
  })

  // state variable for phone number
  const [phoneNumber, setPhoneNumber] = useState();

  // creating the state variables to keep track of any violations
  const [violations, setViolations] = useState({
    emailViolation: true,
    bioViolation: false,
    userNameViolation: false
  })

  // state variable to represent character counts
  const [characterCounts, setCharacterCounts] = useState({
    bioCharacterCount: 0,
    usernameCharacterCount: 0
  })

  // creating a state variable to save the changes made by the user
  const [savedChanges, setSavedChanges] = useState(false);

  // defining a state variable that allows users to dismiss the alert 
  // about submitting the form
  const [dismiss, setDismiss] = useState(true);

  /* ============================================================================== */

  // event handler function for first name
  const handleFirstName = (event) => {
    // set the first name
    setValues({...values, firstName:event.target.value});
  }

  // event handler function for last name
  const handleLastName = (event) => {
    // set the last name
    setValues({...values, lastName:event.target.value});
  }

  // event handler function for email
  const handleEmailChange = (event) => {
    // set the email to be the value typed by the user
    setValues({...values, email:event.target.value});
    // find out if the email is valid or not
    let isValidEmail = validateEmail(values.email);
    // set the violation for the email field
    setViolations({...violations, emailViolation:isValidEmail});
  }

  // event handler function for username
  const handleUserNameChange = (event) => {
    // set the username to be the value typed by the user
    setValues({...values, userName:event.target.value})
    // find out if the username the user entered is valid or not
    let isValidUserName = validateUsername(values.userName);
    // set the violation for the username field
    setViolations({...violations, userNameViolation:isValidUserName});
    // setting the character count
    setCharacterCounts({...characterCounts, usernameCharacterCount:event.target.value.length});
  }

  // event handler function for bio component
  const handleBioChange = (event) => {
    // set the bio state variable to be what the user typed
    setValues({...values, bio:event.target.value});
    // find out of the bio is valid
    let isValidBio = validateBio(values.bio);
    // set the violations for the bio field
    setViolations({...violations, bioViolation:isValidBio});
    // setting the character count
    setCharacterCounts({...characterCounts, bioCharacterCount:event.target.value.length});
  }

  // event hander function for date component
  const handleBirthdayChange = (event) => {
    // setting the value of the birthday field
    setValues({...values, birthday:event.target.value});
  }  

  // event handler function for location component
  const handleLocationChange = (event) => {
    // setting the users location
    setValues({...values, location:event.target.value});
  }

  // event handling function to save the changes
  const handleSaveChanges = (event) => {
    
    // preventing save changes from going away after submitting the changes. We want the saved changes
    // banner to persist
    event.preventDefault();

    // only if the user hasn't violated any of the conditions are they allowed to submit the form
    if (violations.emailViolation === false && violations.userNameViolation === false && violations.bioViolation === false) {
      
      // Creating a JSON object to be posted to an external API
      const json = {
        email: values.email,
        userName: values.userName,
        bio: values.bio,
        birthday: values.birthday,
        location: values.location,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: phoneNumber,
      }

      /*
      // posting JSON to external API
      var postObject = new XMLHttpRequest();
      postObject.open("POST", "https://www.mocky.io/v2/566061f21200008e3aabd919", true);
      postObject.setRequestHeader('Content-Type', 'application/json');
      postObject.send(JSON.stringify({
          json
      }));
      */

      // Log to the console as an indication that the JSON object has
      // been created
      console.log(json);

      // Set the saved changes to be true
      setSavedChanges(true);
    } else {
      // If any condition is violated, then we set saved changes to be false
      setSavedChanges(false);
    }
  }

    // creating an event handler function that allows the user to get rid of the 
    // "success" message that pops up after the user has submitted the changes they want
    const handleDismiss = (event) => {
      if (dismiss) {
          setDismiss(!dismiss);
      }
    }

  // event handler function to reset all fields should the user want to do that
  const handleResetForm = (event) => {      
    // reload the page 
    window.location.reload(false);
}

  return (
    <>
    <div className="app container py-5 row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-4 col-xs-6">
        
        </div>

        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-8 col-xs-3">
          <Form onSubmit={handleSaveChanges}>
            {savedChanges ? <Alert variant="success" dismissible={true} show={dismiss} onClose={handleDismiss}>
            Success! Your changes have been saved</Alert> : null}
            <ProfilePicture />
            <CoverPhoto />
            <Row>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <FirstName handleFirstName={handleFirstName} firstName={values.firstName}/> 
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6"> 
                <LastName handleLastName={handleLastName} lastName={values.lastName}/>
              </div>
            </Row>

            {/* Email component */}
            <Email handleEmailChange={handleEmailChange} email={values.email} emailViolation={violations.emailViolation} />
            {/* Username component */}
            <Username handleUserNameChange={handleUserNameChange} userName={values.userName} userNameViolation={violations.userNameViolation} 
            usernameCharacterCount={characterCounts.usernameCharacterCount}/>
            {/* Bio component */}            
            <Bio handleBioChange={handleBioChange} bio={values.bio} bioViolation={violations.bioViolation} bioCharacterCount={characterCounts.bioCharacterCount} />
            {/* Birthday component */}
            <Birhtday handleBirthdayChange={handleBirthdayChange} birthday={values.birthday} />
            {/* Location Component */}
            <Location handleLocationChange={handleLocationChange} location={values.location}/>
            {/* Phone number component */}
            <PhoneNumber handlePhoneNumber={setPhoneNumber} number={phoneNumber} />
            
            <Row style={{marginTop:"10px"}}>
              <Col xxl={3} xl={3} lg={2} md={1} sm={1} xs={2}></Col>
              <Col xxl="auto" lg="auto" md="auto" sm="auto" xs="auto"><Button variant="success" type="btn btn-success">Save Changes</Button></Col>
              <Col xxl="auto" lg="auto" md="auto" sm="auto" xs="auto"><Button variant="reset" className="btn btn-danger" onClick={handleResetForm}>Reset Fields</Button></Col>
            </Row>

            {console.log(savedChanges)}
            {console.log("bio violation: " + violations.bioViolation)}
            {console.log("email violation: " + violations.emailViolation)}
            {console.log("username violation: " + violations.userNameViolation)}
          </Form>
        </div>
      </div>
    </>

  );
}

/*

<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
          <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
          <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
          <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>

*/
export default EditProfile;