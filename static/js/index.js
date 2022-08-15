// manually adjust the sticky top element to work on small and medium breakpoints
//  stick-top class needs to be applied to different div's depending on breakpoint
function stickyTopSm(){
    $("#stickySm").addClass("sticky-top");
    $("#stickyMd").removeClass("sticky-top");
    console.log('sticky topped');
}
function stickyTopMd(){
    $("#stickySm").removeClass("sticky-top");
    $("#stickyMd").addClass("sticky-top");
}
function adjustStickyTop(mQuery){
    if (mQuery.matches){
        stickyTopSm();
    } 
    else{
        stickyTopMd();
    }
}

var mQuery = window.matchMedia("(max-width: 768px)");
adjustStickyTop(mQuery);
mQuery.addListener(adjustStickyTop);