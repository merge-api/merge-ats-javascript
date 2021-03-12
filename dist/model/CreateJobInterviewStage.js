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
 * The CreateJobInterviewStage model module.
 * @module model/CreateJobInterviewStage
 * @version 1.0
 */
var CreateJobInterviewStage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateJobInterviewStage</code>.
   * # The JobInterviewStage Object ### Description The &#x60;JobInterviewStage&#x60; object is used to represent the stage of an interview
   * @alias module:model/CreateJobInterviewStage
   */
  function CreateJobInterviewStage() {
    _classCallCheck(this, CreateJobInterviewStage);

    CreateJobInterviewStage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateJobInterviewStage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateJobInterviewStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateJobInterviewStage} obj Optional instance to populate.
     * @return {module:model/CreateJobInterviewStage} The populated <code>CreateJobInterviewStage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateJobInterviewStage();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('job')) {
          obj['job'] = _ApiClient["default"].convertToType(data['job'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateJobInterviewStage;
}();
/**
 * The stage's name.
 * @member {String} name
 */


CreateJobInterviewStage.prototype['name'] = undefined;
/**
 * The job that this stage belongs to.
 * @member {String} job
 */

CreateJobInterviewStage.prototype['job'] = undefined;
var _default = CreateJobInterviewStage;
exports["default"] = _default;