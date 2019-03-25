/**
 * @author nicaela onofre
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PositionsHttpService} from '../../services/positions-http-service';
import {PositionDTO} from '../../api/domain/Position';

@Component({
  selector: 'organization-position-create',
  templateUrl: './organization-position-create.component.html',
  styleUrls: ['./organization-position-create.component.scss']
})
export class OrganizationPositionCreateComponent implements OnInit, OnDestroy {

  public positionFormGroup: FormGroup;
  public position: Position;

  private _positionsSubscription: Subscription;

  constructor(private _positionsHttpService: PositionsHttpService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._initForm();
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    unsubscribe(this._positionsSubscription);
  }

  public onSubmit(): void {
    const positionDTO: PositionDTO = this.positionFormGroup.value;
    this._positionsSubscription = this._positionsHttpService.doInsert(positionDTO).subscribe(
      (position: Position) => {
        this.position = position;
        this._router.navigate(['/organization/department']);
        console.log(position);
      }
    );
  }

  private _initForm(): void {
    this.positionFormGroup = this._formBuilder.group({
      code: [null],
      name: [null, [Validators.required]],
      description: [null],
      companyId: [null]
    });
  }
}
