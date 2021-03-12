"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OverallRecommendationEnum = _interopRequireDefault(require("./OverallRecommendationEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Scorecard model module.
 * @module model/Scorecard
 * @version 1.0
 */
var Scorecard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scorecard</code>.
   * # The Scorecard Object ### Description The &#x60;Scorecard&#x60; object is used to represent a Scorecard for an interview  ### Usage Example Fetch from the &#x60;LIST Scorecard&#x60; endpoint and filter by &#x60;application&#x60; to show all scorecard for an applicant.
   * @alias module:model/Scorecard
   */
  function Scorecard() {
    _classCallCheck(this, Scorecard);

    Scorecard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Scorecard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Scorecard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scorecard} obj Optional instance to populate.
     * @return {module:model/Scorecard} The populated <code>Scorecard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scorecard();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], 'String');
        }

        if (data.hasOwnProperty('interview')) {
          obj['interview'] = _ApiClient["default"].convertToType(data['interview'], 'String');
        }

        if (data.hasOwnProperty('interviewer')) {
          obj['interviewer'] = _ApiClient["default"].convertToType(data['interviewer'], 'String');
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
        }

        if (data.hasOwnProperty('submitted_at')) {
          obj['submitted_at'] = _ApiClient["default"].convertToType(data['submitted_at'], 'Date');
        }

        if (data.hasOwnProperty('overall_recommendation')) {
          obj['overall_recommendation'] = _ApiClient["default"].convertToType(data['overall_recommendation'], _OverallRecommendationEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Scorecard;
}();
/**
 * @member {String} id
 */


Scorecard.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Scorecard.prototype['remote_id'] = undefined;
/**
 * The application being scored.
 * @member {String} application
 */

Scorecard.prototype['application'] = undefined;
/**
 * The interview being scored.
 * @member {String} interview
 */

Scorecard.prototype['interview'] = undefined;
/**
 * The interviewer doing the scoring.
 * @member {String} interviewer
 */

Scorecard.prototype['interviewer'] = undefined;
/**
 * When the third party's scorecard was created.
 * @member {Date} remote_created_at
 */

Scorecard.prototype['remote_created_at'] = undefined;
/**
 * When the scorecard was submitted.
 * @member {Date} submitted_at
 */

Scorecard.prototype['submitted_at'] = undefined;
/**
 * The inteviewer's recommendation.
 * @member {module:model/OverallRecommendationEnum} overall_recommendation
 */

Scorecard.prototype['overall_recommendation'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Scorecard.prototype['remote_data'] = undefined;
var _default = Scorecard;
exports["default"] = _default;