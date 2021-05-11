"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Utils = _interopRequireDefault(require("../Utils"));

var _EmailAddressRequest = _interopRequireDefault(require("./EmailAddressRequest"));

var _PhoneNumberRequest = _interopRequireDefault(require("./PhoneNumberRequest"));

var _UrlRequest = _interopRequireDefault(require("./UrlRequest"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _ApplicationRequest = _interopRequireDefault(require("./ApplicationRequest"));

var _AttachmentRequest = _interopRequireDefault(require("./AttachmentRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CandidateRequest model module.
 * @module model/CandidateRequest
 * @version 1.0
 */
var CandidateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CandidateRequest</code>.
   * # The Candidate Object ### Description The &#x60;Candidate&#x60; object is used to represent a Candidate for various positions.  ### Usage Example Fetch from the &#x60;LIST Candidates&#x60; endpoint and filter by &#x60;ID&#x60; to show all candidates.
   * @alias module:model/CandidateRequest
   */
  function CandidateRequest() {
    _classCallCheck(this, CandidateRequest);

    CandidateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CandidateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CandidateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandidateRequest} obj Optional instance to populate.
     * @return {module:model/CandidateRequest} The populated <code>CandidateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CandidateRequest();

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
          obj['phone_numbers'] = (0, _Utils["default"])(data['phone_numbers'], _PhoneNumberRequest["default"], true);
        }

        if (data.hasOwnProperty('email_addresses')) {
          obj['email_addresses'] = (0, _Utils["default"])(data['email_addresses'], _EmailAddressRequest["default"], true);
        }

        if (data.hasOwnProperty('urls')) {
          obj['urls'] = (0, _Utils["default"])(data['urls'], _UrlRequest["default"], true);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = (0, _Utils["default"])(data['tags'], _Tag["default"], true);
        }

        if (data.hasOwnProperty('applications')) {
          obj['applications'] = (0, _Utils["default"])(data['applications'], _ApplicationRequest["default"], true);
        }

        if (data.hasOwnProperty('attachments')) {
          obj['attachments'] = (0, _Utils["default"])(data['attachments'], _AttachmentRequest["default"], true);
        }
      }

      return obj;
    }
  }]);

  return CandidateRequest;
}();
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */


CandidateRequest.prototype['remote_id'] = undefined;
/**
 * The candidate's first name.
 * @member {String} first_name
 */

CandidateRequest.prototype['first_name'] = undefined;
/**
 * The candidate's last name.
 * @member {String} last_name
 */

CandidateRequest.prototype['last_name'] = undefined;
/**
 * The candidate's current company.
 * @member {String} company
 */

CandidateRequest.prototype['company'] = undefined;
/**
 * The candidate's current title.
 * @member {String} title
 */

CandidateRequest.prototype['title'] = undefined;
/**
 * When the third party's candidate was created.
 * @member {Date} remote_created_at
 */

CandidateRequest.prototype['remote_created_at'] = undefined;
/**
 * When the third party's candidate was updated.
 * @member {Date} remote_updated_at
 */

CandidateRequest.prototype['remote_updated_at'] = undefined;
/**
 * When the most recent candidate interaction occurred.
 * @member {Date} last_interaction_at
 */

CandidateRequest.prototype['last_interaction_at'] = undefined;
/**
 * Whether or not the candidate is private.
 * @member {Boolean} is_private
 */

CandidateRequest.prototype['is_private'] = undefined;
/**
 * Whether or not the candidate can be emailed.
 * @member {Boolean} can_email
 */

CandidateRequest.prototype['can_email'] = undefined;
/**
 * The candidate's locations.
 * @member {Array.<String>} locations
 */

CandidateRequest.prototype['locations'] = undefined;
/**
 * @member {Array.<module:model/PhoneNumberRequest>} phone_numbers
 */

CandidateRequest.prototype['phone_numbers'] = undefined;
/**
 * @member {Array.<module:model/EmailAddressRequest>} email_addresses
 */

CandidateRequest.prototype['email_addresses'] = undefined;
/**
 * @member {Array.<module:model/UrlRequest>} urls
 */

CandidateRequest.prototype['urls'] = undefined;
/**
 * @member {Array.<String>} tags
 */

CandidateRequest.prototype['tags'] = undefined;
/**
 * @member {Array.<String>} applications
 */

CandidateRequest.prototype['applications'] = undefined;
/**
 * @member {Array.<String>} attachments
 */

CandidateRequest.prototype['attachments'] = undefined;
var _default = CandidateRequest;
exports["default"] = _default;