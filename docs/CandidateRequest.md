# MergeAtsApi.CandidateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**firstName** | **String** | The candidate&#39;s first name. | [optional] 
**lastName** | **String** | The candidate&#39;s last name. | [optional] 
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
**tags** | **[String]** | Array of &#x60;Tag&#x60; names as strings. | [optional] 
**applications** | **[String]** | Array of &#x60;Application&#x60; object IDs. | [optional] 
**attachments** | **[String]** | Array of &#x60;Attachment&#x60; object IDs. | [optional] 


