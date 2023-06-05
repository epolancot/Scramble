
![Main](/public/images/readme/main.png)

## Date: 5/26/2023

### By: Eric Polanco

#### [GitHub](https://github.com/epolancot) | [LinkedIn](www.linkedin.com/in/epolancot) 

---
## **Description**
Scramble brings two things: democracy and an end to decision fatige. From organizing a reading club to figuring out your next secret santa, scramble is the perfect tool to organize everyone's interests. 

Want to start a movie club and don't want to argue about which movie to watch first? Scramble it! 

The project itself was deployed and can be viewed [Here](https://scramble-ga.herokuapp.com)

---
### **Technologies, Libraries and Frameworks Used**
- Node
- Express
- MongoDB
  - Mongoose
- Bootstrap 5.2
- OAuth 2.0 - Google API
- Heroku


### Architecture 
MVC

---

## **Getting started**

### Wireframe
![Main](/public/images/readme/user-main.png)

Main screen displays a list of the scrambles in which the user is a participant or creator. Links to participant or creator view.

## Screenshots

### Sign-up
![Sign in](/public/images/readme/0-sign-in.png)

Users can sign up from the app's main landing page or via invitation, automatically created for each scramble.

### Home
![Main](/public/images/readme/1-index.png)

Main screen displays a list of the scrambles in which the user is a participant or creator. Links to participant or creator view.

### New Scramble
![Scramble](/public/images/readme/2-scramble-new.png)

The first version allows you to create a scramble in a prompt-answer format. Each participant replies to the prompt. Next version will give the creator options for different scramble formats. For example: Pre-set answers to against invited participants and secret santa formats.

### Scramble - unlocked
![Scramble](/public/images/readme/2-scramble-view1.png)

By default, all scrambles start as unlocked. The unlocked status allows participants to join the scramble and submit/edit their answers. Avatars are shown on top and not next to participants' names to allow for an anonymous answer setting.

### Scramble - locked
![Scramble](/public/images/readme/2-scramble-view2.png)

When the scramble is locked, participants don't have the option to edit their answers. Invitations to are closed, blocking new participants from joining the scramble. Locking the scramble also activates the scramble button.


### Entity Relationship Diagram (ERD)
![ERD](/public/images/readme/ERD.png)

