import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent {
  document = {
    name: '',
    pdfUrl: ''
  };

  signer = {
    name: '',
    email: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const newDocument = {
      name: this.document.name,
      pdfUrl: this.document.pdfUrl,
      signer: {
        name: this.signer.name,
        email: this.signer.email,
      }
    };

    // Envia os dados para o backend Django
    this.http.post('http://localhost:8000/api/create-document-zapsign/', newDocument)
      .subscribe(
        (response) => {
          console.log('Documento criado com sucesso', response);
          this.router.navigate(['/documents']);  // Redireciona para a lista de documentos
        },
        (error) => {
          console.error('Erro ao criar documento', error);
        }
      );
  }
}
