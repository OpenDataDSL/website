Data
====

The data resource contains all the complex data types like TimeSeries and Curve

## Data REST API

The Data REST API is a read-only API allowing you to search and filter the complex data types and is accessed through the following URL:
```json
https://api.opendatadsl.com/service/data
```

:::note
The API is read-only because you must relate the data entity to an object entity - so saving and deleting object entities with data properties will save and delete those related data entities
:::

The API consists of the following calls:

|**Method**|**Path**|**Example**|**Description**|
|-|-|-|-|
|GET|||Get the build information for this service|
|GET|{release}/{source}|'v1/public' 'v1/private'|List public or private data items|
|GET|{release}/{source}/{key}|v1/private/TEST:SPOT|Retrieve a single data item using its id|

## Entities

There are currently 2 types of data entities (and their sub-entities):

*   TimeSeries    
    *   TimeValue        
        *   Status            
*   Curve    
    *   Contract        
        *   Status
            

### TimeSeries Entity

Here are the properties of a TimeSeries

|**Name**|**Description**|**Type**|
|-|-|-|
|_id|Unique id for the TimeSeries (or object id if this is not the latest version)|String|
|_type|The type of the entity - always VarTimeSeries|String|
|description|A description of the TimeSeries|String|
|start|The start timestamp of the TimeSeries|String(DateTime)|
|calendar|The code for the calendar that this TimeSeries maps to|String|
|timezone|The timezone of the observations|String|
|currency|The currency code|String|
|units|The units code|String|
|properties|An object containing custom dynamic properties|Object|
|_objid|The id of the object that this belongs to|String|
|_dataid|The name of the data id in the object|String|
|_access|The data access role that this data belongs to|String|
|_objtype|The object type of the object that this belongs to|String|
|_oid|The id of the calendar - will match _id if this is the latest version of the calendar|String|
|_timestamp|Timestamp of when this calendar version was created|String(DateTime)|
|_user|The user id (email) of the user that created this calendar verision|String|
|_tag|A list of version tag names for this calendar version|String[]|
|_version|The version number of this calendar version|int|
|data|The time series observations|TimeValue[]|

### TimeValue Entity

The TimeValue entity represents a single observation on a TimeSeries

|**Name**|**Description**|**Type**|
|-|-|-|
|time|The time point for this observation|String(DateTime)|
|value|The value of this observation|String or Numeric|
|status|A status object|Status|

### Status Entity

The Status entity represents the quality, source and reliability status of a TimeValue or Contract entity

|**Name**|**Description**|**Type**|
|-|-|-|
|quality|The data quality 'UNCHECKED' 'VALID' 'FAILED'|String|
|source|The data source 'NEW' 'CHANGED' 'IMPLIED' 'FILLED' 'CONVERTED' 'CALCULATED'|String|
|reliability|The reliability status 'UNKNOWN' 'QUOTED' 'OBSERVED' 'UNOBSERVED'|String|

:::note
Each status value can optionally be suffixed with a ':' and some information about the status, e.g. quality=FAILED:Failed Spike Check of 5%
:::

### Curve Entity

Here are the properties of a curve

|**Name**|**Description**|**Type**|
|-|-|-|
|_id|Unique id for the curve (or object id if this is not the latest version)|String|
|_type|The type of the entity - always VarCurve|String|
|ondate|An object representing a [CurveDate](CurveDate)|CurveDate|
|currency|The currency code|String|
|units|The units code|String|
|properties|An object containing custom dynamic properties|Object|
|_objid|The id of the object that this belongs to|String|
|_dataid|The name of the data id in the object|String|
|_access|The data access role that this data belongs to|String|
|_objtype|The object type of the object that this belongs to|String|
|_oid|The id of the calendar - will match _id if this is the latest version of the calendar|String|
|_timestamp|Timestamp of when this calendar version was created|String(DateTime)|
|_user|The user id (email) of the user that created this calendar verision|String|
|_tag|A list of version tag names for this calendar version|String[]|
|_version|The version number of this calendar version|int|
|contracts|An array of Contract entities|Contract[]|

### Contract Entity

The contract entity represents a single tenor or contract on a forward curve

|**Name**|**Description**|**Type**|
|tenor|The tenor [period code](Period-Code)|String|
|value|The value of this tenor|Numeric|
|status|The status object|Status|
|ondate|An object representing a [CurveDate](CurveDate)|CurveDate|
|properties|An object containing some standard properties and any custom dynamic properties|Object|


The standard properties on a Contract are:

*   absolute - The absolute [period code](Period-Code_2818227.html) of the tenor    
*   relative - The relative [period code](Period-Code_2818227.html) of the tenor    
*   expiry - The expiry or last trading date of the tenor    
*   start - The start of delivery if it is a delivered commodity    
*   end - The end of delivery if it is a delivered commodity
