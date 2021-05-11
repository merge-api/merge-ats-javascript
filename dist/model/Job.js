"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Utils = _interopRequireDefault(require("../Utils"));

var _JobStatusEnum = _interopRequireDefault(require("./JobStatusEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _Department = _interopRequireDefault(require("./Department"));

var _Office = _interopRequireDefault(require("./Office"));

var _RemoteUser = _interopRequireDefault(require("./RemoteUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Job model module.
 * @module model/Job
 * @version 1.0
 */
var Job = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Job</code>.
   * # The Job Object ### Description The &#x60;Job&#x60; object is used to represent a Job offering at a company.  ### Usage Example Fetch from the &#x60;LIST Jobs&#x60; endpoint to show all job postings.
   * @alias module:model/Job
   */
  function Job() {
    _classCallCheck(this, Job);

    Job.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Job, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Job} obj Optional instance to populate.
     * @return {module:model/Job} The populated <code>Job</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Job();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _JobStatusEnum["default"]);
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
        }

        if (data.hasOwnProperty('remote_updated_at')) {
          obj['remote_updated_at'] = _ApiClient["default"].convertToType(data['remote_updated_at'], 'Date');
        }

        if (data.hasOwnProperty('confidential')) {
          obj['confidential'] = _ApiClient["default"].convertToType(data['confidential'], 'Boolean');
        }

        if (data.hasOwnProperty('departments')) {
          obj['departments'] = (0, _Utils["default"])(data['departments'], _Department["default"], true);
        }

        if (data.hasOwnProperty('offices')) {
          obj['offices'] = (0, _Utils["default"])(data['offices'], _Office["default"], true);
        }

        if (data.hasOwnProperty('hiring_managers')) {
          obj['hiring_managers'] = (0, _Utils["default"])(data['hiring_managers'], _RemoteUser["default"], true);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Job;
}();
/**
 * @member {String} id
 */


Job.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Job.prototype['remote_id'] = undefined;
/**
 * The job's name.
 * @member {String} name
 */

Job.prototype['name'] = undefined;
/**
 * The job's description.
 * @member {String} description
 */

Job.prototype['description'] = undefined;
/**
 * The job's status.
 * @member {module:model/JobStatusEnum} status
 */

Job.prototype['status'] = undefined;
/**
 * When the third party's job was created.
 * @member {Date} remote_created_at
 */

Job.prototype['remote_created_at'] = undefined;
/**
 * When the third party's job was updated.
 * @member {Date} remote_updated_at
 */

Job.prototype['remote_updated_at'] = undefined;
/**
 * Whether the job is confidential.
 * @member {Boolean} confidential
 */

Job.prototype['confidential'] = undefined;
/**
 * @member {Array.<String>} departments
 */

Job.prototype['departments'] = undefined;
/**
 * @member {Array.<String>} offices
 */

Job.prototype['offices'] = undefined;
/**
 * @member {Array.<String>} hiring_managers
 */

Job.prototype['hiring_managers'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Job.prototype['remote_data'] = undefined;
var _default = Job;
exports["default"] = _default;