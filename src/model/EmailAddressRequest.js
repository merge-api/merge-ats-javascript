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
import EmailAddressTypeEnum from './EmailAddressTypeEnum';

/**
 * The EmailAddressRequest model module.
 * @module model/EmailAddressRequest
 * @version 1.0
 */
class EmailAddressRequest {
    /**
     * Constructs a new <code>EmailAddressRequest</code>.
     * # The EmailAddress Object ### Description The &#x60;EmailAddress&#x60; object is used to represent a candidate&#39;s email address.  ### Usage Example Fetch from the &#x60;GET Candidate&#x60; endpoint and view their email addresses.
     * @alias module:model/EmailAddressRequest
     */
    constructor() { 
        
        EmailAddressRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailAddressRequest} obj Optional instance to populate.
     * @return {module:model/EmailAddressRequest} The populated <code>EmailAddressRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailAddressRequest();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('email_address_type')) {
                obj['email_address_type'] = ApiClient.convertToType(data['email_address_type'], EmailAddressTypeEnum);
            }
        }
        return obj;
    }


}

/**
 * The email's address.
 * @member {String} value
 */
EmailAddressRequest.prototype['value'] = undefined;

/**
 * The type of email address.
 * @member {module:model/EmailAddressTypeEnum} email_address_type
 */
EmailAddressRequest.prototype['email_address_type'] = undefined;






export default EmailAddressRequest;
