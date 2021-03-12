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
import ActivityTypeEnum from './ActivityTypeEnum';
import RemoteData from './RemoteData';
import VisibilityEnum from './VisibilityEnum';

/**
 * The Activity model module.
 * @module model/Activity
 * @version 1.0
 */
class Activity {
    /**
     * Constructs a new <code>Activity</code>.
     * # The Activity Object ### Description The &#x60;Activity&#x60; object is used to represent an activity performed by a user.  ### Usage Example Fetch from the &#x60;LIST Activities&#x60; endpoint and filter by &#x60;ID&#x60; to show all activities.
     * @alias module:model/Activity
     */
    constructor() { 
        
        Activity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Activity} obj Optional instance to populate.
     * @return {module:model/Activity} The populated <code>Activity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Activity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('remote_created_at')) {
                obj['remote_created_at'] = ApiClient.convertToType(data['remote_created_at'], 'Date');
            }
            if (data.hasOwnProperty('activity_type')) {
                obj['activity_type'] = ApiClient.convertToType(data['activity_type'], ActivityTypeEnum);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('visibility')) {
                obj['visibility'] = ApiClient.convertToType(data['visibility'], VisibilityEnum);
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
Activity.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
Activity.prototype['remote_id'] = undefined;

/**
 * The user the performed the action.
 * @member {String} user
 */
Activity.prototype['user'] = undefined;

/**
 * When the third party's activity was created.
 * @member {Date} remote_created_at
 */
Activity.prototype['remote_created_at'] = undefined;

/**
 * The activity's type.
 * @member {module:model/ActivityTypeEnum} activity_type
 */
Activity.prototype['activity_type'] = undefined;

/**
 * The activity's subject.
 * @member {String} subject
 */
Activity.prototype['subject'] = undefined;

/**
 * The activity's body.
 * @member {String} body
 */
Activity.prototype['body'] = undefined;

/**
 * The activity's visibility.
 * @member {module:model/VisibilityEnum} visibility
 */
Activity.prototype['visibility'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
Activity.prototype['remote_data'] = undefined;






export default Activity;

