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
import convertRelatedObjectToType from '../Utils';
import Application from './Application';
import JobInterviewStage from './JobInterviewStage';
import RemoteData from './RemoteData';
import RemoteUser from './RemoteUser';
import ScheduledInterviewStatusEnum from './ScheduledInterviewStatusEnum';

/**
 * The ScheduledInterview model module.
 * @module model/ScheduledInterview
 * @version 1.0
 */
class ScheduledInterview {
    /**
     * Constructs a new <code>ScheduledInterview</code>.
     * # The ScheduledInterview Object ### Description The &#x60;ScheduledInterview&#x60; object is used to represent an interview  ### Usage Example Fetch from the &#x60;LIST ScheduledInterviews&#x60; endpoint and filter by &#x60;interviewers&#x60; to show all office locations.
     * @alias module:model/ScheduledInterview
     */
    constructor() { 
        
        ScheduledInterview.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScheduledInterview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInterview} obj Optional instance to populate.
     * @return {module:model/ScheduledInterview} The populated <code>ScheduledInterview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduledInterview();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('application')) {
                obj['application'] = convertRelatedObjectToType(data['application'], Application);
            }
            if (data.hasOwnProperty('job_interview_stage')) {
                obj['job_interview_stage'] = convertRelatedObjectToType(data['job_interview_stage'], JobInterviewStage);
            }
            if (data.hasOwnProperty('organizer')) {
                obj['organizer'] = convertRelatedObjectToType(data['organizer'], RemoteUser);
            }
            if (data.hasOwnProperty('interviewers')) {
                obj['interviewers'] = convertRelatedObjectToType(data['interviewers'], RemoteUser);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
            }
            if (data.hasOwnProperty('remote_created_at')) {
                obj['remote_created_at'] = ApiClient.convertToType(data['remote_created_at'], 'Date');
            }
            if (data.hasOwnProperty('remote_updated_at')) {
                obj['remote_updated_at'] = ApiClient.convertToType(data['remote_updated_at'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], ScheduledInterviewStatusEnum);
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
ScheduledInterview.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
ScheduledInterview.prototype['remote_id'] = undefined;

/**
 * The application being interviewed.
 * @member {String} application
 */
ScheduledInterview.prototype['application'] = undefined;

/**
 * The stage of the interview.
 * @member {String} job_interview_stage
 */
ScheduledInterview.prototype['job_interview_stage'] = undefined;

/**
 * The user organizing the interview.
 * @member {String} organizer
 */
ScheduledInterview.prototype['organizer'] = undefined;

/**
 * Array of `RemoteUser` IDs.
 * @member {Array.<String>} interviewers
 */
ScheduledInterview.prototype['interviewers'] = undefined;

/**
 * The interview's location.
 * @member {String} location
 */
ScheduledInterview.prototype['location'] = undefined;

/**
 * When the interview was started.
 * @member {Date} start_at
 */
ScheduledInterview.prototype['start_at'] = undefined;

/**
 * When the interview was ended.
 * @member {Date} end_at
 */
ScheduledInterview.prototype['end_at'] = undefined;

/**
 * When the third party's interview was created.
 * @member {Date} remote_created_at
 */
ScheduledInterview.prototype['remote_created_at'] = undefined;

/**
 * When the third party's interview was updated.
 * @member {Date} remote_updated_at
 */
ScheduledInterview.prototype['remote_updated_at'] = undefined;

/**
 * The interview's status.
 * @member {module:model/ScheduledInterviewStatusEnum} status
 */
ScheduledInterview.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
ScheduledInterview.prototype['remote_data'] = undefined;






export default ScheduledInterview;

