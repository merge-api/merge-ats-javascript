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
 * The DataPassthroughRequest model module.
 * @module model/DataPassthroughRequest
 * @version 1.0
 */
var DataPassthroughRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DataPassthroughRequest</code>.
   * # The DataPassthrough Object ### Description The &#x60;DataPassthrough&#x60; object is used to send information to an otherwise-unsupported third-party endpoint.  ### Usage Example Create a &#x60;DataPassthrough&#x60; to get team hierarchies from your Rippling integration.
   * @alias module:model/DataPassthroughRequest
   * @param method {module:model/MethodEnum} 
   * @param path {String} 
   */
  function DataPassthroughRequest(method, path) {
    _classCallCheck(this, DataPassthroughRequest);

    DataPassthroughRequest.initialize(this, method, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DataPassthroughRequest, null, [{
    key: "initialize",
    value: function initialize(obj, method, path) {
      obj['method'] = method;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>DataPassthroughRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataPassthroughRequest} obj Optional instance to populate.
     * @return {module:model/DataPassthroughRequest} The populated <code>DataPassthroughRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DataPassthroughRequest();

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], _MethodEnum["default"]);
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('base_url_override')) {
          obj['base_url_override'] = _ApiClient["default"].convertToType(data['base_url_override'], 'String');
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

  return DataPassthroughRequest;
}();
/**
 * @member {module:model/MethodEnum} method
 */


DataPassthroughRequest.prototype['method'] = undefined;
/**
 * @member {String} path
 */

DataPassthroughRequest.prototype['path'] = undefined;
/**
 * @member {String} base_url_override
 */

DataPassthroughRequest.prototype['base_url_override'] = undefined;
/**
 * @member {Object.<String, Object>} data
 */

DataPassthroughRequest.prototype['data'] = undefined;
/**
 * @member {Object.<String, Object>} headers
 */

DataPassthroughRequest.prototype['headers'] = undefined;
var _default = DataPassthroughRequest;
exports["default"] = _default;