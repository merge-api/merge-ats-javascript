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
import SyncStatusStatusEnum from './SyncStatusStatusEnum';

/**
 * The SyncStatus model module.
 * @module model/SyncStatus
 * @version 1.0
 */
class SyncStatus {
    /**
     * Constructs a new <code>SyncStatus</code>.
     * # The SyncStatus Object ### Description The &#x60;SyncStatus&#x60; object is used to represent the syncing state of an account  ### Usage Example View the &#x60;SyncStatus&#x60; for an account to see how recently its models were synced.
     * @alias module:model/SyncStatus
     * @param modelName {String} 
     * @param modelId {String} 
     * @param lastSyncStart {Date} 
     * @param nextSyncStart {Date} 
     * @param status {module:model/SyncStatusStatusEnum} 
     * @param isInitialSync {Boolean} 
     */
    constructor(modelName, modelId, lastSyncStart, nextSyncStart, status, isInitialSync) { 
        
        SyncStatus.initialize(this, modelName, modelId, lastSyncStart, nextSyncStart, status, isInitialSync);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modelName, modelId, lastSyncStart, nextSyncStart, status, isInitialSync) { 
        obj['model_name'] = modelName;
        obj['model_id'] = modelId;
        obj['last_sync_start'] = lastSyncStart;
        obj['next_sync_start'] = nextSyncStart;
        obj['status'] = status;
        obj['is_initial_sync'] = isInitialSync;
    }

    /**
     * Constructs a <code>SyncStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncStatus} obj Optional instance to populate.
     * @return {module:model/SyncStatus} The populated <code>SyncStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyncStatus();

            if (data.hasOwnProperty('model_name')) {
                obj['model_name'] = ApiClient.convertToType(data['model_name'], 'String');
            }
            if (data.hasOwnProperty('model_id')) {
                obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
            }
            if (data.hasOwnProperty('last_sync_start')) {
                obj['last_sync_start'] = ApiClient.convertToType(data['last_sync_start'], 'Date');
            }
            if (data.hasOwnProperty('next_sync_start')) {
                obj['next_sync_start'] = ApiClient.convertToType(data['next_sync_start'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], SyncStatusStatusEnum);
            }
            if (data.hasOwnProperty('is_initial_sync')) {
                obj['is_initial_sync'] = ApiClient.convertToType(data['is_initial_sync'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} model_name
 */
SyncStatus.prototype['model_name'] = undefined;

/**
 * @member {String} model_id
 */
SyncStatus.prototype['model_id'] = undefined;

/**
 * @member {Date} last_sync_start
 */
SyncStatus.prototype['last_sync_start'] = undefined;

/**
 * @member {Date} next_sync_start
 */
SyncStatus.prototype['next_sync_start'] = undefined;

/**
 * @member {module:model/SyncStatusStatusEnum} status
 */
SyncStatus.prototype['status'] = undefined;

/**
 * @member {Boolean} is_initial_sync
 */
SyncStatus.prototype['is_initial_sync'] = undefined;






export default SyncStatus;

