/** Author(s): Tom Zielinski,
 *             Calvin May
 * 
 *  Date: 02/02/2021 | Last Modified: 02/03/2021
 *  Document: app.js
 *  Description: ...
 */

/** Custom JavaScript Page */

/** IFFE Function */
(() => {

    // Declarations
    let mainContent = document.getElementsByTagName("main")[0]; // Holds the <main> element
    

    // First Fix the upper, lower navbars. Ensuring they display properly
    fixNavBars();


    /** Web Application Startup Functions */
    /** Start() - Lets the application know which content to load
     *          based on the title of the document.
    */
    function Start() {
        console.log("Web App Started.");``


        // A switch case used to figure out which page is being loaded.
        switch (document.title) {
            case "Home":
                displayHomePage();
                break;
            case "About":
                displayAboutPage();
                break;
            case "Contact":
                displayContactPage();
                break;    
            case "Projects":
                displayProjectsPage();
                break;
            case "Services":
                displayServicesPage();
                break;
        }
        
        // Fix the "Products" Nav item
       
    }

    /** Display Page Content Functions */
    /** displayHomePage() - Loads the Content for index.html */
    function displayHomePage() {

        let newParagraph = document.createElement("p");
        newParagraph.setAttribute("id", "paragraphOne");
        newParagraph.textContent = "Paragraph One!";
        newParagraph.className = "fs-6";

        mainContent.appendChild(newParagraph);
    }

    /** displayAboutPage() - Loads the Content for about.html */
    function displayAboutPage() {

    }

    /** displayContactPage() - Loads the Content for contact.html */
    function displayContactPage() {

    }

    /** displayProjectsPage() - Loads the Content for projects.html */
    function displayProjectsPage() {

    }

    /** displayServicesPage() - Loads the Content for services.html */
    function displayServicesPage() {

    }

    function fixNavBars()
    {
        let navBarItemList = document.getElementById("pageList");
        let child = navBarItemList.childNodes;

        // Fix the "Products" Nav item
        let projectPageAnchor = document.getElementById("projects");    // Get the Nav item Anchor tag by id
        projectPageAnchor.setAttribute("href", "projects.html");        // Correctly set the Hypertext Reference attribute
        projectPageAnchor.textContent = " Projects";                    // Correctly set the text to indicate a project page
        
        // Insert a Nav item for Human Resources
        let humanResourcesListItem = document.createElement("li");
        humanResourcesListItem.setAttribute("class", "nav-item");
        let hrListItemData = '<a class="nav-link" aria-current="page" href="index.html"><i class="fas fa-home fa-lg"></i> Human Resources</a>';
        humanResourcesListItem.innerHTML = hrListItemData;
        navBarItemList.insertBefore(humanResourcesListItem, navBarItemList.childNodes[8]);

        
        // Insert a new footer NavBar
        let footerData = "";
        let pageFooter = document.createElement("footer");
        mainContent.parentNode.insertBefore(pageFooter, mainContent.nextSibling);

        footerData = '<nav class="navbar fixed-bottom navbar-dark bg-dark"> ' +
                     '<div class="container-fluid"> ' +
                     '<h7 class="text-light"><i class="fas fa-copyright text-light"></i> Copyright 2021</h7> ' +
                     '</div> ' +
                     '</nav> ';
        pageFooter.innerHTML = footerData;

    }

    // Add an event listener for the load event (Page load).
    //-Call the Start() function so that we can display page
    //-specific content
    window.addEventListener("load", Start);

})();
