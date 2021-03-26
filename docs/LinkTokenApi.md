# MergeAtsApi.LinkTokenApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkTokenCreate**](LinkTokenApi.md#linkTokenCreate) | **POST** /link-token | 



## linkTokenCreate

> LinkToken linkTokenCreate(endUserDetailsRequest)



Creates a link token to be used when linking a new end user.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.LinkTokenApi();
let endUserDetailsRequest = new MergeAtsApi.EndUserDetailsRequest(); // EndUserDetailsRequest | 
apiInstance.linkTokenCreate(endUserDetailsRequest, (error, data, response) => {
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
 **endUserDetailsRequest** | [**EndUserDetailsRequest**](EndUserDetailsRequest.md)|  | 

### Return type

[**LinkToken**](LinkToken.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

