
export enum UserRol {
  Usuario= 1,
  Administrador = 2,
}

export const getRolName = (rol) => ({
  1: UserRol[UserRol.Usuario],
  2: UserRol[UserRol.Administrador],
})[rol]

export interface User {
  id: number;
  username: string;
  fullname: string;
  password: string;
  passwordConfirm: string;
  rol: UserRol;
  active: boolean;
}