import ApiClient from './ApiClient';


function convertRelatedObjectToType(data, relatedModel) {
    if (Array.isArray(data)) {
        if (data.length == 0) {
            return []
        } 
        if (typeof data[0] == 'string') {
            return ApiClient.convertToType(data, ['String']);
        } else {
            return ApiClient.convertToType(data, [relatedModel]);
        }
    } else {
        if (typeof data == 'string') {
            return ApiClient.convertToType(data, 'String');
        } else {
            return ApiClient.convertToType(data, relatedModel);
        }
    }
}

export default convertRelatedObjectToType;