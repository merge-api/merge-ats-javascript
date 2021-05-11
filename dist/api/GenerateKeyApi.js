"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenerateRemoteKeyRequest = _interopRequireDefault(require("../model/GenerateRemoteKeyRequest"));

var _RemoteKey = _interopRequireDefault(require("../model/RemoteKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* GenerateKey service.
* @module api/GenerateKeyApi
* @version 1.0
*/
var GenerateKeyApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GenerateKeyApi. 
  * @alias module:api/GenerateKeyApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GenerateKeyApi(apiClient) {
    _classCallCheck(this, GenerateKeyApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the generateKeyCreate operation.
   * @callback module:api/GenerateKeyApi~generateKeyCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RemoteKey} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a remote key.
   * @param {module:model/GenerateRemoteKeyRequest} generateRemoteKeyRequest 
   * @param {module:api/GenerateKeyApi~generateKeyCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/RemoteKey}
   */


  _createClass(GenerateKeyApi, [{
    key: "generateKeyCreate",
    value: function generateKeyCreate(generateRemoteKeyRequest, callback) {
      var postBody = generateRemoteKeyRequest; // verify the required parameter 'generateRemoteKeyRequest' is set

      if (generateRemoteKeyRequest === undefined || generateRemoteKeyRequest === null) {
        throw new Error("Missing the required parameter 'generateRemoteKeyRequest' when calling generateKeyCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _RemoteKey["default"];
      return this.apiClient.callApi('/generate-key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GenerateKeyApi;
}();

exports["default"] = GenerateKeyApi;