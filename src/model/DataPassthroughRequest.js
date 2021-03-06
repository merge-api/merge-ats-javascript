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

import ApiClient from '../ApiClient';
import MethodEnum from './MethodEnum';

/**
 * The DataPassthroughRequest model module.
 * @module model/DataPassthroughRequest
 * @version 1.0
 */
class DataPassthroughRequest {
    /**
     * Constructs a new <code>DataPassthroughRequest</code>.
     * # The DataPassthrough Object ### Description The &#x60;DataPassthrough&#x60; object is used to send information to an otherwise-unsupported third-party endpoint.  ### Usage Example Create a &#x60;DataPassthrough&#x60; to get team hierarchies from your Rippling integration.
     * @alias module:model/DataPassthroughRequest
     * @param method {module:model/MethodEnum} 
     * @param path {String} 
     */
    constructor(method, path) { 
        
        DataPassthroughRequest.initialize(this, method, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, method, path) { 
        obj['method'] = method;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>DataPassthroughRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataPassthroughRequest} obj Optional instance to populate.
     * @return {module:model/DataPassthroughRequest} The populated <code>DataPassthroughRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataPassthroughRequest();

            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], MethodEnum);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('base_url_override')) {
                obj['base_url_override'] = ApiClient.convertToType(data['base_url_override'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MethodEnum} method
 */
DataPassthroughRequest.prototype['method'] = undefined;

/**
 * @member {String} path
 */
DataPassthroughRequest.prototype['path'] = undefined;

/**
 * @member {String} base_url_override
 */
DataPassthroughRequest.prototype['base_url_override'] = undefined;

/**
 * @member {Object.<String, Object>} data
 */
DataPassthroughRequest.prototype['data'] = undefined;

/**
 * @member {Object.<String, Object>} headers
 */
DataPassthroughRequest.prototype['headers'] = undefined;






export default DataPassthroughRequest;

