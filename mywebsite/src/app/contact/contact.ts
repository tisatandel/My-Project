import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {

  nameInput = '';
  emailInput = '';
  subjectInput = '';
  messageInput = '';

  messages: any[] = [];
  editIndex: number | null = null;

  add() {
    if (this.editIndex === null) {
      // ADD NEW
      this.messages.push({
        name: this.nameInput,
        email: this.emailInput,
        subject: this.subjectInput,
        message: this.messageInput
      });
    } else {
      // UPDATE EXISTING
      this.messages[this.editIndex] = {
        name: this.nameInput,
        email: this.emailInput,
        subject: this.subjectInput,
        message: this.messageInput
      };
      this.editIndex = null;
    }

    // Clear inputs
    this.nameInput = '';
    this.emailInput = '';
    this.subjectInput = '';
    this.messageInput = '';
  }

  edit(index: number) {
    this.nameInput = this.messages[index].name;
    this.emailInput = this.messages[index].email;
    this.subjectInput = this.messages[index].subject;
    this.messageInput = this.messages[index].message;

    this.editIndex = index;
  }

  delete(index: number) {
    this.messages.splice(index, 1);
  }
}
