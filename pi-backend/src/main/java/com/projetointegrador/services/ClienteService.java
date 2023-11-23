package com.projetointegrador.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetointegrador.entidades.Cliente;
import com.projetointegrador.repository.ClienteRepository;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository; 

   

    public Cliente getClienteById(Long id) {
        
        return clienteRepository.findById(id)
                .orElseThrow();
    }
    
    public List<Cliente> getAllClientes(){
		return clienteRepository.findAll();
	}

	
}