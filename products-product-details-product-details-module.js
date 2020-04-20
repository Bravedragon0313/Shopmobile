(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-product-details-product-details-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/product-details/product-details.page.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/product-details/product-details.page.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button autoHide=\"false\"></ion-menu-button>\n\t\t</ion-buttons>\n\n\t\t<ion-title>{{ 'PRODUCTS_VIEW.DETAILS.DETAILS' | translate }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"goToProductPage()\">\n\t\t\t\t<i class=\"fa fa-angle-left back-btn\"></i>\n\t\t\t\t<span>{{ 'PRODUCTS_VIEW.DETAILS.BACK' | translate }}</span>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'blur-filter': modalOpen}\">\n\t<ion-card class=\"product-card brand-dark\">\n\t\t<div *ngIf=\"modalOpen\" class=\"blur-lighter\"></div>\n\t\t<ion-grid *ngIf=\"product\" no-padding>\n\t\t\t<ion-row\n\t\t\t\tno-padding\n\t\t\t\talign-items-center\n\t\t\t\tclass=\"header-container brand-light\"\n\t\t\t>\n\t\t\t\t<ion-col class=\"col-2\">\n\t\t\t\t\t<e-cu-warehouse-logo\n\t\t\t\t\t\t[logo]=\"warehouseLogo\"\n\t\t\t\t\t\tclass=\"icon\"\n\t\t\t\t\t></e-cu-warehouse-logo>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"text-content\" clsss=\"col-6\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h2 class=\"text\">\n\t\t\t\t\t\t\t{{ localeTranslate(product.product?.title) }}\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<h6 class=\"productDescription\">\n\t\t\t\t\t\t\t{{\n\t\t\t\t\t\t\tshortenDescription(localeTranslate(product.product?.description))\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t</h6>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"col-2\">\n\t\t\t\t\t<e-cu-delivery-info\n\t\t\t\t\t\t[currentProduct]=\"product\"\n\t\t\t\t\t></e-cu-delivery-info>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row no-padding *ngIf=\"product\" class=\"images\">\n\t\t\t\t<e-cu-discount [currentProduct]=\"product\"></e-cu-discount>\n\t\t\t\t<div *ngIf=\"image\" class=\"single-image\">\n\t\t\t\t\t<img\n\t\t\t\t\t\tsrc=\"{{image.url}}\"\n\t\t\t\t\t\t[ngClass]=\"image.orientation === 2 ? 'all-space' : 'half-space'\"\n\t\t\t\t\t\talt=\"\"\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t\t<ion-slides\n\t\t\t\t\t*ngIf=\"images && images.length !== 0\"\n\t\t\t\t\t[options]=\"swiperOptions\"\n\t\t\t\t\tdir=\"{{ 'CURRENT_DIRECTION' | translate }}\"\n\t\t\t\t>\n\t\t\t\t\t<ion-slide\n\t\t\t\t\t\t*ngFor=\"let image of images\"\n\t\t\t\t\t\tclass=\"slide-content\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc=\"{{ image.url }}\"\n\t\t\t\t\t\t\t*ngIf=\"product.product.images.length !== 0\"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</ion-slide>\n\t\t\t\t</ion-slides>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row size=\"12\" class=\"list-content\">\n\t\t\t\t<div class=\"list\">\n\t\t\t\t\t<h6 class=\"title-text\">\n\t\t\t\t\t\t{{ 'PRODUCTS_VIEW.DETAILS.INCLUDES' | translate }}\n\t\t\t\t\t</h6>\n\t\t\t\t\t<span class=\"description-text\">\n\t\t\t\t\t\t{{ localeTranslate(product?.product.details) }}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</ion-row>\n\n\t\t\t<ion-col\n\t\t\t\t[hidden]=\"true\"\n\t\t\t\tno-padding\n\t\t\t\tsize=\"12\"\n\t\t\t\tclass=\"reviews-content\"\n\t\t\t>\n\t\t\t\t<ion-img src=\"/Shopmobile/assets/imgs/reviews.png\"></ion-img>\n\t\t\t</ion-col>\n\n\t\t\t<div class=\"box details-buttons\">\n\t\t\t\t<button\n\t\t\t\t\tclass=\"button button-assertive border-color-brand col-100\"\n\t\t\t\t\t[ngClass]=\"{'disabled': soldOut}\"\n\t\t\t\t\t(click)=\"!soldOut && buyItem(product.product)\"\n\t\t\t\t>\n\t\t\t\t\t<span\n\t\t\t\t\t\t>{{ !soldOut ? ('PRODUCTS_VIEW.BUY_BUTTON.PRE' |\n\t\t\t\t\t\ttranslate) : ('PRODUCTS_VIEW.NOT_AVAILABLE' | translate)\n\t\t\t\t\t\t}} {{ !soldOut ? (product?.price + '$') : ('') }} {{\n\t\t\t\t\t\t!soldOut ? ('PRODUCTS_VIEW.BUY_BUTTON.SUF' | translate)\n\t\t\t\t\t\t: ('') }}</span\n\t\t\t\t\t>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ion-grid>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/+products/product-details/product-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/+products/product-details/product-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: HttpLoaderFactory, ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/+products/product-details/product-details.page.ts");
/* harmony import */ var _components_warehouse_logo_warehouse_logo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/warehouse-logo/warehouse-logo.module */ "./src/app/components/warehouse-logo/warehouse-logo.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../+order/order.module */ "./src/app/pages/+products/+order/order.module.ts");
/* harmony import */ var _order_cancel_cancel_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../+order/+cancel/cancel.module */ "./src/app/pages/+products/+order/+cancel/cancel.module.ts");
/* harmony import */ var _components_products_products_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/products/products.module */ "./src/app/components/products/products.module.ts");
/* harmony import */ var _order_takeaway_popup_popup_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../+order/takeaway/popup/popup.module */ "./src/app/pages/+products/+order/takeaway/popup/popup.module.ts");
















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './Shopmobile/assets/i18n/', '.json');
}
var routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsPage"],
    },
];
var ProductDetailsPageModule = (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _components_warehouse_logo_warehouse_logo_module__WEBPACK_IMPORTED_MODULE_8__["WarehouseLogoModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].withConfig({}),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
                    },
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _order_order_module__WEBPACK_IMPORTED_MODULE_12__["OrderPageModule"],
                _order_cancel_cancel_module__WEBPACK_IMPORTED_MODULE_13__["CancelPageModule"],
                _components_products_products_module__WEBPACK_IMPORTED_MODULE_14__["ProductsModule"],
                _order_takeaway_popup_popup_module__WEBPACK_IMPORTED_MODULE_15__["OrderTakeawayInfoPopupModule"],
            ],
            providers: [],
            declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsPage"]],
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/+products/product-details/product-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/+products/product-details/product-details.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".disabled {\n  background: #cccccc !important;\n  color: #666666 !important;\n}\n\n.product-card {\n  border-radius: 0px;\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n}\n\n.icon {\n  border: 1px solid #95989a;\n  padding: 5px;\n}\n\n.product-description {\n  color: #d0d0d0;\n}\n\n.btn-sm {\n  font-size: 60%;\n}\n\nion-slide {\n  display: block;\n  height: 100vh;\n}\n\n.product-details ion-title.title-ios.hydrated {\n  padding: 0;\n}\n\n.product-details .title-content {\n  width: 100%;\n}\n\n.product-details .title-content .ios-arrow-round-back {\n  height: 35px;\n  width: 35px;\n  float: left;\n  margin-right: 50px;\n}\n\n.product-details .title-content span {\n  margin-top: 4px;\n  float: left;\n}\n\n.slide-content {\n  max-height: 180px;\n}\n\nion-slide.swiper-slide {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\nion-slides.hydrated {\n  min-width: 100%;\n}\n\n.list-content {\n  margin-top: 10px;\n  padding-top: 10px;\n}\n\n.list {\n  max-height: 17em;\n  overflow: scroll;\n  padding-left: 20px;\n  padding-right: 20px;\n  list-style-type: none;\n  margin-bottom: 10px !important;\n}\n\n.reviews-content {\n  height: 70px;\n}\n\n.icon-cicle {\n  height: 130px;\n}\n\n.single-image {\n  width: 100%;\n}\n\n.all-space {\n  width: 100%;\n}\n\n.half-space {\n  width: 30%;\n  margin: 0 auto;\n}\n\n.back-btn {\n  font-size: 30px;\n  margin-right: 10px;\n  margin-bottom: 4px;\n}\n\n.title-text {\n  color: white;\n}\n\n.description-text {\n  color: #d0d0d0;\n}\n\n.delivery-sign {\n  font-size: 18px;\n}\n\n.delivery-info {\n  text-align: center;\n  line-height: 1;\n  padding-right: 5px;\n  color: white;\n}\n\n.delivery-info .delivery-lines {\n  font-size: 80%;\n}\n\n.delivery-info .delivery-lines small {\n  display: block;\n}\n\n.discount-circle {\n  z-index: 1000;\n  opacity: 0.8;\n  position: absolute;\n  right: 13px;\n  top: 10px;\n  font-size: 15px;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  line-height: 1;\n  text-align: center;\n}\n\n.discount-circle .price-initial {\n  font-size: 14px;\n  text-decoration: line-through;\n}\n\n.images {\n  position: relative;\n}\n\n.details-buttons {\n  position: absolute;\n  padding-right: 5px;\n  padding-left: 5px;\n  bottom: 5px;\n}\n\n.details-buttons button {\n  padding: 15px;\n  border-radius: 5px;\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n  position: relative;\n  text-align: center;\n  height: 100%;\n  color: white;\n  text-align: center;\n}\n\n.details-buttons button span {\n  margin: 0 auto;\n}\n\n.details-buttons .disabled {\n  background: #cccccc !important;\n  border: 1px solid #999999 !important;\n  color: #666666 !important;\n}\n\n.text-content {\n  padding-left: 10px;\n  line-height: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n\n.text {\n  margin: 0;\n  color: white;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.productDescription {\n  color: #d0d0d0;\n  margin: 0 !important;\n}\n\nion-col {\n  padding: 2px;\n}\n\n.header-container {\n  display: flex !important;\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvc2hvcC1tb2JpbGUtaW9uaWMvc3JjL2FwcC9wYWdlcy8rcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzLytwcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUNDMUI7O0FERUE7RUFDQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FDQ2I7O0FERUE7RUFDQyx5QkFBeUI7RUFDekIsWUFBWTtBQ0NiOztBREVBO0VBQ0MsY0FBYztBQ0NmOztBREVBO0VBQ0MsY0FBYztBQ0NmOztBREVBO0VBQ0MsY0FBYztFQUNkLGFBQWE7QUNDZDs7QURFQTtFQUVFLFVBQVU7QUNBWjs7QURGQTtFQU1FLFdBQVc7QUNBYjs7QUROQTtFQVFHLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQ0VyQjs7QURiQTtFQWVHLGVBQWU7RUFDZixXQUFXO0FDRWQ7O0FER0E7RUFDQyxpQkFBaUI7QUNBbEI7O0FER0E7RUFDQyx3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQ0EvQjs7QURHQTtFQUNDLGVBQWU7QUNBaEI7O0FER0E7RUFDQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FDQWxCOztBREdBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUNBL0I7O0FER0E7RUFDQyxZQUFZO0FDQWI7O0FER0E7RUFDQyxhQUFhO0FDQWQ7O0FER0E7RUFDQyxXQUFXO0FDQVo7O0FER0E7RUFDQyxXQUFXO0FDQVo7O0FER0E7RUFDQyxVQUFVO0VBQ1YsY0FBYztBQ0FmOztBREdBO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7QUNBbkI7O0FER0E7RUFDQyxZQUFZO0FDQWI7O0FER0E7RUFDQyxjQUFjO0FDQWY7O0FER0E7RUFDQyxlQUFlO0FDQWhCOztBREdBO0VBQ0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtBQ0FiOztBREpBO0VBTUUsY0FBYztBQ0VoQjs7QURSQTtFQVFHLGNBQWM7QUNJakI7O0FEQ0E7RUFDQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFFWixjQUFjO0VBQ2Qsa0JBQWtCO0FDQ25COztBRGJBO0VBZUUsZUFBZTtFQUNmLDZCQUE2QjtBQ0UvQjs7QURFQTtFQUNDLGtCQUFrQjtBQ0NuQjs7QURFQTtFQUNDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUNDWjs7QURMQTtFQU1FLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQ0dwQjs7QURsQkE7RUFpQkcsY0FBYztBQ0tqQjs7QUR0QkE7RUFzQkUsOEJBQThCO0VBQzlCLG9DQUFvQztFQUNwQyx5QkFBeUI7QUNJM0I7O0FEQUE7RUFDQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0FDR3RCOztBREFBO0VBQ0MsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUNHeEI7O0FEQUE7RUFDQyxjQUFjO0VBQ2Qsb0JBQW9CO0FDR3JCOztBREFBO0VBQ0MsWUFBWTtBQ0diOztBREFBO0VBQ0Msd0JBQXdCO0VBQ3hCLFlBQVk7QUNHYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLytwcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxlZCB7XG5cdGJhY2tncm91bmQ6ICNjY2NjY2MgIWltcG9ydGFudDtcblx0Y29sb3I6ICM2NjY2NjYgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcblx0bWFyZ2luOiAwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5pY29uIHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzk1OTg5YTtcblx0cGFkZGluZzogNXB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG5cdGNvbG9yOiAjZDBkMGQwO1xufVxuXG4uYnRuLXNtIHtcblx0Zm9udC1zaXplOiA2MCU7XG59XG5cbmlvbi1zbGlkZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDEwMHZoO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIHtcblx0aW9uLXRpdGxlLnRpdGxlLWlvcy5oeWRyYXRlZCB7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXG5cdC50aXRsZS1jb250ZW50IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQuaW9zLWFycm93LXJvdW5kLWJhY2sge1xuXHRcdFx0aGVpZ2h0OiAzNXB4O1xuXHRcdFx0d2lkdGg6IDM1cHg7XG5cdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdG1hcmdpbi1yaWdodDogNTBweDtcblx0XHR9XG5cblx0XHRzcGFuIHtcblx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdH1cblx0fVxufVxuXG4uc2xpZGUtY29udGVudCB7XG5cdG1heC1oZWlnaHQ6IDE4MHB4O1xufVxuXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcblx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcblx0YWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGVzLmh5ZHJhdGVkIHtcblx0bWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubGlzdC1jb250ZW50IHtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0cGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5saXN0IHtcblx0bWF4LWhlaWdodDogMTdlbTtcblx0b3ZlcmZsb3c6IHNjcm9sbDtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnJldmlld3MtY29udGVudCB7XG5cdGhlaWdodDogNzBweDtcbn1cblxuLmljb24tY2ljbGUge1xuXHRoZWlnaHQ6IDEzMHB4O1xufVxuXG4uc2luZ2xlLWltYWdlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5hbGwtc3BhY2Uge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmhhbGYtc3BhY2Uge1xuXHR3aWR0aDogMzAlO1xuXHRtYXJnaW46IDAgYXV0bztcbn1cblxuLmJhY2stYnRuIHtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnRpdGxlLXRleHQge1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcblx0Y29sb3I6ICNkMGQwZDA7XG59XG5cbi5kZWxpdmVyeS1zaWduIHtcblx0Zm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGVsaXZlcnktaW5mbyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bGluZS1oZWlnaHQ6IDE7XG5cdHBhZGRpbmctcmlnaHQ6IDVweDtcblx0Y29sb3I6IHdoaXRlO1xuXHQuZGVsaXZlcnktbGluZXMge1xuXHRcdGZvbnQtc2l6ZTogODAlO1xuXHRcdHNtYWxsIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblx0fVxufVxuXG4uZGlzY291bnQtY2lyY2xlIHtcblx0ei1pbmRleDogMTAwMDtcblx0b3BhY2l0eTogMC44O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAxM3B4O1xuXHR0b3A6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDVweDtcblxuXHRsaW5lLWhlaWdodDogMTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdC5wcmljZS1pbml0aWFsIHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG5cdH1cbn1cblxuLmltYWdlcyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRldGFpbHMtYnV0dG9ucyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cGFkZGluZy1yaWdodDogNXB4O1xuXHRwYWRkaW5nLWxlZnQ6IDVweDtcblx0Ym90dG9tOiA1cHg7XG5cdGJ1dHRvbiB7XG5cdFx0cGFkZGluZzogMTVweDtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRcdGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHNwYW4ge1xuXHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0fVxuXHR9XG5cblx0LmRpc2FibGVkIHtcblx0XHRiYWNrZ3JvdW5kOiAjY2NjY2NjICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTk5OSAhaW1wb3J0YW50O1xuXHRcdGNvbG9yOiAjNjY2NjY2ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLnRleHQtY29udGVudCB7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcblx0bGluZS1oZWlnaHQ6IDE7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZXh0IHtcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9kdWN0RGVzY3JpcHRpb24ge1xuXHRjb2xvcjogI2QwZDBkMDtcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuXHRwYWRkaW5nOiAycHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiA1cHg7XG59XG4iLCIuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNjY2NjY2ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaWNvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NTk4OWE7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBjb2xvcjogI2QwZDBkMDtcbn1cblxuLmJ0bi1zbSB7XG4gIGZvbnQtc2l6ZTogNjAlO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyBpb24tdGl0bGUudGl0bGUtaW9zLmh5ZHJhdGVkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAudGl0bGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC50aXRsZS1jb250ZW50IC5pb3MtYXJyb3ctcm91bmQtYmFjayB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgLnRpdGxlLWNvbnRlbnQgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zbGlkZS1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMTgwcHg7XG59XG5cbmlvbi1zbGlkZS5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZXMuaHlkcmF0ZWQge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5saXN0LWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXgtaGVpZ2h0OiAxN2VtO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3cy1jb250ZW50IHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uaWNvbi1jaWNsZSB7XG4gIGhlaWdodDogMTMwcHg7XG59XG5cbi5zaW5nbGUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFsbC1zcGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFsZi1zcGFjZSB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYmFjay1idG4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlc2NyaXB0aW9uLXRleHQge1xuICBjb2xvcjogI2QwZDBkMDtcbn1cblxuLmRlbGl2ZXJ5LXNpZ24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kZWxpdmVyeS1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxpdmVyeS1pbmZvIC5kZWxpdmVyeS1saW5lcyB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4uZGVsaXZlcnktaW5mbyAuZGVsaXZlcnktbGluZXMgc21hbGwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpc2NvdW50LWNpcmNsZSB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNjb3VudC1jaXJjbGUgLnByaWNlLWluaXRpYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uaW1hZ2VzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGV0YWlscy1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3R0b206IDVweDtcbn1cblxuLmRldGFpbHMtYnV0dG9ucyBidXR0b24ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzLWJ1dHRvbnMgYnV0dG9uIHNwYW4ge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmRldGFpbHMtYnV0dG9ucyAuZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTkgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NjY2NjYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9kdWN0RGVzY3JpcHRpb24ge1xuICBjb2xvcjogI2QwZDBkMDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/+products/product-details/product-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/+products/product-details/product-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-orders-router.service */ "../common-angular/src/routers/warehouse-orders-router.service.ts");
/* harmony import */ var _order_order_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../+order/order.page */ "./src/app/pages/+products/+order/order.page.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-products-router.service */ "../common-angular/src/routers/warehouse-products-router.service.ts");
/* harmony import */ var _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/server.common/enums/RegistrationSystem */ "../common/src/enums/RegistrationSystem.ts");
/* harmony import */ var _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/server.common/enums/DeliveryType */ "../common/src/enums/DeliveryType.ts");
/* harmony import */ var _order_takeaway_popup_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../+order/takeaway/popup/popup.component */ "./src/app/pages/+products/+order/takeaway/popup/popup.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
















var ProductDetailsPage = (function () {
    function ProductDetailsPage(route, store, translateProductLocales, ngZone, router, navCtrl, warehouseOrdersRouter, modalController, warehouseRouter, warehouseProductsRouter) {
        this.route = route;
        this.store = store;
        this.translateProductLocales = translateProductLocales;
        this.ngZone = ngZone;
        this.router = router;
        this.navCtrl = navCtrl;
        this.warehouseOrdersRouter = warehouseOrdersRouter;
        this.modalController = modalController;
        this.warehouseRouter = warehouseRouter;
        this.warehouseProductsRouter = warehouseProductsRouter;
        this.ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
        this.swiperEvents$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
        this.modalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slideOptions();
        this.getModalChange();
    }
    ProductDetailsPage_1 = ProductDetailsPage;
    ProductDetailsPage.prototype.ngAfterViewInit = function () {
        this.prevUrl = this.route.snapshot.queryParams.backUrl;
        this.warehouseId = this.route.snapshot.queryParams.warehouseId;
        this.loadProductImages();
    };
    ProductDetailsPage.prototype.slideOptions = function () {
        var _this = this;
        var self = this;
        this.swiperOptions = {
            autoHeight: true,
            slidesPerView: 2,
            spaceBetween: 5,
            resistance: true,
            watchSlidesProgress: true,
            longSwipes: false,
            on: {
                init: function () {
                    self.swiper = this;
                    window.swiper = this.swiper;
                    self.swiperEvents$.next('init');
                },
                transitionStart: function () {
                    if (_this.swiper) {
                        _this.ngZone.run(function () {
                        });
                    }
                },
            },
        };
    };
    ProductDetailsPage.prototype.localeTranslate = function (member) {
        return this.translateProductLocales.getTranslate(member);
    };
    ProductDetailsPage.prototype.buyItem = function (currentProduct) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var orderCreateInput, order;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.store.userId &&
                            this.store.registrationSystem === _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_11__["default"].Disabled)) return [3, 1];
                        this.store.registrationSystem = _modules_server_common_enums_RegistrationSystem__WEBPACK_IMPORTED_MODULE_11__["default"].Once;
                        this.store.buyProduct = currentProduct.id;
                        this.store.backToDetails = currentProduct.id;
                        this.store.warehouseId = this.warehouseId;
                        this.navCtrl.navigateRoot('/invite');
                        return [3, 3];
                    case 1:
                        orderCreateInput = {
                            warehouseId: this.warehouseId,
                            products: [{ count: 1, productId: currentProduct.id }],
                            userId: this.store.userId,
                            orderType: this.store.deliveryType,
                            options: { autoConfirm: true },
                        };
                        return [4, this.warehouseOrdersRouter.create(orderCreateInput)];
                    case 2:
                        order = _a.sent();
                        this.store.orderId = order.id;
                        this.store.orderWarehouseId = order.warehouseId;
                        if (environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].ORDER_INFO_TYPE === 'popup') {
                            this.showOrderInfoModal();
                        }
                        if (environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].ORDER_INFO_TYPE === 'page') {
                            this.router.navigate([
                                "" + (this.store.deliveryType === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"].Delivery
                                    ? '/order-info'
                                    : '/order-info-takeaway'),
                            ]);
                        }
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ProductDetailsPage.prototype.goToProductPage = function () {
        this.router.navigateByUrl(this.prevUrl);
    };
    ProductDetailsPage.prototype.shortenDescription = function (desc) {
        return desc.length < ProductDetailsPage_1.MAX_DESCRIPTION_LENGTH
            ? desc
            : desc.substr(0, ProductDetailsPage_1.MAX_DESCRIPTION_LENGTH - 3) +
                '...';
    };
    ProductDetailsPage.prototype.showOrderInfoModal = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalController.create({
                            component: this.store.deliveryType === _modules_server_common_enums_DeliveryType__WEBPACK_IMPORTED_MODULE_12__["default"].Delivery
                                ? _order_order_page__WEBPACK_IMPORTED_MODULE_7__["OrderPage"]
                                : _order_takeaway_popup_popup_component__WEBPACK_IMPORTED_MODULE_13__["OrderTakeawayInfoPopup"],
                            cssClass: 'order-info-modal',
                            componentProps: { modalChange: this.modalChange },
                        })];
                    case 1:
                        modal = _a.sent();
                        this.modalChange.emit(true);
                        return [2, modal.present()];
                }
            });
        });
    };
    ProductDetailsPage.prototype.getModalChange = function () {
        var _this = this;
        this.modalChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.ngDestroy$))
            .subscribe(function (result) {
            _this.modalOpen = result;
        });
    };
    ProductDetailsPage.prototype.continueOrder = function () {
        var buyProductId = this.store.buyProduct;
        if (this.store.userId) {
            if (buyProductId && buyProductId !== 'null') {
                this.buyItem(this.product.product);
                this.store.buyProduct = null;
                this.store.warehouseId = null;
            }
        }
        else {
            this.store.buyProduct = null;
            this.store.warehouseId = null;
        }
    };
    ProductDetailsPage.prototype._subscribeWarehouseProduct = function () {
        var _this = this;
        if (this.warehouseProduct$) {
            this.warehouseProduct$.unsubscribe();
        }
        if (this.product) {
            this.warehouseProduct$ = this.warehouseProductsRouter
                .get(this.warehouseId, false)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.ngDestroy$))
                .subscribe(function (r) {
                var prod = r.filter(function (p) { return p.productId === _this.product.productId; })[0];
                _this.soldOut = !prod || prod.count <= 0;
            });
        }
    };
    ProductDetailsPage.prototype.loadProductImages = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var warehouse, products;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productID = this.route.snapshot.paramMap.get('id');
                        return [4, this.warehouseRouter
                                .get(this.warehouseId, true)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["first"])())
                                .toPromise()];
                    case 1:
                        warehouse = _a.sent();
                        this.warehouseLogo = warehouse.logo;
                        products = warehouse.products;
                        this.product = products.filter(function (p) { return p.product['id'] === _this.productID; })[0];
                        this.continueOrder();
                        this.loadImages();
                        this._subscribeWarehouseProduct();
                        return [2];
                }
            });
        });
    };
    ProductDetailsPage.prototype.loadImages = function () {
        var currentProduct = this.product.product;
        if (currentProduct.images.length > 1) {
            var horizontal = currentProduct.images.filter(function (i) { return i.orientation === 2; });
            var vertical = currentProduct.images.filter(function (i) { return i.orientation !== 2; });
            if (vertical.length === horizontal.length &&
                vertical.length === 1) {
                this.image = horizontal[0];
            }
            else if (vertical.length === 1) {
                this.images = horizontal;
            }
            else if (horizontal.length === 1) {
                this.images = vertical;
            }
            else {
                if (vertical.length > 0) {
                    this.images = vertical;
                }
                else {
                    this.images = horizontal;
                }
            }
        }
        else if (currentProduct.images.length === 1) {
            this.image = currentProduct.images[0];
        }
    };
    ProductDetailsPage.prototype.ngOnDestroy = function () {
        if (this.swiperEvents$) {
            this.swiperEvents$.complete();
        }
        this.ngDestroy$.next();
        this.ngDestroy$.complete();
    };
    var ProductDetailsPage_1;
    ProductDetailsPage.MAX_DESCRIPTION_LENGTH = 53;
    ProductDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseOrdersRouter"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseProductsRouter"] }
    ]; };
    ProductDetailsPage = ProductDetailsPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'e-cu-product-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-details.page.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/+products/product-details/product-details.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-details.page.scss */ "./src/app/pages/+products/product-details/product-details.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductLocalesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _modules_client_common_angular2_routers_warehouse_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseOrdersRouter"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseRouter"],
            _modules_client_common_angular2_routers_warehouse_products_router_service__WEBPACK_IMPORTED_MODULE_10__["WarehouseProductsRouter"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-product-details-product-details-module.js.map