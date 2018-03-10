browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    browser.pageAction.show(tab.id);
})
;