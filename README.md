# Scenario:
Imagine you are an Alten Frontend consultant and you got assigned to a project at one of our top partners.
They have a number of connected vehicles that belongs to a number of customers.
They have a need to be able to view the status of the connection among these vehicles on a monitoring display.

The vehicles send the status of the connection one time per minute.
The status can be compared with a ping (network trace); no request from the vehicle means no connection.

# Task:
Your task will be to create Web GUI that will show these vehicles with their status and the customers who own them.

# Requirements
1. Web GUI (Single Page Application Framework/Platform).
 - An overview of all vehicles should be visible on one page (full-screen display), together with their status.
 - It should be able to filter, to only show vehicles for a specific customer or multiple customers.
 - It should be able to filter, to only show vehicles that have a specific status.
 - Ability to simulate vehicle status changes randomly each configurable time.
2. Simulate the backend by using fake REST API like:- https://github.com/typicode/json-server
3. Use any of Angular, React, Vue.js, Aurelia.
4. Localization
5. https://material.io/
6. Unit Testing.
7. Integration Testing.
8. E2e test.
9. Complete analysis for the problem.
 - Personas, User Flow, Use Cases, Wire Frames, Branding.
10. Consider Responsiveness, Cross Platform, Performance,...