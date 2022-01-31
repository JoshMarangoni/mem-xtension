function openTab(){
    
    var newTab = chrome.tabs.create({
        url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        active:true
    })
}

chrome.browserAction.onClicked.addListener(openTab)