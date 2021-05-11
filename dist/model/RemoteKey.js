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
 * The RemoteKey model module.
 * @module model/RemoteKey
 * @version 1.0
 */
var RemoteKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteKey</code>.
   * # The RemoteKey Object ### Description The &#x60;RemoteKey&#x60; object is used to represent a request for a new remote key.  ### Usage Example Post a &#x60;GenerateRemoteKey&#x60; to receive a new &#x60;RemoteKey&#x60;.
   * @alias module:model/RemoteKey
   * @param name {String} 
   * @param key {String} 
   */
  function RemoteKey(name, key) {
    _classCallCheck(this, RemoteKey);

    RemoteKey.initialize(this, name, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteKey, null, [{
    key: "initialize",
    value: function initialize(obj, name, key) {
      obj['name'] = name;
      obj['key'] = key;
    }
    /**
     * Constructs a <code>RemoteKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteKey} obj Optional instance to populate.
     * @return {module:model/RemoteKey} The populated <code>RemoteKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteKey();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RemoteKey;
}();
/**
 * @member {String} name
 */


RemoteKey.prototype['name'] = undefined;
/**
 * @member {String} key
 */

RemoteKey.prototype['key'] = undefined;
var _default = RemoteKey;
exports["default"] = _default;