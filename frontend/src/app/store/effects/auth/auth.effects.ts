// src/app/auth/store/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../../auth/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  // Example effect for logout
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth] Logout'),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => ({ type: '[Auth] Logout Success' })),
          catchError(() => of({ type: '[Auth] Logout Failure' }))
        )
      )
    )
  );
}
