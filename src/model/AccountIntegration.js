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
 * The AccountIntegration model module.
 * @module model/AccountIntegration
 * @version 1.0
 */
class AccountIntegration {
    /**
     * Constructs a new <code>AccountIntegration</code>.
     * @alias module:model/AccountIntegration
     * @param name {String} Company name.
     */
    constructor(name) { 
        
        AccountIntegration.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>AccountIntegration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountIntegration} obj Optional instance to populate.
     * @return {module:model/AccountIntegration} The populated <code>AccountIntegration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountIntegration();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('square_image')) {
                obj['square_image'] = ApiClient.convertToType(data['square_image'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Company name.
 * @member {String} name
 */
AccountIntegration.prototype['name'] = undefined;

/**
 * Category or categories this integration belongs to.
 * @member {Array.<module:model/AccountIntegration.CategoriesEnum>} categories
 */
AccountIntegration.prototype['categories'] = undefined;

/**
 * Company logo in rectangular shape.
 * @member {String} image
 */
AccountIntegration.prototype['image'] = undefined;

/**
 * Company logo in square shape.
 * @member {String} square_image
 */
AccountIntegration.prototype['square_image'] = undefined;

/**
 * The color of this integration used for buttons and text throughout the app and landing pages.
 * @member {String} color
 */
AccountIntegration.prototype['color'] = undefined;





/**
 * Allowed values for the <code>categories</code> property.
 * @enum {String}
 * @readonly
 */
AccountIntegration['CategoriesEnum'] = {

    /**
     * value: "hris"
     * @const
     */
    "hris": "hris",

    /**
     * value: "ats"
     * @const
     */
    "ats": "ats",

    /**
     * value: "accounting"
     * @const
     */
    "accounting": "accounting"
};



export default AccountIntegration;

