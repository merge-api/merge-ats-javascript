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
 * The GenerateRemoteKeyRequest model module.
 * @module model/GenerateRemoteKeyRequest
 * @version 1.0
 */
var GenerateRemoteKeyRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateRemoteKeyRequest</code>.
   * # The GenerateRemoteKey Object ### Description The &#x60;GenerateRemoteKey&#x60; object is used to represent a request for a new remote key.  ### Usage Example Post a &#x60;GenerateRemoteKey&#x60; to create a new remote key.
   * @alias module:model/GenerateRemoteKeyRequest
   * @param name {String} 
   */
  function GenerateRemoteKeyRequest(name) {
    _classCallCheck(this, GenerateRemoteKeyRequest);

    GenerateRemoteKeyRequest.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateRemoteKeyRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>GenerateRemoteKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateRemoteKeyRequest} obj Optional instance to populate.
     * @return {module:model/GenerateRemoteKeyRequest} The populated <code>GenerateRemoteKeyRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateRemoteKeyRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GenerateRemoteKeyRequest;
}();
/**
 * @member {String} name
 */


GenerateRemoteKeyRequest.prototype['name'] = undefined;
var _default = GenerateRemoteKeyRequest;
exports["default"] = _default;