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


import ApiClient from "../ApiClient";
import JobInterviewStage from '../model/JobInterviewStage';
import PaginatedJobInterviewStageList from '../model/PaginatedJobInterviewStageList';

/**
* JobInterviewStages service.
* @module api/JobInterviewStagesApi
* @version 1.0
*/
export default class JobInterviewStagesApi {

    /**
    * Constructs a new JobInterviewStagesApi. 
    * @alias module:api/JobInterviewStagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the jobInterviewStagesList operation.
     * @callback module:api/JobInterviewStagesApi~jobInterviewStagesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedJobInterviewStageList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `JobInterviewStage` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {String} opts.jobId If provided, will only return interview stages for this job.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/JobInterviewStagesApi~jobInterviewStagesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedJobInterviewStageList}
     */
    jobInterviewStagesList(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling jobInterviewStagesList");
      }

      let pathParams = {
      };
      let queryParams = {
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData'],
        'job_id': opts['jobId'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'remote_id': opts['remoteId']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedJobInterviewStageList;
      return this.apiClient.callApi(
        '/job-interview-stages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the jobInterviewStagesRetrieve operation.
     * @callback module:api/JobInterviewStagesApi~jobInterviewStagesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobInterviewStage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `JobInterviewStage` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/JobInterviewStagesApi~jobInterviewStagesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JobInterviewStage}
     */
    jobInterviewStagesRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling jobInterviewStagesRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling jobInterviewStagesRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JobInterviewStage;
      return this.apiClient.callApi(
        '/job-interview-stages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
