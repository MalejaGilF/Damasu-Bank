import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CdtService } from './Services/cdt.services';
import { BsModalService } from 'ngx-bootstrap/modal';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { provideState } from '@ngrx/store';
import { balanceReducer } from './Store/BalanceState/balance.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()), 
    CdtService, 
    BsModalService, 
    provideStore(),
    provideState({ name: 'balance' , reducer: balanceReducer })]
};
