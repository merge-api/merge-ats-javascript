"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccessRoleEnum = _interopRequireDefault(require("./AccessRoleEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RemoteUser model module.
 * @module model/RemoteUser
 * @version 1.0
 */
var RemoteUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteUser</code>.
   * # The RemoteUser Object ### Description The &#x60;RemoteUser&#x60; object is used to represent a third party user.  ### Usage Example Fetch from the &#x60;LIST RemoteUsers&#x60; endpoint to show all users for a third party.
   * @alias module:model/RemoteUser
   */
  function RemoteUser() {
    _classCallCheck(this, RemoteUser);

    RemoteUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RemoteUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteUser} obj Optional instance to populate.
     * @return {module:model/RemoteUser} The populated <code>RemoteUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteUser();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
        }

        if (data.hasOwnProperty('access_role')) {
          obj['access_role'] = _ApiClient["default"].convertToType(data['access_role'], _AccessRoleEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RemoteUser;
}();
/**
 * @member {String} id
 */


RemoteUser.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

RemoteUser.prototype['remote_id'] = undefined;
/**
 * The user's first name.
 * @member {String} first_name
 */

RemoteUser.prototype['first_name'] = undefined;
/**
 * The user's last name.
 * @member {String} last_name
 */

RemoteUser.prototype['last_name'] = undefined;
/**
 * The user's email.
 * @member {String} email
 */

RemoteUser.prototype['email'] = undefined;
/**
 * Whether the user's account had been disabled.
 * @member {Boolean} disabled
 */

RemoteUser.prototype['disabled'] = undefined;
/**
 * When the third party's user was created.
 * @member {Date} remote_created_at
 */

RemoteUser.prototype['remote_created_at'] = undefined;
/**
 * The user's role.
 * @member {module:model/AccessRoleEnum} access_role
 */

RemoteUser.prototype['access_role'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

RemoteUser.prototype['remote_data'] = undefined;
var _default = RemoteUser;
exports["default"] = _default;