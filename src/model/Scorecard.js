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
import OverallRecommendationEnum from './OverallRecommendationEnum';
import RemoteData from './RemoteData';

/**
 * The Scorecard model module.
 * @module model/Scorecard
 * @version 1.0
 */
class Scorecard {
    /**
     * Constructs a new <code>Scorecard</code>.
     * # The Scorecard Object ### Description The &#x60;Scorecard&#x60; object is used to represent a Scorecard for an interview  ### Usage Example Fetch from the &#x60;LIST Scorecards&#x60; endpoint and filter by &#x60;application&#x60; to show all scorecard for an applicant.
     * @alias module:model/Scorecard
     */
    constructor() { 
        
        Scorecard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Scorecard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scorecard} obj Optional instance to populate.
     * @return {module:model/Scorecard} The populated <code>Scorecard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Scorecard();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('application')) {
                obj['application'] = ApiClient.convertToType(data['application'], 'String');
            }
            if (data.hasOwnProperty('interview')) {
                obj['interview'] = ApiClient.convertToType(data['interview'], 'String');
            }
            if (data.hasOwnProperty('interviewer')) {
                obj['interviewer'] = ApiClient.convertToType(data['interviewer'], 'String');
            }
            if (data.hasOwnProperty('remote_created_at')) {
                obj['remote_created_at'] = ApiClient.convertToType(data['remote_created_at'], 'Date');
            }
            if (data.hasOwnProperty('submitted_at')) {
                obj['submitted_at'] = ApiClient.convertToType(data['submitted_at'], 'Date');
            }
            if (data.hasOwnProperty('overall_recommendation')) {
                obj['overall_recommendation'] = ApiClient.convertToType(data['overall_recommendation'], OverallRecommendationEnum);
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
Scorecard.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
Scorecard.prototype['remote_id'] = undefined;

/**
 * The application being scored.
 * @member {String} application
 */
Scorecard.prototype['application'] = undefined;

/**
 * The interview being scored.
 * @member {String} interview
 */
Scorecard.prototype['interview'] = undefined;

/**
 * The interviewer doing the scoring.
 * @member {String} interviewer
 */
Scorecard.prototype['interviewer'] = undefined;

/**
 * When the third party's scorecard was created.
 * @member {Date} remote_created_at
 */
Scorecard.prototype['remote_created_at'] = undefined;

/**
 * When the scorecard was submitted.
 * @member {Date} submitted_at
 */
Scorecard.prototype['submitted_at'] = undefined;

/**
 * The inteviewer's recommendation.
 * @member {module:model/OverallRecommendationEnum} overall_recommendation
 */
Scorecard.prototype['overall_recommendation'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
Scorecard.prototype['remote_data'] = undefined;






export default Scorecard;

