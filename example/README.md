
# Socket apple-search-ads - ver 0.0.2

Socket wrapping Apple SearchAds API

## Installation

Install socket from syncano registry.

```sh
$ npx s add apple-search-ads
```


## Index

* [Config](#_config)
* [Endpoints](#_endpoints)


## Config

* [orgId](#_config-orgId)
* [pem](#_config-pem)
* [key](#_config-key)
* [expose](#_config-expose)

|Options | Type | Required|
|--------|------|---------|
|orgId|number| Yes |
|pem|string| Yes |
|key|string| Yes |
|expose|boolean| No |

* orgId<a name="#_config-orgId"></a>

orgId that you wish to manage, get from SearchAds WebUI

* pem<a name="#_config-pem"></a>

PEM certificate from SearchAds Web UI.
Can be set later on with `$ npx s config-set apple-search-ads pem -- "$(cat cert.pem)"`


* key<a name="#_config-key"></a>

Certificate key
Can be set later on with `$ npx s config-set apple-search-ads key -- "$(cat cert.key)"`


* expose<a name="#_config-expose"></a>

Expose auth info on private endpoint apple-search-ads/auth.
Can be useful for implementing custom functionality using
apple-search-ads. Drawback is that all endpoints will have
access to your searchads credentials.




## Endpoints <a name="_endpoints"></a>

* [apple-search-ads/schema](#_endpoints-schema)
* [apple-search-ads/adgroup](#_endpoints-adgroup)
* [apple-search-ads/adgroups](#_endpoints-adgroups)
* [apple-search-ads/auth](#_endpoints-auth)
* [apple-search-ads/campaigns](#_endpoints-campaigns)
* [apple-search-ads/campaign](#_endpoints-campaign)
* [apple-search-ads/find-campaigns](#_endpoints-find-campaigns)
* [apple-search-ads/find-adgroups](#_endpoints-find-adgroups)

#### schema<a name="_endpoints-schema"></a>

Return socket schemas.



#### adgroup <span style="color:gray">*PRIVATE*</span><a name="_endpoints-adgroup"></a>

Adgroup endpoint. Check out [Apple SearchAds API Adgroup Object](https://developer.apple.com/library/content/documentation/General/Conceptual/AppStoreSearchAdsAPIReference/Campaign_Resources.html#//apple_ref/doc/uid/TP40017495-CH14-SW5) for more information.


###### GET
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">adgroupId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>


* campaignId
* adgroupId

###### POST
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">name</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">defaultCpcBid</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">startTime</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">automatedKeywordsOptIn</td>
    <td style="vertical-align:top">boolean
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">targetingDimensions</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">adminArea</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">age</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">maxAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">minAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">appDownloaders</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">excluded</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">dayPart</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">userTime</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of integer

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">deviceClass</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|IPAD|
|IPHONE|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">gender</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|M|
|F|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">locality</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">adgroupId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>


* campaignId

Returned when creating add group.

* name

Unique within campaign

* defaultCpcBid

Default const per click bid.

* startTime

Start date for the ad group. Can't be 24 hours earlier than current time.

* automatedKeywordsOptIn
* targetingDimensions
* adgroupId


#### adgroups <span style="color:gray">*PRIVATE*</span><a name="_endpoints-adgroups"></a>

Adgroups endpoint. Check out [Apple SearchAds API Adgroup Object](https://developer.apple.com/library/content/documentation/General/Conceptual/AppStoreSearchAdsAPIReference/Campaign_Resources.html#//apple_ref/doc/uid/TP40017495-CH14-SW5) for more information.



###### GET

List adgroups

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>


* campaignId

###### POST

Create new adgroup

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">name</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">defaultCpcBid</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">cpaGoal</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">storefronts</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|US|
|GB|
|AU|
|NZ|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">startTime</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">endTime</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">keywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">bidAmount</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ACTIVE|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">negativeKeywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">automatedKeywordsOptIn</td>
    <td style="vertical-align:top">boolean
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">targetingDimensions</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">adminArea</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">age</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">maxAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">minAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">appDownloaders</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">excluded</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">dayPart</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">userTime</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of integer

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">deviceClass</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|IPAD|
|IPHONE|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">gender</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|M|
|F|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">locality</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ENABLED|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>


* campaignId

Returned when creating add group.

* name

Unique within campaign

* defaultCpcBid

Default const per click bid.

* cpaGoal

optional cost per click bid.

* storefronts
* startTime

Start date for the ad group. Can't be 24 hours earlier than current time.

* endTime

End date for the ad group.

* keywords
* negativeKeywords
* automatedKeywordsOptIn
* targetingDimensions
* status


#### auth <span style="color:gray">*PRIVATE*</span><a name="_endpoints-auth"></a>

If config.expose is set to true, return auth data.
```javascript
import Syncano from '@syncano/core'
export default ctx => new Syncnao(ctx).endpoints.get('apple-search-ads/auth')
```




#### campaigns <span style="color:gray">*PRIVATE*</span><a name="_endpoints-campaigns"></a>

Create campaign/Get campaigns. Check out [Apple SearchAds API Campaign Object](https://developer.apple.com/library/content/documentation/General/Conceptual/AppStoreSearchAdsAPIReference/Campaign_Resources.html#//apple_ref/doc/uid/TP40017495-CH14-SW2) for more information.



###### GET

Get campaigns.





###### POST

Create new campaign

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">name</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">budgetAmount</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">dailyBudgetAmount</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">adamId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ENABLED|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">negativeKeywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">adGroups</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">name</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">defaultCpcBid</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">cpaGoal</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">storefronts</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|US|
|GB|
|AU|
|NZ|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">startTime</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">endTime</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">keywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">bidAmount</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ACTIVE|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">negativeKeywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">automatedKeywordsOptIn</td>
    <td style="vertical-align:top">boolean
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">targetingDimensions</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">adminArea</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">age</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">maxAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">minAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">appDownloaders</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">excluded</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">dayPart</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">userTime</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of integer

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">deviceClass</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|IPAD|
|IPHONE|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">gender</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|M|
|F|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">locality</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ENABLED|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">storefront</td>
    <td style="vertical-align:top">

|Enum|
|----|
|US|
|GB|
|AU|
|NZ|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>


* name

unique name within org

* budgetAmount

Once set can only be increased.

* dailyBudgetAmount

Daily cap

* adamId

Adam ID of promoted app.

* status

Whether runs or not.

* negativeKeywords
* adGroups
* storefront

The app store territory in which you want to promote your app.



#### campaign <span style="color:gray">*PRIVATE*</span><a name="_endpoints-campaign"></a>

Update/Get campaign. Check out [Apple SearchAds API Campaign Object](https://developer.apple.com/library/content/documentation/General/Conceptual/AppStoreSearchAdsAPIReference/Campaign_Resources.html#//apple_ref/doc/uid/TP40017495-CH14-SW2) for more information.


###### GET

Get campaign by id

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>


* campaignId

###### POST

Update campaign

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">name</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">budgetAmount</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">dailyBudgetAmount</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">adamId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ENABLED|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">negativeKeywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">adGroups</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">name</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">defaultCpcBid</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">cpaGoal</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">storefronts</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|US|
|GB|
|AU|
|NZ|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">startTime</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">endTime</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">keywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">bidAmount</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">currency</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">amount</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ACTIVE|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">negativeKeywords</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">text</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">matchType</td>
    <td style="vertical-align:top">

|Enum|
|----|
|EXACT|
|BROAD|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">automatedKeywordsOptIn</td>
    <td style="vertical-align:top">boolean
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">targetingDimensions</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">adminArea</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">age</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">maxAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">minAge</td>
    <td style="vertical-align:top">integer
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">appDownloaders</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">excluded</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">dayPart</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">userTime</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of integer

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">deviceClass</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|IPAD|
|IPHONE|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">gender</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of 

|Enum|
|----|
|M|
|F|

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">locality</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">included</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">status</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ENABLED|
|PAUSED|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">storefront</td>
    <td style="vertical-align:top">

|Enum|
|----|
|US|
|GB|
|AU|
|NZ|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>


* name

unique name within org

* budgetAmount

Once set can only be increased.

* dailyBudgetAmount

Daily cap

* adamId

Adam ID of promoted app.

* status

Whether runs or not.

* negativeKeywords
* adGroups
* storefront

The app store territory in which you want to promote your app.

* campaignId


#### find-campaigns <span style="color:gray">*PRIVATE*</span><a name="_endpoints-find-campaigns"></a>

Find campaigns matching query. Check out [Apple SearchAds API Selector Object](https://developer.apple.com/library/content/documentation/General/Conceptual/AppStoreSearchAdsAPIReference/API_Overview.html#//apple_ref/doc/uid/TP40017495-CH7-SW11) for more information.


###### GET POST
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">conditions</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">field</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">values</td>
    <td style="vertical-align:top">array
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">operator</td>
    <td style="vertical-align:top">

|Enum|
|----|
|IN|
|EQUALS|
|GREATER|
|LESS_THAN|
|STARTSWITH|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">fields</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">orderBy</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">field</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">sordOrder</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ASCENDING|
|DESCENDING|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">pagination</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">offset</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">limit</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>


* conditions
* fields
* orderBy
* pagination


#### find-adgroups <span style="color:gray">*PRIVATE*</span><a name="_endpoints-find-adgroups"></a>

Find adgroups matching query. Check out [Apple SearchAds API Selector Object](https://developer.apple.com/library/content/documentation/General/Conceptual/AppStoreSearchAdsAPIReference/API_Overview.html#//apple_ref/doc/uid/TP40017495-CH7-SW11) for more information.


###### GET POST
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">conditions</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">field</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">values</td>
    <td style="vertical-align:top">array
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">operator</td>
    <td style="vertical-align:top">

|Enum|
|----|
|IN|
|EQUALS|
|GREATER|
|LESS_THAN|
|STARTSWITH|
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">fields</td>
    <td style="vertical-align:top"><details><summary>array</summary>
    List of string

</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">orderBy</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">field</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">sordOrder</td>
    <td style="vertical-align:top">

|Enum|
|----|
|ASCENDING|
|DESCENDING|
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">pagination</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">offset</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">limit</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">campaignId</td>
    <td style="vertical-align:top">number
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>


* conditions
* fields
* orderBy
* pagination
* campaignId



