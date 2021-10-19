---
title: API Developer
sidebar_position: 1
slug: /tutorials/qs/api
tags:
  - quickstart
  - api
  - developer
---
import StartBuilding from '/src/components/StartBuilding.js';
import {QuickStart, InDepth, MoreInfo} from '/src/components/Discovery.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<QuickStart text="This quickstart track will help you learn the OpenDataDSL API's and build your own applications." />

---

# Coming Soon
#### Call back later!


## Language Specific Configuration
<Tabs groupId="language">
<TabItem value="rest" label="REST" default>

```yaml
GET /{{tid}}/oauth2/v2.0/token
Host: login.microsoftonline.com
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id={{aid}}&
client_secret={{sid}}&
scope=api://opendatadsl/.default
```

</TabItem>
<TabItem value="python" label="Python">
</TabItem>
<TabItem value="java" label="Java">

Example `pom.xml` to create your java project

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.opendatadsl</groupId>
    <artifactId>odsl-api-developer</artifactId>
    <version>1.0-SNAPSHOT</version>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>8</source>
                    <target>8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>

    <dependencies>
        <dependency>
            <groupId>com.microsoft.azure</groupId>
            <artifactId>msal4j</artifactId>
            <version>1.11.0</version>
        </dependency>
    </dependencies>

</project>
```

</TabItem>
</Tabs>

---

<StartBuilding />
