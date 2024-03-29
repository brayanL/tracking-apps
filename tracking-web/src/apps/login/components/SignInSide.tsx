import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  CssBaseline,
  CircularProgress,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles} from '@material-ui/core/styles';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';

import {Credentials, startLogin} from '../slices/loginSlice';
import {RootState} from '../../../store/reducers';
import Copyright from '../../common/Copyright';
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const loginSchema: yup.ObjectSchema<Credentials> = yup.object({
  username: yup.string().required('Este campo es requerido'),
  password: yup.string().required('Este campo es requerido'),
}).defined();

export default function SignInSide() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.login);

  const {handleSubmit, control, formState: {errors}} = useForm({resolver: yupResolver(loginSchema)});
  let history = useHistory();


  useEffect(() => {
    if (login.isSuccess) {
      history.push('/reports/advanced');
    }
  }, [login.isSuccess]);

  const onSubmit = handleSubmit(({username, password}) => {
    dispatch(startLogin({username, password}));
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            <Controller name="username" defaultValue="" control={control} render={({field}) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                margin="normal"
                id="username"
                label="Nombre de Usuario"
                autoFocus
                error={errors?.hasOwnProperty('username')}
                helperText={errors.username?.message}
              />
            )}/>
            <Controller name="password" defaultValue="" control={control} render={({field}) => (
              <TextField
                {...field}
                fullWidth
                variant="outlined"
                margin="normal"
                id="password"
                label="Password"
                type="password"
                error={errors?.hasOwnProperty('password')}
                helperText={errors.password?.message}
              />
            )}/>
            {login.loading ? (
              <Button
                variant="contained"
                fullWidth
                color="primary"
                style={{marginTop: 24, marginBottom: 16}}
              >
                <CircularProgress color="secondary" size={25}/>
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright/>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
