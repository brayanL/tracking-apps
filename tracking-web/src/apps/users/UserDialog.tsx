import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Grid,
  Switch,
  TextField
} from "@material-ui/core";
import DialogTitle from '../common/DialogTitle';

type userDialogProps = {
  open: boolean;
  handleClose(): void;
}

export default function UserDialog({ open, handleClose }: userDialogProps): JSX.Element {
  return (
    <Dialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Crear Usuario
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Nombres" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Nombre de Usuario" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField type="password" fullWidth label="Contraseña" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField type="password" fullWidth label="Repita Contraseña" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              value="top"
              control={<Switch color="primary" />}
              label="Activo"
              labelPlacement="top"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Crear Usuario
        </Button>
      </DialogActions>
    </Dialog>
  )
};
