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

import com.projetointegrador.entidades.Carros;
import com.projetointegrador.exceptions.ResourceNotFoundException;
import com.projetointegrador.repository.CarrosRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("pi/")
public class CarrosController {

	@Autowired
	private CarrosRepository carrosRepository;
	
	@GetMapping("/carros") //buscar lista de carros
	public List<Carros> getAllCarros(){
		return carrosRepository.findAll();
	}
	
	@PostMapping("/carros") //criar carro
	public Carros createCarros(@RequestBody Carros carros) {
		return carrosRepository.save(carros);
	}
	
	@GetMapping("/carros/{id}") //buscar carros pelo id
	public ResponseEntity<Carros> getCarrosById(@PathVariable Long id){
		Carros carro = carrosRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Carro não existente com o ID: " +id));
		return ResponseEntity.ok(carro);
	}
	
	@PutMapping("/carros/{id}") //atualizar carro api
	public ResponseEntity<Carros> updateCarro(@PathVariable Long id, @RequestBody Carros carroDetalhes ){
		Carros carro = carrosRepository.findById(id).orElseThrow(()
				-> new ResourceNotFoundException("Carro não existente com esse " +id ));
	 carro.setMarca(carroDetalhes.getMarca());
	 carro.setModelo(carroDetalhes.getModelo());
	 carro.setAnoFabricacao(carroDetalhes.getAnoFabricacao());
	 carro.setAnoModelo(carroDetalhes.getAnoModelo());
	 carro.setValor(carroDetalhes.getValor());
	 carro.setDescricao(carroDetalhes.getDescricao());
	 
	  Carros updateCarro = carrosRepository.save(carro);
	  return ResponseEntity.ok(updateCarro);
	}
	
	@DeleteMapping("/carros/{id}") //deletar carros api
	public ResponseEntity<Map<String, Boolean>> deleteCarros(@PathVariable Long id){
		Carros carros = carrosRepository.findById(id).orElseThrow(()
				-> new ResourceNotFoundException("Carro não existente com esse ID: " +id ));
		
		carrosRepository.delete(carros);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
