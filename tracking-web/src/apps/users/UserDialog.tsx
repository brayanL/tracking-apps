import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent, FormControl,
  FormControlLabel, FormHelperText,
  Grid, InputLabel, MenuItem, Select,
  Switch,
  TextField
} from "@material-ui/core";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import DialogTitle from '../common/DialogTitle';
import {Controller, useForm} from "react-hook-form";
import {mutate} from "swr";
import bcrypt from 'bcryptjs';
import {User, UserRol} from "../../types/User";
import {poster} from "../../utils/HttpActions";

type userDialogProps = {
  open: boolean;
  handleClose(): void;
}
const requiredString = 'Este campo es requerido.';

const validationSchema = yup.object().shape({
  fullname: yup.string().required(requiredString),
  username: yup.string().required(requiredString),
  password: yup.string().required(requiredString),
  passwordConfirm: yup.string().test('passwords-match', 'Contraseña no coincide', function(value) {
    return this.parent.password === value
  }),
  rol: yup.string().required(requiredString),
  active: yup.boolean().required(requiredString),
});

export default function UserDialog({open, handleClose}: userDialogProps): JSX.Element {
  const {control, handleSubmit, formState: {errors}} = useForm<User>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      passwordConfirm: "",
      active: true,
      rol: UserRol.Usuario,
    }
  });

  const hasPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  const onSubmit = async (data: User) => {
    try {
      const formData = { ...data, password: hasPassword(data.password) };
      await poster(`${process.env.REACT_APP_BASE_URL}/authenticate/register`, formData);
      await mutate('/authenticate/users');
      handleClose();
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  return (
    <Dialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Crear Usuario
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="fullname"
                control={control}
                render={({field}) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nombres"
                    variant="outlined"
                    error={errors?.hasOwnProperty('fullname')}
                    helperText={errors.fullname?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="username"
                control={control}
                render={({field}) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nombre de Usuario"
                    variant="outlined"
                    error={errors?.hasOwnProperty('username')}
                    helperText={errors.username?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="password"
                control={control}
                render={({field}) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    error={errors?.hasOwnProperty('password')}
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="passwordConfirm"
                control={control}
                render={({field}) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Repita Contraseña"
                    variant="outlined"
                    type="password"
                    error={errors?.hasOwnProperty('passwordConfirm')}
                    helperText={errors.passwordConfirm?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="top"
                control={
                  <Controller
                    name="active"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        {...field}
                        color="primary"
                        type="checkbox"
                        checked={field.value}
                      />
                    )}
                  />
                }
                label="Activo"
                labelPlacement="top"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl
                variant="outlined"
                fullWidth
                error={errors?.hasOwnProperty('rol')}
              >
                <InputLabel id="rol-label">Rol</InputLabel>
                <Controller
                  name="rol"
                  control={control}
                  render={({field}) => (
                    <Select
                      {...field}
                      labelId="rol-label"
                      id="demo-simple-select-filled"
                      label="Rol"
                    >
                      <MenuItem value={UserRol.Usuario}>Usuario</MenuItem>
                      <MenuItem value={UserRol.Administrador}>Administrador</MenuItem>
                    </Select>
                  )}
                />
                <FormHelperText>{errors.rol?.message}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit" autoFocus color="primary">
            Crear Usuario
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
};
