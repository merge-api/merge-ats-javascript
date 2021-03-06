# MergeAtsApi.Offer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**application** | **String** | The application who is receiving the offer. | [optional] 
**creator** | **String** | The user who created the offer. | [optional] 
**remoteCreatedAt** | **Date** | When the third party&#39;s offer was created. | [optional] 
**closedAt** | **Date** | When the offer was closed. | [optional] 
**sentAt** | **Date** | When the offer was sent. | [optional] 
**startDate** | **Date** | The employment start date on the offer. | [optional] 
**status** | [**OfferStatusEnum**](OfferStatusEnum.md) | The offer&#39;s status. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


