import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Reservation, ReservationService} from '../../services/reservationService';

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
      this.reservationForm = this.createReservationForm({} as Reservation);
    }
  }

  createReservationForm(reservation: Reservation): FormGroup {
    return new FormGroup({
      id: new FormControl(reservation.id),
      clientName: new FormControl(reservation.name),
      finalPrice: new FormControl(reservation.finalPrice, Validators.required),
      comment: new FormControl(reservation.comment),
    });
  }

  onSubmit(): void {
    this.reservationService.save(this.reservationForm.value)
      .subscribe(response => {
        return this.router.navigate(['/reservations']);
      });
  }

}

