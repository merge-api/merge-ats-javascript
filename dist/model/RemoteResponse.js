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
 * The RemoteResponse model module.
 * @module model/RemoteResponse
 * @version 1.0
 */
var RemoteResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteResponse</code>.
   * # The RemoteResponse Object ### Description The &#x60;RemoteResponse&#x60; object is used to represent information returned from a third-party endpoint.  ### Usage Example View the &#x60;RemoteResponse&#x60; returned from your &#x60;DataPassthrough&#x60;.
   * @alias module:model/RemoteResponse
   * @param method {String} 
   * @param path {String} 
   * @param status {Number} 
   * @param response {Object.<String, Object>} 
   */
  function RemoteResponse(method, path, status, response) {
    _classCallCheck(this, RemoteResponse);

    RemoteResponse.initialize(this, method, path, status, response);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteResponse, null, [{
    key: "initialize",
    value: function initialize(obj, method, path, status, response) {
      obj['method'] = method;
      obj['path'] = path;
      obj['status'] = status;
      obj['response'] = response;
    }
    /**
     * Constructs a <code>RemoteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteResponse} obj Optional instance to populate.
     * @return {module:model/RemoteResponse} The populated <code>RemoteResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteResponse();

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], {
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

  return RemoteResponse;
}();
/**
 * @member {String} method
 */


RemoteResponse.prototype['method'] = undefined;
/**
 * @member {String} path
 */

RemoteResponse.prototype['path'] = undefined;
/**
 * @member {Number} status
 */

RemoteResponse.prototype['status'] = undefined;
/**
 * @member {Object.<String, Object>} response
 */

RemoteResponse.prototype['response'] = undefined;
/**
 * @member {Object.<String, Object>} headers
 */

RemoteResponse.prototype['headers'] = undefined;
var _default = RemoteResponse;
exports["default"] = _default;