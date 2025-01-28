---
title: GOBI Duplicate Purchase Checker
date: 2023-11-01
images:
description: Checks GOBI cart exports against Alma to identify owned titles.  
---

The **GOBI Duplicate Purchase Checker** is a helpful tool for libraries using the GOBI platform and Alma to streamline acquisitions workflows. By automating the process of checking for duplicate holdings in Alma’s Institution Zone (IZ) via the SRU (Search/Retrieve via URL) protocol, it reduces manual effort and supports more efficient collection management.  

The original version of this tool, developed by [Jeremy Hobbs](https://github.com/MrJeremyHobbs/GobiChecker), was designed for institutions using both an Institution Zone (IZ) and a Network Zone (NZ). However, since Loyola Marymount University operates without a Network Zone, I adapted the script to better fit our specific needs. These changes aim to expand the tool’s usefulness for libraries like ours and refine its functionality to address nuances in our acquisitions workflows.  

### Original Purpose of GobiChecker  
Jeremy Hobbs’ original GobiChecker script provided an efficient way to identify duplicate holdings in Alma based on ISBN, title, or keywords. It was designed to prevent redundant acquisitions and improve collection management. However, its initial reliance on a Network Zone meant that libraries with only an Institution Zone couldn’t fully benefit from its capabilities.  

### Key Updates  
To better suit our library’s requirements, I made several updates to the original script:  

#### 1. Support for IZ-Only Institutions  
I adjusted the script to work seamlessly for institutions that operate solely within an Institution Zone (IZ). This modification ensures the tool can assist a broader range of libraries without requiring a Network Zone.  

#### 2. Recognizing Intentional Duplicates  
Some duplicate purchases are intentional, such as ordering multiple copies of the same title or acquiring both print and electronic formats. To address this, I added parsing logic that identifies and excludes intentional duplicates from the report. This refinement helps staff focus on unintentional duplicates while respecting deliberate acquisitions.  

#### 3. Electronic Holdings Identification  
To enhance the tool’s precision, I integrated functionality to identify electronic holdings in Alma. By referencing an `elookup` file, the script can determine whether a duplicate is genuinely owned or part of a temporary or subscribed collection, helping clarify the library’s actual holdings.  

#### 4. Improved Output for Staff Workflows  
I refined the script’s output to align with our library’s workflows, including:  
- Removing irrelevant fields like publisher and network zone matches.  
- Formatting columns for better readability and consistency.  
- Adding practical features like right-click options to copy titles or ISBNs directly from the results.  

### Why These Changes Matter  
These updates were designed with flexibility and usability in mind. They aim to make the tool more applicable to libraries with varying workflows while maintaining its core purpose of streamlining acquisitions processes. By building on Jeremy Hobbs’ original work, I hope these enhancements make GobiChecker more accessible and useful to other institutions facing similar challenges.  

The improvements to GobiChecker highlight the strength of open-source software: its adaptability and potential for growth through collaboration. I’m grateful to contribute to an already valuable tool and hope these updates help others in the library community save time and effort in managing acquisitions.  
