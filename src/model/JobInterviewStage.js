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
 * The JobInterviewStage model module.
 * @module model/JobInterviewStage
 * @version 1.0
 */
class JobInterviewStage {
    /**
     * Constructs a new <code>JobInterviewStage</code>.
     * # The JobInterviewStage Object ### Description The &#x60;JobInterviewStage&#x60; object is used to represent the stage of an interview  ### Usage Example Fetch from the &#x60;LIST JobInterviewStages&#x60; endpoint and view the job interview stages used by a company.
     * @alias module:model/JobInterviewStage
     */
    constructor() { 
        
        JobInterviewStage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobInterviewStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobInterviewStage} obj Optional instance to populate.
     * @return {module:model/JobInterviewStage} The populated <code>JobInterviewStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobInterviewStage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('job')) {
                obj['job'] = ApiClient.convertToType(data['job'], 'String');
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
JobInterviewStage.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
JobInterviewStage.prototype['remote_id'] = undefined;

/**
 * The stage's name.
 * @member {String} name
 */
JobInterviewStage.prototype['name'] = undefined;

/**
 * If stages are specific to a job, this is the job that this stage belongs to.
 * @member {String} job
 */
JobInterviewStage.prototype['job'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
JobInterviewStage.prototype['remote_data'] = undefined;






export default JobInterviewStage;

