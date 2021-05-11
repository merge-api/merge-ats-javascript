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
import convertRelatedObjectToType from '../Utils';
import AttachmentTypeEnum from './AttachmentTypeEnum';
import Candidate from './Candidate';

/**
 * The AttachmentRequest model module.
 * @module model/AttachmentRequest
 * @version 1.0
 */
class AttachmentRequest {
    /**
     * Constructs a new <code>AttachmentRequest</code>.
     * # The Attachment Object ### Description The &#x60;Attachment&#x60; object is used to represent a attachment for a candidate.  ### Usage Example Fetch from the &#x60;LIST Attachments&#x60; endpoint and view attachments accessible by a company.
     * @alias module:model/AttachmentRequest
     */
    constructor() { 
        
        AttachmentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentRequest} obj Optional instance to populate.
     * @return {module:model/AttachmentRequest} The populated <code>AttachmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentRequest();

            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('file_url')) {
                obj['file_url'] = ApiClient.convertToType(data['file_url'], 'String');
            }
            if (data.hasOwnProperty('candidate')) {
                obj['candidate'] = convertRelatedObjectToType(data['candidate'], Candidate);
            }
            if (data.hasOwnProperty('attachment_type')) {
                obj['attachment_type'] = ApiClient.convertToType(data['attachment_type'], AttachmentTypeEnum);
            }
        }
        return obj;
    }


}

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
AttachmentRequest.prototype['remote_id'] = undefined;

/**
 * The attachment's name.
 * @member {String} file_name
 */
AttachmentRequest.prototype['file_name'] = undefined;

/**
 * The attachment's url.
 * @member {String} file_url
 */
AttachmentRequest.prototype['file_url'] = undefined;

/**
 * @member {String} candidate
 */
AttachmentRequest.prototype['candidate'] = undefined;

/**
 * The attachment's type.
 * @member {module:model/AttachmentTypeEnum} attachment_type
 */
AttachmentRequest.prototype['attachment_type'] = undefined;






export default AttachmentRequest;
