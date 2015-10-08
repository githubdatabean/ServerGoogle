1. Unzip and move the direcory "ServerGoogle" to node environment (Server)
2. Add developer token and other application specific data with Config.json file
3. Install required npm modules (package.json)
4. Replace the "http.js" file under the directory "<root path>/node_modules/soap/lib/"
5. Start the server using the command >node ServerGoogle.js

SERVICE INFORMATION:

Service 1: TrafficEstimatorService
REST POST URL: http://<server ip>:3600/TrafficEstimatorService
PostBody:
{
  "selector": {
    "campaignEstimateRequests": [
      {
        "EstimateRequest.Type": "Value",
        "campaignId": "Value",
        "adGroupEstimateRequests": {
          "EstimateRequest.Type": "Value",
          "adGroupId": "Value",
          "keywordEstimateRequests": {
            "EstimateRequest.Type": "Value",
            "keyword": {
              "cm:id": "Value",
              "cm:type": "Value",
              "cm:Criterion.Type": "Value",
              "cm:text": "Value",
              "cm:matchType": "Value"
            },
            "maxCpc": {
              "cm:ComparableValue.Type": "Value",
              "cm:microAmount": "Value"
            },
            "isNegative": "Value"
          },
          "maxCpc": {
            "cm:ComparableValue.Type": "Value",
            "cm:microAmount": "Value"
          }
        },
        "criteria": {
          "cm:id": "Value",
          "cm:type": "Value",
          "cm:Criterion.Type": "Value"
        },
        "networkSetting": {
          "cm:targetGoogleSearch": "Value",
          "cm:targetSearchNetwork": "Value",
          "cm:targetContentNetwork": "Value",
          "cm:targetPartnerSearchNetwork": "Value"
        },
        "dailyBudget": {
          "cm:ComparableValue.Type": "Value",
          "cm:microAmount": "Value"
        }
      }
    ]
  }
}

Service 2: TargetingIdeaService
REST POST URL: http://<server ip>:3600/TargetingIdeaService
PostBody:
{
  "selector": {
    "searchParameters": {
      "SearchParameter.Type": "Value"
    },
    "ideaType": "Value",
    "requestType": "Value",
    "requestedAttributeTypes": "Value",
    "paging": {
      "cm:startIndex": "Value",
      "cm:numberResults": "Value"
    },
    "localeCode": "Value",
    "currencyCode": "Value"
  }
}

Service 3: getRecentRequest (Service will gives you the most recent SOAP Request XML)
REST GET URL: http://<server ip>:3600/getRecentRequest

DEPLOYED IN SERVER(For Testing):
http://52.10.38.183:3700/getRecentRequest

Thank you !!

