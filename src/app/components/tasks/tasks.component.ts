import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tarefas: Tarefa[] = [];

  constructor(private taskService:TaskService){}

  // O método ngOnInit é chamado quando o componente é inicializado
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((dado) => {
       this.tarefas = dado;
       console.log(dado);
    });
  }
  
  // Método para adicionar uma nova tarefa
  AddTask(tarefa: Tarefa){
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa);
    });
  }

// Método para deletar uma tarefa
  deleteTask(tarefa: Tarefa){
    this.taskService.deleteTask(tarefa).subscribe(() => (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)));
  }

  // Método para alternar o status de 'concluído' de uma tarefa
  toggleConcluido(tarefa: Tarefa){
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }
}
