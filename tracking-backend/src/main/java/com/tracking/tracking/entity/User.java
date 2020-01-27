package com.tracking.tracking.entity;

import javax.persistence.*;

@Entity
@Table(name="User")
public class User {
    @GeneratedValue
    @Id
    @Column(name="id", unique = true)
    private long id;

    @Column(name="username", unique = true)
    private String usuario;

    @Column(name="password")
    private String password;

    @Column(name="rol")
    private byte rol;

    @Column(name="active")
    private boolean active;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public byte getRol() {
        return rol;
    }

    public void setRol(byte rol) {
        this.rol = rol;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
