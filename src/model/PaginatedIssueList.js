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
import Issue from './Issue';

/**
 * The PaginatedIssueList model module.
 * @module model/PaginatedIssueList
 * @version 1.0
 */
class PaginatedIssueList {
    /**
     * Constructs a new <code>PaginatedIssueList</code>.
     * @alias module:model/PaginatedIssueList
     */
    constructor() { 
        
        PaginatedIssueList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedIssueList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedIssueList} obj Optional instance to populate.
     * @return {module:model/PaginatedIssueList} The populated <code>PaginatedIssueList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedIssueList();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Issue]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} next
 */
PaginatedIssueList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedIssueList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/Issue>} results
 */
PaginatedIssueList.prototype['results'] = undefined;






export default PaginatedIssueList;

