import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MODE_STORAGE_SERVICE, ModeStorage } from 'src/app/lib/mode-toggle/mode-toggle-storage.service';

@Injectable({
    providedIn: 'root'
})
export class ModeToggleService {

    // ModeToggleService inspired and referenced from https://github.com/PahanPerera/angular-light-dark-app/blob/main/src/app/lib/mode-toggle/mode-storage.service.ts;

    private currentMode: Mode = Mode.LIGHT;
    private modeChangedSubject = new BehaviorSubject(this.currentMode);
    public modeChanged$: Observable<Mode>;

    constructor(
      @Inject(DOCUMENT) private document: Document,
      @Inject(MODE_STORAGE_SERVICE) private modeStorage: ModeStorage
    ) {
      this.modeChanged$ = this.modeChangedSubject.asObservable();
      this.init();
    }

    private init() {
        const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
        let initMode = this.modeStorage.get();

        if (!initMode) {
          deviceMode.matches ? (initMode = Mode.DARK) : (initMode = Mode.LIGHT);
        }
        this.document.body.classList.add(this.currentMode);
      }


}

export enum Mode {
    DARK = 'dark',
    LIGHT = 'light',
}
