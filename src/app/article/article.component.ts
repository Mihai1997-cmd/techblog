import {Component} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article = {
    title: 'Sample Article',
    author: 'John Doe',
    date: 'July 5, 2023',
    content: '<p>This is the content of the article.</p>'
  };

}
