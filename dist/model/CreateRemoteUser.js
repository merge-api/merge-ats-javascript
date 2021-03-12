"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccessRoleEnum = _interopRequireDefault(require("./AccessRoleEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateRemoteUser model module.
 * @module model/CreateRemoteUser
 * @version 1.0
 */
var CreateRemoteUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateRemoteUser</code>.
   * # The RemoteUser Object ### Description The &#x60;RemoteUser&#x60; object is used to represent a third party user.
   * @alias module:model/CreateRemoteUser
   */
  function CreateRemoteUser() {
    _classCallCheck(this, CreateRemoteUser);

    CreateRemoteUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateRemoteUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateRemoteUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRemoteUser} obj Optional instance to populate.
     * @return {module:model/CreateRemoteUser} The populated <code>CreateRemoteUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRemoteUser();

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

        if (data.hasOwnProperty('access_role')) {
          obj['access_role'] = _ApiClient["default"].convertToType(data['access_role'], _AccessRoleEnum["default"]);
        }

        if (data.hasOwnProperty('remote_user_id')) {
          obj['remote_user_id'] = _ApiClient["default"].convertToType(data['remote_user_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateRemoteUser;
}();
/**
 * The user's first name.
 * @member {String} first_name
 */


CreateRemoteUser.prototype['first_name'] = undefined;
/**
 * The user's last name.
 * @member {String} last_name
 */

CreateRemoteUser.prototype['last_name'] = undefined;
/**
 * The user's email.
 * @member {String} email
 */

CreateRemoteUser.prototype['email'] = undefined;
/**
 * Whether the user's account had been disabled.
 * @member {Boolean} disabled
 */

CreateRemoteUser.prototype['disabled'] = undefined;
/**
 * The user's role.
 * @member {module:model/AccessRoleEnum} access_role
 */

CreateRemoteUser.prototype['access_role'] = undefined;
/**
 * @member {String} remote_user_id
 */

CreateRemoteUser.prototype['remote_user_id'] = undefined;
var _default = CreateRemoteUser;
exports["default"] = _default;