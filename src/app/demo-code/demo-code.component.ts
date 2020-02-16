import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {PlaceholderService} from '../services/placeholder.service';
import * as moment from 'moment';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-demo-code',
  templateUrl: './demo-code.component.html',
  styleUrls: ['./demo-code.component.scss']
})
export class DemoCodeComponent implements OnInit, AfterViewChecked {

  post: any;
  comments: any[] = [
    {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
      postId: 1,
      id: 2,
      name: 'quo vero reiciendis velit similique earum',
      email: 'Jayne_Kuhic@sydney.com',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
    },
    {
      postId: 1,
      id: 3,
      name: 'odio adipisci rerum aut animi',
      email: 'Nikita@garfield.biz',
      body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
    },
    {
      postId: 1,
      id: 4,
      name: 'alias odio sit',
      email: 'Lew@alysha.tv',
      body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
    },
    {
      postId: 1,
      id: 5,
      name: 'vero eaque aliquid doloribus et culpa',
      email: 'Hayden@althea.biz',
      body: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
    }
  ];

  constructor(private phs: PlaceholderService) {
  }

  ngOnInit(): void {
    this.post = this.phs.getCurrentPost();
  }

  ngAfterViewChecked(): void {
    Prism.highlightAll(true);
  }

  getMeta() {
    return moment().format('MM-DD-YYYY hh:mm a');
  }

}
