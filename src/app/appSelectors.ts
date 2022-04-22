import { RootState } from '@app/store';
import { GeneralError } from '@app/appStateTypes';

export const selectErrorInfo = (state: RootState): GeneralError => state.app.generalError;
