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
import SyncStatus from '../model/SyncStatus';

/**
* SyncStatus service.
* @module api/SyncStatusApi
* @version 1.0
*/
export default class SyncStatusApi {

    /**
    * Constructs a new SyncStatusApi. 
    * @alias module:api/SyncStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the syncStatusRetrieve operation.
     * @callback module:api/SyncStatusApi~syncStatusRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SyncStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get syncing status.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {module:api/SyncStatusApi~syncStatusRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SyncStatus}
     */
    syncStatusRetrieve(xAccountToken, callback) {
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling syncStatusRetrieve");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SyncStatus;
      return this.apiClient.callApi(
        '/sync-status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}