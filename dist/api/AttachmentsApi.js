"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Attachment = _interopRequireDefault(require("../model/Attachment"));

var _AttachmentRequest = _interopRequireDefault(require("../model/AttachmentRequest"));

var _PaginatedAttachmentList = _interopRequireDefault(require("../model/PaginatedAttachmentList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Attachments service.
* @module api/AttachmentsApi
* @version 1.0
*/
var AttachmentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AttachmentsApi. 
  * @alias module:api/AttachmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AttachmentsApi(apiClient) {
    _classCallCheck(this, AttachmentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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
   * @param {String} remoteUserId The ID of the RemoteUser deleting the resource. This can be found in the ID field (not remote_id) in the RemoteUser table.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
   * @param {module:model/AttachmentRequest} opts.attachmentRequest 
   * @param {module:api/AttachmentsApi~attachmentsCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Attachment}
   */


  _createClass(AttachmentsApi, [{
    key: "attachmentsCreate",
    value: function attachmentsCreate(xAccountToken, remoteUserId, opts, callback) {
      opts = opts || {};
      var postBody = opts['attachmentRequest']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling attachmentsCreate");
      } // verify the required parameter 'remoteUserId' is set


      if (remoteUserId === undefined || remoteUserId === null) {
        throw new Error("Missing the required parameter 'remoteUserId' when calling attachmentsCreate");
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
      var returnType = _Attachment["default"];
      return this.apiClient.callApi('/attachments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "attachmentsList",
    value: function attachmentsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling attachmentsList");
      }

      var pathParams = {};
      var queryParams = {
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
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedAttachmentList["default"];
      return this.apiClient.callApi('/attachments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "attachmentsRetrieve",
    value: function attachmentsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling attachmentsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachmentsRetrieve");
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
      var returnType = _Attachment["default"];
      return this.apiClient.callApi('/attachments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AttachmentsApi;
}();

exports["default"] = AttachmentsApi;