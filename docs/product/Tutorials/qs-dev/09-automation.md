---
title: Automation
sidebar_position: 10
slug: /tutorials/qs/developer/automation
tags:
  - quickstart
  - odsl
  - developer
  - automation
  - process
  - workflow
---
import {QuickStartModule} from '/src/components/Discovery.js';
import {MoreInfo, InDepth, Tutorial} from '/src/components/Discovery.js';

<QuickStartModule text="This quickstart module is an overview of automation using workflows and processes." />

## Automation Introduction
The final part of this developer track shows you how you can create a workflow to simplify tasks and use processes to trigger those workflows.

## Workflow
A workflow is a flow-diagram that consists of a start node, 1 or more actions leading to 1 or more exit points.

There are a few pieces of terminology used with workflows, so the following table helps decipher them:

|Terminology|Description|
|-|-|
|Action|A unit of work within a workflow that runs some code to perform a part of the workflow|
|Event|A state within the workflow that causes the workflow to stop or pause|
|Gateway|A special type of action used for making a decision about routing|
|Phase|A virtual section of a workflow that can be individually monitored, retried and re-scheduled|
|Start|The virtual start node of a workflow|
|Step|Either an action, gateway or event|
|Transition|A link between steps of a workflow|
|Workflow|The entire flow encapsulating the phases, transitions and actions|

### Creating a workflow
To create a workflow in OpenDataDSL we create a workflow structure, the simplest workflow is shown below:

```js
wf_hello = workflow in "test"
    WF_START
        "ok" -> stopok
    end
    WF_EVENT stopok as "success"
        return "ok"
    end
end
```

This workflow simply has a start node and an end node, but doesn't perform any actions.

### Creating an action
Let's create an action to create a hello message:

```js
hello_message = action in "general"
    in user as Scalar
    out message as Scalar
    exit "ok"

    output.message = "Hello " + input.user
    return "ok"
end
```

This action expects an input argument called user and creates an output called message.
It has 1 transition called 'ok'

### Adding our action to the workflow

Let's add a phase and our action to the simple workflow:

```js
wf_hello = workflow in "test"
    in user as Scalar

    WF_START
        "ok" -> act_print
    end

    phase "MAIN"
        WF_ACTION act_print ai
            "ok" -> stopok
            ai.user = input.user
            result = hello_message.run(ai, output)
        end
    end
    
    WF_EVENT stopok as "success"
        return "ok"
    end
end
```

To run this workflow, run the following code:

```js
objin = Object()
objin.user = "ODSL"
objout = Object()
wf_hello.run(objin, objout)
print objout.wf_hello.act_print.message
```

After running the action you should see the message *Hello ODSL* printed in the debug console.

### Preparing for automation
The example we have run works ok for running in a script locally, but in order to modularise it for automating via a process we need to make a change to the way the workflow uses the action.

#### Saving the action
We need to save the action to the server and get the workflow to load the action when we run it, that way we can make changes to our action without changing the workflow.

To save the action:

```js
save ${action:hello_message}
```

#### Change the workflow and save it
The change we need to make to the workflow in order to use our saved action is as follows:

```js
    phase "MAIN"
        WF_ACTION act_print ai
            "ok" -> stopok
            ai.user = input.user
            result = ${action:"hello_message"}.run(ai, output)
        end
    end
```

With this change in place, we now need to save our workflow using the following:

```js
save ${workflow:wf_hello}
```

## Process
The key to automating a workflow is to create a process that configures and schedules the running of the workflow.

### Creating a process
Here is the process to run our workflow with the input user value set on the process and scheduled to run every weekday at 17:00

```js
process = Process()
process.service = "TEST"
process.name = "HELLO_ODSL"
process.workflow = "wf_hello"
process.input.user = "ODSL"
process.cron = "0 17 ? * MON,TUE,WED,THU,FRI *"

save ${process:process}
```

We can create multiple processes using the same workflow but with different configurations, e.g.

```js
process = Process()
process.service = "TEST"
process.name = "HELLO_WORLD"
process.workflow = "wf_hello"
process.input.user = "World"
process.cron = "0 16 ? * MON,TUE,WED,THU,FRI *"

save ${process:process}
```

<MoreInfo href="/docs/odsl/dm/workflow" />