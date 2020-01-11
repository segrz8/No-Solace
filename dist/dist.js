"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var burger = document.querySelector('.fa-bars');
var nav = document.querySelector('.nav');

function openNav() {
    nav.classList.toggle('nav--open');
}

burger.addEventListener('click', openNav);

var DiscographyOpener = function DiscographyOpener() {
    var _this = this;

    _classCallCheck(this, DiscographyOpener);

    _defineProperty(this, "handleDiscography", function (subject) {
        _this.discographySubject = document.querySelector(".".concat(subject, "__discography"));

        _this.discographySubject.classList.toggle("".concat(subject, "__discography--open"));

        window.scrollTo({
            top: document.querySelector(".arrow-".concat(subject)).offsetTop - 120,
            behavior: 'smooth'
        });
    });

    _defineProperty(this, "handleNav", function (subject) {
        _this.navSubject = document.querySelector(".".concat(subject));
        window.scrollTo({
            top: document.querySelector(".".concat(subject)).offsetTop - 80,
            behavior: 'smooth'
        });
        nav.classList.toggle('nav--open');
    });

    document.querySelector('.arrow-mgla').addEventListener('click', function () {
        return _this.handleDiscography('mgla');
    });
    document.querySelector('.arrow-ksm').addEventListener('click', function () {
        return _this.handleDiscography('ksm');
    });
    document.querySelector('.arrow-noSolace').addEventListener('click', function () {
        return _this.handleDiscography('noSolace');
    });
    document.querySelector('.arrow-ordersPoland').addEventListener('click', function () {
        return _this.handleDiscography('ordersPoland');
    });
    document.querySelector('.navMgla').addEventListener('click', function () {
        return _this.handleNav('mgla');
    });
    document.querySelector('.navKsm').addEventListener('click', function () {
        return _this.handleNav('ksm');
    });
    document.querySelector('.navNoSolace').addEventListener('click', function () {
        return _this.handleNav('noSolace');
    });
    document.querySelector('.navContact').addEventListener('click', function () {
        return _this.handleNav('contact');
    });
    document.querySelector('.navOrdersPoland').addEventListener('click', function () {
        return _this.handleNav('ordersPoland');
    });
};

var discographyOpener = new DiscographyOpener();