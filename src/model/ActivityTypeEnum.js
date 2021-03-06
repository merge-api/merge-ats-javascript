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
* Enum class ActivityTypeEnum.
* @enum {}
* @readonly
*/
export default class ActivityTypeEnum {
    
        /**
         * value: "NOTE"
         * @const
         */
        "NOTE" = "NOTE";

    
        /**
         * value: "EMAIL"
         * @const
         */
        "EMAIL" = "EMAIL";

    
        /**
         * value: "OTHER"
         * @const
         */
        "OTHER" = "OTHER";

    

    /**
    * Returns a <code>ActivityTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ActivityTypeEnum} The enum <code>ActivityTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

