"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Job = _interopRequireDefault(require("./Job"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedJobList model module.
 * @module model/PaginatedJobList
 * @version 1.0
 */
var PaginatedJobList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedJobList</code>.
   * @alias module:model/PaginatedJobList
   */
  function PaginatedJobList() {
    _classCallCheck(this, PaginatedJobList);

    PaginatedJobList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedJobList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedJobList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedJobList} obj Optional instance to populate.
     * @return {module:model/PaginatedJobList} The populated <code>PaginatedJobList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedJobList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Job["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedJobList;
}();
/**
 * @member {String} next
 */


PaginatedJobList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedJobList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Job>} results
 */

PaginatedJobList.prototype['results'] = undefined;
var _default = PaginatedJobList;
exports["default"] = _default;