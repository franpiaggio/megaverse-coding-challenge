# Crossmint coding challenge.

[Crossmint Documentation](https://challenge.crossmint.io/documentation)

# Notes on the development

## Approach

- I focused on solving the problem using Javascript without relying heavily on any frameworks or libraries.
- I developed some scripts that allowed me to interact with the grid quickly and easily to better understand how it works.
- I ultimately did not integrate any frontend technology, but set up a simple server using Express to run the scripts through some endpoints.

## Time Frame

It took me about four three to complete this challenge.

## Further Improvements

- I'm not sure if the exercise was intended to involve so many requests. It seemed a bit unusual to me. Initially, I attempted to verify if the endpoints could receive multiple rows and columns to minimize the number of requests, but I was unable to make it work, so I took this approach instead.

- One issue I encountered executing the reuqest was receiving "Too many requests" error messages. To work around this, I added a delay between each request. If there is a better solution to this problem, I was not able to find it quickly and had to look for it in the documentation.

- I would have liked to have an endpoint or some way to check the current state of the grid. Perhaps there was a way to do this that I missed, but I developed a "clean" endpoint to clear the entire grid in case of any errors.

# Acknowledgments

I would like to thank to Penelope Cline for providing me with this interesting challenge. Additionally, I appreciate the opportunity to have been able to work on the challenge directly.

## Local development

1. Create an .env file with the `CANDIDATE_ID` selected value
2. Run `npm run start`
