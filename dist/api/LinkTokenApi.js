"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EndUserDetailsRequest = _interopRequireDefault(require("../model/EndUserDetailsRequest"));

var _LinkToken = _interopRequireDefault(require("../model/LinkToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LinkToken service.
* @module api/LinkTokenApi
* @version 1.0
*/
var LinkTokenApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LinkTokenApi. 
  * @alias module:api/LinkTokenApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LinkTokenApi(apiClient) {
    _classCallCheck(this, LinkTokenApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the linkTokenCreate operation.
   * @callback module:api/LinkTokenApi~linkTokenCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/LinkToken} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a link token to be used when linking a new end user.
   * @param {module:model/EndUserDetailsRequest} endUserDetailsRequest 
   * @param {module:api/LinkTokenApi~linkTokenCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/LinkToken}
   */


  _createClass(LinkTokenApi, [{
    key: "linkTokenCreate",
    value: function linkTokenCreate(endUserDetailsRequest, callback) {
      var postBody = endUserDetailsRequest; // verify the required parameter 'endUserDetailsRequest' is set

      if (endUserDetailsRequest === undefined || endUserDetailsRequest === null) {
        throw new Error("Missing the required parameter 'endUserDetailsRequest' when calling linkTokenCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _LinkToken["default"];
      return this.apiClient.callApi('/link-token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LinkTokenApi;
}();

exports["default"] = LinkTokenApi;