# MergeAtsApi.Job

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**name** | **String** | The job&#39;s name. | [optional] 
**description** | **String** | The job&#39;s description. | [optional] 
**status** | [**Status757Enum**](Status757Enum.md) | The job&#39;s status. | [optional] 
**remoteCreatedAt** | **Date** | When the third party&#39;s job was created. | [optional] 
**remoteUpdatedAt** | **Date** | When the third party&#39;s job was updated. | [optional] 
**confidential** | **Boolean** | Whether the job is confidential. | [optional] 
**departments** | **[String]** |  | [optional] 
**offices** | **[String]** |  | [optional] 
**hiringManagers** | **[String]** |  | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


