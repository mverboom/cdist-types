cdist-type__proxmox-user(7)
==========================

NAME
----
cdist-type__proxmox-user - Add/modify/remove a Proxmox user


DESCRIPTION
-----------
This cdist type allows you to manage users on Proxmox servers by using the pveum command


REQUIRED PARAMETERS
-------------------
None.


OPTIONAL PARAMETERS
-------------------
state
   'present' or 'absent', defaults to 'present' where:

   present
      the user should exist
   absent
      the user should not exist

userid
   If supplied, use this as the userid. Otherwise the object_id is used. Should be like '<username>@<realm>'

comment
   A comment

email
   The user's e-mail address

enable
   0 or 1 where:

   0
      Enable the account (default).
   1
      Disable the account

expire
   Account expiration date (seconds since epoch). 0 means no expiration date. Should be an integer (0 - N)

firstname
   The user's first name

groups
   The user's groups

keys
   Keys for two factor auth (yubico). Should match [0-9a-zA-Z!=]{0,4096}

lastname
   The user's last name

EXAMPLES
--------

.. code-block:: sh

    # Create a Proxmox user
    __proxmox-user myuser@pve --email 'user@example.com' --comment 'my user' --state present

    # Remove a Proxmox user
    __proxmox-user myuser@pve --state absent

AUTHORS
-------
Marco van Duijvenbode <marco--@--vduijvenbode.nl>


COPYRIGHT
---------
Copyright \(C) 2024 Marco van Duijvenbode. Free use of this software is
granted under the terms of the GNU General Public License version 3 (GPLv3).
