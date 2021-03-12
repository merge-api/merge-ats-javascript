"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Status757Enum = _interopRequireDefault(require("./Status757Enum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateJob model module.
 * @module model/CreateJob
 * @version 1.0
 */
var CreateJob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateJob</code>.
   * # The Job Object ### Description The &#x60;Job&#x60; object is used to represent a Location offering at a company.
   * @alias module:model/CreateJob
   */
  function CreateJob() {
    _classCallCheck(this, CreateJob);

    CreateJob.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateJob, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateJob} obj Optional instance to populate.
     * @return {module:model/CreateJob} The populated <code>CreateJob</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateJob();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _Status757Enum["default"]);
        }

        if (data.hasOwnProperty('confidential')) {
          obj['confidential'] = _ApiClient["default"].convertToType(data['confidential'], 'Boolean');
        }

        if (data.hasOwnProperty('departments')) {
          obj['departments'] = _ApiClient["default"].convertToType(data['departments'], ['String']);
        }

        if (data.hasOwnProperty('offices')) {
          obj['offices'] = _ApiClient["default"].convertToType(data['offices'], ['String']);
        }

        if (data.hasOwnProperty('hiring_managers')) {
          obj['hiring_managers'] = _ApiClient["default"].convertToType(data['hiring_managers'], ['String']);
        }

        if (data.hasOwnProperty('remote_user_id')) {
          obj['remote_user_id'] = _ApiClient["default"].convertToType(data['remote_user_id'], 'String');
        }

        if (data.hasOwnProperty('number_of_openings')) {
          obj['number_of_openings'] = _ApiClient["default"].convertToType(data['number_of_openings'], 'Number');
        }

        if (data.hasOwnProperty('template_job_id')) {
          obj['template_job_id'] = _ApiClient["default"].convertToType(data['template_job_id'], 'String');
        }

        if (data.hasOwnProperty('team_name')) {
          obj['team_name'] = _ApiClient["default"].convertToType(data['team_name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('company_id')) {
          obj['company_id'] = _ApiClient["default"].convertToType(data['company_id'], 'String');
        }

        if (data.hasOwnProperty('workflow_id')) {
          obj['workflow_id'] = _ApiClient["default"].convertToType(data['workflow_id'], 'String');
        }

        if (data.hasOwnProperty('requirements')) {
          obj['requirements'] = _ApiClient["default"].convertToType(data['requirements'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('state_code')) {
          obj['state_code'] = _ApiClient["default"].convertToType(data['state_code'], 'String');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateJob;
}();
/**
 * The job's name.
 * @member {String} name
 */


CreateJob.prototype['name'] = undefined;
/**
 * The job's description.
 * @member {String} description
 */

CreateJob.prototype['description'] = undefined;
/**
 * The job's status.
 * @member {module:model/Status757Enum} status
 */

CreateJob.prototype['status'] = undefined;
/**
 * Whether the job is confidential.
 * @member {Boolean} confidential
 */

CreateJob.prototype['confidential'] = undefined;
/**
 * @member {Array.<String>} departments
 */

CreateJob.prototype['departments'] = undefined;
/**
 * @member {Array.<String>} offices
 */

CreateJob.prototype['offices'] = undefined;
/**
 * @member {Array.<String>} hiring_managers
 */

CreateJob.prototype['hiring_managers'] = undefined;
/**
 * @member {String} remote_user_id
 */

CreateJob.prototype['remote_user_id'] = undefined;
/**
 * @member {Number} number_of_openings
 */

CreateJob.prototype['number_of_openings'] = undefined;
/**
 * @member {String} template_job_id
 */

CreateJob.prototype['template_job_id'] = undefined;
/**
 * @member {String} team_name
 */

CreateJob.prototype['team_name'] = undefined;
/**
 * @member {String} type
 */

CreateJob.prototype['type'] = undefined;
/**
 * @member {String} company_id
 */

CreateJob.prototype['company_id'] = undefined;
/**
 * @member {String} workflow_id
 */

CreateJob.prototype['workflow_id'] = undefined;
/**
 * @member {String} requirements
 */

CreateJob.prototype['requirements'] = undefined;
/**
 * @member {String} postal_code
 */

CreateJob.prototype['postal_code'] = undefined;
/**
 * @member {String} city
 */

CreateJob.prototype['city'] = undefined;
/**
 * @member {String} state_code
 */

CreateJob.prototype['state_code'] = undefined;
/**
 * @member {String} country_code
 */

CreateJob.prototype['country_code'] = undefined;
var _default = CreateJob;
exports["default"] = _default;