import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NbDialogRef} from '@nebular/theme';
import {FlagReport} from '../../../models/interfaces';

@Component({
  selector: 'app-post-flag-prompt',
  templateUrl: './post-flag-prompt.component.html',
  styleUrls: ['./post-flag-prompt.component.scss']
})
export class PostFlagPromptComponent implements OnInit {

  flagForm: FormGroup;

  constructor(private dialogRef: NbDialogRef<any>) {
  }

  ngOnInit(): void {
    this.initFlagForm();
  }

  initFlagForm() {
    this.flagForm = new FormGroup({
      nudity: new FormControl(false),
      violence: new FormControl(false),
      harassment: new FormControl(false),
      suicideOrSelfInjury: new FormControl(false),
      fakeNews: new FormControl(false),
      spam: new FormControl(false),
      intellectualProperty: new FormControl(false),
      unauthorizedSales: new FormControl(false),
      hateSpeech: new FormControl(false),
      terrorism: new FormControl(false),
      propaganda: new FormControl(false),
      other: new FormControl(false),
      comment: new FormControl('', {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(500)]
      })
    });
  }

  onFlagSubmit() {
    if (!this.flagForm.invalid) {
      this.dialogRef.close(this.flagForm.getRawValue() as FlagReport);
    }
  }

}
