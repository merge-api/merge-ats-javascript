"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailAddress = _interopRequireDefault(require("./EmailAddress"));

var _PhoneNumber = _interopRequireDefault(require("./PhoneNumber"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _Url = _interopRequireDefault(require("./Url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Candidate model module.
 * @module model/Candidate
 * @version 1.0
 */
var Candidate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Candidate</code>.
   * # The Candidate Object ### Description The &#x60;Candidate&#x60; object is used to represent a Candidate for various positions.  ### Usage Example Fetch from the &#x60;LIST Candidates&#x60; endpoint and filter by &#x60;ID&#x60; to show all candidates.
   * @alias module:model/Candidate
   */
  function Candidate() {
    _classCallCheck(this, Candidate);

    Candidate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Candidate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Candidate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Candidate} obj Optional instance to populate.
     * @return {module:model/Candidate} The populated <code>Candidate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Candidate();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
        }

        if (data.hasOwnProperty('remote_updated_at')) {
          obj['remote_updated_at'] = _ApiClient["default"].convertToType(data['remote_updated_at'], 'Date');
        }

        if (data.hasOwnProperty('last_interaction_at')) {
          obj['last_interaction_at'] = _ApiClient["default"].convertToType(data['last_interaction_at'], 'Date');
        }

        if (data.hasOwnProperty('is_private')) {
          obj['is_private'] = _ApiClient["default"].convertToType(data['is_private'], 'Boolean');
        }

        if (data.hasOwnProperty('can_email')) {
          obj['can_email'] = _ApiClient["default"].convertToType(data['can_email'], 'Boolean');
        }

        if (data.hasOwnProperty('locations')) {
          obj['locations'] = _ApiClient["default"].convertToType(data['locations'], ['String']);
        }

        if (data.hasOwnProperty('phone_numbers')) {
          obj['phone_numbers'] = _ApiClient["default"].convertToType(data['phone_numbers'], [_PhoneNumber["default"]]);
        }

        if (data.hasOwnProperty('email_addresses')) {
          obj['email_addresses'] = _ApiClient["default"].convertToType(data['email_addresses'], [_EmailAddress["default"]]);
        }

        if (data.hasOwnProperty('urls')) {
          obj['urls'] = _ApiClient["default"].convertToType(data['urls'], [_Url["default"]]);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('applications')) {
          obj['applications'] = _ApiClient["default"].convertToType(data['applications'], ['String']);
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = _ApiClient["default"].convertToType(data['attachments'], ['String']);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Candidate;
}();
/**
 * @member {String} id
 */


Candidate.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Candidate.prototype['remote_id'] = undefined;
/**
 * The candidate's first name.
 * @member {String} first_name
 */

Candidate.prototype['first_name'] = undefined;
/**
 * The candidate's last name.
 * @member {String} last_name
 */

Candidate.prototype['last_name'] = undefined;
/**
 * The candidate's current company.
 * @member {String} company
 */

Candidate.prototype['company'] = undefined;
/**
 * The candidate's current title.
 * @member {String} title
 */

Candidate.prototype['title'] = undefined;
/**
 * When the third party's candidate was created.
 * @member {Date} remote_created_at
 */

Candidate.prototype['remote_created_at'] = undefined;
/**
 * When the third party's candidate was updated.
 * @member {Date} remote_updated_at
 */

Candidate.prototype['remote_updated_at'] = undefined;
/**
 * When the most recent candidate interaction occurred.
 * @member {Date} last_interaction_at
 */

Candidate.prototype['last_interaction_at'] = undefined;
/**
 * Whether or not the candidate is private.
 * @member {Boolean} is_private
 */

Candidate.prototype['is_private'] = undefined;
/**
 * Whether or not the candidate can be emailed.
 * @member {Boolean} can_email
 */

Candidate.prototype['can_email'] = undefined;
/**
 * The candidate's locations.
 * @member {Array.<String>} locations
 */

Candidate.prototype['locations'] = undefined;
/**
 * @member {Array.<module:model/PhoneNumber>} phone_numbers
 */

Candidate.prototype['phone_numbers'] = undefined;
/**
 * @member {Array.<module:model/EmailAddress>} email_addresses
 */

Candidate.prototype['email_addresses'] = undefined;
/**
 * @member {Array.<module:model/Url>} urls
 */

Candidate.prototype['urls'] = undefined;
/**
 * @member {Array.<String>} tags
 */

Candidate.prototype['tags'] = undefined;
/**
 * @member {Array.<String>} applications
 */

Candidate.prototype['applications'] = undefined;
/**
 * @member {Array.<String>} attachments
 */

Candidate.prototype['attachments'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Candidate.prototype['remote_data'] = undefined;
var _default = Candidate;
exports["default"] = _default;