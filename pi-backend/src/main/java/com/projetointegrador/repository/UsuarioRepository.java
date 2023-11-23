package com.projetointegrador.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetointegrador.entidades.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Usuario findByLogin(String login);
	
	Usuario findByLoginAndDataNascimento(String login, Date dataNascimento);

}
