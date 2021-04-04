# MergeAtsApi.GenerateKeyApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateKeyCreate**](GenerateKeyApi.md#generateKeyCreate) | **POST** /generate-key | 



## generateKeyCreate

> RemoteKey generateKeyCreate(generateRemoteKeyRequest)



Create a remote key.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.GenerateKeyApi();
let generateRemoteKeyRequest = new MergeAtsApi.GenerateRemoteKeyRequest(); // GenerateRemoteKeyRequest | 
apiInstance.generateKeyCreate(generateRemoteKeyRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateRemoteKeyRequest** | [**GenerateRemoteKeyRequest**](GenerateRemoteKeyRequest.md)|  | 

### Return type

[**RemoteKey**](RemoteKey.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

