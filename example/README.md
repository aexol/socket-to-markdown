# Socket sample-doc-gen - ver 0.0.1

This is a sample socket used to
generate docs with socket2md tool

## Installation
```sh
$ npx s add sample-doc-gen
```


## Index

* [Config](#_config)
* [Classes](#_classes)
* [Endpoints](#_endpoints)


## Config

* [SUPER_API_KEY](#_config-SUPER_API_KEY)
* [SUPER_DOMAIN](#_config-SUPER_DOMAIN)

|Options | Type | Required|
|--------|------|---------|
|SUPER_API_KEY|string| Yes |
|SUPER_DOMAIN|string| Yes |

* SUPER_API_KEY<a href="_config-SUPER_API_KEY"></a>

    Api key to super service.

* SUPER_DOMAIN<a href="_config-SUPER_DOMAIN"></a>

    Your own super domain.



## Classes <a href='_classes'></a>

* [clazz](#_classes-clazz)
* [klazz](#_classes-klazz)

### clazz<a href='_classes-clazz'></a>

|Name | Type | filter_index | order_index | unique |
|-----|------|--------------|-------------|--------|
|clazzName|string| No | No | No |
### klazz<a href='_classes-klazz'></a>

|Name | Type | filter_index | order_index | unique |
|-----|------|--------------|-------------|--------|
|klazzName|string| No | No | No |
|clazzReference|[clazz](#_classes-clazz) reference| No | No | No |
|clazzRelation|[clazz](#_classes-clazz) relation| No | No | No |


## Endpoints <a href="_endpoints"></a>

* [sample-doc-gen/hello](#_endpoints-hello)
* [sample-doc-gen/world](#_endpoints-world)
* [sample-doc-gen/hush-hush](#_endpoints-hush-hush)

#### hello<a href="_endpoints-hello"></a>

     This is a sample endpoint that prints hello on response.

     

###### GET POST
| Name | Type | Required |
|------|------|--------|
| firstName | string | Yes |
| lastName | string | No |

* firstName

    Say hello to person with first name `firstName`

* lastName

    Say hello to person with last name `lastName`



#### world<a href="_endpoints-world"></a>

     This is sample endpoint that prints world on response. What happend to hello?

     


#### hush-hush <span style="color:gray">*PRIVATE*</span><a href="_endpoints-hush-hush"></a>

     Sample of private endpoint. Can only be called by another endpoint or with account key.

     



