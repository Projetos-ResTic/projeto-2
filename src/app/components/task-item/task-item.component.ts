import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, MatListModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
   // A propriedade 'tarefa' recebe um objeto do tipo 'Tarefa' via binding do componente pai
   @Input() tarefa!:Tarefa;
   @Output() onDeleteTask = new EventEmitter<Tarefa>();
   @Output() onToggleConcluido = new EventEmitter<Tarefa>();

   faTimes = faTimes;

   onDelete(tarefa: Tarefa){
     this.onDeleteTask.emit(tarefa);
   }

   // Método chamado ao alterar o status de concluído da tarefa, que emite o evento para o componente pai
   onToggle(tarefa: Tarefa){
     this.onToggleConcluido.emit(tarefa);
   }
}
