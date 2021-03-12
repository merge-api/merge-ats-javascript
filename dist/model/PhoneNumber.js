"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PhoneNumberTypeEnum = _interopRequireDefault(require("./PhoneNumberTypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PhoneNumber model module.
 * @module model/PhoneNumber
 * @version 1.0
 */
var PhoneNumber = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PhoneNumber</code>.
   * # The PhoneNumber Object ### Description The &#x60;PhoneNumber&#x60; object is used to represent a candidate&#39;s phone number.  ### Usage Example Fetch from the &#x60;GET Candidate&#x60; endpoint and view their phone numbers.
   * @alias module:model/PhoneNumber
   */
  function PhoneNumber() {
    _classCallCheck(this, PhoneNumber);

    PhoneNumber.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PhoneNumber, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PhoneNumber} obj Optional instance to populate.
     * @return {module:model/PhoneNumber} The populated <code>PhoneNumber</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PhoneNumber();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('phone_number_type')) {
          obj['phone_number_type'] = _ApiClient["default"].convertToType(data['phone_number_type'], _PhoneNumberTypeEnum["default"]);
        }
      }

      return obj;
    }
  }]);

  return PhoneNumber;
}();
/**
 * The phone number.
 * @member {String} value
 */


PhoneNumber.prototype['value'] = undefined;
/**
 * The type of phone number.
 * @member {module:model/PhoneNumberTypeEnum} phone_number_type
 */

PhoneNumber.prototype['phone_number_type'] = undefined;
var _default = PhoneNumber;
exports["default"] = _default;