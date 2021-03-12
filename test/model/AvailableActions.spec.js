/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MergeAtsApi);
  }
}(this, function(expect, MergeAtsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MergeAtsApi.AvailableActions();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AvailableActions', function() {
    it('should create an instance of AvailableActions', function() {
      // uncomment below and update the code to test AvailableActions
      //var instane = new MergeAtsApi.AvailableActions();
      //expect(instance).to.be.a(MergeAtsApi.AvailableActions);
    });

    it('should have the property integration (base name: "integration")', function() {
      // uncomment below and update the code to test the property integration
      //var instance = new MergeAtsApi.AvailableActions();
      //expect(instance).to.be();
    });

    it('should have the property passthroughAvailable (base name: "passthrough_available")', function() {
      // uncomment below and update the code to test the property passthroughAvailable
      //var instance = new MergeAtsApi.AvailableActions();
      //expect(instance).to.be();
    });

    it('should have the property availableModelOperations (base name: "available_model_operations")', function() {
      // uncomment below and update the code to test the property availableModelOperations
      //var instance = new MergeAtsApi.AvailableActions();
      //expect(instance).to.be();
    });

  });

}));
