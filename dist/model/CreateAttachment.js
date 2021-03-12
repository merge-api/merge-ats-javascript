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
 * The CreateAttachment model module.
 * @module model/CreateAttachment
 * @version 1.0
 */
var CreateAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAttachment</code>.
   * # The Attachment Object ### Description The &#x60;Attachment&#x60; object is used to represent a attachment for a candidate.
   * @alias module:model/CreateAttachment
   */
  function CreateAttachment() {
    _classCallCheck(this, CreateAttachment);

    CreateAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAttachment} obj Optional instance to populate.
     * @return {module:model/CreateAttachment} The populated <code>CreateAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAttachment();

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('file_url')) {
          obj['file_url'] = _ApiClient["default"].convertToType(data['file_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateAttachment;
}();
/**
 * The attachment's name.
 * @member {String} file_name
 */


CreateAttachment.prototype['file_name'] = undefined;
/**
 * The attachment's url.
 * @member {String} file_url
 */

CreateAttachment.prototype['file_url'] = undefined;
var _default = CreateAttachment;
exports["default"] = _default;