import React from 'react';
import {
  Box, Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import useSWR from "swr";
import {fetcher} from "../../utils/HttpActions";
import {User} from "../../types/User";
import UserDialog from "./UserDialog";

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

export default function Users() {
  const classes = useStyles();
  const { data: users } = useSWR<Array<User>>(`${process.env.REACT_APP_BASE_URL}/authenticate/users`, fetcher);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleNewUser = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  return (
    <>
      <UserDialog open={openDialog} handleClose={handleCloseDialog} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography component="div">
            <Box fontWeight="fontWeightBold">Usuarios</Box>
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Button
            variant="outlined"
            onClick={handleNewUser}
          >
            Crear Usuario
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Nombre de Usuario</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Activo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.rol}</TableCell>
                <TableCell>{user.active ? 'Activo': 'Inactivo'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
