cdist-type__js(7)
==========================


NAME
----
cdist-type__js - Process javasript files


DESCRIPTION
-----------
This cdist type can change values in configuration files that are formatted with
javascript variables (not json). The type requires a cdist server side installation
of nodejs for parsing the javascript and pulls the file from the client to the
server for parsing.
Keep in mind that all comments and specific layout will be lost.


REQUIRED PARAMETERS
-------------------
vars
   A comma seperated list of variables that are defined in the javascript file
   and should be processesd.

set
   Change the value of a variable. This option can be used multiple times.

OPTIONAL PARAMETERS
-------------------
file
   The location of the file. If this is not specified the object name is used.

onchange
   When the content of the file changes, run the argument as a command.

EXAMPLES
--------

.. code-block:: sh

    # Change values in config.js and restart service on change
    __js /etc/config.js --vars config \
      --set 'config.email="admin@example.com' \
      --set 'config.servername="server.example.com' \
      --onchange 'service restart daemon'


AUTHORS
-------
Mark Verboom <mark--@--verboom.net>


COPYRIGHT
---------
Copyright \(C) 2021 Mark Verboom. Free use of this software is
granted under the terms of the GNU General Public License version 3 (GPLv3).
