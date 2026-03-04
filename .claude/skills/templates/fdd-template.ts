##Templates 
Feature:
Description
•	Overview of problem we are trying to solve (include data if available)
•	Use Cases
Start date/target date
Effort level 
•	Small: 1-40 hours
•	Medium: 41-120 hours
•	Large: 121-240 hours
•	X-Large: 241-480 hours
Linked product capability work item(s) (Ignore if not applicable)
Linked dependency work item(s) (Ignore if not applicable)
Linked child work item(s) (Ignore if not applicable)
Attached E2E business process flow (Ignore if not applicable)

Document Deliverable:
Overview of current functionality and what is changing:
1.	Entity and attribute details:
•	Entity name & BU ownership
•	Entity relationship summary
•	Entity attribute details
o	Display name
o	Requirement level
o	Field security (optional)
o	Auditing
2.	Business rules and logic:
•	System/user triggers and expected output
Example of myWIC/vendor portal-specific considerations:
o	Button details:
•	Button label (ex; ‘Save’, ‘Cancel’, ‘Next’)
•	Type: 
o	Primary action (ex; ‘Submit’, ‘Save’)
o	Secondary action (ex; ‘Back’, ‘Cancel’)
o	Button logic:
•	Describe the logic behind each button's action (ex; clicking ‘Next’ validates the current form inputs and navigates to the next screen in the flow)
•	Define any conditions for button enablement/disablement (ex; the ‘Save’ button is disabled until all required fields are populated)
o	Screen Logic:
•	Document the flow between screens, including: 
o	Trigger points (ex; button clicks, timeouts, background events).
o	Conditional paths (ex; "If Alert Type = Clinic, redirect to Clinic Selection screen."
•	Define what causes navigation to another screen: 
o	After a button click.
o	After a successful API response.
o	Conditional navigation (example: "Redirect to the dashboard if no alerts are available.") 
o	Deep Links:
•	If applicable, document any deep linking logic (ex; a notification about a specific alert redirects the user to that alert’s detail screen.)
3.	Screen Mockups:
•	Title, tabs, sections, fields, buttons, etc.
4.	Security:
5.	Views:
•	Title, columns, sort order, filters, etc.
6.	Dashboards:
•	Title, views, security roles, charts, etc.
7.	Telemetry
8.	Feature flag information
9.	Configuration value information 
10.	Translation information 
•	Email translations, language key/translations records, translations file, etc.
11.	Integration details
12.	Cross-system dependencies 
13.	Assumptions
14.	Acceptance criteria
