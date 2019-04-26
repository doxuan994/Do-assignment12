// Move sidebar on scroll
let sidebar = document.getElementById('sidebar');
let sidebarChild = sidebar.children[0];
let footer = document.getElementById('footer');
// let offsetTop = sidebar.offsetTop;


let header = document.getElementById('header');
let headeroffsetHeight = header.offsetHeight;

let windowInnerWidth = window.innerWidth;
window.addEventListener('scroll', function() {
    let footerClientY = footer.getBoundingClientRect().top;
    let footerClientHeight = footer.clientHeight;


    // Stop adding margin to sidebar when users reach the end of the content.
    let stopAddMargin = footerClientY - footerClientHeight;

    console.log(pageYOffset);

    if (windowInnerWidth >= 1200 && pageYOffset > headeroffsetHeight  && stopAddMargin > 0) {
        // Add data-spy="affix" to sidebar ul.
        sidebarChild.classList.add("affix");
    } else {
        sidebarChild.classList.remove("affix");
    }
}, false);
