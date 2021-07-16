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
import ScheduledInterviewStatusEnum from './ScheduledInterviewStatusEnum';

/**
 * The ScheduledInterviewRequest model module.
 * @module model/ScheduledInterviewRequest
 * @version 1.0
 */
class ScheduledInterviewRequest {
    /**
     * Constructs a new <code>ScheduledInterviewRequest</code>.
     * # The ScheduledInterview Object ### Description The &#x60;ScheduledInterview&#x60; object is used to represent an interview  ### Usage Example Fetch from the &#x60;LIST ScheduledInterviews&#x60; endpoint and filter by &#x60;interviewers&#x60; to show all office locations.
     * @alias module:model/ScheduledInterviewRequest
     */
    constructor() { 
        
        ScheduledInterviewRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScheduledInterviewRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInterviewRequest} obj Optional instance to populate.
     * @return {module:model/ScheduledInterviewRequest} The populated <code>ScheduledInterviewRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduledInterviewRequest();

            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], 'String');
            }
            if (data.hasOwnProperty('job_interview_stage')) {
                obj['job_interview_stage'] = ApiClient.convertToType(data['job_interview_stage'], 'String');
            }
            if (data.hasOwnProperty('organizer')) {
                obj['organizer'] = ApiClient.convertToType(data['organizer'], 'String');
            }
            if (data.hasOwnProperty('interviewers')) {
                obj['interviewers'] = ApiClient.convertToType(data['interviewers'], ['String']);
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
        }
        return obj;
    }


}

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
ScheduledInterviewRequest.prototype['remote_id'] = undefined;

/**
 * The application being interviewed.
 * @member {String} application
 */
ScheduledInterviewRequest.prototype['application'] = undefined;

/**
 * The stage of the interview.
 * @member {String} job_interview_stage
 */
ScheduledInterviewRequest.prototype['job_interview_stage'] = undefined;

/**
 * The user organizing the interview.
 * @member {String} organizer
 */
ScheduledInterviewRequest.prototype['organizer'] = undefined;

/**
 * Array of `RemoteUser` IDs.
 * @member {Array.<String>} interviewers
 */
ScheduledInterviewRequest.prototype['interviewers'] = undefined;

/**
 * The interview's location.
 * @member {String} location
 */
ScheduledInterviewRequest.prototype['location'] = undefined;

/**
 * When the interview was started.
 * @member {Date} start_at
 */
ScheduledInterviewRequest.prototype['start_at'] = undefined;

/**
 * When the interview was ended.
 * @member {Date} end_at
 */
ScheduledInterviewRequest.prototype['end_at'] = undefined;

/**
 * When the third party's interview was created.
 * @member {Date} remote_created_at
 */
ScheduledInterviewRequest.prototype['remote_created_at'] = undefined;

/**
 * When the third party's interview was updated.
 * @member {Date} remote_updated_at
 */
ScheduledInterviewRequest.prototype['remote_updated_at'] = undefined;

/**
 * The interview's status.
 * @member {module:model/ScheduledInterviewStatusEnum} status
 */
ScheduledInterviewRequest.prototype['status'] = undefined;






export default ScheduledInterviewRequest;
