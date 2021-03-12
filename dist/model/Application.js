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
 * The Application model module.
 * @module model/Application
 * @version 1.0
 */
var Application = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Application</code>.
   * # The Application Object ### Description The &#x60;Application&#x60; object is used to represent an Application for a job position.  ### Usage Example Fetch from the &#x60;LIST Applications&#x60; endpoint and filter by &#x60;ID&#x60; to show all applications.
   * @alias module:model/Application
   */
  function Application() {
    _classCallCheck(this, Application);

    Application.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Application, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Application</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Application} obj Optional instance to populate.
     * @return {module:model/Application} The populated <code>Application</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Application();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('candidate')) {
          obj['candidate'] = _ApiClient["default"].convertToType(data['candidate'], 'String');
        }

        if (data.hasOwnProperty('job')) {
          obj['job'] = _ApiClient["default"].convertToType(data['job'], 'String');
        }

        if (data.hasOwnProperty('is_prospect')) {
          obj['is_prospect'] = _ApiClient["default"].convertToType(data['is_prospect'], 'Boolean');
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

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Application;
}();
/**
 * @member {String} id
 */


Application.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Application.prototype['remote_id'] = undefined;
/**
 * The candidate applying.
 * @member {String} candidate
 */

Application.prototype['candidate'] = undefined;
/**
 * The job being applied for.
 * @member {String} job
 */

Application.prototype['job'] = undefined;
/**
 * Whether or not the application is a prospect.
 * @member {Boolean} is_prospect
 */

Application.prototype['is_prospect'] = undefined;
/**
 * When the application was submitted.
 * @member {Date} applied_at
 */

Application.prototype['applied_at'] = undefined;
/**
 * When the application was rejected.
 * @member {Date} rejected_at
 */

Application.prototype['rejected_at'] = undefined;
/**
 * The application's source.
 * @member {String} source
 */

Application.prototype['source'] = undefined;
/**
 * The user credited for this application.
 * @member {String} credited_to
 */

Application.prototype['credited_to'] = undefined;
/**
 * The application's current stage.
 * @member {String} current_stage
 */

Application.prototype['current_stage'] = undefined;
/**
 * The application's reason for rejection.
 * @member {String} reject_reason
 */

Application.prototype['reject_reason'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Application.prototype['remote_data'] = undefined;
var _default = Application;
exports["default"] = _default;