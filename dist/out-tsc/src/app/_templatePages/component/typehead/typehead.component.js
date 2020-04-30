"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var WIKI_URL = 'https://en.wikipedia.org/w/api.php';
var PARAMS = new http_1.HttpParams({
    fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
    }
});
var states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
];
var statesWithFlags = [
    { name: 'Alabama', flag: '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { name: 'Alaska', flag: 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { name: 'Arizona', flag: '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { name: 'Arkansas', flag: '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { name: 'California', flag: '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { name: 'Colorado', flag: '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { name: 'Connecticut', flag: '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { name: 'Delaware', flag: 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { name: 'Florida', flag: 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    {
        name: 'Georgia',
        flag: '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'
    },
    { name: 'Hawaii', flag: 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { name: 'Idaho', flag: 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { name: 'Illinois', flag: '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { name: 'Indiana', flag: 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { name: 'Iowa', flag: 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { name: 'Kansas', flag: 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { name: 'Kentucky', flag: '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { name: 'Louisiana', flag: 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { name: 'Maine', flag: '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { name: 'Maryland', flag: 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { name: 'Massachusetts', flag: 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { name: 'Michigan', flag: 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { name: 'Minnesota', flag: 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { name: 'Mississippi', flag: '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { name: 'Missouri', flag: '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { name: 'Montana', flag: 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { name: 'Nebraska', flag: '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { name: 'Nevada', flag: 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { name: 'New Hampshire', flag: '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { name: 'New Jersey', flag: '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { name: 'New Mexico', flag: 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { name: 'New York', flag: '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { name: 'North Carolina', flag: 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { name: 'North Dakota', flag: 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { name: 'Ohio', flag: '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { name: 'Oklahoma', flag: '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { name: 'Oregon', flag: 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { name: 'Pennsylvania', flag: 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { name: 'Rhode Island', flag: 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { name: 'South Carolina', flag: '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { name: 'South Dakota', flag: '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { name: 'Tennessee', flag: '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { name: 'Texas', flag: 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { name: 'Utah', flag: 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { name: 'Vermont', flag: '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { name: 'Virginia', flag: '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { name: 'Washington', flag: '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { name: 'West Virginia', flag: '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { name: 'Wisconsin', flag: '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { name: 'Wyoming', flag: 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var WikipediaService = /** @class */ (function () {
    function WikipediaService(http) {
        this.http = http;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return rxjs_1.of([]);
        }
        return this.http.get(WIKI_URL, { params: PARAMS.set('search', term) }).pipe(operators_1.map(function (response) { return response[1]; }));
    };
    WikipediaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WikipediaService);
    return WikipediaService;
}());
exports.WikipediaService = WikipediaService;
var NgbdtypeheadBasicComponent = /** @class */ (function () {
    function NgbdtypeheadBasicComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.focus$ = new rxjs_1.Subject();
        this.click$ = new rxjs_1.Subject();
        this.search1 = function (text$) {
            return text$.pipe(operators_1.debounceTime(200), operators_1.distinctUntilChanged(), operators_1.map(function (term) { return (term.length < 2 ? [] : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10)); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search2 = function (text$) {
            var debouncedText$ = text$.pipe(operators_1.debounceTime(200), operators_1.distinctUntilChanged());
            var clicksWithClosedPopup$ = _this.click$.pipe(operators_1.filter(function () { return !_this.instance.isPopupOpen(); }));
            var inputFocus$ = _this.focus$;
            return rxjs_1.merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(operators_1.map(function (term) { return (term === '' ? states : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; })).slice(0, 10); }));
            // tslint:disable-next-line:semicolon
        };
        this.formatter = function (result) { return result.toUpperCase(); };
        this.search3 = function (text$) {
            return text$.pipe(operators_1.debounceTime(200), operators_1.distinctUntilChanged(), operators_1.map(function (term) { return (term === '' ? [] : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10)); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search = function (text$) {
            return text$.pipe(operators_1.debounceTime(300), operators_1.distinctUntilChanged(), operators_1.tap(function () { return (_this.searching = true); }), operators_1.switchMap(function (term) {
                return _this._service.search(term).pipe(operators_1.tap(function () { return (_this.searchFailed = false); }), operators_1.catchError(function () {
                    _this.searchFailed = true;
                    return rxjs_1.of([]);
                }));
            }), operators_1.tap(function () { return (_this.searching = false); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.search5 = function (text$) {
            return text$.pipe(operators_1.debounceTime(200), operators_1.map(function (term) { return (term === '' ? [] : statesWithFlags.filter(function (v) { return v.name.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10)); })
            // tslint:disable-next-line:semicolon
            );
        };
        this.formatter5 = function (x) { return x.name; };
    }
    __decorate([
        core_1.ViewChild('instance'),
        __metadata("design:type", Object)
    ], NgbdtypeheadBasicComponent.prototype, "instance", void 0);
    NgbdtypeheadBasicComponent = __decorate([
        core_1.Component({
            selector: 'app-ngbd-typehead',
            templateUrl: './typehead.component.html',
            providers: [WikipediaService],
            styles: [
                "\n      .form-control {\n        width: 300px;\n        display: inline;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], NgbdtypeheadBasicComponent);
    return NgbdtypeheadBasicComponent;
}());
exports.NgbdtypeheadBasicComponent = NgbdtypeheadBasicComponent;
//# sourceMappingURL=typehead.component.js.map