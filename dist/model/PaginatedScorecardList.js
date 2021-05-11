"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Scorecard = _interopRequireDefault(require("./Scorecard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedScorecardList model module.
 * @module model/PaginatedScorecardList
 * @version 1.0
 */
var PaginatedScorecardList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedScorecardList</code>.
   * @alias module:model/PaginatedScorecardList
   */
  function PaginatedScorecardList() {
    _classCallCheck(this, PaginatedScorecardList);

    PaginatedScorecardList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedScorecardList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedScorecardList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedScorecardList} obj Optional instance to populate.
     * @return {module:model/PaginatedScorecardList} The populated <code>PaginatedScorecardList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedScorecardList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Scorecard["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedScorecardList;
}();
/**
 * @member {String} next
 */


PaginatedScorecardList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedScorecardList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Scorecard>} results
 */

PaginatedScorecardList.prototype['results'] = undefined;
var _default = PaginatedScorecardList;
exports["default"] = _default;