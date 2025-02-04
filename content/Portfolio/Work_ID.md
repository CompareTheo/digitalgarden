---
title: OCLC Work ID Retrieval Script
date: 2024-01-02
images:
description: Uses the WorldCat Search API to match ISBNs and retrieve Work IDs for reconciling editions and formats.
---

Libraries rely on accurate metadata to manage collections, align bookstore adoption lists with their catalogs, and reconcile electronic and physical holdings. However, matching titles across various editions and formats remains a persistent challenge for technical services staff. The OCLC Work ID serves as a crucial data point for disambiguating records, grouping related editions, and enhancing bibliographic consistency.

To address this challenge, I developed a script that automates the retrieval of Work IDs using OCLC’s WorldCat Search API v.2. This tool enables library staff to efficiently identify and compare records based on ISBNs, improving metadata management and acquisitions workflows.

### Project Overview
This project consists of scripts designed to process user-selected input files (.xlsx and .mrc), query OCLC’s WorldCat Search API, and extract the corresponding Work ID for each title. By leveraging OCLC’s metadata services, the script provides a structured approach to normalizing bibliographic data across diverse sources.

### Why Work IDs Matter
The OCLC Work ID functions as a unique identifier that links different manifestations of a work, regardless of format or edition. This allows libraries to:
1. Reduce duplication when evaluating electronic versus print holdings.
2. Identify related records that share common intellectual content.
3. Improve reporting accuracy when aligning course-adopted textbooks with library resources.

### Key Features
#### Batch Processing of Bibliographic Data
The script supports both Excel (.xlsx) and MARC (.mrc) file formats, enabling batch queries for multiple titles at once.

#### Automated Queries via WorldCat Search API v.2
The script uses the API to match ISBNs against WorldCat records and retrieve the associated Work ID, streamlining metadata reconciliation.

#### Enhanced Accuracy in Title Matching
By referencing Work IDs, the script minimizes errors caused by slight title variations, helping libraries maintain consistent cataloging practices.

#### Configurable Authentication and API Access
The script integrates OAuth 2.0 authentication, ensuring secure access to OCLC’s metadata services.

### Getting Started
#### Dependencies
To use this script, your institution must have:
- An OCLC Cataloging and Metadata subscription (full cataloging).
- A FirstSearch/WorldCat Discovery subscription.
- An API client ID and secret obtained from OCLC.

#### Configuration
The script requires a config.yml file containing:
- key: Your API key.
- secret: Your API secret.
- auth_url: The authentication endpoint.
- token_url: The token request URL.
- metadata_service_url: The OCLC metadata service endpoint.

A sample configuration file is available in OCLC’s Developer Network GitHub repository.

### License & Acknowledgments
This project is licensed under the Apache-2.0 License. The OAuth 2.0 authentication code was originally developed by Karen Coombs and has not been substantially altered from its original form. All other development, workflow design, and implementation are my own work.

### Final Thoughts
By automating Work ID retrieval, this script simplifies complex bibliographic comparisons and enhances collection management efficiency. As libraries continue refining their metadata workflows, tools like this offer valuable support for maintaining accurate and accessible catalogs. I hope this project provides a practical solution for fellow technical services professionals navigating the intricacies of bibliographic data reconciliation.