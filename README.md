# yescoin-botjs

yescoin botjs auto tap multiple account https://t.me/theYescoin_bot

<img width="652" alt="Code_X8LahxsKeH" src="https://github.com/user-attachments/assets/59d45865-c42e-421e-9e7f-500500524d09">

## Features
- Auto create token
- Auto daily task
- Auto tap & claim offline bonus
- Auto upgrade booster
- Auto claim task
- Auto special box and full box
- Auto share journey
- Auto refresh token

## Requirement
- Node.js

## How to run
1. Clone/download this repository
2. Extract and go to folder
3. Setting .env file
4. Open cmd file folder
5. > npm install
6. > node index
7. Fill query.txt

## How to get query_id?
1. Open telegram web/desktop
2. Go to Settings - Advanced - Experimental settings - Enable webview inspecting
3. Open bot https://t.me/theYescoin_bot
4. Press F12 or right click then select inspect element
5. Go to Application tab - Session storage - Select www.yescoin.gold - Select '__telegram__initParams' - Select tgWebAppData and copy value start with ```query_id=``` or ```user=```
6. Separate query_id= or user= with the newline (for multiple account)
