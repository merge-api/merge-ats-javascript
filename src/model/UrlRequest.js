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
import UrlTypeEnum from './UrlTypeEnum';

/**
 * The UrlRequest model module.
 * @module model/UrlRequest
 * @version 1.0
 */
class UrlRequest {
    /**
     * Constructs a new <code>UrlRequest</code>.
     * # The Url Object ### Description The &#x60;Url&#x60; object is used to represent a candidate&#39;s website.  ### Usage Example Fetch from the &#x60;GET Candidate&#x60; endpoint and view their website urls.
     * @alias module:model/UrlRequest
     */
    constructor() { 
        
        UrlRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UrlRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UrlRequest} obj Optional instance to populate.
     * @return {module:model/UrlRequest} The populated <code>UrlRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UrlRequest();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('url_type')) {
                obj['url_type'] = ApiClient.convertToType(data['url_type'], UrlTypeEnum);
            }
        }
        return obj;
    }


}

/**
 * The site's url.
 * @member {String} value
 */
UrlRequest.prototype['value'] = undefined;

/**
 * The type of site.
 * @member {module:model/UrlTypeEnum} url_type
 */
UrlRequest.prototype['url_type'] = undefined;






export default UrlRequest;
