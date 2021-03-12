"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModelOperation model module.
 * @module model/ModelOperation
 * @version 1.0
 */
var ModelOperation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ModelOperation</code>.
   * # The ModelOperation Object ### Description The &#x60;ModelOperation&#x60; object is used to represent the operations that are currently supported for a given model.  ### Usage Example View what operations are supported for the &#x60;Candidate&#x60; endpoint.
   * @alias module:model/ModelOperation
   * @param modelName {String} 
   * @param availableOperations {Array.<String>} 
   * @param requiredPostParameters {Array.<String>} 
   */
  function ModelOperation(modelName, availableOperations, requiredPostParameters) {
    _classCallCheck(this, ModelOperation);

    ModelOperation.initialize(this, modelName, availableOperations, requiredPostParameters);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModelOperation, null, [{
    key: "initialize",
    value: function initialize(obj, modelName, availableOperations, requiredPostParameters) {
      obj['model_name'] = modelName;
      obj['available_operations'] = availableOperations;
      obj['required_post_parameters'] = requiredPostParameters;
    }
    /**
     * Constructs a <code>ModelOperation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelOperation} obj Optional instance to populate.
     * @return {module:model/ModelOperation} The populated <code>ModelOperation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModelOperation();

        if (data.hasOwnProperty('model_name')) {
          obj['model_name'] = _ApiClient["default"].convertToType(data['model_name'], 'String');
        }

        if (data.hasOwnProperty('available_operations')) {
          obj['available_operations'] = _ApiClient["default"].convertToType(data['available_operations'], ['String']);
        }

        if (data.hasOwnProperty('required_post_parameters')) {
          obj['required_post_parameters'] = _ApiClient["default"].convertToType(data['required_post_parameters'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ModelOperation;
}();
/**
 * @member {String} model_name
 */


ModelOperation.prototype['model_name'] = undefined;
/**
 * @member {Array.<String>} available_operations
 */

ModelOperation.prototype['available_operations'] = undefined;
/**
 * @member {Array.<String>} required_post_parameters
 */

ModelOperation.prototype['required_post_parameters'] = undefined;
var _default = ModelOperation;
exports["default"] = _default;