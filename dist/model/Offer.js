"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _StatusA9fEnum = _interopRequireDefault(require("./StatusA9fEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Offer model module.
 * @module model/Offer
 * @version 1.0
 */
var Offer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Offer</code>.
   * # The Offer Object ### Description The &#x60;Offer&#x60; object is used to represent an offer for an application.  ### Usage Example Fetch from the &#x60;LIST Offers&#x60; endpoint and filter by &#x60;ID&#x60; to show all offers.
   * @alias module:model/Offer
   */
  function Offer() {
    _classCallCheck(this, Offer);

    Offer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Offer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Offer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Offer} obj Optional instance to populate.
     * @return {module:model/Offer} The populated <code>Offer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Offer();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('application')) {
          obj['application'] = _ApiClient["default"].convertToType(data['application'], 'String');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _ApiClient["default"].convertToType(data['creator'], 'String');
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
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

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Offer;
}();
/**
 * @member {String} id
 */


Offer.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Offer.prototype['remote_id'] = undefined;
/**
 * The application being for the offer.
 * @member {String} application
 */

Offer.prototype['application'] = undefined;
/**
 * The user who created the offer.
 * @member {String} creator
 */

Offer.prototype['creator'] = undefined;
/**
 * When the third party's scorecard was created.
 * @member {Date} remote_created_at
 */

Offer.prototype['remote_created_at'] = undefined;
/**
 * When the offer was closed.
 * @member {Date} closed_at
 */

Offer.prototype['closed_at'] = undefined;
/**
 * When the offer was sent.
 * @member {Date} sent_at
 */

Offer.prototype['sent_at'] = undefined;
/**
 * The offered start date.
 * @member {Date} start_date
 */

Offer.prototype['start_date'] = undefined;
/**
 * The offer's status.
 * @member {module:model/StatusA9fEnum} status
 */

Offer.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Offer.prototype['remote_data'] = undefined;
var _default = Offer;
exports["default"] = _default;