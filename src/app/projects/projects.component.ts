import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {
  // Define an array of projects to display in the template
  projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills. Built with Angular and hosted on GitHub Pages.',
      technologies: ['Angular', 'TypeScript', 'GitHub Pages'],
      link: 'https://'
    },
    {
      name: 'Task Manager App',
      description: 'A task management app that allows users to create, edit, and delete tasks. It includes authentication and data persistence using Firebase.',
      technologies: ['React', 'Firebase', 'Node.js'],
      link: 'https://'
    },
    {
      name: 'E-commerce Store',
      description: 'A full-stack e-commerce application with a shopping cart, product listing, and payment integration using Stripe.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
      link: 'https://'
    }
  ];
}
