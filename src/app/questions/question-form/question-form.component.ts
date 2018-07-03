import {Component} from '@angular/core';
import {Question} from '../question/question.model';
import {NgForm} from '@angular/forms';
import icons from './icons';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {

  icons: Object[] = icons;

  public getIconVersion (icon: any): string {
    let version;
    if (icon.versions.font.includes('plain-wordmark')){
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }

    icon.visible = !!version;
    return version;
}

  public onSubmit(form: NgForm): void {
    const question = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon,
    );
    form.reset();
    console.log(question);
  }
}
