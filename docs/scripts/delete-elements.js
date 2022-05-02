function RemoveElements(timeout){
    setTimeout(function() {
        // do something 1000ms later here.
        var el_facetby = document.querySelector("#app > section > div > div.sanddance-main.pinned > div.sanddance-sidebar.calculator.pinned > div > div.scrollable-container > div > div > div > div:nth-child(2) > div.group-body > div > div:nth-child(6)")
        var el_facetlayout = document.querySelector("#app > section > div > div.sanddance-main.pinned > div.sanddance-sidebar.calculator.pinned > div > div.scrollable-container > div > div > div > div:nth-child(2) > div.group-body > div > div:nth-child(7)")
        var el_zgrounded = document.querySelector("#app > section > div > div.sanddance-main.pinned > div.sanddance-sidebar.calculator.pinned > div > div.scrollable-container > div > div > div > div:nth-child(3) > div.group-body > div:nth-child(2)")
        
        if (el_facetby != null)
            el_facetby.remove();
        
        if (el_facetlayout != null)
            el_facetlayout.remove();

        if (el_zgrounded != null)
            el_zgrounded.remove();

    }, timeout); 
}

RemoveElements(1000)

var filtered = document.querySelector("#app > section > div > div.sanddance-main.pinned > div.sanddance-sidebar.calculator.pinned > div > div.sanddance-datascope.extended > div > div.datascope-buttons > button:nth-child(2) > span > span > div > div")
var selected = document.querySelector("#app > section > div > div.sanddance-main.pinned > div.sanddance-sidebar.calculator.pinned > div > div.sanddance-datascope.extended > div > div.datascope-buttons > button:nth-child(3) > span > span > div > div")

var prev_filtered = 0
var prev_selected = 0

function UpdatePrevious(curr_filtered, curr_selected){
    prev_filtered = curr_filtered
    prev_selected = curr_selected
}

function EventHandler(){
    curr_filtered = parseInt(filtered.textContent)
    curr_selected = parseInt(selected.textContent)

    if(prev_filtered == curr_filtered && prev_selected != curr_selected && curr_selected == 0)
        console.log("dalu," + Date.now() + ",Filtering,StopSelecting")

    UpdatePrevious(curr_filtered, curr_selected)
}

var observer = new MutationObserver(
    function (mutations) {
        EventHandler()
    }
);

var config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true
};

setTimeout(function() {
    observer.observe(filtered, config);
    observer.observe(selected, config);
}, 2000); 



setTimeout(function() {

    var point_size_div = document.querySelector("#app > section > div > div.sanddance-main.pinned > div.sanddance-sidebar.calculator.pinned > div > div.scrollable-container > div > div > div > div:nth-child(3) > div.group-body > div:nth-child(1) > div > div > label")

    var observer_point_scale = new MutationObserver(
        function (mutations) {
            console.log("dalu," + Date.now() + ",PointScaleChange," + point_size_div.textContent)
        }
    );

    observer_point_scale.observe(point_size_div, config);
}, 2000); 


var chart_button = document.querySelector("#app > section > div > div.sanddance-main.pinned > div.sanddance-sidebar.calculator.pinned > div > div.vbuttons > div.sidebar-dialogs > div.vbutton.selected > button")
chart_button.setAttribute("onclick","RemoveElements(0)");