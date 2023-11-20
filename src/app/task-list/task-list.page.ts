import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  tasks: Task[] = [
    {
      title: 'Hacer TP final',
      description: 'Fecha limite el 23/11'
    },
    {
      title: 'Entrevista con RRHH',
      description: 'Practicar codigo'
    }
  ];
  
  newTask: Task = { title: '', description: '' };
  editingTaskIndex: number | null = null;

  addTask() {
    if (this.newTask.title.trim() !== '' && this.newTask.description.trim() !== '') {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', description: '' }; // Limpiar el objeto después de agregar la tarea
    }
  }

  editTask(index: number) {
    this.editingTaskIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.editingTaskIndex = null;
  }

  saveTask() {
    this.editingTaskIndex = null;
  }

  goToGallery() {
    this.router.navigate(['/gallery']);
  }
}
