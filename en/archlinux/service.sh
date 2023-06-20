#!/bin/bash
db_location=/home/edrum/.config/linuxsampler.org/instruments.db
lscp_path=/home/edrum/.config/linuxsampler.org/drums.lscp
lscp_port=8899

/usr/bin/linuxsampler --lscp-port $lscp_port \
                      --instruments-db-location $db_location &
sleep 1
cat $lscp_path | netcat localhost $lscp_port
