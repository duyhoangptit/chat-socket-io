# chat-socket-io
chat socket

# Deploy ứng dụng lên heroku

    1. Heroku git
    2. Github
    3.


## Command:
    `heroku login`
    `cd folder-name`
    `git init`
    `heroku git:remote -a project-name-heroku`
    
    `git add .`
    `git commit -am "content"`
    `git push heroku master`

## Luu y - check log
    `heroku logs`

    . Tao file Procfile
    . Update port server: process.env.PORT || 3000;
    . Update src js cua thu vien nam trong node_modules
    . file lang nghe, thi update lai server lang nghe