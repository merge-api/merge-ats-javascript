"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class StatusA9fEnum.
* @enum {}
* @readonly
*/
var StatusA9fEnum = /*#__PURE__*/function () {
  function StatusA9fEnum() {
    _classCallCheck(this, StatusA9fEnum);

    _defineProperty(this, "DRAFT", "DRAFT");

    _defineProperty(this, "APPROVAL-SENT", "APPROVAL-SENT");

    _defineProperty(this, "APPROVED", "APPROVED");

    _defineProperty(this, "SENT", "SENT");

    _defineProperty(this, "SENT-MANUALLY", "SENT-MANUALLY");

    _defineProperty(this, "OPENED", "OPENED");

    _defineProperty(this, "DENIED", "DENIED");

    _defineProperty(this, "SIGNED", "SIGNED");

    _defineProperty(this, "DEPRECATED", "DEPRECATED");
  }

  _createClass(StatusA9fEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>StatusA9fEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StatusA9fEnum} The enum <code>StatusA9fEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return StatusA9fEnum;
}();

exports["default"] = StatusA9fEnum;