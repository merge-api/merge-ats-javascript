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
import RemoteData from './RemoteData';

/**
 * The Attachment model module.
 * @module model/Attachment
 * @version 1.0
 */
class Attachment {
    /**
     * Constructs a new <code>Attachment</code>.
     * # The Attachment Object ### Description The &#x60;Attachment&#x60; object is used to represent a attachment for a candidate.  ### Usage Example Fetch from the &#x60;GET Candidate&#x60; endpoint and view their attachments.
     * @alias module:model/Attachment
     */
    constructor() { 
        
        Attachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attachment} obj Optional instance to populate.
     * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Attachment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('file_url')) {
                obj['file_url'] = ApiClient.convertToType(data['file_url'], 'String');
            }
            if (data.hasOwnProperty('remote_data')) {
                obj['remote_data'] = ApiClient.convertToType(data['remote_data'], [RemoteData]);
            }
        }
        return obj;
    }


}

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
 * @member {Array.<module:model/RemoteData>} remote_data
 */
Attachment.prototype['remote_data'] = undefined;






export default Attachment;

