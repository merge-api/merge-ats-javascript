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
import Attachment from '../model/Attachment';
import AttachmentRequest from '../model/AttachmentRequest';
import PaginatedAttachmentList from '../model/PaginatedAttachmentList';

/**
* Attachments service.
* @module api/AttachmentsApi
* @version 1.0
*/
export default class AttachmentsApi {

    /**
    * Constructs a new AttachmentsApi. 
    * @alias module:api/AttachmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the attachmentsCreate operation.
     * @callback module:api/AttachmentsApi~attachmentsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Attachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an `Attachment` object with the given values.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.remoteUserId The ID of the RemoteUser modifying the resource. This can be found in the ID field (not remote_id) in the RemoteUser table.
     * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
     * @param {module:model/AttachmentRequest} opts.attachmentRequest 
     * @param {module:api/AttachmentsApi~attachmentsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Attachment}
     */
    attachmentsCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['attachmentRequest'];
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling attachmentsCreate");
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
      let returnType = Attachment;
      return this.apiClient.callApi(
        '/attachments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the attachmentsList operation.
     * @callback module:api/AttachmentsApi~attachmentsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedAttachmentList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Attachment` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.candidateId If provided, will only return attachments for this candidate.
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/AttachmentsApi~attachmentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedAttachmentList}
     */
    attachmentsList(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling attachmentsList");
      }

      let pathParams = {
      };
      let queryParams = {
        'candidate_id': opts['candidateId'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'include_remote_data': opts['includeRemoteData'],
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
      let returnType = PaginatedAttachmentList;
      return this.apiClient.callApi(
        '/attachments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the attachmentsRetrieve operation.
     * @callback module:api/AttachmentsApi~attachmentsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Attachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `Attachment` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/AttachmentsApi~attachmentsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Attachment}
     */
    attachmentsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling attachmentsRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachmentsRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
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
      let returnType = Attachment;
      return this.apiClient.callApi(
        '/attachments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
