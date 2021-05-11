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
 * The RemoteKeyForRegenerationRequest model module.
 * @module model/RemoteKeyForRegenerationRequest
 * @version 1.0
 */
var RemoteKeyForRegenerationRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteKeyForRegenerationRequest</code>.
   * # The RemoteKeyForRegeneration Object ### Description The &#x60;RemoteKeyForRegeneration&#x60; object is used to exchange an old remote key for a new one  ### Usage Example Post a &#x60;RemoteKeyForRegeneration&#x60; to swap out an old remote key for a new one
   * @alias module:model/RemoteKeyForRegenerationRequest
   * @param name {String} 
   */
  function RemoteKeyForRegenerationRequest(name) {
    _classCallCheck(this, RemoteKeyForRegenerationRequest);

    RemoteKeyForRegenerationRequest.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteKeyForRegenerationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>RemoteKeyForRegenerationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteKeyForRegenerationRequest} obj Optional instance to populate.
     * @return {module:model/RemoteKeyForRegenerationRequest} The populated <code>RemoteKeyForRegenerationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteKeyForRegenerationRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RemoteKeyForRegenerationRequest;
}();
/**
 * @member {String} name
 */


RemoteKeyForRegenerationRequest.prototype['name'] = undefined;
var _default = RemoteKeyForRegenerationRequest;
exports["default"] = _default;