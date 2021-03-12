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
* Enum class VisibilityEnum.
* @enum {}
* @readonly
*/
export default class VisibilityEnum {
    
        /**
         * value: "ADMIN_ONLY"
         * @const
         */
        "ADMIN_ONLY" = "ADMIN_ONLY";

    
        /**
         * value: "PUBLIC"
         * @const
         */
        "PUBLIC" = "PUBLIC";

    
        /**
         * value: "PRIVATE"
         * @const
         */
        "PRIVATE" = "PRIVATE";

    

    /**
    * Returns a <code>VisibilityEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VisibilityEnum} The enum <code>VisibilityEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

