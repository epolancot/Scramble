
![Main](/public/images/readme/main.png)

## Date: 5/26/2023

### By: Eric Polanco

#### [GitHub](https://github.com/epolancot) | [LinkedIn](www.linkedin.com/in/epolancot) 

---
## **Description**
Scramble is the simplest way to collect group choices and shuffle them. Perfect tool to start your next book club or list of movies to watch.

[Link](https://scramble-ga.herokuapp.com/)

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

## Screenshots

### Sign-up
![Sign in](/public/images/readme/0-sign-in.png)

Users can sign up from the app's main landing page or via invitation, which are automatically created for each Scramble.

### Home
![Main](/public/images/readme/1-index.png)

Main screen displays a list of the scrambles in which the user is a participant or creator. Links to participant or creator view.

### New Scramble
![Scramble](/public/images/readme/2-scramble-new.png)

The first version allows the user to create a scramble in a prompt-answer format. Participants can be invited to submit their answers to the prompt, giving the creator the option to scramble the replies.

### Scramble - unlocked
![Scramble](/public/images/readme/2-scramble-view1.png)

By default, all scrambles start as unlocked. The unlocked status allows participants to join the scramble and submit/edit their answers. Avatars are shown on top and not next to participants' names to allow for an anonymous answer setting.

### Scramble - locked
![Scramble](/public/images/readme/2-scramble-view2.png)

When the scramble is locked, participants don't have the option to edit their answers. Invitations to the scramble are closed, blocking new participants from joining the group. Locking the scramble also activates the scramble button.


### Entity Relationship Diagram (ERD)
![ERD](/public/images/readme/ERD.png)

### Next update
Give the creator options for different scramble formats. For example: 
- Pre-set answers to scramble against invited participants.
- Secret santa.
- Scramble and track progress.

