"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateScheduledInterview = _interopRequireDefault(require("../model/CreateScheduledInterview"));

var _PaginatedScheduledInterviewList = _interopRequireDefault(require("../model/PaginatedScheduledInterviewList"));

var _ScheduledInterview = _interopRequireDefault(require("../model/ScheduledInterview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Interviews service.
* @module api/InterviewsApi
* @version 1.0
*/
var InterviewsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InterviewsApi. 
  * @alias module:api/InterviewsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InterviewsApi(apiClient) {
    _classCallCheck(this, InterviewsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the interviewsCreate operation.
   * @callback module:api/InterviewsApi~interviewsCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ScheduledInterview} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a `ScheduledInterview` object with the given values.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
   * @param {module:model/CreateScheduledInterview} opts.createScheduledInterview 
   * @param {module:api/InterviewsApi~interviewsCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ScheduledInterview}
   */


  _createClass(InterviewsApi, [{
    key: "interviewsCreate",
    value: function interviewsCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['createScheduledInterview']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling interviewsCreate");
      }

      var pathParams = {};
      var queryParams = {
        'run_async': opts['runAsync']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _ScheduledInterview["default"];
      return this.apiClient.callApi('/interviews', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the interviewsList operation.
     * @callback module:api/InterviewsApi~interviewsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedScheduledInterviewList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `ScheduledInterview` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.applicationId If provided, will only return interviews for this application.
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {String} opts.jobInterviewStageId If provided, will only return interviews at this stage.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {String} opts.organizerId If provided, will only return interviews organized by this user.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/InterviewsApi~interviewsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedScheduledInterviewList}
     */

  }, {
    key: "interviewsList",
    value: function interviewsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling interviewsList");
      }

      var pathParams = {};
      var queryParams = {
        'application_id': opts['applicationId'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'include_remote_data': opts['includeRemoteData'],
        'job_interview_stage_id': opts['jobInterviewStageId'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'organizer_id': opts['organizerId'],
        'page_size': opts['pageSize'],
        'remote_id': opts['remoteId']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedScheduledInterviewList["default"];
      return this.apiClient.callApi('/interviews', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the interviewsRetrieve operation.
     * @callback module:api/InterviewsApi~interviewsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ScheduledInterview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `ScheduledInterview` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/InterviewsApi~interviewsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ScheduledInterview}
     */

  }, {
    key: "interviewsRetrieve",
    value: function interviewsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling interviewsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling interviewsRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'include_remote_data': opts['includeRemoteData']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ScheduledInterview["default"];
      return this.apiClient.callApi('/interviews/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return InterviewsApi;
}();

exports["default"] = InterviewsApi;