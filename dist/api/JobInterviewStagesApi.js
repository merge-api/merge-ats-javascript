"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobInterviewStage = _interopRequireDefault(require("../model/JobInterviewStage"));

var _PaginatedJobInterviewStageList = _interopRequireDefault(require("../model/PaginatedJobInterviewStageList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* JobInterviewStages service.
* @module api/JobInterviewStagesApi
* @version 1.0
*/
var JobInterviewStagesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new JobInterviewStagesApi. 
  * @alias module:api/JobInterviewStagesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function JobInterviewStagesApi(apiClient) {
    _classCallCheck(this, JobInterviewStagesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(JobInterviewStagesApi, [{
    key: "jobInterviewStagesList",
    value: function jobInterviewStagesList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling jobInterviewStagesList");
      }

      var pathParams = {};
      var queryParams = {
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
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedJobInterviewStageList["default"];
      return this.apiClient.callApi('/job-interview-stages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "jobInterviewStagesRetrieve",
    value: function jobInterviewStagesRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling jobInterviewStagesRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling jobInterviewStagesRetrieve");
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
      var returnType = _JobInterviewStage["default"];
      return this.apiClient.callApi('/job-interview-stages/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return JobInterviewStagesApi;
}();

exports["default"] = JobInterviewStagesApi;