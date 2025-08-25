#!/bin/bash

running=1

finish() {
    running=0
}

trap finish SIGINT

while (( running )); do
    ./start.sh
    echo "Restarting server on crash.."
    sleep 5
done
