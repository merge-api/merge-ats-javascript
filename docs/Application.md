# MergeAtsApi.Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**candidate** | **String** | The candidate applying. | [optional] 
**job** | **String** | The job being applied for. | [optional] 
**isProspect** | **Boolean** | Whether or not the application is a prospect. | [optional] 
**appliedAt** | **Date** | When the application was submitted. | [optional] 
**rejectedAt** | **Date** | When the application was rejected. | [optional] 
**source** | **String** | The application&#39;s source. | [optional] 
**creditedTo** | **String** | The user credited for this application. | [optional] 
**currentStage** | **String** | The application&#39;s current stage. | [optional] 
**rejectReason** | **String** | The application&#39;s reason for rejection. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


