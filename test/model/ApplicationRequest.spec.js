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
    instance = new MergeAtsApi.ApplicationRequest();
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

  describe('ApplicationRequest', function() {
    it('should create an instance of ApplicationRequest', function() {
      // uncomment below and update the code to test ApplicationRequest
      //var instane = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be.a(MergeAtsApi.ApplicationRequest);
    });

    it('should have the property remoteId (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remoteId
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property candidate (base name: "candidate")', function() {
      // uncomment below and update the code to test the property candidate
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property job (base name: "job")', function() {
      // uncomment below and update the code to test the property job
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property appliedAt (base name: "applied_at")', function() {
      // uncomment below and update the code to test the property appliedAt
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property rejectedAt (base name: "rejected_at")', function() {
      // uncomment below and update the code to test the property rejectedAt
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property creditedTo (base name: "credited_to")', function() {
      // uncomment below and update the code to test the property creditedTo
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property currentStage (base name: "current_stage")', function() {
      // uncomment below and update the code to test the property currentStage
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

    it('should have the property rejectReason (base name: "reject_reason")', function() {
      // uncomment below and update the code to test the property rejectReason
      //var instance = new MergeAtsApi.ApplicationRequest();
      //expect(instance).to.be();
    });

  });

}));
