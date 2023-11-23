package com.projetointegrador.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.entidades.Usuario;
import com.projetointegrador.exceptions.ResourceNotFoundException;
import com.projetointegrador.repository.UsuarioRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("pi/")
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping("/usuarios") //buscar lista de usuario
	public List<Usuario> getAllUsuario(){
		return usuarioRepository.findAll();
	}
	
	@PostMapping("/usuarios") //criar usuario
	public Usuario createUsuario(@RequestBody Usuario usuarios) {
		return usuarioRepository.save(usuarios);
	}
	
	@GetMapping("/usuarios/{id}") //buscar usuarios pelo id
	public ResponseEntity<Usuario> getUsuariosById(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Usuario não existente com o ID: " +id));
		return ResponseEntity.ok(usuario);
	}
	
	@PutMapping("/usuarios/{id}") //atualizar usuario api
	public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetalhes ){
		Usuario usuario = usuarioRepository.findById(id).orElseThrow(()
				-> new ResourceNotFoundException("Usuario não existente com esse " +id ));
	 usuario.setLogin(usuarioDetalhes.getLogin());
	 usuario.setSenha(usuarioDetalhes.getSenha());
	 usuario.setNome(usuarioDetalhes.getNome());
	 usuario.setDataNascimento(usuarioDetalhes.getDataNascimento());
	 usuario.setDataCadastro(usuarioDetalhes.getDataCadastro());
	 
	  Usuario updateUsuario = usuarioRepository.save(usuario);
	  return ResponseEntity.ok(updateUsuario);
	}
	
	@DeleteMapping("/usuarios/{id}") //deletar carros api
	public ResponseEntity<Map<String, Boolean>> deleteUsuario(@PathVariable Long id){
		Usuario usuario = usuarioRepository.findById(id).orElseThrow(()
				-> new ResourceNotFoundException("Usuario não existente com esse ID: " +id ));
		
		usuarioRepository.delete(usuario);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
