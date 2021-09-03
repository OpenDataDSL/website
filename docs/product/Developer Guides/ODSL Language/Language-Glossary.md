Language Glossary
=================

A cheat-sheet of the OpenDataDSL keywords and language syntax

### abort

Immediately stops the running of a script and outputs a supplied message to the console
```js
abort "Aborted"
```
### action

Keyword when creating a [workflow action](Action_7372954.html) \- see [Workflows and Processes](Workflows-and-Processes_2818407.html)
```js
xml_url = action in "extractors"
  ...
end
```
### and

Used as a logic condition in the [where](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#where) clause of the [find](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#find) command

```js
result = find ${object:"Person"} where first = "John" and Last = "Doe"
```
### as

As is used in the following commands:

*   [extract](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract)
    
*   [link](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#link)
    
*   [transform](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform)
    
*   [type](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#type)
    
*   [WF_EVENT](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#WF_EVENT)
    

### ceiling

A [rounding](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#rounding) method - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

```js
set rounding ceiling
```
### check

Used in an [extractor](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract) to check a checkbox

### clear

Used in a [transformer](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform) to clear variables during the transformation - see [Data Transformation](Data-Transformation_7372855.html)

```js
create with TimeSeries clear start, quantity
```
### click

Used in an [extractor](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract) to click a button

### create

Used in a [transformer](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform) to create new variables - see [Data Transformation](Data-Transformation_7372855.html)

```js
create with data
```
### crs

Used in a set command to set the current coordinate reference system, the options are:

```js
set crs earth   // Use the Earth coordinate system
set crs planar  // Use a planar coordinate system
```
### debug

A logging level used with the [log](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#log) command

```js
log debug "This is a debug message"
```
### default

Used to set a default value for a property on a [type](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#type) command - see [Data Modelling](Data-Modelling_2752902.html)

```js
name as String() default "test"
```
### delay

Used in a [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase) command to specify the amount of time to wait before retrying a failed phase - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 10 seconds then reschedule 1 hour
```
### delete

Used to delete a variable from an [active variable service](Active-Variable-Services_131303.html)

```js
delete ${object:"test"} "optional delete reason"
```
### down

A [rounding](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#rounding) method - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

```js
set rounding down
```
### else

Else provides the default alternative code path if a condition isn’t met in a [if](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#if) statement

```js
if test == true
  // do something
else
  // do something else
end
```
### elseif

Elseif provides a alternative code path within an [if](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#if) statement based on a condition

```js
if test == 1
  // do something with 1
elseif test == 2
  // do something with 2
end
```
### end

End terminates the following structures:

*   [action](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#action)
    
*   [extract](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract)
    
*   [function](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#function)
    
*   [if](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#if)
    
*   [object declaration](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#object)
    
*   [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase)
    
*   [transform](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform)
    
*   [type](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#type)
    
*   [while](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#while)
    
*   [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow)
    
*   [WF_ACTION](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#WF_ACTION)
    
*   [WF_EVENT](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#WF_EVENT)
    
*   [WF_GATEWAY](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#WF_GATEWAY)
    
*   [WF_WORKFLOW](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#WF_WORKFLOW)
    

### exit

Exit is used as an exit transition configuration in an action and as a modifier for the on exit command - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

### extends

Used when declaring a [type](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#type) to signify that it extends another existing type - see [Data Modelling](Data-Modelling_2752902.html)

```js
test = type extends basetest
end
```
### external

Used to tag a [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase) in a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow) that will be executed externally to the workflow, such as loading data on-site - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "LOAD" external
end
```
### extract

Used to create extractors for navigating a web site in order to extract data

### fail

Used in a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow) to force a failure in order for a workflow [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase) to go into a [retry](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#retries) loop - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
fail "Failed"
```
### false

A negative boolean value

### fatal

A logging level used with the [log](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#log) command

```js
log fatal "Fatal Error"
```
### fill

Used with an [extractor](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract) to enter a value into an input field on a web form

### find

Used to find variables in an [active variable service](Active-Variable-Services_131303.html)

```js
result = find ${object:"Person"} where first = "John" and last = "Doe"
```
### floor

A [rounding](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#rounding) method - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

```js
set rounding floor
```
### function

Declares a new user defined function

### gateway

Declares a new workflow gateway - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

### half_down

A [rounding](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#rounding) method - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

```js
set rounding half_down
```
### half_even

A [rounding](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#rounding) method - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

```js
set rounding half_even
```
### half_up

A [rounding](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#rounding) method - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

```js
set rounding half_up
```
### hour(s)

Used as a time-unit when specifying a delay to a phase in a workflow - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 1 hour
```
### if

Checks a condition to see whether to perform a set of statements

```js
if test == true
  // do something
end
```
### ignore

Used as part of an option to ignore errors

```js
on error ignore
```
### in

Used in a for statement when iterating through a [list](List_2785465.html)

```js
for item in list
  print item
next
```
Also used in a workflow, workflow action and a gateway to configure an input variable - See [Workflows and Processes](Workflows-and-Processes_2818407.html)

### info

A logging level used with the [log](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#log) command

```js
log info "Information"
```
### intersects

Used in geo-spatial queries to to find intersecting polgons, e.g.

```js
items = find ${object:"Places"} where location intersects london
```
### into

Used in a transformer and an extractor to indicate what to transform/extract data into - see [Data Transformation](Data-Transformation_7372855.html)

### link

Used to create a 2-way relationship between 2 objects - see [Data Modelling](Data-Modelling_2752902.html)

```js
link ${object:"Address/ABCNewcastle"} as address/residents of ${object:"Person/JaneDoe"}
```
### log

Used to output a message to the log file

```js
log info "Hello World"
```
### matches

Used as a regex match expression when defining a property on a type in order to validate the input value for the property - see [Data Modelling](Data-Modelling_2752902.html)

### minute(s)

Used as a time-unit when specifying a delay to a phase in a workflow - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 10 minutes
```
### missing

Used with a set command to define how missing values are treated, especially when used with functions, e.g.

```js
// Ignore missing values
set missing ignore

// Set missing values to 0
set missing 0
```
### next

Terminates a for loop statement

```js
for i = 1 to 10
  print i
next
```
### object

Used to create an object from a type - see [Data Modelling](Data-Modelling_2752902.html)

```js
ABC = object as Company
    name = "ABC Ltd"
end
```
Also used with the following commands:

*   [extract](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract)
    
*   [transform](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform)
    

### of

Used as an optional keyword when creating a [link](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#link) between 2 objects - see [Data Modelling](Data-Modelling_2752902.html)

```js
link ${object:"Address/ABCNewcastle"} as address/residents of ${object:"Person/JaneDoe"}
```
### on error

Used to define what to do in case an error is thrown

```js
on error ignore
on error exit
```
### optional

Used in a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow), [workflow action](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#action) and a [gateway](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#gateway) to flag that an input variable is optional - See [Workflows and Processes](Workflows-and-Processes_2818407.html)

### or

Used as a logic condition in the [where](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#where) clause of the [find](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#find) command

```js
result = find ${object:"Person"} where first = "John" or first = "Jane"
```
### out

Used in a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow), [workflow action](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#action) and a [gateway](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#gateway) to configure an output variable - See [Workflows and Processes](Workflows-and-Processes_2818407.html)

### param

Used in an [extactor](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract)

### phase

Used to split a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow) into meaningful functional sections for individual monitoring - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 10 seconds then reschedule 1 hour
    WF_ACTION getxml ai
        "ok" -> transformxml
        "failed" -> stopfailed
        ai.url = input.url
        result = xml_url.run(ai, output)
    end
end
```
### precision

Used to configure the number of decimal places used when displaying numbers - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

### print

Used to output a message to the console

```js
print "Hello World"
```
### private

Used as a classifier when searching for data using the [find](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#find) command

```js
results = find ${object:private/"Person"}
```
### profile

A profile is a generic name for a data object and is used in [find](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#find) command with the object and certain other services such as currency, to return data entities rather than object entities. The example below returns the FX Spot time-series data:

```js
// Fetch all data for all ECB_FX currencies
data = find profile SPOT from ${currency:public} where source == "ECB_FX"
```
### public

Used as a classifier when searching for data using the [find](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#find) command

```js
results = find ${object:public/"Person"}
```
### rename

Used to change the id of a resource in the database - see [rename](413368321.html)

```js
rename ${calendar:"MYCAL"} as UK_PEAK
```
### reschedule

Used as a parameter with the [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase) command to reschedule a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow) for a period of time later - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 10 seconds then reschedule 1 hour
```
### retries

Used as a parameter with the [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase) command to reschedule a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow) for a period of time later - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 10 seconds then reschedule 1 hour
```
### return

Used to return a value, usually used within [actions](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#action) to specify the transition to follow - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
return "ok"
```
### rounding

Used to configure the rounding method used when displaying numbers - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

### rows

Used as an output type of a [transformer](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform) to specify that the output should be a list of [row](Row_2719928.html) variables - see [Data Transformation](Data-Transformation_7372855.html)

```js
ECB_FX = transform XML into rows as fx
end
```
### save

Used to persist a variable to the [OpenDataDSL services](Active-Variable-Services_131303.html)

```js
save ${object:test} "optional save reason"
```
### second(s)

Used as a time-unit when specifying a delay to a [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase) in a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow) \- see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 30 seconds
```
### select

Used in an [extractor](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract)

### send

Used to send a variable to a message queue - see [Message Queues](Message-Queues_26214401.html)

### set

Used to set an option in a script - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

### step

Used in a [for](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#for) loop to define how much to increment the loop index by on each pass

```js
for i = 1 to 10 step 2
  print i
next
```
### tag

Used to add a named tag on a version of an element - see [Data Versioning](Data-Versioning_36831400.html)

### then

Used as a keyword in the [phase](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#phase) command to reschedule a [workflow](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#workflow) for a period of time later - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

```js
phase "EXTRACT" retries 1 delay 10 seconds then reschedule 1 hour
```
### to

Used in the following statements:

*   [for](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#for) next loop
    
*   a part of a time constraint in a [link](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#link)
    
*   an optional queue name in the [send](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#send) command - see [Message Queues](Message-Queues_26214401.html)
    

### transform

Used to create a transformer to map data from a variable to another variable usually as part of an ETL process - see [Data Transformation](Data-Transformation_7372855.html)

### true

A positive boolean value

### type

Used to create a new data type - see [Data Modelling](Data-Modelling_2752902.html)

### uncheck

Used in an [extractor](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract) to uncheck a checkbox

### unique

Used in a [transformer](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform) to configure the expression that defines uniqueness when building up the output object list - see [Data Transformation](Data-Transformation_7372855.html)

### up

A [rounding](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#rounding) method - see [Precision and Rounding](Precision-and-Rounding_17564081.html)

```js
set rounding up
```
### use

Used to switch to a different data environment

### versioned

Used as a modifier when creating types to signal that the objects created on this type should be versioned - see [Data Versioning](Data-Versioning_36831400.html)

### warn

A logging level used with the [log](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#log) command

```js
log warn "Warning"
```
### where

Used in a [find](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#find) command to filter the results

```js
results = find ${object:Person} where first = "John"
```
### while

Used to loop around some code whilst a condition is true - see [Getting Started With ODSL](Getting-started-with-ODSL_33242.html)

```js
a = 0
while a < 10
  a = a + 1
end
```
### with

Used as a join keyword with the following statements:

*   [extract](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#extract)
    
*   [transform](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#transform)
    

### within

Used in geo-spatial queries to find polygons or points within another polygon, e.g.

```js
items = find ${object:"Places"} where location within london
```
### workflow

Used to create a workflow - see [Workflows and Processes](Workflows-and-Processes_2818407.html)

### WF_ACTION

Used as a keyword to configure an [action](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#action) in a [workflow](ODSL-Language_33069.html) \- see [Workflows and Processes](Workflows-and-Processes_2818407.html)

### WF_EVENT

Used as a keyword to configure an event in a [workflow](ODSL-Language_33069.html) \- see [Workflows and Processes](Workflows-and-Processes_2818407.html)

### WF_START

Used as a keyword to configure the start of a [workflow](ODSL-Language_33069.html) \- see [Workflows and Processes](Workflows-and-Processes_2818407.html)

### WF_GATEWAY

Used as a keyword to configure a [gateway](https://opendatadsl.atlassian.net/wiki/spaces/DOCUMENTAT/pages/17564123/Language+Glossary#gateway) in a [workflow](ODSL-Language_33069.html) \- see [Workflows and Processes](Workflows-and-Processes_2818407.html)

### WF_WORKFLOW

Used as a keyword to configure a sub-workflow in a [workflow](ODSL-Language_33069.html) \- see [Workflows and Processes](Workflows-and-Processes_2818407.html)

