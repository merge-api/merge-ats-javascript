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
 * The CreateRejectReason model module.
 * @module model/CreateRejectReason
 * @version 1.0
 */
var CreateRejectReason = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateRejectReason</code>.
   * # The RejectReason Object ### Description The &#x60;RejectReason&#x60; object is used to represent a reason for rejecting an application.
   * @alias module:model/CreateRejectReason
   */
  function CreateRejectReason() {
    _classCallCheck(this, CreateRejectReason);

    CreateRejectReason.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateRejectReason, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateRejectReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRejectReason} obj Optional instance to populate.
     * @return {module:model/CreateRejectReason} The populated <code>CreateRejectReason</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRejectReason();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateRejectReason;
}();
/**
 * The rejection reason’s name.
 * @member {String} name
 */


CreateRejectReason.prototype['name'] = undefined;
var _default = CreateRejectReason;
exports["default"] = _default;