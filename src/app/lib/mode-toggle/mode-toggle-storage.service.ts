import { Injectable, InjectionToken } from '@angular/core';
import { Mode } from 'src/app/lib/mode-toggle/mode-toggle.service';

@Injectable({
    providedIn: 'root'
})
export class ModeToggleStorageService {

    LOCAL_STORAGE_KEY = 'mode';

    constructor() { }

    get(): Mode {
        return <Mode>localStorage.getItem(this.LOCAL_STORAGE_KEY) || undefined;
    }

    set(mode: string): void {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, mode);
    }
}


export const MODE_STORAGE_SERVICE = new InjectionToken<ModeStorage>(
    "MODE_STORAGE"
  );


export interface ModeStorage {
    get(): string;
    set(mode: string): void;
}
