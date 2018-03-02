# Socket sample-doc-gen - ver 0.0.1

This is a sample socket used to
generate docs with socket2md tool

## Installation
```sh
$ npx s add sample-doc-gen
```


## Config
|Options | Type | Required|
|--------|------|---------|
|_**SUPER_API_KEY**_|string| Yes |
|_**SUPER_DOMAIN**_|string| Yes |

* SUPER_API_KEY

    Api key to super service.

* SUPER_DOMAIN

    Your own super domain.



## Classes

### clazz

|Name | Type | filter_index | order_index | unique |
|-----|------|--------------|-------------|--------|
|clazzName|| No | No | No |
### klazz

|Name | Type | filter_index | order_index | unique |
|-----|------|--------------|-------------|--------|
|klazzName|| No | No | No |
|clazzReference|clazz reference| No | No | No |


## Endpoints

* [sample-doc-gen/hello](hello)
* [sample-doc-gen/world](world)

#### hello

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



#### world

     This is sample endpoint that prints world on response. What happend to hello?

     


