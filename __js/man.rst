cdist-type__roaming(7)
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

EXAMPLES
--------

.. code-block:: sh

    # Configure client for roaming access
    __js /etc/config.js --vars config \
      --set 'config.email="admin@example.com' \
      --set 'config.servername="server.example.com'


AUTHORS
-------
Mark Verboom <mark--@--verboom.net>


COPYING
-------
Copyright \(C) 2021 Mark Verboom. Free use of this software is
granted under the terms of the GNU General Public License version 3 (GPLv3).
