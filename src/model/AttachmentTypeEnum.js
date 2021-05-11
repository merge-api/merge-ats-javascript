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
* Enum class AttachmentTypeEnum.
* @enum {}
* @readonly
*/
export default class AttachmentTypeEnum {
    
        /**
         * value: "RESUME"
         * @const
         */
        "RESUME" = "RESUME";

    
        /**
         * value: "COVER_LETTER"
         * @const
         */
        "COVER_LETTER" = "COVER_LETTER";

    
        /**
         * value: "OFFER_LETTER"
         * @const
         */
        "OFFER_LETTER" = "OFFER_LETTER";

    
        /**
         * value: "OTHER"
         * @const
         */
        "OTHER" = "OTHER";

    

    /**
    * Returns a <code>AttachmentTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AttachmentTypeEnum} The enum <code>AttachmentTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

