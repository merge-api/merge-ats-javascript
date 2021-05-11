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
 * The Department model module.
 * @module model/Department
 * @version 1.0
 */
var Department = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Department</code>.
   * # The Department Object ### Description The &#x60;Department&#x60; object is used to represent a department within a company.  ### Usage Example Fetch from the &#x60;LIST Departments&#x60; endpoint and view the departments within a company.
   * @alias module:model/Department
   */
  function Department() {
    _classCallCheck(this, Department);

    Department.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Department, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Department</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Department} obj Optional instance to populate.
     * @return {module:model/Department} The populated <code>Department</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Department();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Department;
}();
/**
 * @member {String} id
 */


Department.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Department.prototype['remote_id'] = undefined;
/**
 * The department's name.
 * @member {String} name
 */

Department.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Department.prototype['remote_data'] = undefined;
var _default = Department;
exports["default"] = _default;