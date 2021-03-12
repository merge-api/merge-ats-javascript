"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityTypeEnum = _interopRequireDefault(require("./ActivityTypeEnum"));

var _VisibilityEnum = _interopRequireDefault(require("./VisibilityEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateActivity model module.
 * @module model/CreateActivity
 * @version 1.0
 */
var CreateActivity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateActivity</code>.
   * # The Activity Object ### Description The &#x60;Activity&#x60; object is used to represent an activity performed by a user.
   * @alias module:model/CreateActivity
   */
  function CreateActivity() {
    _classCallCheck(this, CreateActivity);

    CreateActivity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateActivity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateActivity} obj Optional instance to populate.
     * @return {module:model/CreateActivity} The populated <code>CreateActivity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateActivity();

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('activity_type')) {
          obj['activity_type'] = _ApiClient["default"].convertToType(data['activity_type'], _ActivityTypeEnum["default"]);
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], _VisibilityEnum["default"]);
        }

        if (data.hasOwnProperty('remote_user_id')) {
          obj['remote_user_id'] = _ApiClient["default"].convertToType(data['remote_user_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateActivity;
}();
/**
 * The user the performed the action.
 * @member {String} user
 */


CreateActivity.prototype['user'] = undefined;
/**
 * The activity's type.
 * @member {module:model/ActivityTypeEnum} activity_type
 */

CreateActivity.prototype['activity_type'] = undefined;
/**
 * The activity's subject.
 * @member {String} subject
 */

CreateActivity.prototype['subject'] = undefined;
/**
 * The activity's body.
 * @member {String} body
 */

CreateActivity.prototype['body'] = undefined;
/**
 * The activity's visibility.
 * @member {module:model/VisibilityEnum} visibility
 */

CreateActivity.prototype['visibility'] = undefined;
/**
 * @member {String} remote_user_id
 */

CreateActivity.prototype['remote_user_id'] = undefined;
var _default = CreateActivity;
exports["default"] = _default;