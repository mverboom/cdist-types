cdist-type__firewall(7)
========================

NAME
----
cdist-type__firewall - Generate iptables firewall rulesets


DESCRIPTION
-----------
This cdist type allows you to generate iptables rulesets based on a
configuration file for a system.
The script applies basic iptables rules and has some supporting options
to make it easier to write and maintain rules.

REQUIRED PARAMETERS
-------------------
rules
   File containing the rules for the system.


OPTIONAL PARAMETERS
-------------------
onchange
   The code to run if the key or value changes (i.e. is inserted, removed or replaced).
db
   File containing definitions of services, hosts, networks etc.

RULES FILE
----------
The rules file is in ini style format. There are 2 types of sections.

The global section is reserved:
   [global]
This section contains global settings that should be applied. The settings are:

policy
   Can either be 'accept' or 'drop'. This will be the default policy for input, output and
   forward chain. If not defined will default to accept.

policy_<chain>
   Overrule policy for a specific chain. When not defined will fallback to value of policy.

established
   When defined as 'true' will generate a rule to allow incoming packets that are releated
   to established connections. Otherwise no rule will be generated.

icmp
   When defined as 'true' will generate a rule to allow incoming icmp packets. Otherwise
   no rule will be generated.

proto
   Can be defined as '4', '6' or '4,6'. It defines the IP version of the rules that will be
   processed. When IPv4 and IPv6 rules are available but proto is set to 4, only IPv4 rules
   will be generated. When not defined it will default to '4'.

Any other section header will be used as a description to group rules together. The description
will be used as comments for rules generated in the section. The defined rules of a specific type
will be generated in the order they are in (when multiple are defined in a section). The types
are applied in a specific order. The types recognized are:

* filter
* nat
* mangle
* log

When defined they default to IPv4 based rules. They can be postfixed by either 4 or 6 to make
them specific for that protocol version.
The type refers directly to the iptables table the rule should be in. The value can be normal
iptables syntax (see examples). There are some supporting functions available within rules:

* host()
* hosts()
* service()
* dservice()

host()
   The host() function will expand the hostname passed to the relevant IPv4 or IPv6 address.
   To do this, first a lookup in the database file is done. When not found, DNS will be used
   to resolve the name.

hosts()
   The hosts() function is comparable to host() but will do this for each comma seperated host.

service()
   The name of a specific service will be expanded to the definition found in the database
   file.

dservice()
   The name of a specific service will be expanded to a specific rule for the transport and
   the destination port number.

DATABASE FILE
-------------

The optional database file can be used to store specific definitions of:
* services
* hosts
* networks

services
   Combinations of portnumber followed by either 'tcp' or 'udp'.

hosts
   Alias for the IP address of the host.

networks
   Alias for the network with netmask.

EXAMPLES
--------

.. code-block:: sh

    # Install the policy described in the file
    __firewall --db /rulesets/db --rules /rulesets/systename.example.com

Example configuration file for '/rulesets/systemname.example.com':
   [global]
   policy=accept
   established=true
   icmp=true
   proto=4,6
   
   [allow http from proxy, workstations and internal network]
   filter=-A INPUT -s host(proxy) dservice(http) -j ACCEPT
   filter=-A INPUT -s host(workstation1) dservice(http) -j ACCEPT
   filter=-A INPUT -s host(workstation2) dservice(http) -j ACCEPT
   filter=-A INPUT -s network(internal) dservice(http) -j ACCEPT

   [drop http from other sources]
   filter=-A INPUT dservice(http) -j DROP
   filter6=-A INPUT dservice(http) -j DROP

Example of the database file for '/rulesets/db':
   [services]
   http=80/tcp

   [hosts]
   proxy=10.30.20.20

   [networks]
   internal=192.168.1.0/24

MORE INFORMATION
----------------

See iptables man page.

AUTHORS
-------
Mark Verboom  <mark--@--verboom.net>


COPYING
-------
Copyright \(C) 2024 Mark Verboom. You can redistribute it
and/or modify it under the terms of the GNU General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
