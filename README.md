# INTRODUCTION
This module allows for the integration of a Signature Pad, an electronic signing
script, into Backdrop CMS for both nodes (content) and the Field API (FAPI).

# CONTENTS OF THIS FILE
 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * FAQ
 * Maintainers

# REQUIREMENTS
It requires the following third-party library:

 * Signature Pad 4.1.7+ https://github.com/szimek/signature_pad Loaded via CDN

# RECOMMENDED MODULES
 None

# INSTALLATION
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

* To submit bug reports and feature suggestions, or to track changes:
    https://github.com/backdrop-contrib/esign/issues


# Current Maintainer(s):
- Steve Moorhouse (albanycomputers) https://github.com/albanycomputers
- Seeking additional maintainers and contributors.

## Sponsorship:
- Albany Computer Services - https://www.albany-computers.co.uk
- Albany Web Design - https://www.albanywebdesign.co.uk
- Albany Hosting - https://www.albany-hosting.co.uk

## License
This project is GPL v2 software. See the LICENSE.txt file in this directory for complete text.


## Credits:
 - Github repo https://github.com/szimek/signature_pad
 Signature Pad is a JavaScript library for drawing smooth signatures. It's HTML5 canvas based and uses variable width Bézier curve interpolation based on [Smoother Signatures](https://developer.squareup.com/blog/smoother-signatures) post by [Square](https://squareup.com/). It works in all modern desktop and mobile browsers and doesn't depend on any external libraries.

 - Adam Weiss (greatmatter) - https://www.drupal.org/u/greatmatter

Original project was sponsored by:
 - Great Matter
   We create the software you need most.
   Specializing in Drupal-based systems, Great Matter designs, develops,
   and supports amazing software solutions for the most complicated needs.
   Visit https://www.greatmatter.com for more information.
