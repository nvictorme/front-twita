import {uuid} from 'uuidv4';

export class Upload {
  name: string;
  file: File;
  preview: any;
  progress: number;

  constructor(file: File) {
    this.file = file;
    this.name = uuid() + '.' + this.file.name.split('.').pop();
    this.buildPreview();
  }

  buildPreview() {
    const mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    } else if (this.file.size > 10485760) {
      // if the file is larger than 10MB
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev: ProgressEvent) => {
      this.preview = reader.result;
    };
    reader.readAsDataURL(this.file);
  }
}
