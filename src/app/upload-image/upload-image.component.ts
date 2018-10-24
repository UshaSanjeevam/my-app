import { Component, OnInit } from '@angular/core';
import { uploadimageservice } from '../Shared/uploadImage.service';
import { HttpResponse, HttpRequest,HttpClient,HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  imageUrl: string;
  fileToUpload: File = null
  constructor(private imageservice:uploadimageservice, private http:HttpClient) { }

  ngOnInit() {
  }
  onFileChanged(event) {
    this.fileToUpload = event.target.files[0]
    // this.imageservice.postFile(this.fileToUpload).subscribe(
    //   data=>{
    //     console.log('done');
      
       
      
    //     this.imageUrl="";
    //   }
    // );
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  OnSubmit(Caption,Image){
    this.imageservice.postFile(Caption.value,this.fileToUpload).subscribe(
      data=>{
        console.log('done');
        Caption.value=null;
        Image.value=null;
      
        this.imageUrl="";
      }
    );
  }
  
}


