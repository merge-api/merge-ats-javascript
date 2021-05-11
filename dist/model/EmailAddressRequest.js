"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailAddressTypeEnum = _interopRequireDefault(require("./EmailAddressTypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmailAddressRequest model module.
 * @module model/EmailAddressRequest
 * @version 1.0
 */
var EmailAddressRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailAddressRequest</code>.
   * # The EmailAddress Object ### Description The &#x60;EmailAddress&#x60; object is used to represent a candidate&#39;s email address.  ### Usage Example Fetch from the &#x60;GET Candidate&#x60; endpoint and view their email addresses.
   * @alias module:model/EmailAddressRequest
   */
  function EmailAddressRequest() {
    _classCallCheck(this, EmailAddressRequest);

    EmailAddressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailAddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailAddressRequest} obj Optional instance to populate.
     * @return {module:model/EmailAddressRequest} The populated <code>EmailAddressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailAddressRequest();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('email_address_type')) {
          obj['email_address_type'] = _ApiClient["default"].convertToType(data['email_address_type'], _EmailAddressTypeEnum["default"]);
        }
      }

      return obj;
    }
  }]);

  return EmailAddressRequest;
}();
/**
 * The email address.
 * @member {String} value
 */


EmailAddressRequest.prototype['value'] = undefined;
/**
 * The type of email address.
 * @member {module:model/EmailAddressTypeEnum} email_address_type
 */

EmailAddressRequest.prototype['email_address_type'] = undefined;
var _default = EmailAddressRequest;
exports["default"] = _default;