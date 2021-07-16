# MergeAtsApi.SyncStatusApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncStatusList**](SyncStatusApi.md#syncStatusList) | **GET** /sync-status | 
[**syncStatusResyncCreate**](SyncStatusApi.md#syncStatusResyncCreate) | **POST** /sync-status/resync | 



## syncStatusList

> PaginatedSyncStatusList syncStatusList(xAccountToken, opts)



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
let opts = {
  'cursor': 56, // Number | The pagination cursor value.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.syncStatusList(xAccountToken, opts, (error, data, response) => {
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
 **cursor** | **Number**| The pagination cursor value. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**PaginatedSyncStatusList**](PaginatedSyncStatusList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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

