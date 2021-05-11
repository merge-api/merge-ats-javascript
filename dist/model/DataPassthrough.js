"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MethodEnum = _interopRequireDefault(require("./MethodEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DataPassthrough model module.
 * @module model/DataPassthrough
 * @version 1.0
 */
var DataPassthrough = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DataPassthrough</code>.
   * # The DataPassthrough Object ### Description The &#x60;DataPassthrough&#x60; object is used to send information to an otherwise-unsupported third-party endpoint.  ### Usage Example Create a &#x60;DataPassthrough&#x60; to get team hierarchies from your Rippling integration.
   * @alias module:model/DataPassthrough
   * @param method {module:model/MethodEnum} 
   * @param path {String} 
   */
  function DataPassthrough(method, path) {
    _classCallCheck(this, DataPassthrough);

    DataPassthrough.initialize(this, method, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DataPassthrough, null, [{
    key: "initialize",
    value: function initialize(obj, method, path) {
      obj['method'] = method;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>DataPassthrough</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataPassthrough} obj Optional instance to populate.
     * @return {module:model/DataPassthrough} The populated <code>DataPassthrough</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DataPassthrough();

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], _MethodEnum["default"]);
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], {
            'String': Object
          });
        }
      }

      return obj;
    }
  }]);

  return DataPassthrough;
}();
/**
 * @member {module:model/MethodEnum} method
 */


DataPassthrough.prototype['method'] = undefined;
/**
 * @member {String} path
 */

DataPassthrough.prototype['path'] = undefined;
/**
 * @member {Object.<String, Object>} data
 */

DataPassthrough.prototype['data'] = undefined;
/**
 * @member {Object.<String, Object>} headers
 */

DataPassthrough.prototype['headers'] = undefined;
var _default = DataPassthrough;
exports["default"] = _default;