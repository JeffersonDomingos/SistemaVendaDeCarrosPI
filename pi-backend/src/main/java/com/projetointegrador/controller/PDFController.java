package com.projetointegrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

import com.projetointegrador.entidades.Cliente;
import com.projetointegrador.services.ClienteService;
import com.projetointegrador.services.PDFService;

@CrossOrigin("*")
@RestController
@RequestMapping("pi/")
public class PDFController {
	
    @Autowired
    private PDFService pdfService;
    
    @Autowired
    private ClienteService clienteService;

    @GetMapping("/clientes/pdf")
    public ResponseEntity<byte[]> downloadPdf() {
        
        List<Cliente> clienteLista = clienteService.getAllClientes();

        
        Context context = new Context();
        context.setVariable("cliente", clienteLista);

        
        byte[] pdfContent = pdfService.gerarPdf("reserva-pdf-template", context);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("inline", "reserva-pdf-template.pdf");

        return ResponseEntity.ok().headers(headers).body(pdfContent);
    }
}
