import * as React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, FormControlProps } from 'react-bootstrap';
import './Login.css';
import { apiService } from '../services/api.service';

interface LoginState {
  isLoading: boolean;
  email: string;
  password: string;
}

interface Props {
  history: any;
}

export default class Login extends React.Component<Props, LoginState> {

  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
    };
  }

  validateForm = () =>
    this.state.email.length > 0 && this.state.password.length > 0

  handleEmailChange = (event: React.FormEvent<FormControlProps>) =>
    this.setState({
      email: event.currentTarget.value as string,
    })

  handlePasswordChange = (event: React.FormEvent<FormControlProps>) =>
    this.setState({
      password: event.currentTarget.value as string,
    })

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      await apiService.login(this.state.email, this.state.password);
      this.props.history.push('/projects');
    } catch (e) {
      console.log(e);
      alert(e.message);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
