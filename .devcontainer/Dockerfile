FROM alpine:latest

# Install Go
RUN apk add --no-cache go

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Install Hugo
RUN apk add --no-cache hugo

# Set up working directory
WORKDIR /workspaces/Blogs

# Copy your project files
COPY . .