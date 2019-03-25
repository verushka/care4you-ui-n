/**
 * @author nicaela onofre
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {unsubscribe} from '../../../ssi-shared/utils/unsubscribe.function';
import {Subscription} from 'rxjs';
import {PositionsHttpService} from '../../services/positions-http-service';

@Component({
  selector: 'organization-position',
  templateUrl: './organization-position.component.html',
  styleUrls: ['./organization-position.component.scss']
})
export class OrganizationPositionComponent implements OnInit, OnDestroy{

  public infoPositions: Position[];

  private _positionsSubscription: Subscription;

  constructor(private _positionsHttpService: PositionsHttpService) {
    this.infoPositions = [];
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    unsubscribe(this._positionsSubscription);
  }

  private _initialize(): void {
    this._positionsSubscription = this._positionsHttpService.doFindAll().subscribe(
      (positions: Position[]) => {
        this.infoPositions = positions;
      }
    );
  }
}
