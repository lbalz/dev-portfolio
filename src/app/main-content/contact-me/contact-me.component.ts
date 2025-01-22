import { Component, inject } from '@angular/core';
import { TranslateLanguageService } from '../../translate-language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  /*
   * Form Validation
   */
  nameWasFocused = false;
  emailWasFocused = false;
  messageWasFocused = false;
  checkboxWasFocused = false;

  nameIsFilled = false;
  emailIsFilled = false;
  messageIsFilled = false;
  checkboxIsFilled = false;

  /*
   * Name Validation
   */
  onNameFocus() {
    this.nameWasFocused = true;
  }

  onNameBlur() {
    if (this.nameWasFocused) {
      this.nameWasFocused = false;
      this.checkNameValidation();
      this.updateSubmitBtn();
    }
  }

  checkNameValidation() {
    const name = document.querySelector('#name') as HTMLInputElement;
    const nameRequired = document.querySelector('.your-name-required') as HTMLSpanElement;

    this.nameIsFilled = name.value.trim() !== '';
    nameRequired.style.display = this.nameIsFilled ? 'none' : 'flex';
  }
  
  /*
   * Email Validation
   */
  onEmailFocus() {
    this.emailWasFocused = true;
  }

  onEmailBlur() {
    if (this.emailWasFocused) {
      this.emailWasFocused = false;
      this.checkEmailValidation();
      this.updateSubmitBtn();
    }
  }

  checkEmailValidation() {
    const email = document.querySelector('#email') as HTMLInputElement;
    const emailRequired = document.querySelector('.your-email-required') as HTMLSpanElement;
    const emailPattern = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;

    this.emailIsFilled = email.value.trim() !== '' && emailPattern.test(email.value);
    emailRequired.style.display = this.emailIsFilled ? 'none' : 'flex';
  }

  /*
   * Message Validation
   */
  onMessageFocus() {
    this.messageWasFocused = true;
  }

  onMessageBlur() {
    if (this.messageWasFocused) {
      this.messageWasFocused = false;
      this.checkMessageValidation();
      this.updateSubmitBtn();
    }
  }

  checkMessageValidation() {
    const message = document.querySelector('#message') as HTMLTextAreaElement;
    const messageRequired = document.querySelector('.how-can-i-help-required') as HTMLSpanElement;

    this.messageIsFilled = message.value.trim() !== '';
    messageRequired.style.display = this.messageIsFilled ? 'none' : 'flex';
  }

  /*
   * Checkbox Validation
   */
  onCheckboxChange(checked: boolean) {
    const checkboxRequired = document.querySelector('.privacy-policy-required') as HTMLSpanElement;

    this.checkboxIsFilled = checked;
    this.checkboxWasFocused = true;
    checkboxRequired.style.display = this.checkboxIsFilled ? 'none' : 'flex';
    this.updateSubmitBtn();
  }

  formIsValid(): boolean {
    return this.nameIsFilled && this.emailIsFilled && this.messageIsFilled && this.checkboxIsFilled;
  }

  updateSubmitBtn() {
    const sendMailButton = document.querySelector('.submit-btn') as HTMLButtonElement;
    sendMailButton.disabled = !this.formIsValid();
  }

  /*
   * Send Mail
   */
  httpClient = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  mailTest = true;

  post = {
    endPoint: 'lukas-balz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.valid && ngForm.submitted && !this.mailTest) {

      this.httpClient.post(this.post.endPoint, this.post.body(this.contactData))
            .subscribe({
              next: response => {
                // this.sendMessagePopUp();
                this.resetForm(ngForm);
              },
              error: error => {
                console.error(error);
              },
              complete: () => console.info('send post complete'),
            });

      console.log(this.contactData);
    } else if (ngForm.form.valid && ngForm.submitted && this.mailTest) {
      console.log(this.contactData);
      // this.sendMessagePopUp();
      this.resetForm(ngForm);
    }
  }

  resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.checkboxIsFilled = false;
    this.checkboxClicked = false;
    this.checkboxImg = './assets/icon/checkbox_default.png';
  }


  /*
   * Toggle checkbox images functionality
   */

  checkboxImg: string = './assets/icon/checkbox_default.png';
  checkboxClicked: boolean = false;

  checkboxMouseOver() {
    if (this.checkboxClicked) {
      this.checkboxImg = './assets/icon/checkbox_checked_hover.png';
    } else {
      this.checkboxImg = './assets/icon/checkbox_default_hover.png';
    }
  }

  checkboxMouseLeave() {
    if (this.checkboxClicked) {
      this.checkboxImg = './assets/icon/checkbox_checked.png';
    } else {
      this.checkboxImg = './assets/icon/checkbox_default.png';
    }
  }

  toggleCheckbox() {
    this.checkboxClicked = !this.checkboxClicked;
    this.onCheckboxChange(this.checkboxClicked);
    
    if (this.checkboxClicked) {
      this.checkboxImg = './assets/icon/checkbox_checked_hover.png';
    } else {
      this.checkboxImg = './assets/icon/checkbox_default_hover.png';
    }
  }


  /*
   * Translation Service
   */ 

  constructor(private languageService: TranslateLanguageService) { 

  }

  isEnglish: boolean = true;

  translate = inject(TranslateLanguageService);

  ngOnInit(): void {
    this.languageService.isEnglish$.subscribe(value => {
      this.isEnglish = value;
    })
  }
}
