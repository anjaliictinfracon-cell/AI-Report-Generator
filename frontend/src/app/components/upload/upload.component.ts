import { Component, Output, EventEmitter } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Output() fileUploaded = new EventEmitter<string>();

  selectedFile: File | null = null;
  isUploading = false;
  uploadProgress = 0;
  uploadError: string | null = null;

  constructor(private fileService: FileService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.uploadError = null;
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.uploadError = 'Please select a file';
      return;
    }

    this.isUploading = true;
    this.fileService.uploadFile(this.selectedFile).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.isUploading = false;
          this.fileUploaded.emit(response.data.fileId);
        }
      },
      error: (error) => {
        this.isUploading = false;
        this.uploadError = 'Upload failed: ' + (error?.error?.message || 'Unknown error');
      }
    });
  }
}
