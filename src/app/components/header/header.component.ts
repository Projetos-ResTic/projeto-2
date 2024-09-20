import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // A propriedade 'title' é uma string que contém o título a ser exibido no componente de cabeçalho.
  title: string = 'Lista de tarefas';
}
