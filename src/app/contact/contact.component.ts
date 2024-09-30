import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  // Import FormsModule and HttpClientModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Inject HttpClient into the component
  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.subject && this.contact.message) {
      console.log('Form Submitted:', this.contact);

      // Define your API endpoint (replace with the real endpoint)
      const apiUrl = 'https://example.com/api/contact';

      // Send the form data to the API
      this.http.post(apiUrl, this.contact).pipe(
        // Handle potential errors with catchError
        catchError(error => {
          console.error('Error submitting form:', error);
          return of({ success: false, message: 'Form submission failed' });
        })
      ).subscribe(response => {
        console.log('Form successfully submitted:', response);
        // Handle success (e.g., display a success message to the user)
        alert('Your message has been successfully sent!');
        // Optionally reset the form
        this.contact = { name: '', email: '', subject: '', message: '' };
      });
    }
  }
}