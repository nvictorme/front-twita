import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-post-delete-prompt',
  templateUrl: './post-delete-prompt.component.html',
  styleUrls: ['./post-delete-prompt.component.scss']
})
export class PostDeletePromptComponent implements OnInit {

  constructor(private dialogRef: NbDialogRef<any>) {
  }

  ngOnInit(): void {
  }

  onDelete(result: string) {
    this.dialogRef.close(result);
  }

}
