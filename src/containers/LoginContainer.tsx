import Button from '@material-ui/core/Button';
import { Component } from 'react';

export default class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Button variant="contained" color="secondary">Login</Button>
        <Button variant="contained" color="primary">
          Register
        </Button>
      </div>
    );
  }
}
