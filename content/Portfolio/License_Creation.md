---
title: Alma License Creation Script
date: 2024-05-20
images:
description: Uses the Alma License API to systematically create elelctronic resource license records. 
---
Managing electronic resource licenses efficiently is a crucial part of library acquisitions workflows. To streamline this process, I developed a set of Python scripts that automate the creation and submission of license records in Alma. These scripts take structured data from an Excel file, convert it into XML, split it into individual records, and push them to Alma’s API.

This post breaks down how the three scripts—license_creation.py, license_split.py, and license_push.py—work together to automate license record management.

Step 1: Converting Excel Data to XML (license_creation.py)
The first step in this workflow is transforming structured license data from an Excel spreadsheet into an XML format that Alma can process. The license_creation.py script reads the Excel file and maps each row to an XML structure that mirrors Alma’s expected schema.

Key features of this script:

Reads data from an Excel file using pandas.
Defines an XML structure using lxml.etree.
Converts each row of the spreadsheet into a <license> element with relevant subfields, including license code, name, type, status, licensor, start date, and specific terms like interlibrary loan permissions, concurrent users, and renewal types.
Writes the final XML structure to an output.xml file.
This script ensures that license data is structured correctly before being submitted to Alma.

Step 2: Splitting XML into Individual Files (license_split.py)
Alma’s API processes one license record per request, so we need to split the output.xml file into separate files for each license entry. The license_split.py script handles this by:

Parsing output.xml and extracting each <license> entry.
Saving each <license> entry as its own XML file (e.g., license_1.xml, license_2.xml).
Ensuring that each license record is structured as a standalone file, ready for API submission.
This step is critical for handling multiple license records efficiently without requiring manual extraction.

Step 3: Submitting License Records to Alma (license_push.py)
Once the XML files are created, they need to be submitted to Alma’s acquisition API. The license_push.py script automates this process:

Iterates through the directory containing XML license files.
Reads each XML file and sends it to Alma using an HTTP POST request.
Uses the Alma API’s license creation endpoint, ensuring that each license record is ingested properly.
By automating API submissions, this script eliminates the need for manual data entry in Alma, reducing errors and saving time.

Why This Matters
These scripts work together to streamline license management in Alma by:
- Automating data conversion from spreadsheets to XML.
- Ensuring compliance with Alma’s structured data requirements.
- Breaking down bulk license data into individual records.
- Submitting records programmatically to Alma’s API.

This automation not only reduces manual workload but also enhances data accuracy and consistency. By leveraging Python’s capabilities, libraries can optimize electronic resource management and ensure that license records are properly maintained in Alma.
