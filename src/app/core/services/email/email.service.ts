import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private http: HttpClient = inject(HttpClient);
  private sendGridApiUrl = 'https://api.sendgrid.com/v3/mail/send';

  sendEmail(formData: any): void {
    const apiKey: string = 'YOUR_SENDGRID_API_KEY';

    const emailData = {
      personalizations: [
        {
          to: [{ email: '7house.ua@gmail.com' }]
        }
      ],
      from: { email: '7house.ua@gmail.com' },
      subject: 'Запит на дзвінок!',
      content: [{ type: 'text/plain', value: `Ім'я: ${formData.name}\nТелефон: ${formData.phone}` }]
    };

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };

    // return this.http.post(this.sendGridApiUrl, emailData, { headers });
    console.log(formData);
  }
}
