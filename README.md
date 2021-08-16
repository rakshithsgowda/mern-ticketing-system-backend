# Ticketting system API

This API is part MERN stack project of basic ticketing system

## Running this APi

- run `git clone ...`
- run `npm start`

NOTE: make sure to install the nodemon asa dev dependency in this project.

## API RESOURCES

### User API resources

All the user API router follows `/v1/user/`

| #   | Routers                           | Verbs | Progress | Is Private | Description                                      |
| --- | --------------------------------- | ----- | -------- | ---------- | ------------------------------------------------ |
| 1   | `/v1/user/login`                  | POST  | TODO NOW | No         | Verify user Authentication and return JWT        |
| 1   | `/v1/user/request-reset-password` | POST  | TODO NOW | No         | Verify email and email pin to reset the password |
| 1   | `/v1/user/reset-password`         | PUT   | TODO NOW | No         | Replace with new password                        |
| 1   | `/v1/user/{id}`                   | GET   | TODO NOW | Yes        | Get users Info                                   |

### Ticket API resources

all the ticket API router follows `/v1/ticket/`

| #   | Routers                        | Verbs | Progress | Is Private | Description                                  |
| --- | ------------------------------ | ----- | -------- | ---------- | -------------------------------------------- |
| 1   | `/v1/user/login`               | GET   | TODO NOW | Yes        | Get all ticket for the logged-in user        |
| 1   | `/v1/ticket/{id`               | GET   | TODO NOW | Yes        | Get a ticket details                         |
| 1   | `/v1/ticket`                   | POST  | TODO NOW | Yes        | Create a new ticket                          |
| 1   | `/v1/ticket/{id}`              | PUT   | TODO NOW | Yes        | Update ticket details which is reply message |
| 1   | `/v1/ticket/close-ticket/{id}` | PUT   | TODO NOW | Yes        | Update ticket details which is reply message |
