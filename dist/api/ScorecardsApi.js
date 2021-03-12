"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateScorecard = _interopRequireDefault(require("../model/CreateScorecard"));

var _PaginatedScorecardList = _interopRequireDefault(require("../model/PaginatedScorecardList"));

var _Scorecard = _interopRequireDefault(require("../model/Scorecard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Scorecards service.
* @module api/ScorecardsApi
* @version 1.0
*/
var ScorecardsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScorecardsApi. 
  * @alias module:api/ScorecardsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ScorecardsApi(apiClient) {
    _classCallCheck(this, ScorecardsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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
   * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
   * @param {module:model/CreateScorecard} opts.createScorecard 
   * @param {module:api/ScorecardsApi~scorecardsCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Scorecard}
   */


  _createClass(ScorecardsApi, [{
    key: "scorecardsCreate",
    value: function scorecardsCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['createScorecard']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling scorecardsCreate");
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
      var returnType = _Scorecard["default"];
      return this.apiClient.callApi('/scorecards', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "scorecardsList",
    value: function scorecardsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling scorecardsList");
      }

      var pathParams = {};
      var queryParams = {
        'application_id': opts['applicationId'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'include_remote_data': opts['includeRemoteData'],
        'interview_id': opts['interviewId'],
        'interviewer_id': opts['interviewerId'],
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
      var returnType = _PaginatedScorecardList["default"];
      return this.apiClient.callApi('/scorecards', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/ScorecardsApi~scorecardsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scorecard}
     */

  }, {
    key: "scorecardsRetrieve",
    value: function scorecardsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling scorecardsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling scorecardsRetrieve");
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
      var returnType = _Scorecard["default"];
      return this.apiClient.callApi('/scorecards/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ScorecardsApi;
}();

exports["default"] = ScorecardsApi;