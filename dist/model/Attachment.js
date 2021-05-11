"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Utils = _interopRequireDefault(require("../Utils"));

var _AttachmentTypeEnum = _interopRequireDefault(require("./AttachmentTypeEnum"));

var _Candidate = _interopRequireDefault(require("./Candidate"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Attachment model module.
 * @module model/Attachment
 * @version 1.0
 */
var Attachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Attachment</code>.
   * # The Attachment Object ### Description The &#x60;Attachment&#x60; object is used to represent a attachment for a candidate.  ### Usage Example Fetch from the &#x60;LIST Attachments&#x60; endpoint and view attachments accessible by a company.
   * @alias module:model/Attachment
   */
  function Attachment() {
    _classCallCheck(this, Attachment);

    Attachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Attachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attachment} obj Optional instance to populate.
     * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Attachment();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('file_url')) {
          obj['file_url'] = _ApiClient["default"].convertToType(data['file_url'], 'String');
        }

        if (data.hasOwnProperty('candidate')) {
          obj['candidate'] = (0, _Utils["default"])(data['candidate'], _Candidate["default"]);
        }

        if (data.hasOwnProperty('attachment_type')) {
          obj['attachment_type'] = _ApiClient["default"].convertToType(data['attachment_type'], _AttachmentTypeEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Attachment;
}();
/**
 * @member {String} id
 */


Attachment.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Attachment.prototype['remote_id'] = undefined;
/**
 * The attachment's name.
 * @member {String} file_name
 */

Attachment.prototype['file_name'] = undefined;
/**
 * The attachment's url.
 * @member {String} file_url
 */

Attachment.prototype['file_url'] = undefined;
/**
 * @member {String} candidate
 */

Attachment.prototype['candidate'] = undefined;
/**
 * The attachment's type.
 * @member {module:model/AttachmentTypeEnum} attachment_type
 */

Attachment.prototype['attachment_type'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Attachment.prototype['remote_data'] = undefined;
var _default = Attachment;
exports["default"] = _default;