"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Application = _interopRequireDefault(require("../model/Application"));

var _ApplicationRequest = _interopRequireDefault(require("../model/ApplicationRequest"));

var _PaginatedApplicationList = _interopRequireDefault(require("../model/PaginatedApplicationList"));

var _PatchedApplicationRequest = _interopRequireDefault(require("../model/PatchedApplicationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Applications service.
* @module api/ApplicationsApi
* @version 1.0
*/
var ApplicationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApplicationsApi. 
  * @alias module:api/ApplicationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicationsApi(apiClient) {
    _classCallCheck(this, ApplicationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the applicationsCreate operation.
   * @callback module:api/ApplicationsApi~applicationsCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Application} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates an `Application` object with the given values.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {String} remoteUserId The ID of the RemoteUser deleting the resource. This can be found in the ID field (not remote_id) in the RemoteUser table.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
   * @param {module:model/ApplicationRequest} opts.applicationRequest 
   * @param {module:api/ApplicationsApi~applicationsCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Application}
   */


  _createClass(ApplicationsApi, [{
    key: "applicationsCreate",
    value: function applicationsCreate(xAccountToken, remoteUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['applicationRequest']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling applicationsCreate");
      } // verify the required parameter 'remoteUserId' is set


      if (remoteUserId === undefined || remoteUserId === null) {
        throw new Error("Missing the required parameter 'remoteUserId' when calling applicationsCreate");
      }

      var pathParams = {};
      var queryParams = {
        'remote_user_id': remoteUserId,
        'run_async': opts['runAsync']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _Application["default"];
      return this.apiClient.callApi('/applications', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the applicationsList operation.
     * @callback module:api/ApplicationsApi~applicationsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedApplicationList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Application` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.candidateId If provided, will only return applications for this candidate.
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.creditedToId If provided, will only return applications credited to this user.
     * @param {String} opts.currentStageId If provided, will only return applications at this interview stage.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {String} opts.jobId If provided, will only return applications for this job.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.rejectReasonId If provided, will only return applications with this reject reason.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/ApplicationsApi~applicationsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedApplicationList}
     */

  }, {
    key: "applicationsList",
    value: function applicationsList(xAccountToken, opts, callback) {
      console.log("Calling the API");
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling applicationsList");
      }

      var pathParams = {};
      var queryParams = {
        'candidate_id': opts['candidateId'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'credited_to_id': opts['creditedToId'],
        'current_stage_id': opts['currentStageId'],
        'cursor': opts['cursor'],
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData'],
        'job_id': opts['jobId'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'reject_reason_id': opts['rejectReasonId'],
        'remote_id': opts['remoteId']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedApplicationList["default"];
      return this.apiClient.callApi('/applications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the applicationsPartialUpdate operation.
     * @callback module:api/ApplicationsApi~applicationsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Application} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an `Application` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {String} remoteUserId The ID of the RemoteUser deleting the resource. This can be found in the ID field (not remote_id) in the RemoteUser table.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
     * @param {module:model/PatchedApplicationRequest} opts.patchedApplicationRequest 
     * @param {module:api/ApplicationsApi~applicationsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Application}
     */

  }, {
    key: "applicationsPartialUpdate",
    value: function applicationsPartialUpdate(xAccountToken, id, remoteUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['patchedApplicationRequest']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling applicationsPartialUpdate");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling applicationsPartialUpdate");
      } // verify the required parameter 'remoteUserId' is set


      if (remoteUserId === undefined || remoteUserId === null) {
        throw new Error("Missing the required parameter 'remoteUserId' when calling applicationsPartialUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'remote_user_id': remoteUserId,
        'run_async': opts['runAsync']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _Application["default"];
      return this.apiClient.callApi('/applications/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the applicationsRetrieve operation.
     * @callback module:api/ApplicationsApi~applicationsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Application} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `Application` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/ApplicationsApi~applicationsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Application}
     */

  }, {
    key: "applicationsRetrieve",
    value: function applicationsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling applicationsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling applicationsRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Application["default"];
      return this.apiClient.callApi('/applications/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ApplicationsApi;
}();

exports["default"] = ApplicationsApi;