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
 * The EndUserDetails model module.
 * @module model/EndUserDetails
 * @version 1.0
 */
var EndUserDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndUserDetails</code>.
   * @alias module:model/EndUserDetails
   * @param endUserEmailAddress {String} 
   * @param endUserOrganizationName {String} 
   * @param endUserOriginId {String} 
   * @param categories {Array.<module:model/EndUserDetails.CategoriesEnum>} 
   */
  function EndUserDetails(endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories) {
    _classCallCheck(this, EndUserDetails);

    EndUserDetails.initialize(this, endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndUserDetails, null, [{
    key: "initialize",
    value: function initialize(obj, endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories) {
      obj['end_user_email_address'] = endUserEmailAddress;
      obj['end_user_organization_name'] = endUserOrganizationName;
      obj['end_user_origin_id'] = endUserOriginId;
      obj['categories'] = categories;
    }
    /**
     * Constructs a <code>EndUserDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndUserDetails} obj Optional instance to populate.
     * @return {module:model/EndUserDetails} The populated <code>EndUserDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndUserDetails();

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
      }

      return obj;
    }
  }]);

  return EndUserDetails;
}();
/**
 * @member {String} end_user_email_address
 */


EndUserDetails.prototype['end_user_email_address'] = undefined;
/**
 * @member {String} end_user_organization_name
 */

EndUserDetails.prototype['end_user_organization_name'] = undefined;
/**
 * @member {String} end_user_origin_id
 */

EndUserDetails.prototype['end_user_origin_id'] = undefined;
/**
 * @member {Array.<module:model/EndUserDetails.CategoriesEnum>} categories
 */

EndUserDetails.prototype['categories'] = undefined;
/**
 * Allowed values for the <code>categories</code> property.
 * @enum {String}
 * @readonly
 */

EndUserDetails['CategoriesEnum'] = {
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
var _default = EndUserDetails;
exports["default"] = _default;