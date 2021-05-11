"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DisabilityStatusEnum = _interopRequireDefault(require("./DisabilityStatusEnum"));

var _GenderEnum = _interopRequireDefault(require("./GenderEnum"));

var _RaceEnum = _interopRequireDefault(require("./RaceEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _VeteranStatusEnum = _interopRequireDefault(require("./VeteranStatusEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EEOC model module.
 * @module model/EEOC
 * @version 1.0
 */
var EEOC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EEOC</code>.
   * # The EEOC Object ### Description The &#x60;EEOC&#x60; object is used to represent the Equal Employment Opportunity Commission information for a candidate.  ### Usage Example Fetch from the &#x60;LIST EEOCs&#x60; endpoint and filter by &#x60;candidate&#x60; to show all EEOC information for a candidate.
   * @alias module:model/EEOC
   */
  function EEOC() {
    _classCallCheck(this, EEOC);

    EEOC.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EEOC, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EEOC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EEOC} obj Optional instance to populate.
     * @return {module:model/EEOC} The populated <code>EEOC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EEOC();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('candidate')) {
          obj['candidate'] = _ApiClient["default"].convertToType(data['candidate'], 'String');
        }

        if (data.hasOwnProperty('submitted_at')) {
          obj['submitted_at'] = _ApiClient["default"].convertToType(data['submitted_at'], 'Date');
        }

        if (data.hasOwnProperty('race')) {
          obj['race'] = _ApiClient["default"].convertToType(data['race'], _RaceEnum["default"]);
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], _GenderEnum["default"]);
        }

        if (data.hasOwnProperty('veteran_status')) {
          obj['veteran_status'] = _ApiClient["default"].convertToType(data['veteran_status'], _VeteranStatusEnum["default"]);
        }

        if (data.hasOwnProperty('disability_status')) {
          obj['disability_status'] = _ApiClient["default"].convertToType(data['disability_status'], _DisabilityStatusEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EEOC;
}();
/**
 * @member {String} id
 */


EEOC.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

EEOC.prototype['remote_id'] = undefined;
/**
 * The candidate being represented.
 * @member {String} candidate
 */

EEOC.prototype['candidate'] = undefined;
/**
 * When the information was submitted.
 * @member {Date} submitted_at
 */

EEOC.prototype['submitted_at'] = undefined;
/**
 * The candidate's race.
 * @member {module:model/RaceEnum} race
 */

EEOC.prototype['race'] = undefined;
/**
 * The candidate's gender.
 * @member {module:model/GenderEnum} gender
 */

EEOC.prototype['gender'] = undefined;
/**
 * The candidate's veteran status.
 * @member {module:model/VeteranStatusEnum} veteran_status
 */

EEOC.prototype['veteran_status'] = undefined;
/**
 * The candidate's disability status.
 * @member {module:model/DisabilityStatusEnum} disability_status
 */

EEOC.prototype['disability_status'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

EEOC.prototype['remote_data'] = undefined;
var _default = EEOC;
exports["default"] = _default;