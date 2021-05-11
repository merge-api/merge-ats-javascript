"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StatusA9fEnum = _interopRequireDefault(require("./StatusA9fEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateOffer model module.
 * @module model/CreateOffer
 * @version 1.0
 */
var CreateOffer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateOffer</code>.
   * # The Offer Object ### Description The &#x60;Offer&#x60; object is used to represent an offer for an application.
   * @alias module:model/CreateOffer
   */
  function CreateOffer() {
    _classCallCheck(this, CreateOffer);

    CreateOffer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateOffer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateOffer} obj Optional instance to populate.
     * @return {module:model/CreateOffer} The populated <code>CreateOffer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateOffer();

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], 'String');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _ApiClient["default"].convertToType(data['creator'], 'String');
        }

        if (data.hasOwnProperty('closed_at')) {
          obj['closed_at'] = _ApiClient["default"].convertToType(data['closed_at'], 'Date');
        }

        if (data.hasOwnProperty('sent_at')) {
          obj['sent_at'] = _ApiClient["default"].convertToType(data['sent_at'], 'Date');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _StatusA9fEnum["default"]);
        }
      }

      return obj;
    }
  }]);

  return CreateOffer;
}();
/**
 * The application being for the offer.
 * @member {String} application
 */


CreateOffer.prototype['application'] = undefined;
/**
 * The user who created the offer.
 * @member {String} creator
 */

CreateOffer.prototype['creator'] = undefined;
/**
 * When the offer was closed.
 * @member {Date} closed_at
 */

CreateOffer.prototype['closed_at'] = undefined;
/**
 * When the offer was sent.
 * @member {Date} sent_at
 */

CreateOffer.prototype['sent_at'] = undefined;
/**
 * The offered start date.
 * @member {Date} start_date
 */

CreateOffer.prototype['start_date'] = undefined;
/**
 * The offer's status.
 * @member {module:model/StatusA9fEnum} status
 */

CreateOffer.prototype['status'] = undefined;
var _default = CreateOffer;
exports["default"] = _default;