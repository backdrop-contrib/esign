# CONTENTS OF THIS FILE

 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers

# INTRODUCTION

This module allows for integration of Signature Pad, an electronic-signing
script, into Backdrop CMS for both nodes (content) and the Field API (FAPI).

 * To submit bug reports and feature suggestions, or to track changes:
    https://github.com/backdrop-contrib/esign/issues


# REQUIREMENTS

It requires the following third-party library:

 * Signature Pad 1.6+ (https://github.com/szimek/signature_pad) Loaded via CDN


# RECOMMENDED MODULES

 None

# INSTALLATION

## Installation:
Install this module using the official Backdrop CMS instructions at https://docs.backdropcms.org/documentation/extend-with-modules


# CONFIGURATION

 * For content, you can change the options within the field settings.
   - For FAPI, you can change the field options by setting the '#esign_options'
     parameter, and using the following keys in an associative array:

   - dotSize (default: 1)

   - minWidth (default: 0.5)

   - maxWidth (default: 2.5)

   - backgroundColor (default: 'rgba(0,0,0,0)')

   - penColor (default: 'rgba(0,0,0,1)')

   - velocityFilterWeight (default: 0.7)

# TROUBLESHOOTING

 * If the signature field does not display, check the following:

   - Did you set the field to display?

   - Does your CSS allow the field to display?

# FAQ

Q: The signature field isn't working!

A: Please make sure you're using the correct version of Signature Pad.

# Current Maintainer(s):
- [Steve Moorhouse (albanycomputers)] (https://github.com/albanycomputers)
- Seeking additional maintainers and contributors.

## Sponsorship:
- [Albany Computer Services] (https://www.albany-computers.co.uk)
- [Albany Web Design] (https://www.albanywebdesign.co.uk)
- [Albany Hosting] (https://www.albany-hosting.co.uk)

## License
This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.


## Credits:

 * Adam Weiss (greatmatter) - https://www.drupal.org/u/greatmatter

Original project was sponsored by:
 * Great Matter
   We create the software you need most.
   Specializing in Drupal-based systems, Great Matter designs, develops,
   and supports amazing software solutions for the most complicated needs.
   Visit https://www.greatmatter.com for more information.
