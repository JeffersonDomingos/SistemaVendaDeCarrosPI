package com.projetointegrador.entidades;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "carros")

public class Carros {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long ID;
	
	@Column(name = "marca")
	private String marca;
	
	@Column(name = "modelo")
	private String modelo;
	
	@Column(name = "ano_fabricacao")
	private Integer anoFabricacao;
	
	@Column(name = "ano_modelo")
	private Integer anoModelo;
	
	@Column(name = "valor")
	private double valor;
	
	@Column(name = "descricao")
	private String descricao;
	
	@JsonBackReference
	@OneToMany(mappedBy = "carroInteressado")
	private List<Cliente> clienteInteressado;
	

	public Carros() {
		
	}

	public Carros(Long ID, String marca, String modelo, Integer anoFabricacao, Integer anoModelo, double valor,
			String descricao) {
		super();
		this.ID = ID;
		this.marca = marca;
		this.modelo = modelo;
		this.anoFabricacao = anoFabricacao;
		this.anoModelo = anoModelo;
		this.valor = valor;
		this.descricao = descricao;
		
	}


	public Long getID() {
		return ID;
	}


	public void setID(Long ID) {
		this.ID = ID;
	}


	public String getMarca() {
		return marca;
	}


	public void setMarca(String marca) {
		this.marca = marca;
	}


	public String getModelo() {
		return modelo;
	}


	public void setModelo(String modelo) {
		this.modelo = modelo;
	}


	public Integer getAnoFabricacao() {
		return anoFabricacao;
	}


	public void setAnoFabricacao(Integer anoFabricacao) {
		this.anoFabricacao = anoFabricacao;
	}


	public Integer getAnoModelo() {
		return anoModelo;
	}


	public void setAnoModelo(Integer anoModelo) {
		this.anoModelo = anoModelo;
	}


	public double getValor() {
		return valor;
	}


	public void setValor(double valor) {
		this.valor = valor;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<Cliente> getClienteInteressado() {
		return clienteInteressado;
	}

	public void setClienteInteressado(List<Cliente> clienteInteressado) {
		this.clienteInteressado = clienteInteressado;
	}

	
}
