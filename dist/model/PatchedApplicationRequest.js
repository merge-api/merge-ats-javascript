"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PatchedApplicationRequest model module.
 * @module model/PatchedApplicationRequest
 * @version 1.0
 */
var PatchedApplicationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchedApplicationRequest</code>.
   * # The Application Object ### Description The &#x60;Application&#x60; object is used to represent an Application for a job position.  ### Usage Example Fetch from the &#x60;LIST Applications&#x60; endpoint and filter by &#x60;ID&#x60; to show all applications.
   * @alias module:model/PatchedApplicationRequest
   */
  function PatchedApplicationRequest() {
    _classCallCheck(this, PatchedApplicationRequest);

    PatchedApplicationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchedApplicationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchedApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedApplicationRequest} obj Optional instance to populate.
     * @return {module:model/PatchedApplicationRequest} The populated <code>PatchedApplicationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchedApplicationRequest();

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('candidate')) {
          obj['candidate'] = _ApiClient["default"].convertToType(data['candidate'], 'String');
        }

        if (data.hasOwnProperty('job')) {
          obj['job'] = _ApiClient["default"].convertToType(data['job'], 'String');
        }

        if (data.hasOwnProperty('applied_at')) {
          obj['applied_at'] = _ApiClient["default"].convertToType(data['applied_at'], 'Date');
        }

        if (data.hasOwnProperty('rejected_at')) {
          obj['rejected_at'] = _ApiClient["default"].convertToType(data['rejected_at'], 'Date');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('credited_to')) {
          obj['credited_to'] = _ApiClient["default"].convertToType(data['credited_to'], 'String');
        }

        if (data.hasOwnProperty('current_stage')) {
          obj['current_stage'] = _ApiClient["default"].convertToType(data['current_stage'], 'String');
        }

        if (data.hasOwnProperty('reject_reason')) {
          obj['reject_reason'] = _ApiClient["default"].convertToType(data['reject_reason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PatchedApplicationRequest;
}();
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */


PatchedApplicationRequest.prototype['remote_id'] = undefined;
/**
 * The candidate applying.
 * @member {String} candidate
 */

PatchedApplicationRequest.prototype['candidate'] = undefined;
/**
 * The job being applied for.
 * @member {String} job
 */

PatchedApplicationRequest.prototype['job'] = undefined;
/**
 * When the application was submitted.
 * @member {Date} applied_at
 */

PatchedApplicationRequest.prototype['applied_at'] = undefined;
/**
 * When the application was rejected.
 * @member {Date} rejected_at
 */

PatchedApplicationRequest.prototype['rejected_at'] = undefined;
/**
 * The application's source.
 * @member {String} source
 */

PatchedApplicationRequest.prototype['source'] = undefined;
/**
 * The user credited for this application.
 * @member {String} credited_to
 */

PatchedApplicationRequest.prototype['credited_to'] = undefined;
/**
 * The application's current stage.
 * @member {String} current_stage
 */

PatchedApplicationRequest.prototype['current_stage'] = undefined;
/**
 * The application's reason for rejection.
 * @member {String} reject_reason
 */

PatchedApplicationRequest.prototype['reject_reason'] = undefined;
var _default = PatchedApplicationRequest;
exports["default"] = _default;