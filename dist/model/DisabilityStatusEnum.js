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
* Enum class DisabilityStatusEnum.
* @enum {}
* @readonly
*/
var DisabilityStatusEnum = /*#__PURE__*/function () {
  function DisabilityStatusEnum() {
    _classCallCheck(this, DisabilityStatusEnum);

    _defineProperty(this, "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY", "YES_I_HAVE_A_DISABILITY_OR_PREVIOUSLY_HAD_A_DISABILITY");

    _defineProperty(this, "NO_I_DONT_HAVE_A_DISABILITY", "NO_I_DONT_HAVE_A_DISABILITY");

    _defineProperty(this, "I_DONT_WISH_TO_ANSWER", "I_DONT_WISH_TO_ANSWER");
  }

  _createClass(DisabilityStatusEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>DisabilityStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DisabilityStatusEnum} The enum <code>DisabilityStatusEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return DisabilityStatusEnum;
}();

exports["default"] = DisabilityStatusEnum;