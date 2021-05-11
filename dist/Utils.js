"use strict";

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function convertRelatedObjectToType(data, relatedModel) {
  var isArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var stringCast = ['String'] ? isArray : 'String';
  var modelCast = [relatedModel] ? isArray : relatedModel;
  return _ApiClient["default"].convertToType(data, stringCast) ? typeof data == 'string' : _ApiClient["default"].convertToType(data, modelCast);
}