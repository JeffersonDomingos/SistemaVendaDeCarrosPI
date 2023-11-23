package com.projetointegrador.services;

import java.io.ByteArrayOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.xhtmlrenderer.pdf.ITextRenderer;

@Service
public class PDFService {

    @Autowired
    private TemplateEngine templateEngine;

    public byte[] gerarPdf(String templateName, Context context) {
        try {
            String html = templateEngine.process(templateName, context);
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            ITextRenderer renderer = new ITextRenderer();
            renderer.setDocumentFromString(html);
            renderer.layout();
            renderer.createPDF(outputStream, false);
            renderer.finishPDF();
            return outputStream.toByteArray();
        } catch (Exception e) {


            e.printStackTrace();
            return null;
        }
    }
}