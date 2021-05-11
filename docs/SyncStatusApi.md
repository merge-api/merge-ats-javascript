# MergeAtsApi.SyncStatusApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncStatusResyncCreate**](SyncStatusApi.md#syncStatusResyncCreate) | **POST** /sync-status/resync | 
[**syncStatusRetrieve**](SyncStatusApi.md#syncStatusRetrieve) | **GET** /sync-status | 



## syncStatusResyncCreate

> SyncStatus syncStatusResyncCreate(xAccountToken)



Force resync of all models.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.SyncStatusApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
apiInstance.syncStatusResyncCreate(xAccountToken, (error, data, response) => {
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

### Return type

[**SyncStatus**](SyncStatus.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## syncStatusRetrieve

> SyncStatus syncStatusRetrieve(xAccountToken)



Get syncing status.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.SyncStatusApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
apiInstance.syncStatusRetrieve(xAccountToken, (error, data, response) => {
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

### Return type

[**SyncStatus**](SyncStatus.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

