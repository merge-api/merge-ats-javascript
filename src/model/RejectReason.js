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
 * The RejectReason model module.
 * @module model/RejectReason
 * @version 1.0
 */
class RejectReason {
    /**
     * Constructs a new <code>RejectReason</code>.
     * # The RejectReason Object ### Description The &#x60;RejectReason&#x60; object is used to represent a reason for rejecting an application.  ### Usage Example Fetch from the &#x60;LIST RejectReasons&#x60; endpoint and filter by &#x60;ID&#x60; to show all reasons.
     * @alias module:model/RejectReason
     */
    constructor() { 
        
        RejectReason.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RejectReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RejectReason} obj Optional instance to populate.
     * @return {module:model/RejectReason} The populated <code>RejectReason</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RejectReason();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
RejectReason.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
RejectReason.prototype['remote_id'] = undefined;

/**
 * The rejection reason’s name.
 * @member {String} name
 */
RejectReason.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
RejectReason.prototype['remote_data'] = undefined;






export default RejectReason;

