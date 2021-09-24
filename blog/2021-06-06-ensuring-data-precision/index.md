---
slug: ensuring-data-precision
title: Ensuring Data Precision
authors: [chartley]
tags: [data, quality, odsl]
---

<div class="row">
  <div class="column">
    <img src="./2021-06-06-ensuring-data-precision/header.jpg"/>
  </div>
  <div class="column">
  <h2>Ensuring Data Precision</h2>  
  Documentation on how OpenDataDSL handles precision and rounding
  </div>
</div>

<!--truncate-->

## Data Quality Issue
One aspect of data quality management is ensuring that numerical values are as precise as you need them to be, especially during complex calculations. Any small fraction of an error when part of a large transaction, could have consequences.


### Example in java
A simple example that shows a common imperfection when using double precision data in a java JVM is the following:

```js
@Test
public void showPrecision() {
    double x = 0.1d;
    System.out.println(x * 3);
}
```

```
0.30000000000000004
```

We all know the answer should be 0.3, but you can see the result that the JVM produces.


## OpenDataDSL
In OpenDataDSL, the precision is always kept and you can control the number of decimal places and, if necessary, how the data is rounded.

```js
x = 0.1
print x * 3
```
```
0.30000000000000000
```

### Setting the number of decimal places
To set the number of decimal places to, for example 3, use the following:


```js
set precision 3
x = 0.1
print x * 3
```
```
0.300
```

### Setting the rounding method
You can also tell OpenDataDSL how to round data with the set rounding command, e.g.

```js
set precision 3
set rounding up
print 1 / 3
```

```
0.334
```

#### Rounding Methods
The following rounding methods are valid:

```js
set rounding up
set rounding down
set rounding ceiling
set rounding floor
set rounding half_up
set rounding half_down
set rounding half_even
```
