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
import EEOC from './EEOC';

/**
 * The PaginatedEEOCList model module.
 * @module model/PaginatedEEOCList
 * @version 1.0
 */
class PaginatedEEOCList {
    /**
     * Constructs a new <code>PaginatedEEOCList</code>.
     * @alias module:model/PaginatedEEOCList
     */
    constructor() { 
        
        PaginatedEEOCList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedEEOCList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedEEOCList} obj Optional instance to populate.
     * @return {module:model/PaginatedEEOCList} The populated <code>PaginatedEEOCList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedEEOCList();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [EEOC]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} next
 */
PaginatedEEOCList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedEEOCList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/EEOC>} results
 */
PaginatedEEOCList.prototype['results'] = undefined;






export default PaginatedEEOCList;

