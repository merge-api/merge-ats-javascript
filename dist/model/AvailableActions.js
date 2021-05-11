"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountIntegration = _interopRequireDefault(require("./AccountIntegration"));

var _ModelOperation = _interopRequireDefault(require("./ModelOperation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AvailableActions model module.
 * @module model/AvailableActions
 * @version 1.0
 */
var AvailableActions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AvailableActions</code>.
   * # The AvailableActions Object ### Description The &#x60;Activity&#x60; object is used to see all available model/operation combinations for an integration.  ### Usage Example Fetch all the actions available for the &#x60;Zenefits&#x60; integration.
   * @alias module:model/AvailableActions
   * @param integration {module:model/AccountIntegration} 
   * @param passthroughAvailable {Boolean} 
   */
  function AvailableActions(integration, passthroughAvailable) {
    _classCallCheck(this, AvailableActions);

    AvailableActions.initialize(this, integration, passthroughAvailable);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvailableActions, null, [{
    key: "initialize",
    value: function initialize(obj, integration, passthroughAvailable) {
      obj['integration'] = integration;
      obj['passthrough_available'] = passthroughAvailable;
    }
    /**
     * Constructs a <code>AvailableActions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableActions} obj Optional instance to populate.
     * @return {module:model/AvailableActions} The populated <code>AvailableActions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvailableActions();

        if (data.hasOwnProperty('integration')) {
          obj['integration'] = _AccountIntegration["default"].constructFromObject(data['integration']);
        }

        if (data.hasOwnProperty('passthrough_available')) {
          obj['passthrough_available'] = _ApiClient["default"].convertToType(data['passthrough_available'], 'Boolean');
        }

        if (data.hasOwnProperty('available_model_operations')) {
          obj['available_model_operations'] = _ApiClient["default"].convertToType(data['available_model_operations'], [_ModelOperation["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AvailableActions;
}();
/**
 * @member {module:model/AccountIntegration} integration
 */


AvailableActions.prototype['integration'] = undefined;
/**
 * @member {Boolean} passthrough_available
 */

AvailableActions.prototype['passthrough_available'] = undefined;
/**
 * @member {Array.<module:model/ModelOperation>} available_model_operations
 */

AvailableActions.prototype['available_model_operations'] = undefined;
var _default = AvailableActions;
exports["default"] = _default;