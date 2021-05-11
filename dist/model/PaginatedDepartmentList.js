"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Department = _interopRequireDefault(require("./Department"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedDepartmentList model module.
 * @module model/PaginatedDepartmentList
 * @version 1.0
 */
var PaginatedDepartmentList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedDepartmentList</code>.
   * @alias module:model/PaginatedDepartmentList
   */
  function PaginatedDepartmentList() {
    _classCallCheck(this, PaginatedDepartmentList);

    PaginatedDepartmentList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedDepartmentList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedDepartmentList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedDepartmentList} obj Optional instance to populate.
     * @return {module:model/PaginatedDepartmentList} The populated <code>PaginatedDepartmentList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedDepartmentList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Department["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedDepartmentList;
}();
/**
 * @member {String} next
 */


PaginatedDepartmentList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedDepartmentList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Department>} results
 */

PaginatedDepartmentList.prototype['results'] = undefined;
var _default = PaginatedDepartmentList;
exports["default"] = _default;