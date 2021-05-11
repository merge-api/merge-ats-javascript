
const MergeAts  = require('../src');
const ApiClient = require('../src')
// const ApiClient = require('@mergeapi/merge_ats_api');



// import MergeAts from ''
// import ApiClient from '../src/ApiClient'

function parseEmployees() {

    let defaultClient = MergeAts.ApiClient.instance;
    defaultClient.authentications["tokenAuth"];
    let tokenAuth = defaultClient.authentications['tokenAuth'];
    tokenAuth.apiKey = 'gCTNlqHbmF3z2mGRh92StFH2mtOwF50mtvvs4aX-0ntwI_AbGtrB1g';
    tokenAuth.apiKeyPrefix = 'Bearer';
  
    let apiInstance = new MergeAts.ApplicationsApi();
    let xAccountToken = "WB3IHVOmbYHF4SJ5QTTeyZvO8eHJ7ylzFj0-NBHFpFhM3Y7Rw8BPrQ"; // String | Token identifying the end user.
    let opts = {
      // 'companyId': "companyId_example", // String | If provided, will only return employees for this company.
      // 'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
      // 'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
      // 'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
      // 'includeRemoteData': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
      // 'managerId': "managerId_example", // String | If provided, will only return employees for this manager.
      // 'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
      // 'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
      // 'pageSize': 56, // Number | Number of results to return per page.
      // 'remoteId': "remoteId_example", // String | The API provider's ID for the given object.
      // 'teamId': "teamId_example", // String | If provided, will only return employees for this team.
      'expand': ['candidate']
      // 'workLocationId': "workLocationId_example" // String | If provided, will only return employees for this location.
      
    };
    apiInstance.applicationsList(xAccountToken, opts, (error, data, response) => {
        const appList = data.results;
        appList.forEach((app) => {

            if (app.candidate != undefined){
                console.log(app);
            }
        })
    });
}


parseEmployees()