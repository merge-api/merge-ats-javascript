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
 * The LinkToken model module.
 * @module model/LinkToken
 * @version 1.0
 */
var LinkToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkToken</code>.
   * @alias module:model/LinkToken
   * @param linkToken {String} 
   * @param integrationName {String} 
   */
  function LinkToken(linkToken, integrationName) {
    _classCallCheck(this, LinkToken);

    LinkToken.initialize(this, linkToken, integrationName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkToken, null, [{
    key: "initialize",
    value: function initialize(obj, linkToken, integrationName) {
      obj['link_token'] = linkToken;
      obj['integration_name'] = integrationName;
    }
    /**
     * Constructs a <code>LinkToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkToken} obj Optional instance to populate.
     * @return {module:model/LinkToken} The populated <code>LinkToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkToken();

        if (data.hasOwnProperty('link_token')) {
          obj['link_token'] = _ApiClient["default"].convertToType(data['link_token'], 'String');
        }

        if (data.hasOwnProperty('integration_name')) {
          obj['integration_name'] = _ApiClient["default"].convertToType(data['integration_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LinkToken;
}();
/**
 * @member {String} link_token
 */


LinkToken.prototype['link_token'] = undefined;
/**
 * @member {String} integration_name
 */

LinkToken.prototype['integration_name'] = undefined;
var _default = LinkToken;
exports["default"] = _default;