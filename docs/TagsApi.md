# MergeAtsApi.TagsApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsCreate**](TagsApi.md#tagsCreate) | **POST** /tags | 
[**tagsList**](TagsApi.md#tagsList) | **GET** /tags | 



## tagsCreate

> Tag tagsCreate(xAccountToken, opts)



Creates a &#x60;Tag&#x60; object with the given values.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.TagsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'runAsync': true, // Boolean | Whether or not third-party updates should be run asynchronously.
  'createTag': new MergeAtsApi.CreateTag() // CreateTag | 
};
apiInstance.tagsCreate(xAccountToken, opts, (error, data, response) => {
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
 **runAsync** | **Boolean**| Whether or not third-party updates should be run asynchronously. | [optional] 
 **createTag** | [**CreateTag**](CreateTag.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## tagsList

> PaginatedTagList tagsList(xAccountToken, opts)



Returns a list of &#x60;Tag&#x60; objects.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.TagsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'includeRemoteData': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'pageSize': 56, // Number | Number of results to return per page.
  'remoteId': "remoteId_example" // String | The API provider's ID for the given object.
};
apiInstance.tagsList(xAccountToken, opts, (error, data, response) => {
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
 **createdAfter** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **createdBefore** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **modifiedAfter** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modifiedBefore** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 
 **remoteId** | **String**| The API provider&#39;s ID for the given object. | [optional] 

### Return type

[**PaginatedTagList**](PaginatedTagList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

