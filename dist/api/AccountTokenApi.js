"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountToken = _interopRequireDefault(require("../model/AccountToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AccountToken service.
* @module api/AccountTokenApi
* @version 1.0
*/
var AccountTokenApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountTokenApi. 
  * @alias module:api/AccountTokenApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountTokenApi(apiClient) {
    _classCallCheck(this, AccountTokenApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the accountTokenRetrieve operation.
   * @callback module:api/AccountTokenApi~accountTokenRetrieveCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AccountToken} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the account token for the end user with the provided public token.
   * @param {String} publicToken 
   * @param {module:api/AccountTokenApi~accountTokenRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AccountToken}
   */


  _createClass(AccountTokenApi, [{
    key: "accountTokenRetrieve",
    value: function accountTokenRetrieve(publicToken, callback) {
      var postBody = null; // verify the required parameter 'publicToken' is set

      if (publicToken === undefined || publicToken === null) {
        throw new Error("Missing the required parameter 'publicToken' when calling accountTokenRetrieve");
      }

      var pathParams = {
        'public_token': publicToken
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountToken["default"];
      return this.apiClient.callApi('/account-token/{public_token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AccountTokenApi;
}();

exports["default"] = AccountTokenApi;