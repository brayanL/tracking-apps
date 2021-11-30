
export enum UserRol {
  USUARIO= 1,
  ADMINISTRADOR = 2,
}

export const getRolName = (rol) => ({
  1: UserRol[UserRol.USUARIO],
  2: UserRol[UserRol.ADMINISTRADOR],
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