"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UrlTypeEnum = _interopRequireDefault(require("./UrlTypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UrlRequest model module.
 * @module model/UrlRequest
 * @version 1.0
 */
var UrlRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UrlRequest</code>.
   * # The Url Object ### Description The &#x60;Url&#x60; object is used to represent a candidate&#39;s website.  ### Usage Example Fetch from the &#x60;GET Candidate&#x60; endpoint and view their website urls.
   * @alias module:model/UrlRequest
   */
  function UrlRequest() {
    _classCallCheck(this, UrlRequest);

    UrlRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UrlRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UrlRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UrlRequest} obj Optional instance to populate.
     * @return {module:model/UrlRequest} The populated <code>UrlRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UrlRequest();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('url_type')) {
          obj['url_type'] = _ApiClient["default"].convertToType(data['url_type'], _UrlTypeEnum["default"]);
        }
      }

      return obj;
    }
  }]);

  return UrlRequest;
}();
/**
 * The site's url.
 * @member {String} value
 */


UrlRequest.prototype['value'] = undefined;
/**
 * The type of site.
 * @member {module:model/UrlTypeEnum} url_type
 */

UrlRequest.prototype['url_type'] = undefined;
var _default = UrlRequest;
exports["default"] = _default;