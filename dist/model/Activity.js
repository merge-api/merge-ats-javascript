"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Utils = _interopRequireDefault(require("../Utils"));

var _ActivityTypeEnum = _interopRequireDefault(require("./ActivityTypeEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _RemoteUser = _interopRequireDefault(require("./RemoteUser"));

var _VisibilityEnum = _interopRequireDefault(require("./VisibilityEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Activity model module.
 * @module model/Activity
 * @version 1.0
 */
var Activity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Activity</code>.
   * # The Activity Object ### Description The &#x60;Activity&#x60; object is used to represent an activity performed by a user.  ### Usage Example Fetch from the &#x60;LIST Activities&#x60; endpoint and filter by &#x60;ID&#x60; to show all activities.
   * @alias module:model/Activity
   */
  function Activity() {
    _classCallCheck(this, Activity);

    Activity.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Activity, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Activity} obj Optional instance to populate.
     * @return {module:model/Activity} The populated <code>Activity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Activity();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = (0, _Utils["default"])(data['user'], _RemoteUser["default"]);
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
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

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Activity;
}();
/**
 * @member {String} id
 */


Activity.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Activity.prototype['remote_id'] = undefined;
/**
 * The user the performed the action.
 * @member {String} user
 */

Activity.prototype['user'] = undefined;
/**
 * When the third party's activity was created.
 * @member {Date} remote_created_at
 */

Activity.prototype['remote_created_at'] = undefined;
/**
 * The activity's type.
 * @member {module:model/ActivityTypeEnum} activity_type
 */

Activity.prototype['activity_type'] = undefined;
/**
 * The activity's subject.
 * @member {String} subject
 */

Activity.prototype['subject'] = undefined;
/**
 * The activity's body.
 * @member {String} body
 */

Activity.prototype['body'] = undefined;
/**
 * The activity's visibility.
 * @member {module:model/VisibilityEnum} visibility
 */

Activity.prototype['visibility'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Activity.prototype['remote_data'] = undefined;
var _default = Activity;
exports["default"] = _default;