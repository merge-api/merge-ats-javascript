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

/**
 * The RemoteData model module.
 * @module model/RemoteData
 * @version 1.0
 */
class RemoteData {
    /**
     * Constructs a new <code>RemoteData</code>.
     * @alias module:model/RemoteData
     * @param path {String} 
     */
    constructor(path) { 
        
        RemoteData.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>RemoteData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteData} obj Optional instance to populate.
     * @return {module:model/RemoteData} The populated <code>RemoteData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteData();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
RemoteData.prototype['path'] = undefined;

/**
 * @member {Object.<String, Object>} data
 */
RemoteData.prototype['data'] = undefined;






export default RemoteData;

