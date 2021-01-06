import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import md5 from 'blueimp-md5';
import server from '../../utils/server';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState('');
  const [code, setCode] = React.useState(0);
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [validationSend, setValidationSend] = React.useState(false);

  const signup = () => {
    if (password === confirmPassword) {
      console.log('on entre');
      const newUser = {
        name: username,
        email: email,
        password: md5(password),
      };

      server
        .signUp(newUser)
        .then(val => {
          console.log(val);
          props.setLogin('Secrétaire', email);
        })
        .catch(alert);
    } else {
      console.log('on entre pas');
    }
  };
  const sendVirificationCode = () => {
    const cod = Math.ceil(Math.random() * 100000);
    const hascode = md5(cod);
    server.sendVerificationCode(cod, hascode, email).then(val => {
      if (val === true) {
        alert(
          'A verification code has been sent to the email address ' +
            email +
            '. Check your emails'
        );
        setValidationSend(true);
      } else {
        alert('this email address does not exist');
      }
    });
  };
  const confirmVerificationCode = () => {
    const hascode = md5(code);
    server
      .confirmVerificationCode(hascode, email, md5(confirmPassword))
      .then(val => {
        if (val === true) {
          server
            .getStatu(email, md5(confirmPassword))
            .then(valeur => {
              props.setLogin(valeur, email);
            })
            .catch(alert);
        } else {
          alert('incorrect verification code');
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form className={classes.form} noValidate>
          {validationSend === false && (
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
          )}
          <Grid container spacing={2}>
            {validationSend === true && (
              <Grid item xs={12}>
                <TextField
                  id="outlined-number"
                  label="Code"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  onChange={e => {
                    setCode(e.target.value);
                  }}
                />
              </Grid>
            )}
            {validationSend === true && (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </Grid>
            )}
          </Grid>
          {validationSend === true && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => {
                e.preventDefault();
                confirmVerificationCode();
              }}
            >
              Reset password
            </Button>
          )}
          {validationSend === false && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => {
                e.preventDefault();
                sendVirificationCode();
              }}
            >
              Send a verification code
            </Button>
          )}
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={e => {
                  e.preventDefault();
                  props.setSignUp();
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
