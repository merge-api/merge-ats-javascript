"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountIntegration = _interopRequireDefault(require("./AccountIntegration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountToken model module.
 * @module model/AccountToken
 * @version 1.0
 */
var AccountToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountToken</code>.
   * @alias module:model/AccountToken
   * @param accountToken {String} 
   * @param integration {module:model/AccountIntegration} 
   */
  function AccountToken(accountToken, integration) {
    _classCallCheck(this, AccountToken);

    AccountToken.initialize(this, accountToken, integration);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountToken, null, [{
    key: "initialize",
    value: function initialize(obj, accountToken, integration) {
      obj['account_token'] = accountToken;
      obj['integration'] = integration;
    }
    /**
     * Constructs a <code>AccountToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountToken} obj Optional instance to populate.
     * @return {module:model/AccountToken} The populated <code>AccountToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountToken();

        if (data.hasOwnProperty('account_token')) {
          obj['account_token'] = _ApiClient["default"].convertToType(data['account_token'], 'String');
        }

        if (data.hasOwnProperty('integration')) {
          obj['integration'] = _AccountIntegration["default"].constructFromObject(data['integration']);
        }
      }

      return obj;
    }
  }]);

  return AccountToken;
}();
/**
 * @member {String} account_token
 */


AccountToken.prototype['account_token'] = undefined;
/**
 * @member {module:model/AccountIntegration} integration
 */

AccountToken.prototype['integration'] = undefined;
var _default = AccountToken;
exports["default"] = _default;