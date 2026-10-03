let userName=process.argv[2];
function printMessage(message)
{
    console.error(`error: ${message}`);
process.exitCode=1;
}

async function main(userName) {
if(userName)
{
   encodedUserName=encodeURIComponent(userName);
   try
   {
const response=await fetch(`https://api.github.com/users/${encodedUserName}`);
const data=await response.json();
if(data.status!=="404")
{
 console.log(`Name: The ${data.name}`);
console.log(`Username: ${userName}`);
console.log(`Profile: ${data.html_url}`);
console.log(`Public repos: ${data.public_repos}`);
console.log(`Followers: ${data.followers}`);
}
else  printMessage(`GitHub user not found: ${userName}`)
   }
   catch(err)
   {
    printMessage(err)
   }
}
else
    printMessage("please provide a GitHub username");    
}
main(userName);
