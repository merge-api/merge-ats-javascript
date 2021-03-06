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
    instance = new MergeAtsApi.CreateActivity();
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

  describe('CreateActivity', function() {
    it('should create an instance of CreateActivity', function() {
      // uncomment below and update the code to test CreateActivity
      //var instane = new MergeAtsApi.CreateActivity();
      //expect(instance).to.be.a(MergeAtsApi.CreateActivity);
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new MergeAtsApi.CreateActivity();
      //expect(instance).to.be();
    });

    it('should have the property activityType (base name: "activity_type")', function() {
      // uncomment below and update the code to test the property activityType
      //var instance = new MergeAtsApi.CreateActivity();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new MergeAtsApi.CreateActivity();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new MergeAtsApi.CreateActivity();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instance = new MergeAtsApi.CreateActivity();
      //expect(instance).to.be();
    });

    it('should have the property remoteUserId (base name: "remote_user_id")', function() {
      // uncomment below and update the code to test the property remoteUserId
      //var instance = new MergeAtsApi.CreateActivity();
      //expect(instance).to.be();
    });

  });

}));
