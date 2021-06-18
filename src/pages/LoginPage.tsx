import { Component } from 'react';
import {
  Grid, Paper, createStyles, withStyles, WithStyles, Theme,
} from '@material-ui/core';
import { LoginContainer } from '../containers';
import { FormWrapper } from '../components/Form';

const styles = (theme: Theme) => createStyles({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

type LoginPageProps = WithStyles<typeof styles>;
const LoginPage = withStyles(styles)(class extends Component<LoginPageProps> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <FormWrapper className={classes.paper}>
            <LoginContainer className={classes.submit} />
          </FormWrapper>
        </Grid>
      </Grid>
    );
  }
});

export default LoginPage;
