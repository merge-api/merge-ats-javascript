"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaginatedRejectReasonList = _interopRequireDefault(require("../model/PaginatedRejectReasonList"));

var _RejectReason = _interopRequireDefault(require("../model/RejectReason"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* RejectReasons service.
* @module api/RejectReasonsApi
* @version 1.0
*/
var RejectReasonsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RejectReasonsApi. 
  * @alias module:api/RejectReasonsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RejectReasonsApi(apiClient) {
    _classCallCheck(this, RejectReasonsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the rejectReasonsList operation.
   * @callback module:api/RejectReasonsApi~rejectReasonsListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedRejectReasonList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `RejectReason` objects.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
   * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
   * @param {Number} opts.pageSize Number of results to return per page.
   * @param {String} opts.remoteId The API provider's ID for the given object.
   * @param {module:api/RejectReasonsApi~rejectReasonsListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedRejectReasonList}
   */


  _createClass(RejectReasonsApi, [{
    key: "rejectReasonsList",
    value: function rejectReasonsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling rejectReasonsList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'include_remote_data': opts['includeRemoteData'],
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
      var returnType = _PaginatedRejectReasonList["default"];
      return this.apiClient.callApi('/reject-reasons', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rejectReasonsRetrieve operation.
     * @callback module:api/RejectReasonsApi~rejectReasonsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RejectReason} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `RejectReason` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/RejectReasonsApi~rejectReasonsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RejectReason}
     */

  }, {
    key: "rejectReasonsRetrieve",
    value: function rejectReasonsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling rejectReasonsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling rejectReasonsRetrieve");
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
      var returnType = _RejectReason["default"];
      return this.apiClient.callApi('/reject-reasons/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RejectReasonsApi;
}();

exports["default"] = RejectReasonsApi;