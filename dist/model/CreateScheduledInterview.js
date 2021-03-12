"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Status007Enum = _interopRequireDefault(require("./Status007Enum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateScheduledInterview model module.
 * @module model/CreateScheduledInterview
 * @version 1.0
 */
var CreateScheduledInterview = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateScheduledInterview</code>.
   * # The ScheduledInterview Object ### Description The &#x60;ScheduledInterview&#x60; object is used to represent an interview
   * @alias module:model/CreateScheduledInterview
   */
  function CreateScheduledInterview() {
    _classCallCheck(this, CreateScheduledInterview);

    CreateScheduledInterview.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateScheduledInterview, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateScheduledInterview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateScheduledInterview} obj Optional instance to populate.
     * @return {module:model/CreateScheduledInterview} The populated <code>CreateScheduledInterview</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateScheduledInterview();

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

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _Status007Enum["default"]);
        }

        if (data.hasOwnProperty('remote_user_id')) {
          obj['remote_user_id'] = _ApiClient["default"].convertToType(data['remote_user_id'], 'String');
        }

        if (data.hasOwnProperty('panel_id')) {
          obj['panel_id'] = _ApiClient["default"].convertToType(data['panel_id'], 'String');
        }

        if (data.hasOwnProperty('company_id')) {
          obj['company_id'] = _ApiClient["default"].convertToType(data['company_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateScheduledInterview;
}();
/**
 * The application being interviewed.
 * @member {String} application
 */


CreateScheduledInterview.prototype['application'] = undefined;
/**
 * The stage of the interview.
 * @member {String} job_interview_stage
 */

CreateScheduledInterview.prototype['job_interview_stage'] = undefined;
/**
 * The user organizing the interview.
 * @member {String} organizer
 */

CreateScheduledInterview.prototype['organizer'] = undefined;
/**
 * @member {Array.<String>} interviewers
 */

CreateScheduledInterview.prototype['interviewers'] = undefined;
/**
 * The interview's location.
 * @member {String} location
 */

CreateScheduledInterview.prototype['location'] = undefined;
/**
 * When the interview was started.
 * @member {Date} start_at
 */

CreateScheduledInterview.prototype['start_at'] = undefined;
/**
 * When the interview was ended.
 * @member {Date} end_at
 */

CreateScheduledInterview.prototype['end_at'] = undefined;
/**
 * The interview's status.
 * @member {module:model/Status007Enum} status
 */

CreateScheduledInterview.prototype['status'] = undefined;
/**
 * @member {String} remote_user_id
 */

CreateScheduledInterview.prototype['remote_user_id'] = undefined;
/**
 * @member {String} panel_id
 */

CreateScheduledInterview.prototype['panel_id'] = undefined;
/**
 * @member {String} company_id
 */

CreateScheduledInterview.prototype['company_id'] = undefined;
var _default = CreateScheduledInterview;
exports["default"] = _default;