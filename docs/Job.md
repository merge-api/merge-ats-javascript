# MergeAtsApi.Job

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**name** | **String** | The job&#39;s name. | [optional] 
**description** | **String** | The job&#39;s description. | [optional] 
**status** | [**JobStatusEnum**](JobStatusEnum.md) | The job&#39;s status. | [optional] 
**remoteCreatedAt** | **Date** | When the third party&#39;s job was created. | [optional] 
**remoteUpdatedAt** | **Date** | When the third party&#39;s job was updated. | [optional] 
**confidential** | **Boolean** | Whether the job is confidential. | [optional] 
**departments** | **[String]** | IDs of &#x60;Department&#x60; objects for this &#x60;Job&#x60;. | [optional] 
**offices** | **[String]** | IDs of &#x60;Office&#x60; objects for this &#x60;Job&#x60;. | [optional] 
**hiringManagers** | **[String]** | IDs of &#x60;RemoteUser&#x60; objects that serve as hiring managers for this &#x60;Job&#x60;. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


