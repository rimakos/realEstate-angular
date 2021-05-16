import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadService} from '../services/upload.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Agent, AgentService} from '../services/agentService';
import {Banner} from '../services/banner-service.service';

@Component({
  selector: 'app-agent-manage',
  templateUrl: './agent-manage.component.html',
  styleUrls: ['./agent-manage.component.css']
})
export class AgentManageComponent implements OnInit {
  agentForm = new FormGroup({});
  agents: Agent[] = [];

  constructor(private router: Router,
              private uploadService: UploadService,
              private activeRoute: ActivatedRoute,
              private agentService: AgentService) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.agentService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((agent) => {
          this.agentForm = this.createAgentForm(agent);
        });
    } else {
      this.agentForm = this.createAgentForm({} as Agent);
    }
  }

  createAgentForm(agent: Agent): FormGroup {
    return new FormGroup({
      id: new FormControl(agent.id),
      name: new FormControl(agent.name),
      photo: new FormControl(agent.photo),
      bio: new FormControl(agent.bio)
    });
  }

  uploadFile(event: any): void {
    const file: File | null = event.target.files.item(0);
    if (!file) {
      return;
    }

    this.uploadService.upload(file).subscribe(
      (httpEvent: any) => {
        if (httpEvent.type === HttpEventType.UploadProgress) {
          console.log(Math.round(100 * event.loaded / event.total));
        } else if (httpEvent instanceof HttpResponse) {
          this.agentForm.patchValue({
            photo: file.name,
          });
        }
      },
      (err: any) => {
        console.log(err);
        alert('Error uploading file');
      });
  }


  onSubmit()
    :
    void {
    this.agentService.save(this.agentForm.value)
      .subscribe(response => {
        return this.router.navigate(['/agents']);
      });
  }
}
