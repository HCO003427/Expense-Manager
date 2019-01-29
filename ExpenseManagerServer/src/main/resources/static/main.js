(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/Transactions.model.ts":
/*!**********************************************!*\
  !*** ./src/app/Models/Transactions.model.ts ***!
  \**********************************************/
/*! exports provided: Transactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transactions", function() { return Transactions; });
var Transactions = /** @class */ (function () {
    function Transactions(txn) {
        this.date = txn && txn.date || null;
        this.transaction_id = txn && txn.transaction_id || null;
        this.type = txn && txn.type || 'Expense';
        this.amount = txn && txn.amount || 0;
        this.category = txn && txn.category || null;
        this.sub_category = txn && txn.sub_category || null;
        this.desc = txn && txn.desc || '';
    }
    return Transactions;
}());



/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.css":
/*!***************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-space {\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button class=\"btn btn-secondary btn-sm\" (click)=\"backToHome()\">back</button>\n  <h2 class=\"text-center\">Manage Transactions</h2>\n  <h3 class=\"text-center\">\n      <button class=\"btn btn-secondary btn-sm\" (click)=\"goPrev()\">\n      <i class=\"material-icons\">\n          keyboard_arrow_left\n      </i>\n      </button>\n    {{date |date:\"dd-MM-yyyy\"}}\n     <button class=\"btn btn-secondary btn-sm\" (click)=\"goNext()\">\n    <i class=\"material-icons\">\n        keyboard_arrow_right\n    </i>\n  </button> \n  </h3>\n  <div>\n    <button class=\"btn btn-success btn-lg\" (click)=\"addIncome()\">\n        Add Income\n    </button>\n    <button class=\"btn btn-danger btn-lg float-right\" (click)=\"addExpense()\">\n        Add Expense\n    </button>\n  </div>\n  <br>\n  <div class=\"clearfix\"></div>\n  <table class=\"table table-bordered\">\n  \n    <thead>\n      <tr>\n        <th>Type <span class=\"text-danger\">*</span></th>\n        <th>Amount <span class=\"text-danger\">*</span></th>\n        <th>Category <span class=\"text-danger\">*</span></th>\n        <th>Sub_Category<span class=\"text-danger\">*</span></th>\n        <th>Description</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let transaction of transactions\" \n          class =\"app-transaction-details\"\n          [transaction]=\"transaction\"\n          (transactionDeleted)=\"refreshTransactions($event)\">\n      </tr>\n    </tbody>\n \n  </table> \n</div>\n"

/***/ }),

/***/ "./src/app/add-transaction/add-transaction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-transaction/add-transaction.component.ts ***!
  \**************************************************************/
/*! exports provided: AddTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransactionComponent", function() { return AddTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_Transactions_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Transactions.model */ "./src/app/Models/Transactions.model.ts");
/* harmony import */ var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/transaction-service.service */ "./src/app/services/transaction-service.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(route, transactionService, router) {
        this.route = route;
        this.transactionService = transactionService;
        this.router = router;
        this.prevDate = new Date();
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.date = new Date(paramMap.get('date'));
            console.log((Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(_this.date, 1)).toISOString().slice(0, 10));
            _this.shortDate = (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(_this.date, 1)).toISOString().slice(0, 10);
            console.log('Date set; calling Txn servcice for date', _this.date);
            _this.transactionService.getTransactionsbyDate(_this.shortDate).subscribe(function (data) {
                console.log('Data fetched for given date', _this.shortDate, ' is ', data);
                _this.transactions = data;
            });
        });
    };
    AddTransactionComponent.prototype.refreshTransactions = function () {
        this.ngOnInit();
    };
    AddTransactionComponent.prototype.addIncome = function () {
        this.newTransaction = new _Models_Transactions_model__WEBPACK_IMPORTED_MODULE_2__["Transactions"]({
            'date': this.date,
            'type': 'Income'
        });
        this.transactions.push(this.newTransaction);
    };
    AddTransactionComponent.prototype.addExpense = function () {
        this.newTransaction = new _Models_Transactions_model__WEBPACK_IMPORTED_MODULE_2__["Transactions"]({
            'date': this.date,
            'type': 'Expense'
        });
        this.transactions.push(this.newTransaction);
    };
    AddTransactionComponent.prototype.backToHome = function () {
        this.router.navigate(['/home']);
    };
    AddTransactionComponent.prototype.goNext = function () {
        console.log('Going to Next Date ', Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(this.shortDate, 1));
        this.router.navigate(['/addTransaction',
            { 'date': Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(this.date, 1), replaceUrl: true }]);
    };
    AddTransactionComponent.prototype.goPrev = function () {
        console.log('Going Back to prev Date ');
        this.router.navigate(['/addTransaction',
            { 'date': Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["addDays"])(this.date, -1), replaceUrl: true }]);
    };
    AddTransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-transaction',
            template: __webpack_require__(/*! ./add-transaction.component.html */ "./src/app/add-transaction/add-transaction.component.html"),
            styles: [__webpack_require__(/*! ./add-transaction.component.css */ "./src/app/add-transaction/add-transaction.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/expenses/expenses.component.ts");
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income/income.component */ "./src/app/income/income.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginCheck"]]
    },
    {
        path: 'expenses',
        component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginCheck"]]
    },
    {
        path: 'income',
        component: _income_income_component__WEBPACK_IMPORTED_MODULE_4__["IncomeComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginCheck"]]
    },
    {
        path: 'addTransaction',
        component: _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_8__["AddTransactionComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginCheck"]]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"jumbotron\">\r\n  <h1>\r\n    Expense Manager \r\n  </h1>\r\n  <p>Manage all your Accounts and Transactions here</p>\r\n  <a *ngIf = \"userLoogedIn\" class=\"btn btn-Secondary float-right\" (click)=\"logout()\">Logout</a>\r\n</div>\r\n\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Expense-Manager';
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.userLoogedIn = localStorage.getItem('user');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./expenses/expenses.component */ "./src/app/expenses/expenses.component.ts");
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./income/income.component */ "./src/app/income/income.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-transaction/add-transaction.component */ "./src/app/add-transaction/add-transaction.component.ts");
/* harmony import */ var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transaction-details/transaction-details.component */ "./src/app/transaction-details/transaction-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_12__["ExpensesComponent"],
                _income_income_component__WEBPACK_IMPORTED_MODULE_13__["IncomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _add_transaction_add_transaction_component__WEBPACK_IMPORTED_MODULE_17__["AddTransactionComponent"],
                _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_18__["TransactionDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/expenses/expenses.component.css":
/*!*************************************************!*\
  !*** ./src/app/expenses/expenses.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/expenses/expenses.component.html":
/*!**************************************************!*\
  !*** ./src/app/expenses/expenses.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  expenses works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/expenses/expenses.component.ts":
/*!************************************************!*\
  !*** ./src/app/expenses/expenses.component.ts ***!
  \************************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpensesComponent = /** @class */ (function () {
    function ExpensesComponent() {
    }
    ExpensesComponent.prototype.ngOnInit = function () {
    };
    ExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! ./expenses.component.html */ "./src/app/expenses/expenses.component.html"),
            styles: [__webpack_require__(/*! ./expenses.component.css */ "./src/app/expenses/expenses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCheck", function() { return LoginCheck; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginCheck = /** @class */ (function () {
    function LoginCheck(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginCheck.prototype.canActivate = function (route, state) {
        console.log('Guard Invoked');
        if (this.loginService.isLoggedIn()) {
            console.log('user Logged In');
            return true;
        }
        else {
            this.router.navigate(['login']);
            console.log('user not Logged In');
            return false;
        }
    };
    LoginCheck = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginCheck);
    return LoginCheck;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    margin: 0 0 10px;\r\n  }\r\n  \r\n  pre {\r\n    background-color: #f5f5f5;\r\n    padding: 15px;\r\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containmer\">\r\n<!-- <ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Event action occurred</h5>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        Action:\r\n        <pre>{{ modalData?.action }}</pre>\r\n      </div>\r\n      <div>\r\n        Event:\r\n        <pre>{{ modalData?.event | json }}</pre>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\r\n    </div>\r\n  </ng-template> -->\r\n  \r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"btn-group\">\r\n        <div\r\n          class=\"btn btn-secondary\"\r\n          mwlCalendarPreviousView\r\n          [view]=\"view\"\r\n          [(viewDate)]=\"viewDate\"\r\n          (viewDateChange)=\"activeDayIsOpen = false\">\r\n          Previous\r\n        </div>\r\n        <div\r\n          class=\"btn btn-outline-secondary\"\r\n          mwlCalendarToday\r\n          [(viewDate)]=\"viewDate\">\r\n          Today\r\n        </div>\r\n        <div\r\n          class=\"btn btn-secondary\"\r\n          mwlCalendarNextView\r\n          [view]=\"view\"\r\n          [(viewDate)]=\"viewDate\"\r\n          (viewDateChange)=\"activeDayIsOpen = false\">\r\n          Next\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <!-- <div class=\"col-md-4\">\r\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\">\r\n        <div\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"view = CalendarView.Month\"\r\n          [class.active]=\"view === CalendarView.Month\">\r\n          Month\r\n        </div>\r\n        <div\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"view = CalendarView.Week\"\r\n          [class.active]=\"view === CalendarView.Week\">\r\n          Week\r\n        </div>\r\n        <div\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"view = CalendarView.Day\"\r\n          [class.active]=\"view === CalendarView.Day\">\r\n          Day\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <br>\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view\r\n      *ngSwitchCase=\"CalendarView.Month\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      [activeDayIsOpen]=\"activeDayIsOpen\"\r\n      (dayClicked)=\"goToTransactions($event.day)\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-month-view>\r\n    <!-- <mwl-calendar-week-view\r\n      *ngSwitchCase=\"CalendarView.Week\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-week-view>\r\n    <mwl-calendar-day-view\r\n      *ngSwitchCase=\"CalendarView.Day\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-day-view>\r\n  </div> -->\r\n  \r\n  <!-- <br><br><br>\r\n  \r\n  <h3>\r\n    Edit events\r\n    <button\r\n      class=\"btn btn-secondary pull-right\"\r\n      (click)=\"addEvent()\">\r\n      Add new\r\n    </button>\r\n    <div class=\"clearfix\"></div>\r\n  </h3>\r\n  \r\n  <table class=\"table table-bordered\">\r\n  \r\n    <thead>\r\n      <tr>\r\n        <th>Title</th>\r\n        <th>Primary color</th>\r\n        <th>Secondary color</th>\r\n        <th>Starts at</th>\r\n        <th>Ends at</th>\r\n        <th>Remove</th>\r\n      </tr>\r\n    </thead>\r\n  \r\n    <tbody>\r\n      <tr *ngFor=\"let event of events; let index = index\">\r\n        <td>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            [(ngModel)]=\"event.title\"\r\n            (keyup)=\"refresh.next()\">\r\n        </td>\r\n        <td>\r\n          <input\r\n            type=\"color\"\r\n            [(ngModel)]=\"event.color.primary\"\r\n            (change)=\"refresh.next()\">\r\n        </td>\r\n        <td>\r\n          <input\r\n            type=\"color\"\r\n            [(ngModel)]=\"event.color.secondary\"\r\n            (change)=\"refresh.next()\">\r\n        </td>\r\n        <td>\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            mwlFlatpickr\r\n            [(ngModel)]=\"event.start\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            [altInput]=\"true\"\r\n            [convertModelValue]=\"true\"\r\n            [enableTime]=\"false\"\r\n            dateFormat=\"Y-m-dTH:i\"\r\n            altFormat=\"F j, Y H:i\"\r\n            placeholder=\"Not set\">\r\n        </td>\r\n        <td>\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            mwlFlatpickr\r\n            [(ngModel)]=\"event.end\"\r\n            (ngModelChange)=\"refresh.next()\"\r\n            [altInput]=\"true\"\r\n            [convertModelValue]=\"true\"\r\n            [enableTime]=\"true\"\r\n            dateFormat=\"Y-m-dTH:i\"\r\n            altFormat=\"F j, Y H:i\"\r\n            placeholder=\"Not set\">\r\n        </td>\r\n        <td>\r\n          <button\r\n            class=\"btn btn-danger\"\r\n            (click)=\"events.splice(index, 1); refresh.next()\">\r\n            Delete\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  \r\n  </table> \r\n</div> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var HomeComponent = /** @class */ (function () {
    function HomeComponent(modal, router) {
        this.modal = modal;
        this.router = router;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        // actions: CalendarEventAction[] = [
        //   {
        //     label: '<i class="fa fa-fw fa-pencil"></i>',
        //     onClick: ({ event }: { event: CalendarEvent }): void => {
        //       this.handleEvent('Edited', event);
        //     }
        //   },
        //   {
        //     label: '<i class="fa fa-fw fa-times"></i>',
        //     onClick: ({ event }: { event: CalendarEvent }): void => {
        //       this.events = this.events.filter(iEvent => iEvent !== event);
        //       this.handleEvent('Deleted', event);
        //     }
        //   }
        // ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // events: CalendarEvent[] = [
        //   {
        //     start: subDays(startOfDay(new Date()), 1),
        //     end: addDays(new Date(), 1),
        //     title: 'A 3 day event',
        //     color: colors.red,
        //     actions: this.actions,
        //     allDay: true,
        //     resizable: {
        //       beforeStart: true,
        //       afterEnd: true
        //     },
        //     draggable: true
        //   },
        //   {
        //     start: startOfDay(new Date()),
        //     title: 'An event with no end date',
        //     color: colors.yellow,
        //     actions: this.actions
        //   },
        //   {
        //     start: subDays(endOfMonth(new Date()), 3),
        //     end: addDays(endOfMonth(new Date()), 3),
        //     title: 'A long event that spans 2 months',
        //     color: colors.blue,
        //     allDay: true
        //   },
        //   {
        //     start: addHours(startOfDay(new Date()), 2),
        //     end: new Date(),
        //     title: 'A draggable and resizable event',
        //     color: colors.yellow,
        //     actions: this.actions,
        //     resizable: {
        //       beforeStart: true,
        //       afterEnd: true
        //     },
        //     draggable: true
        //   }
        // ];
        this.activeDayIsOpen = false;
    }
    HomeComponent.prototype.goToTransactions = function (day) {
        // console.log(day);
        this.router.navigate(['/addTransaction', { date: day.date }]);
    };
    HomeComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    HomeComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    HomeComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], HomeComponent.prototype, "modalContent", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/income/income.component.css":
/*!*********************************************!*\
  !*** ./src/app/income/income.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/income/income.component.html":
/*!**********************************************!*\
  !*** ./src/app/income/income.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  income works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/income/income.component.ts":
/*!********************************************!*\
  !*** ./src/app/income/income.component.ts ***!
  \********************************************/
/*! exports provided: IncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeComponent", function() { return IncomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncomeComponent = /** @class */ (function () {
    function IncomeComponent() {
    }
    IncomeComponent.prototype.ngOnInit = function () {
    };
    IncomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-income',
            template: __webpack_require__(/*! ./income.component.html */ "./src/app/income/income.component.html"),
            styles: [__webpack_require__(/*! ./income.component.css */ "./src/app/income/income.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IncomeComponent);
    return IncomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- {{login.value | json}}\r\n  {{loginForm | json}} -->\r\n  <form #userLogin =\"ngForm\" (ngSubmit)=\"login()\" novalidate>\r\n      <div *ngIf = \"errorMsg\">\r\n          <span class=\"text-danger\">{{errorMsg}}</span>\r\n        </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"userName\">UserName</label>\r\n      <input name = \"userName\" id=\"userName\" type=\"text\" [(ngModel)]=\"loginForm.user_name\"\r\n      class =\"form-control col-xs-4\" #userName=\"ngModel\"\r\n      >\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input name = \"password\" id=\"password\" type=\"password\" [(ngModel)]=\"loginForm.password\"\r\n        class =\"form-control col-xs-4\" #password=\"ngModel\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    \r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.loginForm = {
            user_name: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('User Name :' + this.loginForm.user_name + 'Password : ' + this.loginForm.password);
        this.loginService.login(this.loginForm).subscribe(function (user) {
            if (!!user && user.user_id !== 0 && user.user_name === _this.loginForm.user_name) {
                localStorage.setItem('user', 'admin');
                console.log(localStorage.getItem('user'));
                _this.router.navigate(['/home']);
            }
            else {
                console.log('User not found - login service');
                _this.errorMsg = 'Incorrect Credentials';
            }
        }, function (error) {
            console.log('user doesnt exists');
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(router, http) {
        this.router = router;
        this.http = http;
        this.URL = 'http://192.168.1.7:8081/api/users';
    }
    LoginService.prototype.login = function (loginForm) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Authorization', 'Basic ' + btoa('user:05b69817-a057-4926-a1f2-e94ee8938eee'));
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        console.log(this.URL);
        return this.http.post(this.URL, loginForm, { headers: headers });
    };
    LoginService.prototype.getUser = function () {
        return localStorage.getItem('user');
    };
    LoginService.prototype.isLoggedIn = function () {
        if (!!this.getUser()) {
            console.log('inside login service');
            console.log(this.getUser());
            return true;
        }
        else {
            console.log('inside else part login service');
            return false;
        }
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/transaction-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/transaction-service.service.ts ***!
  \*********************************************************/
/*! exports provided: TransactionServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionServiceService", function() { return TransactionServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionServiceService = /** @class */ (function () {
    function TransactionServiceService(http) {
        this.http = http;
        this.URL = 'http://192.168.1.7:8081/api/transactions';
    }
    TransactionServiceService.prototype.getTransactionsbyDate = function (date) {
        return this.http.get(this.URL + "/" + date);
    };
    TransactionServiceService.prototype.updateTransaction = function (transaction) {
        return this.http.post(this.URL, transaction);
    };
    TransactionServiceService.prototype.deleteTransaction = function (transaction) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.delete(this.URL + "/" + transaction.transaction_id, { headers: headers });
    };
    TransactionServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionServiceService);
    return TransactionServiceService;
}());



/***/ }),

/***/ "./src/app/transaction-details/transaction-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transaction-details/transaction-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<td>\n  <select [disabled]=\"!editEnabled\" #type=\"ngModel\" class=\"custom-select\" [class.is-invalid]=\"false\" name=\"type\" required\n    [(ngModel)]=\"transaction.type\">\n    <option value=\"Expense\">Expense</option>\n    <option value=\"Income\">Income</option>\n  </select>\n</td>\n<td>\n  <input [disabled]=\"!editEnabled\" type=\"text\" name=\"amount\" #amount=\"ngModel\" [(ngModel)]=\"transaction.amount\"\n    (blur)=\"validateAmount(amount.value)\">\n    <span class=\"text-danger\" *ngIf=\"amount.touched && amountHasErrors\">Please enter an amount</span>\n</td>\n<td>\n  <input [disabled]=\"!editEnabled\" type=\"text\" name=\"category\" #category=\"ngModel\" [(ngModel)]=\"transaction.category\" required\n    (change)=\"refresh.next()\">\n    <span class=\"text-danger\" *ngIf=\"category.errors?.required && category.touched\">Please select category</span>\n</td>\n<td>\n  <input [disabled]=\"!editEnabled\" class=\"form-control\" type=\"text\" name=\"sub_category\" #sub_category=\"ngModel\" required\n    [(ngModel)]=\"transaction.sub_category\">\n    <span class=\"text-danger\" *ngIf=\"sub_category.errors?.required && sub_category.touched\">Please select sub_category</span>\n</td>\n<td>\n  <input [disabled]=\"!editEnabled\" class=\"form-control\" type=\"text\" name=\"desc\" #desc=\"ngModel\" [(ngModel)]=\"transaction.desc\">\n</td>\n<td>\n  <div class=\"btn btn-group\">\n    <button *ngIf=\"!editEnabled\" class=\"btn btn-primary\" (click)=\"editTransaction()\">\n      <i class=\"material-icons\">\n        create\n      </i>\n    </button>\n    <button *ngIf=\"editEnabled\" class=\"btn btn-success\" (click)=\"updateTransaction()\">\n      <i class=\"material-icons\">\n        done\n      </i>\n    </button>\n    <button class=\"btn btn-danger\" (click)=\"deleteTransaction()\">\n      <i class=\"material-icons\">\n        remove_circle\n      </i>\n    </button>\n  </div>\n</td>"

/***/ }),

/***/ "./src/app/transaction-details/transaction-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_Transactions_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Transactions.model */ "./src/app/Models/Transactions.model.ts");
/* harmony import */ var _services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/transaction-service.service */ "./src/app/services/transaction-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionDetailsComponent = /** @class */ (function () {
    function TransactionDetailsComponent(transactionService) {
        this.transactionService = transactionService;
        this.transactionDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editEnabled = false;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TransactionDetailsComponent.prototype.ngOnInit = function () {
        if (this.transaction.category === null || this.transaction.category === '') {
            this.editEnabled = true;
        }
    };
    TransactionDetailsComponent.prototype.editTransaction = function () {
        this.editEnabled = true;
    };
    TransactionDetailsComponent.prototype.updateTransaction = function () {
        var _this = this;
        this.editEnabled = false;
        this.transactionService.updateTransaction(this.transaction)
            .subscribe(function (data) { return _this.transaction = data; });
    };
    TransactionDetailsComponent.prototype.deleteTransaction = function () {
        var _this = this;
        this.transactionService.deleteTransaction(this.transaction)
            .subscribe(function (data) {
            _this.transactionDeleted.emit();
            // this.refresh.next();
        }, function (error) { return _this.transactionDeleted.emit(); });
    };
    TransactionDetailsComponent.prototype.validateAmount = function (value) {
        console.log('Validating Amount');
        if (value === 0 || value === null || value === '') {
            this.amountHasErrors = true;
            console.log('Amount has errors =', this.amountHasErrors);
        }
        else {
            this.amountHasErrors = false;
            console.log('Amount has errors =', this.amountHasErrors);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Models_Transactions_model__WEBPACK_IMPORTED_MODULE_1__["Transactions"])
    ], TransactionDetailsComponent.prototype, "transaction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransactionDetailsComponent.prototype, "transactionDeleted", void 0);
    TransactionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: '.app-transaction-details',
            template: __webpack_require__(/*! ./transaction-details.component.html */ "./src/app/transaction-details/transaction-details.component.html"),
            styles: [__webpack_require__(/*! ./transaction-details.component.css */ "./src/app/transaction-details/transaction-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_transaction_service_service__WEBPACK_IMPORTED_MODULE_2__["TransactionServiceService"]])
    ], TransactionDetailsComponent);
    return TransactionDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\Expense-Manager\ExpenseManagerClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map