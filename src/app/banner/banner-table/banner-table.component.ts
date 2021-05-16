import {Component, OnInit} from '@angular/core';
import {Banner, BannerService} from '../../services/banner-service.service';

@Component({
  selector: 'app-banner-table',
  templateUrl: './banner-table.component.html',
  styleUrls: ['./banner-table.component.css']
})
export class BannerTableComponent implements OnInit {

  banners: Banner[] = [];

  constructor(private bannerService: BannerService) {
  }

  ngOnInit(): void {
    this.updateBanners();
  }

  updateBanners(): void {
    this.bannerService.getAll().subscribe(response => {
      this.banners = response;
    });
  }
  onDeleteBanner(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    if (shouldDelete) {
      this.bannerService.delete(id).subscribe(response => {
        this.updateBanners();
      });
    }
  }
}
