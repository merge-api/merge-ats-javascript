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
import PaginatedScorecardList from '../model/PaginatedScorecardList';
import Scorecard from '../model/Scorecard';
import ScorecardRequest from '../model/ScorecardRequest';

/**
* Scorecards service.
* @module api/ScorecardsApi
* @version 1.0
*/
export default class ScorecardsApi {

    /**
    * Constructs a new ScorecardsApi. 
    * @alias module:api/ScorecardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the scorecardsCreate operation.
     * @callback module:api/ScorecardsApi~scorecardsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scorecard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a `Scorecard` object with the given values.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.remoteUserId The ID of the RemoteUser modifying the resource. This can be found in the ID field (not remote_id) in the RemoteUser table.
     * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
     * @param {module:model/ScorecardRequest} opts.scorecardRequest 
     * @param {module:api/ScorecardsApi~scorecardsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scorecard}
     */
    scorecardsCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['scorecardRequest'];
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling scorecardsCreate");
      }

      let pathParams = {
      };
      let queryParams = {
        'remote_user_id': opts['remoteUserId'],
        'run_async': opts['runAsync']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Scorecard;
      return this.apiClient.callApi(
        '/scorecards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scorecardsList operation.
     * @callback module:api/ScorecardsApi~scorecardsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedScorecardList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Scorecard` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationId If provided, will only return scorecards for this application.
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {String} opts.interviewId If provided, will only return scorecards for this interview.
     * @param {String} opts.interviewerId If provided, will only return scorecards for this interviewer.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/ScorecardsApi~scorecardsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedScorecardList}
     */
    scorecardsList(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling scorecardsList");
      }

      let pathParams = {
      };
      let queryParams = {
        'application_id': opts['applicationId'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData'],
        'interview_id': opts['interviewId'],
        'interviewer_id': opts['interviewerId'],
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
      let returnType = PaginatedScorecardList;
      return this.apiClient.callApi(
        '/scorecards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the scorecardsRetrieve operation.
     * @callback module:api/ScorecardsApi~scorecardsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scorecard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `Scorecard` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/ScorecardsApi~scorecardsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scorecard}
     */
    scorecardsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling scorecardsRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling scorecardsRetrieve");
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
      let returnType = Scorecard;
      return this.apiClient.callApi(
        '/scorecards/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
