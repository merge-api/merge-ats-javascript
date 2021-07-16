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
    instance = new MergeAtsApi.RemoteUserRequest();
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

  describe('RemoteUserRequest', function() {
    it('should create an instance of RemoteUserRequest', function() {
      // uncomment below and update the code to test RemoteUserRequest
      //var instane = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be.a(MergeAtsApi.RemoteUserRequest);
    });

    it('should have the property remoteId (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remoteId
      //var instance = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instance = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property remoteCreatedAt (base name: "remote_created_at")', function() {
      // uncomment below and update the code to test the property remoteCreatedAt
      //var instance = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property accessRole (base name: "access_role")', function() {
      // uncomment below and update the code to test the property accessRole
      //var instance = new MergeAtsApi.RemoteUserRequest();
      //expect(instance).to.be();
    });

  });

}));
