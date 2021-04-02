# MergeAtsApi.PassthroughApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**passthroughCreate**](PassthroughApi.md#passthroughCreate) | **POST** /passthrough | 



## passthroughCreate

> RemoteResponse passthroughCreate(xAccountToken, dataPassthroughRequest)



Pull data from an endpoint not currently supported by Merge.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.PassthroughApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let dataPassthroughRequest = new MergeAtsApi.DataPassthroughRequest(); // DataPassthroughRequest | 
apiInstance.passthroughCreate(xAccountToken, dataPassthroughRequest, (error, data, response) => {
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
 **xAccountToken** | **String**| Token identifying the end user. | 
 **dataPassthroughRequest** | [**DataPassthroughRequest**](DataPassthroughRequest.md)|  | 

### Return type

[**RemoteResponse**](RemoteResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

