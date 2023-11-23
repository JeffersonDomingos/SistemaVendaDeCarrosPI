package com.projetointegrador.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.entidades.Usuario;
import com.projetointegrador.repository.UsuarioRepository;



@RestController
@RequestMapping("pi/")
@CrossOrigin("*")
public class LoginController {
	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Usuario usuario) {
		Usuario usuarioLogado = usuarioRepository.findByLogin(usuario.getLogin());

		if (usuarioLogado != null && usuarioLogado.getSenha().equals(usuario.getSenha())) {
            return ResponseEntity.ok(usuarioLogado);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falha no login");
        }
	}
}
