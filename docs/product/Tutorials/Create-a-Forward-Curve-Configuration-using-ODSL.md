Create a Forward Curve Configuration using ODSL
===============================================

This tutorial walks you through creating a new forward curve configuration in the OpenDataDSL language, testing and running the curve and visualising it in the web portal.

## Introduction

In this tutorial we are going to run through all the steps of creating your own Forward Curve using the OpenDataDSL language. We are going to take an existing curve from a vendor and show a few simple manipulations to this and store these as separate output curves on our configuration.

## Creating the curve configuration

To create the curve configuration, we need to create an object as type #CurveConfig - for our purposes, we are going to call it TUTORIAL\_ODSL\_CURVE - this will be the id of the object that gets created

```js
TUTORIAL_ODSL_CURVE = object as #CurveConfig
    name = "Tutorial ODSL Curve"
    description = "A curve created for the ODSL Curve Tutorial"
    category = "TUTORIAL"
    subcategory = "Curve Building"
    region = "Europe"
    country = "Italy"
    expiryCalendar = "#REOMB"
    buildScript = "curvetutorial"
end
```

Some notes on the configuration above:

*   The fields name, description, category, subcategory, region and country are all meta-data items that you can use to group and filter your curves - you can also add any other meta-data fields you like    
*   The expiry calendar is the public expiry calendar for futures contracts that expire on the last business day of the month prior to delivery
*   The buildscript is the name of the script we will use to build all of our curves for this configuration
    

## Configuring the input data

For our input data, we are going to use a curve from [CLAL.it](http://CLAL.it) for the average auction winning prices for butter, the id for this input curve is #CLALIT.BUTTER_82.AVGAUC.WP:CURVE

![](/attachments/305857002/313131037.png)

To configure the input data we need to create an object of type #CurveConfigInput as shown below - this is added inside the configuration of the curve:

```js
TUTORIAL_ODSL_CURVE = object as #CurveConfig
  ...
  inputs\[0\] = object as #CurveConfigInput
    key = "PRIMARY"
    id = "#CLALIT.BUTTER_82.AVGAUC.WP:CURVE"
    required = true
  end
end
```

We have named it as ‘PRIMARY’, this is how we will refer to it when building our output curves.

## Creating output curves

### Create the curve script

Create a new ODSL file called **curvetutorial.odsl** \- this will be used to build our curves. For now though, just save it as an empty script to the server by right-clicking anywhere in the empty script and and select **Upload this script** from the context menu

![](/attachments/305857002/312672273.png)

### Create the first output curve

The first curve we are going to create will simply add a small premium value onto our input curve, the configuration for this is done by creating an object of type #CurveConfigOutput, this is added inside the configuration of the curve:

```js
TUTORIAL_ODSL_CURVE = object as #CurveConfig
  ...
    outputs\[0\] = object as #CurveConfigOutput
        name = "PREMIUM"
        code = "PRIMARY + 0.2"
    end
end
```

The important parts of the configuration are:

*   name - this is the output name of our curve, this must be unique for a single curve configuration   
*   code - this is the code to run to build the curve - in this case is it a simple expression to add the value 0.2 onto every contract in the input PRIMARY curve.
    

### Saving our curve configuration

Our complete curve configuration should look this the below, including the final line to save the curve configuration to the curve service:

```js
TUTORIAL_ODSL_CURVE = object as #CurveConfig
    name = "Tutorial ODSL Curve"
    description = "A curve created for the ODSL Curve Tutorial"
    category = "TUTORIAL"
    subcategory = "Curve Building"
    region = "Europe"
    country = "Italy"
    expiryCalendar = "#REOMB"
    buildScript = "curvetutorial"
    inputs\[0\] = object as #CurveConfigInput
        key = "PRIMARY"
        id = "#CLALIT.BUTTER_82.AVGAUC.WP:CURVE"
        required = true
    end
    outputs\[0\] = object as #CurveConfigOutput
        name = "PREMIUM"
        code = "PRIMARY + 0.2"
    end
end

save ${curve:TUTORIAL\_ODSL\_CURVE}
```

### Running the curve

After saving the curve, any updates of the input data for the curve trigger a build of our curve, if we want to manually run our curve we can also do that by running some ODSL code.

To run the curve, we need to specify the date that we want to run it for and run the process that was created during the curve save. So lets say we want to build our curve for the 18th May 2021, we run the following code.

```js
ondate = Object()
ondate.date = "2021-05-18"
print run TUTORIAL\_ODSL\_CURVE with ondate
```

### Visualising the curve

Once we have run the curve, we can head to the OpenDataDSL portal to visualise the curve.

Go to the object view, select **private** objects and find the TUTORIAL\_ODSL\_CURVE. You should see a property called PREMIUM with a data link to the curve, Click on that link to view the output curve.

![](/attachments/305857002/312639512.png)

### Improving the curve code

In the PREMIUM curve example, we used the code:

```js
code = "PRIMARY + 0.2"
```

This simply adds 0.2 onto every tenor in the input curve to create the output curve. This works ok, but consider the scenario where we need to create a lot of these curves with a fixed premium added. If we decide at some future point we want to change the fixed premium, we would have to edit every curve and change the code on the output curve.

#### Using a custom function

A better solution would be to create a function in the build script that performs the premium operation and change the code to call this function. If we decide to change the fixed premium, we would only need to make that change to our custom function in the build script.

The function in the build script (curvetutorial.odsl) would look like this:

```js
function addFixedPremium(input)
    // Add a fixed premium of 0.2 to an input curve
    addFixedPremium= input + 0.2
end
```

Our code on the output curve would be changed to:

```js
code = "addFixedPremium(PRIMARY)"
```

#### Adding a percentage premium

If we want to use a percentage rather than a fixed premium, we could add a function to the build script to handle that too:

```js
function addFixedPercentage(input)
    // Add a fixed 5% premium to an input curve
    addFixedPercentage= input * 1.05
end
```

#### Using custom factors

If we want to specify the premium amount rather than used a fixed amount, we could create 2 more functions:

```js
function addPremium(input, premium)
    // Add a premium to an input curve
    addPremium = input + premium
end

function addPercentage(input, premium)
    // Add a premium percentage to an input curve
    addPercentage = input * (1 + (premium/100))
end
```

Then we could either pass in a scalar value in our code like this:

```js
code = "addPercentage(PRIMARY, 5)"
```

Or we could add a property on the output curve and use this, so our output curve configuration would look like this:

```js
TUTORIAL\_ODSL\_CURVE = object as #CurveConfig
  ...
    outputs\[0\] = object as #CurveConfigOutput
        name = "PREMIUM"
        factor = 5
        code = "addPercentage(PRIMARY, factor)"
    end
end
```

NOTE: Don’t forget to upload the build script after making changes

### Adding a second curve to the configuration

In our second curve, we are going to use a built in curve function to extend the curve to 3 years, the second configuration looks like this:

```js
TUTORIAL_ODSL_CURVE = object as #CurveConfig
  ...
    outputs\[1\] = object as #CurveConfigOutput
        name = "EXTENDED"
        code = "extendCurve(PREMIUM, 3)"
    end
end
sss

If we run the curve again, you will see that we now have 2 curves on our configuration object: PREMIUM and EXTENDED.
