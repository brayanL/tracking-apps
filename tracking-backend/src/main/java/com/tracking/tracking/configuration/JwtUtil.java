package com.tracking.tracking.configuration;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

import static java.util.Collections.emptyList;

public class JwtUtil {
    //TODO: buscar como acceder a esta variable
    /*@Value("${jwt.secret}")
    private static String secret;*/

    // Método para crear el JWT y enviarlo al cliente en el header de la respuesta
    static void addAuthentication(HttpServletResponse res, String username, Collection<? extends GrantedAuthority> authorities) {
        try {
            JSONObject json = new JSONObject();
            json.put("username", username);
            json.put("role", authorities.toArray()[0].toString());
            String token = Jwts.builder()
                .setSubject(json.toString())
                // Hash con el que firmaremos la clave
                .signWith(SignatureAlgorithm.HS512, "mySecret")
                .compact();

            //agregamos al encabezado el token
            res.addHeader("Authorization", "Bearer " + token);
        } catch (JSONException e) {
            System.out.println("JSON Exception");
        }
    }

    // Método para validar el token enviado por el cliente
    public static Authentication getAuthentication(HttpServletRequest request) {

        // Obtenemos el token que viene en el encabezado de la peticion
        String token = request.getHeader("Authorization");

        // si hay un token presente, entonces lo validamos
        if (token != null) {
            String user = Jwts.parser()
                    .setSigningKey("mySecret")
                    .parseClaimsJws(token.replace("Bearer", "")) //este metodo es el que valida
                    .getBody()
                    .getSubject();

            // Recordamos que para las demás peticiones que no sean /login
            // no requerimos una autenticacion por username/password
            // por este motivo podemos devolver un UsernamePasswordAuthenticationToken sin password
            return user != null ?
                    new UsernamePasswordAuthenticationToken(user, null, emptyList()) :
                    null;
        }
        return null;
    }
}
