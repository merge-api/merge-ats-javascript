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
* Enum class VeteranStatusEnum.
* @enum {}
* @readonly
*/
export default class VeteranStatusEnum {
    
        /**
         * value: "I_AM_NOT_A_PROTECTED_VETERAN"
         * @const
         */
        "AM_NOT_A_PROTECTED_VETERAN" = "I_AM_NOT_A_PROTECTED_VETERAN";

    
        /**
         * value: "I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN"
         * @const
         */
        "IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN" = "I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN";

    
        /**
         * value: "I_DONT_WISH_TO_ANSWER"
         * @const
         */
        "DONT_WISH_TO_ANSWER" = "I_DONT_WISH_TO_ANSWER";

    

    /**
    * Returns a <code>VeteranStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/VeteranStatusEnum} The enum <code>VeteranStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

