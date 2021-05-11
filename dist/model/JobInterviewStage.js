"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobInterviewStage model module.
 * @module model/JobInterviewStage
 * @version 1.0
 */
var JobInterviewStage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobInterviewStage</code>.
   * # The JobInterviewStage Object ### Description The &#x60;JobInterviewStage&#x60; object is used to represent the stage of an interview  ### Usage Example Fetch from the &#x60;LIST JobInterviewStages&#x60; endpoint and view the job interview stages used by a company.
   * @alias module:model/JobInterviewStage
   */
  function JobInterviewStage() {
    _classCallCheck(this, JobInterviewStage);

    JobInterviewStage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobInterviewStage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobInterviewStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobInterviewStage} obj Optional instance to populate.
     * @return {module:model/JobInterviewStage} The populated <code>JobInterviewStage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobInterviewStage();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('job')) {
          obj['job'] = _ApiClient["default"].convertToType(data['job'], 'String');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JobInterviewStage;
}();
/**
 * @member {String} id
 */


JobInterviewStage.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

JobInterviewStage.prototype['remote_id'] = undefined;
/**
 * The stage's name.
 * @member {String} name
 */

JobInterviewStage.prototype['name'] = undefined;
/**
 * If stages are specific to a job, this is the job that this stage belongs to.
 * @member {String} job
 */

JobInterviewStage.prototype['job'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

JobInterviewStage.prototype['remote_data'] = undefined;
var _default = JobInterviewStage;
exports["default"] = _default;