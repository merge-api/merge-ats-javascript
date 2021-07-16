# MergeAtsApi.ScheduledInterview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**application** | **String** | The application being interviewed. | [optional] 
**jobInterviewStage** | **String** | The stage of the interview. | [optional] 
**organizer** | **String** | The user organizing the interview. | [optional] 
**interviewers** | **[String]** | Array of &#x60;RemoteUser&#x60; IDs. | [optional] 
**location** | **String** | The interview&#39;s location. | [optional] 
**startAt** | **Date** | When the interview was started. | [optional] 
**endAt** | **Date** | When the interview was ended. | [optional] 
**remoteCreatedAt** | **Date** | When the third party&#39;s interview was created. | [optional] 
**remoteUpdatedAt** | **Date** | When the third party&#39;s interview was updated. | [optional] 
**status** | [**ScheduledInterviewStatusEnum**](ScheduledInterviewStatusEnum.md) | The interview&#39;s status. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


