---
title: Bash/Shell Scripting Cheatsheet
date: 2023-12-21T14:00:00.000Z
image: featured.jpg
description: A comprehensive Bash cheatsheet covering essential commands,
  scripting techniques, and best practices for Bash shell scripting.
slug: bash-cheatsheet
summary: An essential Bash cheatsheet that includes a compilation of commonly
  used Bash commands, scripting techniques, and best practices for efficient
  shell scripting.
showSummary: true
showTableOfContents: true
showWordCount: true
showComments: true
newsletter: false
showDate: true
showDateUpdated: false
showHeadingAnchors: true
showPagination: true
showReadingTime: true
showTaxonomies: true
tags:
  - Bash
categories:
  - CheatSheet
keywords:
  - Bash
  - CheatSheet
  - Shell Scripting
  - Bash Commands
  - Bash Scripting
author: Armoghan-ul-Mohmin
draft: false
---
Bash Basics
-----------

*   `pwd` - Print the current working directory.
*   `cd [directory]` - Change directory. Example: `cd /home/user`
*   `ls` - List files and directories. Example: `ls -la`
*   `man [command]` - Show manual for a command. Example: `man ls`
*   `history` - Display command history.
*   `echo [text]` - Print text to the terminal. Example: `echo "Hello, World!"`
*   `date` - Display the current date and time.
*   `cal` - Show the current month's calendar.
*   `who` - Display who is logged in.
*   `clear` - Clear the terminal screen.

File Management
---------------

*   `touch [filename]` - Create an empty file. Example: `touch file.txt`
*   `cp [source] [destination]` - Copy files or directories. Example: `cp file.txt backup.txt`
*   `mv [source] [destination]` - Move or rename files. Example: `mv file.txt /backup/`
*   `rm [filename]` - Delete a file. Example: `rm file.txt`
*   `mkdir [directory]` - Create a directory. Example: `mkdir new_folder`
*   `rmdir [directory]` - Remove an empty directory. Example: `rmdir old_folder`
*   `ln -s [target] [link]` - Create a symbolic link. Example: `ln -s /path/to/file link_name`
*   `chmod [permissions] [file]` - Change file permissions. Example: `chmod 755 script.sh`
*   `chown [user]:[group] [file]` - Change file owner and group. Example: `chown user:group file.txt`
*   `file [filename]` - Determine file type. Example: `file file.txt`
*   `cat [file]` - Concatenate and display file content. Example: `cat file.txt`
*   `less [file]` - View file content one page at a time. Example: `less file.txt`

Search & Text Processing
------------------------

*   `grep [pattern] [file]` - Search for a pattern in a file. Example: `grep 'hello' file.txt`
*   `find [directory] -name [filename]` - Find files by name. Example: `find /home -name "*.txt"`
*   `locate [filename]` - Find files by name quickly. Example: `locate file.txt`
*   `which [command]` - Locate a command. Example: `which bash`
*   `cat [file]` - Display the contents of a file. Example: `cat file.txt`
*   `head [file]` - Display the first few lines of a file. Example: `head -n 10 file.txt`
*   `tail [file]` - Display the last few lines of a file. Example: `tail -n 10 file.txt`
*   `sort [file]` - Sort lines in a file. Example: `sort file.txt`
*   `uniq` - Remove duplicate lines. Example: `sort file.txt | uniq`
*   `cut -d[delimiter] -f[field] [file]` - Extract fields from a file. Example: `cut -d: -f1 /etc/passwd`
*   `awk '{print $1}' [file]` - Extract specific columns of data. Example: `awk '{print $1}' file.txt`
*   `sed 's/[old]/[new]/g' [file]` - Find and replace text in a file. Example: `sed 's/old/new/g' file.txt`

Networking
----------

*   `ping [host]` - Check network connectivity. Example: `ping google.com`
*   `ifconfig` - Display network interface configuration.
*   `ip a` - Show IP addresses assigned to all network interfaces.
*   `traceroute [host]` - Trace the route packets take to a network host. Example: `traceroute google.com`
*   `wget [url]` - Download files from the internet. Example: `wget http://example.com/file.zip`
*   `curl [url]` - Transfer data from or to a server. Example: `curl -O http://example.com/file.zip`
*   `netstat -tuln` - List open ports and services.
*   `ssh [user]@[host]` - Securely connect to a remote server. Example: `ssh user@192.168.1.1`
*   `scp [source] [destination]` - Securely copy files between hosts. Example: `scp file.txt user@remote:/path/`
*   `rsync -avz [source] [destination]` - Sync files between locations. Example: `rsync -avz /local/path/ user@remote:/path/`

System Information & Management
-------------------------------

*   `df -h` - Display disk space usage.
*   `du -sh [directory]` - Show disk usage of a directory. Example: `du -sh /home/user/`
*   `ps aux` - Display running processes.
*   `kill [pid]` - Terminate a process. Example: `kill 1234`
*   `top` - Display real-time system processes.
*   `uptime` - Show system uptime.
*   `whoami` - Show the current logged in user.
*   `uname -a` - Display system information.
*   `hostname` - Show or set the system's hostname.
*   `free -h` - Display memory usage.
*   `reboot` - Restart the system.
*   `shutdown -h now` - Shut down the system immediately.
*   `last` - Show the last logged in users.
*   `crontab -e` - Edit the cron jobs for the current user.

Miscellaneous Commands
----------------------

*   `alias ll='ls -la'` - Create an alias. Example: `alias gs='git status'`
*   `chmod [permissions] [file]` - Change file permissions. Example: `chmod 755 script.sh`
*   `chown [user]:[group] [file]` - Change file owner and group. Example: `chown user:group file.txt`
*   `df -h` - Display disk space usage.
*   `du -sh [directory]` - Show disk usage of a directory. Example: `du -sh /home/user/`
*   `ps aux` - Display running processes.
*   `kill [pid]` - Terminate a process. Example: `kill 1234`
*   `top` - Display real-time system processes.
*   `uptime` - Show system uptime.
*   `whoami` - Show the current logged in user.
*   `cal` - Display a calendar for the current month.
*   `bc` - Launch a calculator in the terminal.
*   `tldr [command]` - Show simplified man pages for a command. Example: `tldr ls`
*   `tree` - Display directories and files in a tree-like format.
*   `watch [command]` - Execute a command repeatedly and watch its output. Example: `watch df -h`
*   `yes [string]` - Repeatedly output a string until interrupted. Example: `yes "hello"`

Basics
------

*   `#!/bin/bash`: Defines the script interpreter as Bash.
*   `#`: Use `#` to add comments in your script.
*   `$0`: The name of the script.
*   `$1, $2, ...`: Arguments passed to the script.
*   `exit 0`: Exit the script with a status of 0 (success).
*   `chmod +x script.sh`: Make your script executable.

Variables, Constants, Arrays & Strings
--------------------------------------

### Variables

*   `my_variable="Hello"`: Define a variable.
*   `echo $my_variable`: Access a variable.
*   `readonly my_variable`: Make a variable read-only.
*   `unset my_variable`: Delete a variable.

### Arrays

*   `my_array=(apple banana cherry)`: Define an array.
*   `echo ${my_array[0]}`: Access the first element: `apple`.
*   `echo ${my_array[@]}`: Access all elements.
*   `my_array[3]="date"`: Add an element to the array.

### Strings

*   `str="Hello World"`: Define a string.
*   `echo ${#str}`: Length of the string: `11`.
*   `echo ${str:6:5}`: Substring: `World`.

Conditional Statements
----------------------

### If-Else

*   `if [ condition ]; then`  
    `# commands if condition is true`  
    `elif [ another_condition ]; then`  
    `# commands if another condition is true`  
    `else`  
    `# commands if no conditions are true`  
    `fi`

### Example

*   `if [ "$NAME" == "John" ]; then`  
    `echo "Hello, John!"`  
    `else`  
    `echo "You are not John!"`  
    `fi`

Loops
-----

### For Loop

*   `for i in {1..5}; do`  
    `echo "Iteration $i"`  
    `done`

### While Loop

*   `count=1`  
    `while [ $count -le 5 ]; do`  
    `echo "Count: $count"`  
    `((count++))`  
    `done`

### Until Loop

*   `count=1`  
    `until [ $count -gt 5 ]; do`  
    `echo "Count: $count"`  
    `((count++))`  
    `done`

Functions
---------

### Basic Function

*   `function greet() {`  
    `echo "Hello, $1"`  
    `}`  
    `greet "World"`  
    `# Output: Hello, World`

### Return Values

*   `function add() {`  
    `local sum=$(( $1 + $2 ))`  
    `echo $sum`  
    `}`  
    `result=$(add 5 3)`  
    `# result = 8`

File Operations
---------------

### Creating and Modifying Files

*   `touch file.txt`: Create a new file.
*   `echo "Hello" > file.txt`: Write to a file (overwrite).
*   `echo "World" >> file.txt`: Append to a file.
*   `cat file.txt`: Display file content.

### Checking Files

*   `if [ -e file.txt ]; then`  
    `echo "File exists"`  
    `fi`

### Input/Output Redirection

*   `command > file`: Redirect stdout to a file.
*   `command < file`: Redirect stdin from a file.
*   `command >> file`: Append stdout to a file.
*   `command 2> file`: Redirect stderr to a file.
*   `command &> file`: Redirect stdout and stderr to a file.

Arithmetic Operations
---------------------

### Basic Arithmetic

*   `result=$((2 + 3))`: Perform arithmetic: `5`.
*   `result=$((a + b))`: Using variables.

### Comparisons

*   `if [ $a -eq $b ]; then` - Equal
*   `if [ $a -ne $b ]; then` - Not equal
*   `if [ $a -lt $b ]; then` - Less than
*   `if [ $a -gt $b ]; then` - Greater than

### Command Substitution

*   `current_date=$(date)`: Capture command output.
*   `echo "Today is $current_date"`

### Special Variables

*   `$?`: Exit status of the last command.
*   `$$`: Process ID of the current script.
*   `$!`: Process ID of the last background command.

Debugging
---------

*   `bash -x script.sh`: Run script in debug mode.
*   `set -x`: Enable debugging within a script.
*   `set +x`: Disable debugging within a script.
