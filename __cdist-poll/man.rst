cdist-type__cdist-poll(7)
==========================


NAME
----
cdist-type__cdist-poll - Configure a client to poll the cdist server for configuration.


DESCRIPTION
-----------
This cdist type configures a client that is not always online to poll the cdist
server for configuration. The client connects to a cdist through ssh (with minimal
privileges) to trigger a script which can be used to configure the client.


REQUIRED PARAMETERS
-------------------
cfgfile
   Configuration file that should be used to store the information regarding the
   clients ssh keys.

script
   Points to the script that should be triggered when the client connects to the
   cdist system. The script will be called with the clients fqdn as the first
   argument.

cdisthost
   The system name the client should connect to, to trigger the configuration action.


OPTIONAL PARAMETERS
-------------------
state
   'present' or 'absent', defaults to 'present' where:

   present
      the client is configured to poll for configuration.
   absent
      the clients access is removed.

cdistuser
   The user the client should use for the ssh connection. Defaults to cdist.

port
   The ssh port the client should use for the ssh connection. Defaults to 22.

EXAMPLES
--------

.. code-block:: sh

    # Configure client for configuraion polling
    __cdist-poll --state present --cfgfile ~/configs/client.example.com \
       --script ~/bin/cdist-poll --cdisthost cdist.example.com --port 922

AUTHORS
-------
Mark Verboom <mark--@--verboom.net>


COPYRIGHT
---------
Copyright \(C) 2022 Mark Verboom. Free use of this software is
granted under the terms of the GNU General Public License version 3 (GPLv3).
