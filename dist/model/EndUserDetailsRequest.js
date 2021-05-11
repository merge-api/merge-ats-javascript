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

/**
 * The EndUserDetailsRequest model module.
 * @module model/EndUserDetailsRequest
 * @version 1.0
 */
var EndUserDetailsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndUserDetailsRequest</code>.
   * @alias module:model/EndUserDetailsRequest
   * @param endUserEmailAddress {String} 
   * @param endUserOrganizationName {String} 
   * @param endUserOriginId {String} 
   * @param categories {Array.<module:model/EndUserDetailsRequest.CategoriesEnum>} 
   */
  function EndUserDetailsRequest(endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories) {
    _classCallCheck(this, EndUserDetailsRequest);

    EndUserDetailsRequest.initialize(this, endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndUserDetailsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories) {
      obj['end_user_email_address'] = endUserEmailAddress;
      obj['end_user_organization_name'] = endUserOrganizationName;
      obj['end_user_origin_id'] = endUserOriginId;
      obj['categories'] = categories;
    }
    /**
     * Constructs a <code>EndUserDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndUserDetailsRequest} obj Optional instance to populate.
     * @return {module:model/EndUserDetailsRequest} The populated <code>EndUserDetailsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndUserDetailsRequest();

        if (data.hasOwnProperty('end_user_email_address')) {
          obj['end_user_email_address'] = _ApiClient["default"].convertToType(data['end_user_email_address'], 'String');
        }

        if (data.hasOwnProperty('end_user_organization_name')) {
          obj['end_user_organization_name'] = _ApiClient["default"].convertToType(data['end_user_organization_name'], 'String');
        }

        if (data.hasOwnProperty('end_user_origin_id')) {
          obj['end_user_origin_id'] = _ApiClient["default"].convertToType(data['end_user_origin_id'], 'String');
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], ['String']);
        }

        if (data.hasOwnProperty('integration')) {
          obj['integration'] = _ApiClient["default"].convertToType(data['integration'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EndUserDetailsRequest;
}();
/**
 * @member {String} end_user_email_address
 */


EndUserDetailsRequest.prototype['end_user_email_address'] = undefined;
/**
 * @member {String} end_user_organization_name
 */

EndUserDetailsRequest.prototype['end_user_organization_name'] = undefined;
/**
 * @member {String} end_user_origin_id
 */

EndUserDetailsRequest.prototype['end_user_origin_id'] = undefined;
/**
 * @member {Array.<module:model/EndUserDetailsRequest.CategoriesEnum>} categories
 */

EndUserDetailsRequest.prototype['categories'] = undefined;
/**
 * @member {String} integration
 */

EndUserDetailsRequest.prototype['integration'] = undefined;
/**
 * Allowed values for the <code>categories</code> property.
 * @enum {String}
 * @readonly
 */

EndUserDetailsRequest['CategoriesEnum'] = {
  /**
   * value: "hris"
   * @const
   */
  "hris": "hris",

  /**
   * value: "ats"
   * @const
   */
  "ats": "ats"
};
var _default = EndUserDetailsRequest;
exports["default"] = _default;