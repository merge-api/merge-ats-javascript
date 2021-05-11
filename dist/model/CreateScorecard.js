"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OverallRecommendationEnum = _interopRequireDefault(require("./OverallRecommendationEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateScorecard model module.
 * @module model/CreateScorecard
 * @version 1.0
 */
var CreateScorecard = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateScorecard</code>.
   * # The Scorecard Object ### Description The &#x60;Scorecard&#x60; object is used to represent a Scorecard for an interview
   * @alias module:model/CreateScorecard
   */
  function CreateScorecard() {
    _classCallCheck(this, CreateScorecard);

    CreateScorecard.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateScorecard, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateScorecard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateScorecard} obj Optional instance to populate.
     * @return {module:model/CreateScorecard} The populated <code>CreateScorecard</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateScorecard();

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], 'String');
        }

        if (data.hasOwnProperty('interview')) {
          obj['interview'] = _ApiClient["default"].convertToType(data['interview'], 'String');
        }

        if (data.hasOwnProperty('interviewer')) {
          obj['interviewer'] = _ApiClient["default"].convertToType(data['interviewer'], 'String');
        }

        if (data.hasOwnProperty('submitted_at')) {
          obj['submitted_at'] = _ApiClient["default"].convertToType(data['submitted_at'], 'Date');
        }

        if (data.hasOwnProperty('overall_recommendation')) {
          obj['overall_recommendation'] = _ApiClient["default"].convertToType(data['overall_recommendation'], _OverallRecommendationEnum["default"]);
        }
      }

      return obj;
    }
  }]);

  return CreateScorecard;
}();
/**
 * The application being scored.
 * @member {String} application
 */


CreateScorecard.prototype['application'] = undefined;
/**
 * The interview being scored.
 * @member {String} interview
 */

CreateScorecard.prototype['interview'] = undefined;
/**
 * The interviewer doing the scoring.
 * @member {String} interviewer
 */

CreateScorecard.prototype['interviewer'] = undefined;
/**
 * When the scorecard was submitted.
 * @member {Date} submitted_at
 */

CreateScorecard.prototype['submitted_at'] = undefined;
/**
 * The inteviewer's recommendation.
 * @member {module:model/OverallRecommendationEnum} overall_recommendation
 */

CreateScorecard.prototype['overall_recommendation'] = undefined;
var _default = CreateScorecard;
exports["default"] = _default;