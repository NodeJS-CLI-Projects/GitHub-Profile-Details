GitHub Profile CLI
Project Url:

https://roadmap.sh/projects/nodejs-github-profile-details

A simple Node.js CLI tool that fetches and displays public profile details for a GitHub user.
Features
Reads the GitHub username from the terminal using process.argv.
Fetches user data from the GitHub API using fetch.
Uses encodeURIComponent() to safely include the username in the URL.
Displays:
Name
Username
Profile URL
Public repositories
Followers
Handles missing usernames.
Handles GitHub users that do not exist.
Prints errors to stderr.
Sets a non-zero exit code when an error occurs.
Requirements
Node.js 18 or later
Usage

Run the program with a GitHub username:

node github-profile.js octocat

Example output:

Name: The Octocat
Username: octocat
Profile: https://github.com/octocat
Public repos: 8
Followers: 20000

The follower count may be different when you run the program.

User Not Found
node github-profile.js missing-user-name-example

Output:

error: GitHub user not found: missing-user-name-example
No Username Provided
node github-profile.js

Output:

error: please provide a GitHub username
Technologies
Node.js
GitHub REST API
JavaScript
Node.js Concepts Practiced
process.argv
fetch()
async/await
encodeURIComponent()
response.json()
HTTP response status
Error handling with try...catch
stderr
process.exitCode
API

This project uses the GitHub API endpoint:

https://api.github.com/users/<username>
License

This project is licensed under the MIT License. See the LICENSE file for details.
