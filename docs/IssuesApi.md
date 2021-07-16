# MergeAtsApi.IssuesApi

All URIs are relative to *https://api.merge.dev/api/ats/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuesList**](IssuesApi.md#issuesList) | **GET** /issues | 
[**issuesRetrieve**](IssuesApi.md#issuesRetrieve) | **GET** /issues/{id} | 



## issuesList

> PaginatedIssueList issuesList(opts)



Gets issues.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.IssuesApi();
let opts = {
  'accountToken': "accountToken_example", // String | account_token
  'cursor': 56, // Number | The pagination cursor value.
  'endDate': "endDate_example", // String | If included, will only include issues whose most recent action occurred before this time
  'endUserOrganizationName': "endUserOrganizationName_example", // String | end_user_organization_name
  'includeMuted': "includeMuted_example", // String | If True, will include muted issues
  'integrationName': "integrationName_example", // String | integration_name
  'pageSize': 56, // Number | Number of results to return per page.
  'startDate': "startDate_example", // String | If included, will only include issues whose most recent action occurred after this time
  'status': "status_example" // String | status
};
apiInstance.issuesList(opts, (error, data, response) => {
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
 **accountToken** | **String**| account_token | [optional] 
 **cursor** | **Number**| The pagination cursor value. | [optional] 
 **endDate** | **String**| If included, will only include issues whose most recent action occurred before this time | [optional] 
 **endUserOrganizationName** | **String**| end_user_organization_name | [optional] 
 **includeMuted** | **String**| If True, will include muted issues | [optional] 
 **integrationName** | **String**| integration_name | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 
 **startDate** | **String**| If included, will only include issues whose most recent action occurred after this time | [optional] 
 **status** | **String**| status | [optional] 

### Return type

[**PaginatedIssueList**](PaginatedIssueList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuesRetrieve

> Issue issuesRetrieve(id)



Get a specific issue.

### Example

```javascript
import MergeAtsApi from 'merge_ats_api';
let defaultClient = MergeAtsApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeAtsApi.IssuesApi();
let id = null; // String | 
apiInstance.issuesRetrieve(id, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 

### Return type

[**Issue**](Issue.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

