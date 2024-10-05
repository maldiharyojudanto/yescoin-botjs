const fs = require('fs');
const figlet = require('figlet');
const clc = require('cli-color');
const dotenv = require('dotenv');
const moment = require('moment');

dotenv.config()

// decode uri
const decodeQuery = (query) => {
    const dec = decodeURIComponent(query)
    return dec
}

// async function to get
const createToken = async (query) => {
    const url = "https://api-backend.yescoin.gold/user/login"

    const payload = JSON.stringify({
        "code": `${query}`
    })

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': "",
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to createToken, ${err}`)
        }
    }
}

// async function to get account info
const getAccountInfo = async (token) => {
    const url = "https://api-backend.yescoin.gold/account/getAccountInfo"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to getAccountInfo, ${err}`)
        }
    }
}

const getGameInfo = async (token) => {
    const url = "https://api.yescoin.gold/game/getGameInfo"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to getGameInfo, ${err}`)
        }
    }
}

// async function to get task list
const getCommonTaskList = async (token) => {
    const url = "https://api-backend.yescoin.gold/task/getCommonTaskList"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to getCommonTaskList, ${err}`)
        }
    }
}

// async function to get account info
const getAccountBuildInfo = async (token) => {
    const url = "https://api-backend.yescoin.gold/build/getAccountBuildInfo"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to getAccountBuildInfo, ${err}`)
        }
    }
}

// async function to get daily mission
const getDailyMission = async (token) => {
    const url = "https://api-backend.yescoin.gold/mission/getDailyMission"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to getDailyMission, ${err}`)
        }
    }
}

const finishDailyMission = async (token, missionid) => {
    const url = "https://api-backend.yescoin.gold/mission/finishDailyMission"
    
    const payload = JSON.stringify(missionid)
    
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to finishDailyMission, ${err}`)
        }
    }
}

// async function stay on at offline
// ########################################## RUN FOREVAR ####################################################
const offline = async (token) => {
    const url = "https://api-backend.yescoin.gold/user/offline"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-length': '0',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to offline, ${err}`)
        }
    }
}

// async function to collect coin or tap tap
// ########################################## RUN FOREVAR ####################################################
const collectCoin = async (token, cointoclaim) => {
    const url = "https://api-backend.yescoin.gold/game/collectCoin"

    const payload = JSON.stringify(cointoclaim-10)

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to collectCoin, ${err}`)
        }
    }
}

// async function to upgrade boost
const levelUp = async (token, idboost) => {
    const url = "https://api-backend.yescoin.gold/build/levelUp"
    
    const payload = JSON.stringify(idboost)

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }
    
    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to levelUp, ${err}`)
        }
    }
}

// async function to get user upgrade task
const getUserUpgradeTaskList = async (token) => {
    const url = "https://api-backend.yescoin.gold/task/getUserUpgradeTaskList"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to getUserUpgradeTaskList, ${err}`)
        }
    }
}

// async function to upgrade user task
const finishUserUpgradeTask = async (token, upid) => {
    const url = "https://api-backend.yescoin.gold/task/finishUserUpgradeTask"

    const payload = JSON.stringify(Number(upid))
    
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to finishUserUpgradeTask, ${err}`)
        }
    }
}

// ######################################### OLD ##########################################
const claimTask = async (token, taskid) => {
    const url = "https://api.yescoin.gold/task/finishTask"

    const payload = JSON.stringify(taskid)
    
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to claimTask, ${err}`)
        }
    }
}

const specialBoxReloadPage = async (token) => {
    const url = "https://api.yescoin.gold/game/specialBoxReloadPage"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-length': '0',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to specialBoxReloadPage, ${err}`)
        }
    }
}

const recoverCoinPool = async (token) => {
    const url = "https://api.yescoin.gold/game/recoverCoinPool"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-length': '0',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to recoverCoinPool, ${err}`)
        }
    }
}


const getSpecialBoxInfo = async (token) => {
    const url = "https://api.yescoin.gold/game/getSpecialBoxInfo"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'get',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to getSpecialBoxInfo, ${err}`)
        }
    }
}

const collectSpecialBoxCoin = async (token, boxtype, amount) => {
    const url = "https://api.yescoin.gold/game/collectSpecialBoxCoin"

    const payload = JSON.stringify({
        "boxType": boxtype,
        "coinCount": amount
    })
    
    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to collectSpecialBoxCoin, ${err}`)
        }
    }
}

const recoverSpecialBox = async (token) => {
    const url = "https://api.yescoin.gold/game/recoverSpecialBox"

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-length': '0',
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: headers,
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to recoverSpecialBox, ${err}`)
        }
    }
}

// claim bonus task
const claimBonus = async (token, taskid) => {
    const url = "https://api-backend.yescoin.gold/task/claimBonus"

    const payload = JSON.stringify(taskid)

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to claimBonus, ${err}`)
        }
    }
}

// async func to share journey
const shareJourney = async (token) => {
    const url = "https://api-backend.yescoin.gold/user/share"

    const payload = JSON.stringify({})

    const headers = {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://www.yescoin.gold',
        'priority': 'u=1, i',
        'referer': 'https://www.yescoin.gold/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'token': `${token}`,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: headers,
                body: payload
            })
    
            if (!response.ok) {
                // console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
    
            return await response.json()
        } catch (err) {
            console.error(`Error to shareJourney, ${err}`)
        }
    }
}

// async func to create token
const runCreateToken = async () => {
    try {
        // buat query.txt
        const data = fs.readFileSync('query.txt', 'utf-8');
        const querys = data.split('\n')

        // get token ***GATHER BOOMMM!!!!!
        const tokens = []
        await Promise.all(querys.map(async (query) => {
            const decodequery = decodeQuery(query)
            await createToken(decodequery)
            .then((token) => tokens.push(token['data']['token']))
            .catch((err) => console.error(err))
        }))
        
        // buat file tokens.txt
        fs.writeFileSync('tokens.txt', "")
        
        // read tokens.txt
        const token = fs.readFileSync('tokens.txt', 'utf-8');

        // append token to token.txt
        for (const token of tokens) {
            // console.log(token)
            fs.appendFileSync('tokens.txt', `${token}\n`)
        }
        return true
    } catch (e) {
        // jika query.txt not exist
        if (e.code == 'ENOENT') {
            console.log('Fill the query.txt first!');
            fs.writeFileSync('query.txt', "query1\nquery2\netc...")
            return false
        } else {
            throw e
        }
    }
}

// function to count length int
const countLength = (n) => {
    const num = String(n)
    return num.length
}

// async func to countdown
const timeCount = async (finish, nanti, waktu) => {
    for (let i = waktu; i >= 0; i--) {
        // inisiasi menit dan second
        let minutes = Math.floor(waktu/60)
        let seconds = waktu % 60;

        // jika menit dan second < 2 digit
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // BOOMM tampilkan ******
        process.stdout.write(`Execution time : ${clc.yellow(finish.toFixed(2))} seconds | Refresh token : ${clc.yellow(moment.unix(nanti).format("YYYY-MM-DD HH:mm:ss"))} | Refresh after : ${clc.yellow(`${minutes}:${seconds}`)}`);
        
        // increament - 1
        waktu = waktu-1;

        // blocking delay untuk satu detik
        await new Promise(resolve => setTimeout(resolve, 1000))

        // clear last console log
        if (waktu >= 0) {
            process.stdout.clearLine();
            process.stdout.cursorTo(0); 
        }
    }
}

// async func to sendmessage to telegram
const sendMessage = async (total) => {
    const telegram_token = String(process.env.TELEGRAM_TOKEN)
    const telegram_chatid = String(process.env.TELEGRAM_CHATID)
    const message = `Total yescoin : ${total}`
    
    if (telegram_token != "" && telegram_chatid != "") {
        const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${telegram_chatid}&text=${message}`

        while (true) {
            try {
                const response = await fetch(url);

                if (response.status == 200) {
                    // console.log(response.data)
                    return response.data
                }
            } catch (err) {
                console.log(`Error to sendMessage, ${err}`)
                continue
            }
        }
    } else {
        return
    }
}

(async () => {
    // const query = ""

    // clear cli
    console.clear()

    console.log("Create token started")
    const restoken = await runCreateToken()
    if (restoken == true) {
        console.log("Create token success!")
        
        let sekarang = Math.trunc(Date.now()/1000)
        let nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)

        while (sekarang < nanti) {
            console.log(figlet.textSync('yescoin botjs', {font: "Ogre"}), '\n')
            console.log("Auto upgrade boost :", process.env.AUTO_UPGRADE == "true" ? clc.green('On') : "Off")
            console.log("Auto claim task :", process.env.AUTO_TASKS == "true" ? clc.green('On') : "Off")
            console.log("")
            let start = Date.now()/1000

            // open tokens.txt
            const data = fs.readFileSync('tokens.txt', 'utf-8')
            const tokens = data.split('\n')
            
            // run all ***GATHER BOOMMM!!!!!
            const runall = await Promise.all(tokens.map(async (token, idx) => {
                if (token != "") {
                    // user
                    const account = await getAccountInfo(token)
                    let game_info = await getGameInfo(token)
                    const account_info = await getAccountBuildInfo(token)
                    let current_amounts = 0
                    try {
                        current_amounts = account['data']['currentAmount']
                    } catch (e) {
                        current_amounts = 0
                    }
                    let coinleft = 0
                    try {
                        coinleft = Math.round((game_info['data']['coinPoolLeftCount']/10)) // Satuannya 10:1 coin
                    } catch (err) {
                        coinleft = 0
                    }

                    // daily mission
                    const daily_mission = await getDailyMission(token)
                    try {
                        await claimBonus(token, 1)
                    } catch (e) {
                        console.error(e)
                    }
                    let status_daily = "-"
                    let count_status_daily = 0
                    if (daily_mission['code'] == 0) {
                        for (i of daily_mission['data']) {
                            if (i['missionStatus'] == 0) {
                                const missionid = i['missionId']
                                // console.log(missionid)
                                await finishDailyMission(token, missionid)
                                await new Promise(resolve => setTimeout(resolve, 1000))
                            } else {
                                count_status_daily = count_status_daily + 1
                            }   
                        }
                        
                        status_daily = `${clc.yellow('Claim daily')}`
                    }

                    if (count_status_daily > 0) {
                        status_daily = `${clc.green('Done')}`
                    }

                    // ############################### RUN FOREVAR ###################################
                    // stay online
                    await offline(token)

                    // tap-tap
                    let claim = await collectCoin(token, Number(process.env.COINS_PER_CLAIM))
                    let status_claim = "-"
                    if (claim['message'] == "Success") {
                        status_claim = `${clc.green(`${claim['message']}`)}`
                    } else {
                        status_claim = `${clc.yellow('Waiting')}`
                    }
                    // ###############################################################################

                    // upgrade boost
                    if (process.env.AUTO_UPGRADE == "true" || process.env.AUTO_UPGRADE == "y") {
                        try {
                            if (current_amounts > account_info['data']['singleCoinUpgradeCost'] || current_amounts > account_info['data']['coinPoolRecoveryUpgradeCost'] || current_amounts > account_info['data']['coinPoolTotalUpgradeCost'] || current_amounts > account_info['data']['swipeBotUpgradeCost']) {
                                const randchoice = [1, 2, 3, 4]
                                const idup = randchoice[(Math.floor(Math.random() * randchoice.length))]
                                // console.log(idup)
                                await levelUp(token, idup)
                            }
                        } catch (err) {
                            console.error(err)
                        }
                    }

                    // upgrade user (task)
                    if (process.env.AUTO_TASKS == "true" || process.env.AUTO_TASKS == "y") {
                        const upgradeuser_task = await getUserUpgradeTaskList(token)
                        if (upgradeuser_task['code'] == 0) {
                            for (i of upgradeuser_task['data']['taskBonusBaseResponseList']) {
                                if (i['taskStatus'] == 0) {
                                    // console.log('ada')
                                    const taskid = i['taskId']
                                    await finishUserUpgradeTask(token, taskid)
                                    await new Promise(resolve => setTimeout(resolve, 1000))
                                } 
                            }
                        }
                    }
                
                    // sosial/common (task)
                    if (process.env.AUTO_TASKS == "true" || process.env.AUTO_TASKS == "y") {
                        try {
                            await claimBonus(token, 2)
                        } catch (e) {
                            console.error(e)
                        }
                        const list_task = await getCommonTaskList(token)
                        if (list_task['code'] == 0) {
                            for (i of list_task['data']) {
                                if (i['taskStatus'] == 0) {
                                    // console.log(task['taskId'])
                                    const idtask = i['taskId']
                                    await claimTask(token, idtask)
                                    await new Promise(resolve => setTimeout(resolve, 1000))
                                }
                            }   
                        }
                    }
                
                    // special box (SB) 
                    await specialBoxReloadPage(token)
                    const special_box = await getSpecialBoxInfo(token)
                    
                    try {
                        if (special_box['data']['autoBox'] != null) {
                            const countcoinbox = special_box['data']['autoBox']['specialBoxTotalCount']-3
                            const boxtype = special_box['data']['autoBox']['boxType']
                            await collectSpecialBoxCoin(token, boxtype, countcoinbox)
                        } else if (special_box['data']['recoveryBox'] != null) {
                            const countcoinbox = special_box['data']['recoveryBox']['specialBoxTotalCount']-3
                            const boxtype = special_box['data']['recoveryBox']['boxType']
                            await collectSpecialBoxCoin(token, boxtype, countcoinbox)
                        } else {
                            await recoverSpecialBox(token)
                        }
                    } catch (err) {
                        console.error(err)
                    }
                    

                    let specialrecov_bal = "-"
                    try {
                        if (account_info['data']['specialBoxLeftRecoveryCount'] > 0) {
                            specialrecov_bal = `${clc.green(account_info['data']['specialBoxLeftRecoveryCount'])}`
                        } else {
                            specialrecov_bal = 0
                        }
                    } catch (err) {
                        console.error(err)
                    }
                    
                    // recovery/full box (FB)
                    let recovery_bal = "-"
                    try {
                        if (account_info['data']['coinPoolLeftRecoveryCount'] > 0 && coinleft < 300) {
                            await recoverCoinPool(token)
                            game_info = await getGameInfo(token)
                            claim = await collectCoin(token, process.env.COINS_PER_CLAIM)
                        }
                            
                        if (account_info['data']['coinPoolLeftRecoveryCount'] > 0) {
                            recovery_bal = `${clc.green(account_info['data']['coinPoolLeftRecoveryCount'])}`
                        } else {
                            recovery_bal = 0
                        }
                    } catch (err) {
                        console.error(err)
                    }

                    // share journey
                    await shareJourney(token)
                    
                    const lvl_acc = account['data']['levelInfo']['level']
                    const rank_acc = account['data']['rank']
                    const bal_acc = account['data']['currentAmount']
                    const lengcount = countLength(idx)
                    let accnum = lengcount == 1 ? `Account 0${idx+1}` : `Account ${idx+1}`

                    if (accnum === "Account 010") {
                        accnum = "Account 10"
                    }

                    console.log(`[${accnum}] | Level : ${lvl_acc} | Rank : ${rank_acc} | Daily mission : ${status_daily} | Balance : ${clc.green(bal_acc.toLocaleString('en-US'))} | Coin left : ${clc.yellow(coinleft)} | SB : ${specialrecov_bal} | FB : ${recovery_bal} | Status : ${status_claim}`) 

                    return Math.trunc(bal_acc)
                }
            }))

            // console.log(runall)

            let totalallacc = 0
            for (let i=0; i < runall.length; i++) {
                if (runall[i] != undefined) {
                    totalallacc = totalallacc + runall[i]
                }
            }

            // delay before next running
            console.log('')
            console.log('Total balance :', clc.green(totalallacc.toLocaleString('en-US')))

            let finish = (Date.now()/1000)-start

            // printed and blocking
            await timeCount(finish, nanti, Number(process.env.REFRESH_CLAIM)) // blocking/pause for REFRESH_CLAIM seconds

            sekarang = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_CLAIM)
            if (sekarang >= nanti) {
                console.log("\n")
                console.log("Refresh tokens started!")
                const restoken = await runCreateToken()
                if (restoken == true) {
                    console.log("Refresh tokens success!")
                    await new Promise(resolve => setTimeout(resolve, 2000)) // blocking/pause for 2 seconds
                    await sendMessage(totalallacc.toLocaleString('en-US'))
                    nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)
                }
            }
                
            console.clear()
        }
    }
})()