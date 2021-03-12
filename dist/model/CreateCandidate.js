"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailAddress = _interopRequireDefault(require("./EmailAddress"));

var _PhoneNumber = _interopRequireDefault(require("./PhoneNumber"));

var _Url = _interopRequireDefault(require("./Url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCandidate model module.
 * @module model/CreateCandidate
 * @version 1.0
 */
var CreateCandidate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCandidate</code>.
   * # The Candidate Object ### Description The &#x60;Candidate&#x60; object is used to represent a Candidate for various positions.
   * @alias module:model/CreateCandidate
   */
  function CreateCandidate() {
    _classCallCheck(this, CreateCandidate);

    CreateCandidate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCandidate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateCandidate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCandidate} obj Optional instance to populate.
     * @return {module:model/CreateCandidate} The populated <code>CreateCandidate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCandidate();

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

        if (data.hasOwnProperty('remote_user_id')) {
          obj['remote_user_id'] = _ApiClient["default"].convertToType(data['remote_user_id'], 'String');
        }

        if (data.hasOwnProperty('job_id')) {
          obj['job_id'] = _ApiClient["default"].convertToType(data['job_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCandidate;
}();
/**
 * The user's first name.
 * @member {String} first_name
 */


CreateCandidate.prototype['first_name'] = undefined;
/**
 * The user's last name.
 * @member {String} last_name
 */

CreateCandidate.prototype['last_name'] = undefined;
/**
 * The candidate's current company.
 * @member {String} company
 */

CreateCandidate.prototype['company'] = undefined;
/**
 * The candidate's current title.
 * @member {String} title
 */

CreateCandidate.prototype['title'] = undefined;
/**
 * When the most recent candidate interaction occurred.
 * @member {Date} last_interaction_at
 */

CreateCandidate.prototype['last_interaction_at'] = undefined;
/**
 * Whether or not the candidate is private.
 * @member {Boolean} is_private
 */

CreateCandidate.prototype['is_private'] = undefined;
/**
 * Whether or not the candidate can be emailed.
 * @member {Boolean} can_email
 */

CreateCandidate.prototype['can_email'] = undefined;
/**
 * The candidate's locations.
 * @member {Array.<String>} locations
 */

CreateCandidate.prototype['locations'] = undefined;
/**
 * @member {Array.<module:model/PhoneNumber>} phone_numbers
 */

CreateCandidate.prototype['phone_numbers'] = undefined;
/**
 * @member {Array.<module:model/EmailAddress>} email_addresses
 */

CreateCandidate.prototype['email_addresses'] = undefined;
/**
 * @member {Array.<module:model/Url>} urls
 */

CreateCandidate.prototype['urls'] = undefined;
/**
 * @member {Array.<String>} tags
 */

CreateCandidate.prototype['tags'] = undefined;
/**
 * @member {Array.<String>} applications
 */

CreateCandidate.prototype['applications'] = undefined;
/**
 * @member {Array.<String>} attachments
 */

CreateCandidate.prototype['attachments'] = undefined;
/**
 * @member {String} remote_user_id
 */

CreateCandidate.prototype['remote_user_id'] = undefined;
/**
 * @member {String} job_id
 */

CreateCandidate.prototype['job_id'] = undefined;
var _default = CreateCandidate;
exports["default"] = _default;