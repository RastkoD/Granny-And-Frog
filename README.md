# Crown Clothing - ecommerce website

#### Online shop using ReactJS - Udemy Project

### :rocket: [DEMO](https://crown-clothing-rd.herokuapp.com/)

# What I learned

- [x] ReactJS
- [x] React Router, React Hooks, Styled-Components, Structuring, HOC pattern
- [x] Sass, Redux(Reselect, Saga, Patterns, Thunk...)
- [x] Firebase(Firestore, Authentication Forms, Google SignIn)
- [x] React Stripe(https://stripe.com/gb)
- [x] Deploying To Production(Heroku), GitHub
- [x] Node.js(express), Creating And Building a Server Inside The Project, Axios
- [x] Backend Payment Route
- [ ] Notable deficiency - Responsiveness, Contact Page, Single Prod. Page

## To create a new Heroku app

Create a new Heroku project by typing in your terminal:

```
heroku create
```

This will create a new Heroku project for you. Then run:

```
git remote -v
```

You should see heroku `https://git.heroku.com/<RANDOMLY_GENERATED_NAME_OF_YOUR_APP>` in the list. This means you have successfully connected your project to the newly created Heroku app under the git remote of `heroku`.

## Deploying to Heroku

Before we deploy, you also need to set a config variable of `STRIPE_SECRET_KEY` to the same secret key value from your stripe dashboard, the same one in your `.env` file. The `.env` file is only for local development, in order for our heroku production app to have access to this secret key, we add it to our Heroku projects config variables by typing:

```
heroku config:set STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>
```

After that, you can deploy to heroku by running:

```
git push heroku master
```

You will see this warning message if you are pushing to an existing app:

```
! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://git.heroku.com/hasura-crwn-clothing.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

This is because we are pushing to an existing app that was deploying an entirely different repository from what we have now. Simply run:

```
git push heroku master --force
```

This will overwrite the existing Heroku app with our new code.

## Open our Heroku project

After heroku finishes building our project, we can simply run:

```
heroku open
```

This will open up our browser and take us to our newly deployed Heroku project!
