'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.msa = exports.io = exports.$ = exports.boneView = exports.view = exports.selcol = exports.selection = exports.utils = exports.menu = exports.model = undefined;

var _model = require('./model');

Object.defineProperty(exports, 'model', {
    enumerable: true,
    get: function get() {
        return _model.model;
    }
});

var _menu = require('./menu');

Object.defineProperty(exports, 'menu', {
    enumerable: true,
    get: function get() {
        return _menu.menu;
    }
});

var _utils = require('./utils');

Object.defineProperty(exports, 'utils', {
    enumerable: true,
    get: function get() {
        return _utils.utils;
    }
});

var _Selection = require('./g/selection/Selection');

Object.defineProperty(exports, 'selection', {
    enumerable: true,
    get: function get() {
        return _Selection.selection;
    }
});

var _SelectionCol = require('./g/selection/SelectionCol');

Object.defineProperty(exports, 'selcol', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_SelectionCol).default;
    }
});

var _backboneViewj = require('backbone-viewj');

Object.defineProperty(exports, 'view', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_backboneViewj).default;
    }
});

var _backboneChilds = require('backbone-childs');

Object.defineProperty(exports, 'boneView', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_backboneChilds).default;
    }
});

var _jbone = require('jbone');

Object.defineProperty(exports, '$', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_jbone).default;
    }
});

var _zomeBioIo = require('zome-bio-io');

var _msa = require('./msa');

var _msa2 = _interopRequireDefault(_msa);

require('./msa.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MSAWrapper = function MSAWrapper() {
    var msa = function msa(args) {
        return _msa2.default.apply(this, args);
    };
    msa.prototype = _msa2.default.prototype;
    return new msa(arguments);
};

var io = exports.io = {
    xhr: require('xhr'),
    fasta: _zomeBioIo.fasta,
    clustal: _zomeBioIo.clustal,
    gff: _zomeBioIo.gff
};
exports.msa = _msa2.default;
exports.default = MSAWrapper;


if (process.env.NODE_ENV === 'development') {
    window.msa = _msa2.default;
    window.msa.menu = _menu.menu;
}