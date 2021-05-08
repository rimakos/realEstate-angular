import { Component, OnInit } from '@angular/core';
import {Client, ClientService} from '../../services/clientService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-manage',
  templateUrl: './client-manage.component.html',
  styleUrls: ['./client-manage.component.css']
})
export class ClientManageComponent implements OnInit {
  clientForm = new FormGroup({});

  constructor(private clientService: ClientService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.clientService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((client) => {
          this.clientForm = this.createClientForm(client);
        });
    } else {
      this.clientForm = this.createClientForm({} as Client);
    }
  }

  createClientForm(client: Client): FormGroup {
    return new FormGroup({
      id: new FormControl(client.id),
      name: new FormControl(client.name, Validators.required),
      email: new FormControl(client.email, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(client.phoneNumber)
    });
  }

  onSubmit(): void {
    this.clientService.save(this.clientForm.value)
      .subscribe(response => {
          return this.router.navigate(['/clients']);
      });
  }
}
