"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _Status007Enum = _interopRequireDefault(require("./Status007Enum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScheduledInterview model module.
 * @module model/ScheduledInterview
 * @version 1.0
 */
var ScheduledInterview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ScheduledInterview</code>.
   * # The ScheduledInterview Object ### Description The &#x60;ScheduledInterview&#x60; object is used to represent an interview  ### Usage Example Fetch from the &#x60;LIST ScheduledInterviews&#x60; endpoint and filter by &#x60;interviewers&#x60; to show all office locations.
   * @alias module:model/ScheduledInterview
   */
  function ScheduledInterview() {
    _classCallCheck(this, ScheduledInterview);

    ScheduledInterview.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInterview, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInterview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInterview} obj Optional instance to populate.
     * @return {module:model/ScheduledInterview} The populated <code>ScheduledInterview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInterview();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], 'String');
        }

        if (data.hasOwnProperty('job_interview_stage')) {
          obj['job_interview_stage'] = _ApiClient["default"].convertToType(data['job_interview_stage'], 'String');
        }

        if (data.hasOwnProperty('organizer')) {
          obj['organizer'] = _ApiClient["default"].convertToType(data['organizer'], 'String');
        }

        if (data.hasOwnProperty('interviewers')) {
          obj['interviewers'] = _ApiClient["default"].convertToType(data['interviewers'], ['String']);
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('start_at')) {
          obj['start_at'] = _ApiClient["default"].convertToType(data['start_at'], 'Date');
        }

        if (data.hasOwnProperty('end_at')) {
          obj['end_at'] = _ApiClient["default"].convertToType(data['end_at'], 'Date');
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
        }

        if (data.hasOwnProperty('remote_updated_at')) {
          obj['remote_updated_at'] = _ApiClient["default"].convertToType(data['remote_updated_at'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _Status007Enum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ScheduledInterview;
}();
/**
 * @member {String} id
 */


ScheduledInterview.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

ScheduledInterview.prototype['remote_id'] = undefined;
/**
 * The application being interviewed.
 * @member {String} application
 */

ScheduledInterview.prototype['application'] = undefined;
/**
 * The stage of the interview.
 * @member {String} job_interview_stage
 */

ScheduledInterview.prototype['job_interview_stage'] = undefined;
/**
 * The user organizing the interview.
 * @member {String} organizer
 */

ScheduledInterview.prototype['organizer'] = undefined;
/**
 * @member {Array.<String>} interviewers
 */

ScheduledInterview.prototype['interviewers'] = undefined;
/**
 * The interview's location.
 * @member {String} location
 */

ScheduledInterview.prototype['location'] = undefined;
/**
 * When the interview was started.
 * @member {Date} start_at
 */

ScheduledInterview.prototype['start_at'] = undefined;
/**
 * When the interview was ended.
 * @member {Date} end_at
 */

ScheduledInterview.prototype['end_at'] = undefined;
/**
 * When the third party's interview was created.
 * @member {Date} remote_created_at
 */

ScheduledInterview.prototype['remote_created_at'] = undefined;
/**
 * When the third party's interview was updated.
 * @member {Date} remote_updated_at
 */

ScheduledInterview.prototype['remote_updated_at'] = undefined;
/**
 * The interview's status.
 * @member {module:model/Status007Enum} status
 */

ScheduledInterview.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

ScheduledInterview.prototype['remote_data'] = undefined;
var _default = ScheduledInterview;
exports["default"] = _default;