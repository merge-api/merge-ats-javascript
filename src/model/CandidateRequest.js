/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EmailAddressRequest from './EmailAddressRequest';
import PhoneNumberRequest from './PhoneNumberRequest';
import UrlRequest from './UrlRequest';

/**
 * The CandidateRequest model module.
 * @module model/CandidateRequest
 * @version 1.0
 */
class CandidateRequest {
    /**
     * Constructs a new <code>CandidateRequest</code>.
     * # The Candidate Object ### Description The &#x60;Candidate&#x60; object is used to represent a Candidate for various positions.  ### Usage Example Fetch from the &#x60;LIST Candidates&#x60; endpoint and filter by &#x60;ID&#x60; to show all candidates.
     * @alias module:model/CandidateRequest
     */
    constructor() { 
        
        CandidateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CandidateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandidateRequest} obj Optional instance to populate.
     * @return {module:model/CandidateRequest} The populated <code>CandidateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CandidateRequest();

            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('remote_created_at')) {
                obj['remote_created_at'] = ApiClient.convertToType(data['remote_created_at'], 'Date');
            }
            if (data.hasOwnProperty('remote_updated_at')) {
                obj['remote_updated_at'] = ApiClient.convertToType(data['remote_updated_at'], 'Date');
            }
            if (data.hasOwnProperty('last_interaction_at')) {
                obj['last_interaction_at'] = ApiClient.convertToType(data['last_interaction_at'], 'Date');
            }
            if (data.hasOwnProperty('is_private')) {
                obj['is_private'] = ApiClient.convertToType(data['is_private'], 'Boolean');
            }
            if (data.hasOwnProperty('can_email')) {
                obj['can_email'] = ApiClient.convertToType(data['can_email'], 'Boolean');
            }
            if (data.hasOwnProperty('locations')) {
                obj['locations'] = ApiClient.convertToType(data['locations'], ['String']);
            }
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = ApiClient.convertToType(data['phone_numbers'], [PhoneNumberRequest]);
            }
            if (data.hasOwnProperty('email_addresses')) {
                obj['email_addresses'] = ApiClient.convertToType(data['email_addresses'], [EmailAddressRequest]);
            }
            if (data.hasOwnProperty('urls')) {
                obj['urls'] = ApiClient.convertToType(data['urls'], [UrlRequest]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
CandidateRequest.prototype['remote_id'] = undefined;

/**
 * The user's first name.
 * @member {String} first_name
 */
CandidateRequest.prototype['first_name'] = undefined;

/**
 * The user's last name.
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






export default CandidateRequest;
