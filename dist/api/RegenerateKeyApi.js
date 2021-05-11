"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteKey = _interopRequireDefault(require("../model/RemoteKey"));

var _RemoteKeyForRegenerationRequest = _interopRequireDefault(require("../model/RemoteKeyForRegenerationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* RegenerateKey service.
* @module api/RegenerateKeyApi
* @version 1.0
*/
var RegenerateKeyApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RegenerateKeyApi. 
  * @alias module:api/RegenerateKeyApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RegenerateKeyApi(apiClient) {
    _classCallCheck(this, RegenerateKeyApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the regenerateKeyCreate operation.
   * @callback module:api/RegenerateKeyApi~regenerateKeyCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RemoteKey} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Exchange remote keys.
   * @param {module:model/RemoteKeyForRegenerationRequest} remoteKeyForRegenerationRequest 
   * @param {module:api/RegenerateKeyApi~regenerateKeyCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/RemoteKey}
   */


  _createClass(RegenerateKeyApi, [{
    key: "regenerateKeyCreate",
    value: function regenerateKeyCreate(remoteKeyForRegenerationRequest, callback) {
      var postBody = remoteKeyForRegenerationRequest; // verify the required parameter 'remoteKeyForRegenerationRequest' is set

      if (remoteKeyForRegenerationRequest === undefined || remoteKeyForRegenerationRequest === null) {
        throw new Error("Missing the required parameter 'remoteKeyForRegenerationRequest' when calling regenerateKeyCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _RemoteKey["default"];
      return this.apiClient.callApi('/regenerate-key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RegenerateKeyApi;
}();

exports["default"] = RegenerateKeyApi;