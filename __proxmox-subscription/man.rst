cdist-type__proxmox-subscription(7)
==========================

NAME
----
cdist-type__proxmox-subscription - Check and/or set/remove a subscription key on a Promox server


DESCRIPTION
-----------
This cdist type allows you to manage subscription keys on Proxmox servers


REQUIRED PARAMETERS
-------------------
None.


OPTIONAL PARAMETERS
-------------------
state
   'present' or 'absent', defaults to 'present' where:

   present
      the subscription key is set
   absent
      the subscription is removed

key
   The Proxmox subscription key

EXAMPLES
--------

.. code-block:: sh

    # Set a Proxmox subscription key
    __proxmox-subscription --key 'pve1c-abcde12345' --state present

    # Remove a Proxmox subscription key
    __proxmox-subscription --state absent

AUTHORS
-------
Marco van Duijvenbode <marco--@--vduijvenbode.nl>


COPYRIGHT
---------
Copyright \(C) 2023 Marco van Duijvenbode. Free use of this software is
granted under the terms of the GNU General Public License version 3 (GPLv3).
