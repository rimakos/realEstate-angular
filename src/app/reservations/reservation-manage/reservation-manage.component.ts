import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SaveReservationRequest, ReservationService} from '../../services/reservationService';

@Component({
  selector: 'app-reservation-manage',
  templateUrl: './reservation-manage.component.html',
  styleUrls: ['./reservation-manage.component.css']
})
export class ReservationManageComponent implements OnInit {

  reservationForm = new FormGroup({});

  constructor(private reservationService: ReservationService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.reservationService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((reservation) => {
          this.reservationForm = this.createReservationForm(reservation);
        });
    } else {
      this.reservationForm = this.createReservationForm({} as SaveReservationRequest);
    }
  }

  createReservationForm(reservation: SaveReservationRequest): FormGroup {
    return new FormGroup({
      id: new FormControl(reservation.id),
      clientName: new FormControl(reservation.clientName),
      clientEmail: new FormControl(reservation.clientEmail),
      phoneNumber: new FormControl(reservation.phoneNumber),
      finalPrice: new FormControl(reservation.finalPrice, Validators.required),
      propertyId: new FormControl(reservation.propertyId),
    });
  }

  onSubmit(): void {
    this.reservationService.save(this.reservationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/reservations']);
      });
  }

}

