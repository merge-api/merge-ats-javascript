# MergeAtsApi.InterviewsApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**interviewsCreate**](InterviewsApi.md#interviewsCreate) | **POST** /interviews | 
[**interviewsList**](InterviewsApi.md#interviewsList) | **GET** /interviews | 
[**interviewsRetrieve**](InterviewsApi.md#interviewsRetrieve) | **GET** /interviews/{id} | 



## interviewsCreate

> ScheduledInterview interviewsCreate(xAccountToken, opts)



Creates a &#x60;ScheduledInterview&#x60; object with the given values.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.InterviewsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'remoteUserId': "remoteUserId_example", // String | The ID of the RemoteUser modifying the resource. This can be found in the ID field (not remote_id) in the RemoteUser table.
  'runAsync': true, // Boolean | Whether or not third-party updates should be run asynchronously.
  'scheduledInterviewRequest': new MergeAtsApi.ScheduledInterviewRequest() // ScheduledInterviewRequest | 
};
apiInstance.interviewsCreate(xAccountToken, opts, (error, data, response) => {
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
 **remoteUserId** | **String**| The ID of the RemoteUser modifying the resource. This can be found in the ID field (not remote_id) in the RemoteUser table. | [optional] 
 **runAsync** | **Boolean**| Whether or not third-party updates should be run asynchronously. | [optional] 
 **scheduledInterviewRequest** | [**ScheduledInterviewRequest**](ScheduledInterviewRequest.md)|  | [optional] 

### Return type

[**ScheduledInterview**](ScheduledInterview.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## interviewsList

> PaginatedScheduledInterviewList interviewsList(xAccountToken, opts)



Returns a list of &#x60;ScheduledInterview&#x60; objects.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.InterviewsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'applicationId': "applicationId_example", // String | If provided, will only return interviews for this application.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'expand': interviewers,organizer,application,job_interview_stage, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'includeRemoteData': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'jobInterviewStageId': "jobInterviewStageId_example", // String | If provided, will only return interviews at this stage.
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'organizerId': "organizerId_example", // String | If provided, will only return interviews organized by this user.
  'pageSize': 56, // Number | Number of results to return per page.
  'remoteId': "remoteId_example" // String | The API provider's ID for the given object.
};
apiInstance.interviewsList(xAccountToken, opts, (error, data, response) => {
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
 **applicationId** | **String**| If provided, will only return interviews for this application. | [optional] 
 **createdAfter** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **createdBefore** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **jobInterviewStageId** | **String**| If provided, will only return interviews at this stage. | [optional] 
 **modifiedAfter** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modifiedBefore** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **organizerId** | **String**| If provided, will only return interviews organized by this user. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 
 **remoteId** | **String**| The API provider&#39;s ID for the given object. | [optional] 

### Return type

[**PaginatedScheduledInterviewList**](PaginatedScheduledInterviewList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## interviewsRetrieve

> ScheduledInterview interviewsRetrieve(xAccountToken, id, opts)



Returns a &#x60;ScheduledInterview&#x60; object with the given &#x60;id&#x60;.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.InterviewsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'expand': interviewers,organizer,application,job_interview_stage, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'includeRemoteData': true // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
};
apiInstance.interviewsRetrieve(xAccountToken, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 

### Return type

[**ScheduledInterview**](ScheduledInterview.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

