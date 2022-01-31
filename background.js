function openTab(){
    
    var newTab = chrome.tabs.create({
        url:'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        active:true
    })
}

chrome.browserAction.onClicked.addListener(openTab)