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
 * The Office model module.
 * @module model/Office
 * @version 1.0
 */
var Office = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Office</code>.
   * # The Office Object ### Description The &#x60;Office&#x60; object is used to represent an office within a company.  ### Usage Example Fetch from the &#x60;LIST Offices&#x60; endpoint and view the offices within a company.
   * @alias module:model/Office
   */
  function Office() {
    _classCallCheck(this, Office);

    Office.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Office, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Office</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Office} obj Optional instance to populate.
     * @return {module:model/Office} The populated <code>Office</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Office();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Office;
}();
/**
 * @member {String} id
 */


Office.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Office.prototype['remote_id'] = undefined;
/**
 * The office's name.
 * @member {String} name
 */

Office.prototype['name'] = undefined;
/**
 * The office's location.
 * @member {String} location
 */

Office.prototype['location'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Office.prototype['remote_data'] = undefined;
var _default = Office;
exports["default"] = _default;