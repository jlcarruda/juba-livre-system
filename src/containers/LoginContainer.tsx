import {
  Theme, Button,
} from '@material-ui/core';
import { Component } from 'react';
import { Form } from '../components/Form';

interface LoginContainerProps {
  theme: Theme;
  className: string;
}

export default class LoginContainer extends Component<LoginContainerProps> {
  render() {
    const { theme, className } = this.props;
    return (
      <Form marginTop={theme.spacing(1)}>
        <Button type="submit" variant="contained" color="primary" fullWidth className={className}>Login</Button>
      </Form>
    );
  }
}
