package com.projetointegrador.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetointegrador.entidades.Usuario;
import com.projetointegrador.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Usuario buscarLoginUsuario(String login, String senha) {
		return usuarioRepository.findByLogin(login);
	}
	
	public Usuario alterarSenha(String login, Date dataNascimento) {
		return usuarioRepository.findByLoginAndDataNascimento(login, dataNascimento);
	}
}
