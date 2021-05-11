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
 * The PhoneNumberRequest model module.
 * @module model/PhoneNumberRequest
 * @version 1.0
 */
var PhoneNumberRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PhoneNumberRequest</code>.
   * # The PhoneNumber Object ### Description The &#x60;PhoneNumber&#x60; object is used to represent a candidate&#39;s phone number.  ### Usage Example Fetch from the &#x60;GET Candidate&#x60; endpoint and view their phone numbers.
   * @alias module:model/PhoneNumberRequest
   */
  function PhoneNumberRequest() {
    _classCallCheck(this, PhoneNumberRequest);

    PhoneNumberRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PhoneNumberRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PhoneNumberRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PhoneNumberRequest} obj Optional instance to populate.
     * @return {module:model/PhoneNumberRequest} The populated <code>PhoneNumberRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PhoneNumberRequest();

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

  return PhoneNumberRequest;
}();
/**
 * The phone number.
 * @member {String} value
 */


PhoneNumberRequest.prototype['value'] = undefined;
/**
 * The type of phone number.
 * @member {module:model/PhoneNumberTypeEnum} phone_number_type
 */

PhoneNumberRequest.prototype['phone_number_type'] = undefined;
var _default = PhoneNumberRequest;
exports["default"] = _default;