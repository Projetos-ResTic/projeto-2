import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostrarAddTarefa: boolean = false;

  AlteraVisualizacao(valor: boolean){
    this.mostrarAddTarefa = valor;
  }

  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  onSubmit(){
   if(!this.tarefa){
    alert('adicione uma tarefa')
    return;
   }

   const novaTarefa = {
    tarefa: this.tarefa,
    categoria: this.categoria,
    concluido: this.concluido
   }

   this.onAddTask.emit(novaTarefa);
   this.tarefa = '';
   this.categoria = '';
   this.concluido = false;
  }
}
