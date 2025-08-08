---
slug: /implementation
title: Implementation
sidebar_position: 3
---
import { Feature } from '/src/components/Features';
import styles from '/css/docs.module.css';

This page describes the features that are available for you to add into your private environment within the OpenDataDSL platform. 

![](/img/features/implementation-horizontal.png)

## Groups and Favourites

<h3>Organise, customise and group it together</h3>

<div className={styles.features}>

### One-Click Favourites

<Feature
    subtitle="Easy navigation"
    video="/img/features/favourites-overview.mp4"
    text1="With favourites, you can save groups or items for quick and easy one-click access."
    text2="Add items into your own favourites group or share it with your colleagues."
    section3="Dynamic"
    text3="Create dynamic groups based on a filter criteria that you define."
    section4="Functional"
    text4="Use your groups in <a href='/docs/integration#workflows'>workflows</a>, <a href='/docs/applications'>scripts</a>, <a href='/docs/integration#automations'>automations</a> and <a href='/docs/implementation#exports'>exports</a>."
/>

### Easily Add Items

<Feature
    subtitle="Find the item - add the item"
    video="/img/features/favourites-add-item.mp4"
    text1="Simple, user-friendly click-to-add items to your favourite groups."
/>

### Create Dynamic Favourites

<Feature
    subtitle="Save your filters"
    video="/img/features/favourites-dynamic-create.mp4"
    text1="When you find yourself filtering for the same stuff time after time, simply save this as a favourite, to enable one-click filtering."
    section3="Share it"
    text3="Click on the 'Share this group' checkbox to share this favourites group with your colleagues."
/>

### Group Management

<Feature
    subtitle="One place - all your groups"
    image="/img/features/favourites-groups.png"
    text1="Manage all your groups in the group management screen - edit, describe and share."
/>
</div>

## Exports

<h3>Format your output data</h3>

Format your data into any output format using our templating technology built on top of [Mustache](https://en.wikipedia.org/wiki/Mustache_(template_system)).

<div className={styles.features}>

### Create and Upload Templates

<Feature
    subtitle="Any text format"
    image="/img/features/export-formats.png"
    text1="Create export templates for any text format, e.g. CSV, JSON, XML etc."
    text2="Use the ODSL VSCode extension to upload your mustache file to the OpenDataDSL platform and start using it immediately to format your export reports."
/>
</div>
