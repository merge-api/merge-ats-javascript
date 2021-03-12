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
import AccessRoleEnum from './AccessRoleEnum';

/**
 * The CreateRemoteUser model module.
 * @module model/CreateRemoteUser
 * @version 1.0
 */
class CreateRemoteUser {
    /**
     * Constructs a new <code>CreateRemoteUser</code>.
     * # The RemoteUser Object ### Description The &#x60;RemoteUser&#x60; object is used to represent a third party user.
     * @alias module:model/CreateRemoteUser
     */
    constructor() { 
        
        CreateRemoteUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateRemoteUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRemoteUser} obj Optional instance to populate.
     * @return {module:model/CreateRemoteUser} The populated <code>CreateRemoteUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRemoteUser();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('access_role')) {
                obj['access_role'] = ApiClient.convertToType(data['access_role'], AccessRoleEnum);
            }
            if (data.hasOwnProperty('remote_user_id')) {
                obj['remote_user_id'] = ApiClient.convertToType(data['remote_user_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The user's first name.
 * @member {String} first_name
 */
CreateRemoteUser.prototype['first_name'] = undefined;

/**
 * The user's last name.
 * @member {String} last_name
 */
CreateRemoteUser.prototype['last_name'] = undefined;

/**
 * The user's email.
 * @member {String} email
 */
CreateRemoteUser.prototype['email'] = undefined;

/**
 * Whether the user's account had been disabled.
 * @member {Boolean} disabled
 */
CreateRemoteUser.prototype['disabled'] = undefined;

/**
 * The user's role.
 * @member {module:model/AccessRoleEnum} access_role
 */
CreateRemoteUser.prototype['access_role'] = undefined;

/**
 * @member {String} remote_user_id
 */
CreateRemoteUser.prototype['remote_user_id'] = undefined;






export default CreateRemoteUser;

