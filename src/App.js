import "./App.css";
import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      person: {
        firstName: "Emily",
        lastName: "Tamayo",
        dob: "October 7, 1997",
        phoneNumber: "(777)777-7777",
        id: 1,
      },
      personTwo: {
        firstName: "Wanda",
        lastName: "Maximoff",
        phoneNumber: "(233)232-4343",
        dob: "September 5, 1990",
        id: 2,
      },
      personThree: {
        firstName: "Vison",
        lastName: "Maximoff",
        phoneNumber: "(345)343-2321",
        dob: "June 23, 1987",
        id: 3,
      },
    };
  
    
  }

  render() {
    for( const [key, value] of Object.entries(this.state)){
      console.log(`${key} => ${value}`)
    }
    return (
      <>
        <div className="container">
          <h1 className="title">Basic Information</h1>
          <div className="table-title">
            <p>First Name</p>
            <p>Last Name</p>
            <p>Phone Number</p>
            <p>ID</p>
          </div>
          <div className="container-basicInfo">
            <BasicInfo
              firstName={this.state.person.firstName}
              lastName={this.state.person.lastName}
              phoneNumber={this.state.person.phoneNumber}
              id={this.state.person.id}
            />
            <BasicInfo
              firstName={this.state.personTwo.firstName}
              lastName={this.state.personTwo.lastName}
              phoneNumber={this.state.personTwo.phoneNumber}
              id={this.state.personTwo.id}
            />
            <BasicInfo
              firstName={this.state.personThree.firstName}
              lastName={this.state.personThree.lastName}
              phoneNumber={this.state.personThree.phoneNumber}
              id={this.state.personThree.id}
            />
            
          </div>
        </div>
      </>
    );
  }
}

// function that sets the state for each index of the array

// function App() {
//   class person {
//     constructor(props) {
//       super();
//       this.state = {
//         person: {}
//       };
//     }
//   }
//   return (
//     <div className="App">
//       {/*/ VERY EASY **************************/}
//       {/* <h1>Emily Tamayo</h1>
//       <h2>October 7, 1997</h2>
//       <h2>1</h2> */}
//       <BasicInfo props={person}/>
//     </div>
//   );
// }

export default App;
