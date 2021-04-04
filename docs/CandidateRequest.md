# MergeAtsApi.CandidateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**firstName** | **String** | The user&#39;s first name. | [optional] 
**lastName** | **String** | The user&#39;s last name. | [optional] 
**company** | **String** | The candidate&#39;s current company. | [optional] 
**title** | **String** | The candidate&#39;s current title. | [optional] 
**remoteCreatedAt** | **Date** | When the third party&#39;s candidate was created. | [optional] 
**remoteUpdatedAt** | **Date** | When the third party&#39;s candidate was updated. | [optional] 
**lastInteractionAt** | **Date** | When the most recent candidate interaction occurred. | [optional] 
**isPrivate** | **Boolean** | Whether or not the candidate is private. | [optional] 
**canEmail** | **Boolean** | Whether or not the candidate can be emailed. | [optional] 
**locations** | **[String]** | The candidate&#39;s locations. | [optional] 
**phoneNumbers** | [**[PhoneNumberRequest]**](PhoneNumberRequest.md) |  | [optional] 
**emailAddresses** | [**[EmailAddressRequest]**](EmailAddressRequest.md) |  | [optional] 
**urls** | [**[UrlRequest]**](UrlRequest.md) |  | [optional] 
**tags** | **[String]** |  | [optional] 


