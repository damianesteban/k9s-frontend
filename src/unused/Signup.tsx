// // import * as React from 'react';
// import * as React from 'react';
// import {
//   HelpBlock,
//   FormGroup,
//   FormControl,
//   FormControlProps,
//   ControlLabel,
// } from 'react-bootstrap';
// import { LoaderButton } from '../components/LoaderButton';
// import './Signup.css';
// import { apiService } from '../services/api.service';
// import { ChildProps } from '../App';
// import { RouteComponentProps } from 'react-router-dom';

// interface State {
//   isLoading: boolean;
//   email: string;
//   password: string;
//   confirmationCode: string;
//   newUser?: string;
// }

// interface Props extends RouteComponentProps<ChildProps> {}

// export default class Signup extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       isLoading: false,
//       email: '',
//       password: '',
//       confirmationCode: '',
//       newUser: undefined,
//     };
//   }

//   validateForm() {
//     return (
//       this.state.email.length > 0 &&
//       this.state.password.length > 0 &&
//       this.state.password.length > 3
//     );
//   }

//   validateConfirmationForm() {
//     return this.state.confirmationCode.length > 0;
//   }

//   handleCodeChange = (event: React.FormEvent<FormControlProps>) => {
//     this.setState({
//       email: event.currentTarget.value as string,
//     });
//   }

//   handleEmailChange = (event: React.FormEvent<FormControlProps>) => {
//     this.setState({
//       email: event.currentTarget.value as string,
//     });
//   }

//   handlePasswordChange = (event: React.FormEvent<FormControlProps>) => {
//     this.setState({
//       password: event.currentTarget.value as string,
//     });
//   }

//   handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     this.setState({ isLoading: true });

//     try {
//       const newUser =
//         await apiService.signup(this.state.email, this.state.password);
//       this.setState({
//         newUser,
//       });
//     } catch (error) {
//       alert(error.message);
//     }

//     this.setState({ isLoading: false });
//   }

//   handleConfirmationSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     this.setState({ isLoading: true });

//     try {
//       await apiService.login(this.state.email, this.state.password);

//       this.props.userHasAuthenticated(true);
//       this.props.history!.push('/');
//     } catch (error) {
//       alert(error.message);
//       this.setState({ isLoading: false });
//     }
//   }

//   renderConfirmationForm() {
//     return (
//       <form onSubmit={this.handleConfirmationSubmit}>
//         <FormGroup controlId="confirmationCode" bsSize="large">
//           <ControlLabel>Confirmation Code</ControlLabel>
//           <FormControl
//             autoFocus
//             type="tel"
//             value={this.state.confirmationCode}
//             onChange={this.handleCodeChange}
//           />
//           <HelpBlock>Please check your email for the code.</HelpBlock>
//         </FormGroup>
//         <LoaderButton
//           block
//           bsSize="large"
//           disabled={!this.validateConfirmationForm()}
//           type="submit"
//           isLoading={this.state.isLoading}
//           text="Verify"
//           loadingText="Verifying…"
//         />
//       </form>
//     );
//   }

//   renderForm() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <ControlLabel>Email</ControlLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={this.state.email}
//             onChange={this.handleEmailChange}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <ControlLabel>Password</ControlLabel>
//           <FormControl
//             value={this.state.password}
//             onChange={this.handlePasswordChange}
//             type="password"
//           />
//         </FormGroup>
//         <LoaderButton
//           block
//           bsSize="large"
//           disabled={!this.validateForm()}
//           type="submit"
//           isLoading={this.state.isLoading}
//           text="Signup"
//           loadingText="Signing up…"
//         />
//       </form>
//     );
//   }

//   render() {
//     return (
//       <div className="Signup">
//         {this.state.newUser === null
//           ? this.renderForm()
//           : this.renderConfirmationForm()}
//       </div>
//     );
//   }
// }
