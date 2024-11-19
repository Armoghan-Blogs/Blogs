FROM alpine:latest

# Install Go
RUN apk add --no-cache go

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Install Hugo
RUN apk add --no-cache hugo

# Install Git
RUN apk add --no-cache git

# Set up working directory
WORKDIR /workspaces/Blogs

# Copy your project files
COPY . .