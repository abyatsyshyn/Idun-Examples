import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MsalService} from '@azure/msal-angular';
import {InDataService} from '../../services/in-data.service';
import {ProptechosService} from '../../services/proptechos.service';
import {Device} from '../../common/rectypes';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  actuator: Device;
  sensor: Device;

  constructor(private fb: FormBuilder,
              private msalService: MsalService,
              private inDataService: InDataService,
              private apiService: ProptechosService) {}

  ngOnInit(): void {
    this.apiService.getActuator(this.inDataService.retrieveInData().actuatorId).subscribe((data) => {
      this.actuator = data;
    });
    this.apiService.getSensor(this.inDataService.retrieveInData().sensorId).subscribe((data) => {
      this.sensor = data;
    });
  }
}
