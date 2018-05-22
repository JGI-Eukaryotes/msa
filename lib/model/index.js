"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = undefined;

var _Sequence = require("./Sequence");

var _Sequence2 = _interopRequireDefault(_Sequence);

var _SeqCollection = require("./SeqCollection");

var _SeqCollection2 = _interopRequireDefault(_SeqCollection);

var _Feature = require("./Feature");

var _Feature2 = _interopRequireDefault(_Feature);

var _FeatureCol = require("./FeatureCol");

var _FeatureCol2 = _interopRequireDefault(_FeatureCol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = exports.model = { seq: _Sequence2.default, seqcol: _SeqCollection2.default, feature: _Feature2.default, featurecol: _FeatureCol2.default };