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
public class AlterarSenhaController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@PostMapping("/alterar-senha")
	public ResponseEntity<String> alterarSenha(@RequestBody Usuario usuario) {
	    Usuario usuarioSenha = usuarioRepository.findByLoginAndDataNascimento(usuario.getLogin(), usuario.getDataNascimento());
	    
	    if (usuarioSenha != null) {
	        if (usuario.getNovaSenha() != null && !usuario.getNovaSenha().isEmpty()) {
	            usuarioSenha.setSenha(usuario.getNovaSenha());
	            usuarioRepository.save(usuarioSenha);
	            return ResponseEntity.ok("Senha alterada!");
	        } else {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("A nova senha não pode ser vazia.");
	        }
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado.");
	    }
	}

}
