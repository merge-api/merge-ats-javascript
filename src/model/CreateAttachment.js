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

/**
 * The CreateAttachment model module.
 * @module model/CreateAttachment
 * @version 1.0
 */
class CreateAttachment {
    /**
     * Constructs a new <code>CreateAttachment</code>.
     * # The Attachment Object ### Description The &#x60;Attachment&#x60; object is used to represent a attachment for a candidate.
     * @alias module:model/CreateAttachment
     */
    constructor() { 
        
        CreateAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAttachment} obj Optional instance to populate.
     * @return {module:model/CreateAttachment} The populated <code>CreateAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAttachment();

            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('file_url')) {
                obj['file_url'] = ApiClient.convertToType(data['file_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The attachment's name.
 * @member {String} file_name
 */
CreateAttachment.prototype['file_name'] = undefined;

/**
 * The attachment's url.
 * @member {String} file_url
 */
CreateAttachment.prototype['file_url'] = undefined;






export default CreateAttachment;

