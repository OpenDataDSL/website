Conditions
==========================

The usage of conditions in the OpenDataDSL Language

## Syntax

The syntax for a condition:
```JS
variable
    | 'not' variable
    | expression ('<'|'<='|'>'|'>='|'='|'=='|'!='|'like'|'intersects'|'within') expression
    | condition ('and'|'or') condition
    | '(' condition ')'
```

## Use within the language

Conditions can be used at various places within the OpenDataDSL language as shown in the following table:

|**Command**|**Description**|
|-|-|
|Aggregate|Used in a match directive in an [aggregate](399114362.html) command|
|Find|Used as a condition in a [find](387743950.html) command, searching for something|
|Transform|Used within a [transformer](397869117.html) in both ‘if’ statements and ‘ignore’ directives|
|If|Used in the [if](387743880.html) control statement|
|While|Used in the [while](387711154.html) control statement|

## Examples

### Aggregation Example
```js 
summary = aggregate ${exec}
    match service="ETL"
    group _id="$status", qty=count()
    sort qty desc
end
```

### Find Example
```js
records = find ${audit} where 
    timestamp > ${date:"today"} 
    and timestamp < ${date:"tomorrow"}
end
```
### Transform Example

```js
ignoe contains(ag.column\[0\], "Date")
unit="MT"
if contains(input.product, "Potato")
  unit="100KGS"
end 
```

### If Example
```js
if a==1 and b==2
    print 1
elseif (a==2 or b==2)
    print 2
elseif (a>2 and b==3) or c
    print 3
end
```

### While Example
```js
X=1
while X<5
   X=X+1
end
```
