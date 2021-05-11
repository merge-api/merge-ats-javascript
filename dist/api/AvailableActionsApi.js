"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvailableActions = _interopRequireDefault(require("../model/AvailableActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AvailableActions service.
* @module api/AvailableActionsApi
* @version 1.0
*/
var AvailableActionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AvailableActionsApi. 
  * @alias module:api/AvailableActionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AvailableActionsApi(apiClient) {
    _classCallCheck(this, AvailableActionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the availableActionsRetrieve operation.
   * @callback module:api/AvailableActionsApi~availableActionsRetrieveCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AvailableActions} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of models and actions available for an account.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {module:api/AvailableActionsApi~availableActionsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AvailableActions}
   */


  _createClass(AvailableActionsApi, [{
    key: "availableActionsRetrieve",
    value: function availableActionsRetrieve(xAccountToken, callback) {
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling availableActionsRetrieve");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AvailableActions["default"];
      return this.apiClient.callApi('/available-actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AvailableActionsApi;
}();

exports["default"] = AvailableActionsApi;