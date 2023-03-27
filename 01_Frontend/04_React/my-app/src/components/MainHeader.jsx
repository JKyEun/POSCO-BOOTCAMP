// import { Component } from 'react';

// class MainHeader extends Component {
//   constructor() {
//     super();
//     this.cass = true;
//   }
//   render() {
//     return <h1>Hello, {this.cass ? '캬' : '노맛'} World!</h1>;
//   }
// }

function MainHeader() {
  const cass = true;
  return <h1>Hello, {cass ? '캬' : '노맛'} World!</h1>;
}

export default MainHeader;
