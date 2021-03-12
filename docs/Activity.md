# MergeAtsApi.Activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**user** | **String** | The user the performed the action. | [optional] 
**remoteCreatedAt** | **Date** | When the third party&#39;s activity was created. | [optional] 
**activityType** | [**ActivityTypeEnum**](ActivityTypeEnum.md) | The activity&#39;s type. | [optional] 
**subject** | **String** | The activity&#39;s subject. | [optional] 
**body** | **String** | The activity&#39;s body. | [optional] 
**visibility** | [**VisibilityEnum**](VisibilityEnum.md) | The activity&#39;s visibility. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


