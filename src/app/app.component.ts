import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NgxPermissionsService} from "ngx-permissions";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
    }

    constructor(private translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.addLangs(["en", "fr"]);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.setDefaultLang('fr');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    switchLanguage(language: string) {
        this.translate.use(language);
    }


}
