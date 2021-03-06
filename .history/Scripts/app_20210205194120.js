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
            case "Human Resources":
                displayHumanResourcesPage();
                break;    
        }
       
    }

    /** Display Page Content Functions */
    /** displayHomePage() - Loads the Content for index.html */
    function displayHomePage() {

        let newParagraph = document.createElement("p");
        newParagraph.setAttribute("id", "paragraphOne");
        newParagraph.className = "fs-6 col col-md-4 mt-5 m-auto px-4 border border-dark border-4 rounded";
        newParagraph.textContent = "Welcome to Cavlin May's and Tom Zielinski's Webd6201 Lab01 webpage.";

        mainContent.appendChild(newParagraph);
    }

    /** displayAboutPage() - Loads the Content for about.html */
    function displayAboutPage() {

        // About Tom Content
        //-Create Elements for About Tom
        let aboutTomDiv = document.getElementById("about-tom");
        let tomHeading = document.createElement("h2");
        let pic = document.createElement("img");
        let aboutTom = document.createElement("p");
        let tomResume = document.createElement("a");
        
        // Set the Attributes, html, and Content for Toms Elements
        //-Name Heading
        tomHeading.textContent = "Tom Zielinski"; 
        //-Portrait
        pic.setAttribute("src", "../Pictures/Tom.jpeg");
        pic.setAttribute("class", "headshot-portrait");
        pic.setAttribute("alt", "Headshot of Tom");   
        //-Resume
        tomResume.setAttribute("href", "../files/resumes/Tom_Resume.pdf");
        tomResume.setAttribute("download", "");
        tomResume.setAttribute("class", "btn btn-primary");
        tomResume.textContent = "Resume";
        //-About Info
        aboutTom.innerHTML = `<hr/><p>Hello, My name is Tom Zielinski. I am a second year student at Durham College enrolled in the Computer Programming & Analysis program.</p>`;
        
        // Insert the Elements within the about-tom div
        aboutTomDiv.appendChild(pic);
        aboutTomDiv.appendChild(tomHeading);
        aboutTomDiv.appendChild(tomResume);
        aboutTomDiv.appendChild(aboutTom);
        
        // About Calvin Content
        //-Create Elements for About Calvin
        let aboutCalvinDiv = document.getElementById("about-calvin");
        let calvinHeading = document.createElement("h2");
        let calvinPortrait = document.createElement("img");
        let aboutCalvin = document.createElement("p");
        let calvinResume = document.createElement("a");

        // Set the Attributes, html, and Content for Toms Elements
        //-Name Heading
        calvinHeading.textContent = "Calvin May";
        //-Portrait
        calvinPortrait.setAttribute("src", "../Pictures/Calvin.jpg");
        calvinPortrait.setAttribute("class", "headshot-portrait");
        calvinPortrait.setAttribute("alt", "Headshot of Tom");
        //-Resume
        calvinResume.setAttribute("href", "../files/resumes/Calvin_Resume.pdf");
        calvinResume.setAttribute("download", "");
        calvinResume.setAttribute("class", "btn btn-primary");
        calvinResume.textContent = "Resume"; 
        //-About Info
        aboutCalvin.innerHTML = `<hr/>
        <p>Hi, my name's Calvin. <br/><br/>
        I'm a Coop Student at Durham College working towards an Advanced Diploma in
        Computer Programming & Analysis. If you've stumbled upon this website, you're
        probably my professor, hey Tom! I hope grading isnt taking up too much of your
        time, see you in class! <br/>
        If your not my professor, that was a bit awkward. <br/>
        I'm an aspiring developer, like my friend Tom to your right, and have experience
        in several programming languages like C#, C++, and PHP. But this website doesnt
        use PHP. The dynamic portions of this website are programmed using javascript.
        <br/>
        If you want to get to know me a bit more, click the resume button by my name or
        take a look at my linkedIn Account. <br/>
        <a class="nav-link" href="https://www.linkedin.com/in/calvin-may-384798200/">My LinkedIn</a>
        </p>`;       
        
        // Insert the Elements within the about-tom div
        aboutCalvinDiv.appendChild(calvinPortrait);
        aboutCalvinDiv.appendChild(calvinHeading);
        aboutCalvinDiv.appendChild(calvinResume);
        aboutCalvinDiv.appendChild(aboutCalvin);
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

    /** displayHumanResourcesPage() - Loads the Content for human_resources.html */
    function displayHumanResourcesPage() {
        

    }

    /**
     * fixNavBars() - This Function is used to finish creating the Header/Footer Navbars
     *              using DOM Manipulation and Injection. First it fixes the "Products"
     *              NavBar link to correctly show, "Projects" and link to the projects.html
     *              page. It also Insert a new NavBar link, "Human Recources" between
     *              "About us" and "Contact Us" links. Finally, it adds a footer to the
     *              bottom of the page.
     */
    function fixNavBars()
    {
        // Fix the "Products" Nav item
        let projectPageAnchor = document.getElementById("projects");    // Get the Nav item Anchor tag by id
        projectPageAnchor.setAttribute("href", "projects.html");        // Correctly set the Hypertext Reference attribute
        projectPageAnchor.innerHTML = "<i class=\"fas fa-th fa-lg\"></i> Projects"; // Correctly set the text to indicate a project page
        
        // Insert a Nav item for Human Resources
        let navBarItemList = document.getElementById("pageList");  // Get the <ul> holding the Page links
        let humanResourcesListItem = document.createElement("li"); // Create a new list Item
        humanResourcesListItem.setAttribute("class", "nav-item");  // Set the class of the list item to "nav-item"
        // Create the anchor that will exist within the humanResourcesListItem
        let hrListItemData = '<a class="nav-link" aria-current="page" ' + 
                             'href="human_resources.html"><i class="fas fa-home fa-lg"></i> Human Resources</a>';
        // Set the innerHtml with the data above
        humanResourcesListItem.innerHTML = hrListItemData;
        // Insert the new listitem before the 8th child within the <ul>
        //-(8th because it counts both the <li> elements and the <a> elements within)
        navBarItemList.insertBefore(humanResourcesListItem, navBarItemList.childNodes[8]);
        
        
        // Insert a new footer NavBar
        let footerData = "";    // A variable to hold the html code for the footers navBar
        // Create the footer element
        let pageFooter = document.createElement("footer");  
        // Insert the new footer element before the "next" sibling of <main>
        //-Reads as <body>.insertBefore(pageFooter, elementAfterMain)
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
