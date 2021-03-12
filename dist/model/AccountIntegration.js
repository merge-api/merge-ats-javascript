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
 * The AccountIntegration model module.
 * @module model/AccountIntegration
 * @version 1.0
 */
var AccountIntegration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountIntegration</code>.
   * @alias module:model/AccountIntegration
   * @param name {String} Company name.
   */
  function AccountIntegration(name) {
    _classCallCheck(this, AccountIntegration);

    AccountIntegration.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountIntegration, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>AccountIntegration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountIntegration} obj Optional instance to populate.
     * @return {module:model/AccountIntegration} The populated <code>AccountIntegration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountIntegration();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], ['String']);
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('square_image')) {
          obj['square_image'] = _ApiClient["default"].convertToType(data['square_image'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccountIntegration;
}();
/**
 * Company name.
 * @member {String} name
 */


AccountIntegration.prototype['name'] = undefined;
/**
 * Category or categories this integration belongs to. Multiple categories should be comma separated.<br/><br>Example: For [ats, hris], enter <i>ats,hris</i>
 * @member {Array.<module:model/AccountIntegration.CategoriesEnum>} categories
 */

AccountIntegration.prototype['categories'] = undefined;
/**
 * Company logo in rectangular shape. <b>Upload an image with a clear background.</b>
 * @member {String} image
 */

AccountIntegration.prototype['image'] = undefined;
/**
 * Company logo in square shape. <b>Upload an image with a white background.</b>
 * @member {String} square_image
 */

AccountIntegration.prototype['square_image'] = undefined;
/**
 * The color of this integration used for buttons and text throughout the app and landing pages. <b>Choose a darker, saturated color.</b>
 * @member {String} color
 */

AccountIntegration.prototype['color'] = undefined;
/**
 * Allowed values for the <code>categories</code> property.
 * @enum {String}
 * @readonly
 */

AccountIntegration['CategoriesEnum'] = {
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
var _default = AccountIntegration;
exports["default"] = _default;