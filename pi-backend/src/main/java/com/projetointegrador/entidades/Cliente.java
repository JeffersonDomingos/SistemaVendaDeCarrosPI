package com.projetointegrador.entidades;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "telefone")
	private String telefone;
	
	@Column(name = "data_interesse")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date dataInteresse;
	
	
	
	@JoinColumn(name = "carro_interessado_id")
	@JsonIgnoreProperties("clienteInteressado")
	@ManyToOne
	private Carros carroInteressado;
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Date getDataInteresse() {
		return dataInteresse;
	}

	public void setDataInteresse(Date dataInteresse) {
		this.dataInteresse = dataInteresse;
	}

	public Carros getCarroInteressado() {
		return carroInteressado;
	}

	public void setCarroInteressado(Carros carroInteressado) {
		this.carroInteressado = carroInteressado;
	}
	
	
	
	

}
