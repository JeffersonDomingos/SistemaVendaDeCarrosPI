package com.projetointegrador.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetointegrador.entidades.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	

}
