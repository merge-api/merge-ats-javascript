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
* Enum class Status007Enum.
* @enum {}
* @readonly
*/
export default class Status007Enum {
    
        /**
         * value: "SCHEDULED"
         * @const
         */
        "SCHEDULED" = "SCHEDULED";

    
        /**
         * value: "AWAITING_FEEDBACK"
         * @const
         */
        "AWAITING_FEEDBACK" = "AWAITING_FEEDBACK";

    
        /**
         * value: "COMPLETE"
         * @const
         */
        "COMPLETE" = "COMPLETE";

    

    /**
    * Returns a <code>Status007Enum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Status007Enum} The enum <code>Status007Enum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

