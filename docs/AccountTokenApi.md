# MergeAtsApi.AccountTokenApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountTokenRetrieve**](AccountTokenApi.md#accountTokenRetrieve) | **GET** /account-token/{public_token} | 



## accountTokenRetrieve

> AccountToken accountTokenRetrieve(publicToken)



Returns the account token for the end user with the provided public token.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.AccountTokenApi();
let publicToken = "publicToken_example"; // String | 
apiInstance.accountTokenRetrieve(publicToken, (error, data, response) => {
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
 **publicToken** | **String**|  | 

### Return type

[**AccountToken**](AccountToken.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

