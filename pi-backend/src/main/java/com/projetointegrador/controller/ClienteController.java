package com.projetointegrador.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetointegrador.entidades.Cliente;
import com.projetointegrador.exceptions.ResourceNotFoundException;
import com.projetointegrador.repository.ClienteRepository;
import com.projetointegrador.services.ClienteService;
import com.projetointegrador.services.PDFService;

@CrossOrigin("*")
@RequestMapping("/pi")
@RestController
public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;
	
	@GetMapping("/clientes") //buscar lista de clientes
	public List<Cliente> getAllClientes(){
		return clienteRepository.findAll();
	}
	
	@PostMapping("/clientes")
	public ResponseEntity<?> criarClienteOuRegistrarReserva(@RequestBody Cliente cliente) {
	    try {
	        
	        if (cliente.getId() != null) {
	            
	            clienteRepository.save(cliente);
	            return new ResponseEntity<>("Reserva registrada com sucesso", HttpStatus.OK);
	        } else {
	           
	            clienteRepository.save(cliente);
	            return new ResponseEntity<>("Cliente criado com sucesso", HttpStatus.OK);
	        }
	    } catch (Exception e) {
	        return new ResponseEntity<>("Erro ao criar cliente ou registrar reserva", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@PostMapping("/clientes/registrar-reserva")
	public ResponseEntity<?> registrarReserva(@RequestBody Cliente cliente) {
	   

	    try {
	       
	        clienteRepository.save(cliente);
	        return new ResponseEntity<>("Reserva registrada com sucesso", HttpStatus.OK);
	    } catch (Exception e) {
	        return new ResponseEntity<>("Erro ao registrar reserva", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@GetMapping("/clientes/{id}") //buscar cliente pelo id
	public ResponseEntity<Cliente> getClientesById(@PathVariable Long id){
		Cliente cliente = clienteRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Cliente não existente com o ID: " +id));
		return ResponseEntity.ok(cliente);
	}
	
	@DeleteMapping("/clientes/{id}") 
	public ResponseEntity<Map<String, Boolean>> removerReserva(@PathVariable Long id){
		Cliente cliente = clienteRepository.findById(id).orElseThrow(()
				-> new ResourceNotFoundException("Cliente não existente com esse ID: " +id ));
		
		clienteRepository.delete(cliente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}		
		
}
