document.addEventListener("DOMContentLoaded", function() {

    function clearMainContent() {

        // Get all the divs nested inside the main-content element
        
        const nestedHeader = mainContent.querySelectorAll('header');
        const nestedDivs = mainContent.querySelectorAll('div');
        const nestedH1 = mainContent.querySelectorAll('h1');

        // Loop through each div and clear its contents

        nestedHeader.forEach(header => {
            header.remove();
        });

        nestedDivs.forEach(div => {
            div.remove();
        });

        nestedH1.forEach(h1 => {
            h1.remove();
        });
    };

    function scrollToSection(sectionId) {
        const targetElement = document.getElementById(sectionId);
        const mainContent = document.querySelector('.main-content');
        if (targetElement && mainContent) {
            const targetPosition = targetElement.offsetTop;
            mainContent.scrollTo({ top: targetPosition, behavior: 'smooth' });
        };
    };

    function addScrollListeners() {
        const links = document.querySelectorAll('.content-overview-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                const sectionId = link.dataset.sectionId;
                scrollToSection(sectionId);
            });
        });
    };

    function createHeading(heading, subheading) {
        const h1 = document.createElement('h1');
        h1.classList.add('content-heading');
        h1.textContent = heading;

        mainContent.appendChild(h1);

        const p = document.createElement('p');
        p.classList.add('content-subheading');
        p.textContent = subheading;

        h1.appendChild(p);
    };

    function createHeader() {

        const header = document.createElement('header');
        header.id = 'content-overview';
        header.classList.add('content-overview-box');

        mainContent.appendChild(header);
    };

    function createSections(numOfDivs) {

        for (let i = 1; i <= numOfDivs; i++) {

            const div = document.createElement('div');
            div.id = 'content-sec-' + i;
            mainContent.appendChild(div);
        };
    };

    function createFooter(size) {

        const spacer = document.createElement('div');
        spacer.classList.add('spacer-' + size);

        mainContent.appendChild(spacer);
    };

    function homePage() {

        clearMainContent(); // Clear .main-content

        mainContent.scrollTo(0, 0); // Scroll to the top of the page

        createHeading('Cameron Parker', ' Full-Stack Developer');
        createHeader();
        createSections(16);
        createFooter(60);
        createFooter(60);

        if (window.innerWidth < 800) {
            createFooter(60);
        };

        // content overview html

        const titles = [
            "Introduction",
            "Skills",
            "Programs",
            "Education",
            "Professional Experience",
            "References",
        ];

        const contentOverview = document.getElementById("content-overview");
        const hr = document.createElement("hr");
        hr.setAttribute("class", "content-heading-hr-t");
        contentOverview.appendChild(hr);

        for (let i = 0; i < titles.length; i++) {
            const anchor = document.createElement("a");
            anchor.setAttribute("class", "content-overview-link");
            anchor.setAttribute("href", "javascript:void(0)");
            anchor.setAttribute("data-section-id", `content-sec-${i + 1}`);

            const marker = document.createElement("p");
            marker.setAttribute("class", "content-overview-link-marker");
            marker.textContent = `${i + 1}.`;

            anchor.appendChild(marker);
            anchor.insertAdjacentText("beforeend", titles[i]);
            contentOverview.appendChild(anchor);

            if (i < titles.length - 1) {
                const lineBreak = document.createElement("br");
                contentOverview.appendChild(lineBreak);
            }
        }

        addScrollListeners();
        
        // port section 1

        const eng_paragraphVars1 = [
            "Hello, my name is Cameron Parker and I'm a skilled full-stack developer with a passion for technology and a lifelong learner. I have several years of experience in developing robust and scalable web applications, conducting data analysis, and managing complex software projects. I have a wide range of technical skills that include proficiency in programming languages such as Python, C#, PHP, and JavaScript, as well as in technologies like HTML5, CSS, Node.js, and SQL. I have completed several online and in-person courses at Harvard College, MITx, and Ivy Tech to expand my knowledge of software and computer hardware engineering.",
            "Throughout my career, I have been driven by a desire for excellence and a willingness to adapt to new technologies and best practices. I am an expert problem solver with strong critical thinking skills, allowing me to effectively tackle complex challenges in my work. My experience in software project management, cloud computing, IT service management, and computer hardware engineering has equipped me with a unique set of skills that make me an invaluable asset to any development team.",
            "I am a quick learner and always willing to take on new challenges. With my strong communication and public speaking skills, I am confident in my ability to effectively collaborate with colleagues and present complex ideas to stakeholders. I am committed to staying up-to-date with the latest trends in the industry, and I am constantly seeking out new opportunities to learn and grow as a developer. I am excited to bring my skills and expertise to any project and to make a significant impact on the world of technology.",
        ];

        const contentSec1 = document.getElementById("content-sec-1");

        const introHeading1 = document.createElement("h3");
        introHeading1.setAttribute("class", "content-heading-mini");
        introHeading1.textContent = "Introduction";
        contentSec1.appendChild(introHeading1);

        const hr1 = document.createElement("hr");
        hr1.setAttribute("class", "content-section-hr");
        contentSec1.appendChild(hr1);

        for (let i = 1; i <= eng_paragraphVars1.length; i++) {

            const paragraphID = `content1p${i}`;
            const paragraphVar = eng_paragraphVars1[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec1.appendChild(paragraph);
        };

        // port section 2

        const eng_titles2 = [
          "Full-Stack Development: ",
          "Software Project Management: ",
          "Information Technology: ",
          "Cloud Computing: ",
          "HTML5: ",
          "Cascading Style Sheets (CSS): ",
          "XML: ",
          "PHP: ",
          "SQL: ",
          "JavaScript: ",
          "Node.js: ",
          "Python: ",
          "C#: ",
        ];

        const eng_paragraphVars2 = [
          "Experienced in both front-end and back-end development, allowing for a complete understanding of the entire web development process.",
          "Skilled in managing software development projects from conception to delivery, ensuring that projects meet stakeholder expectations and are delivered on time and within budget.",
          "Expertise in various areas of information technology, including IT service management, software project management, and cloud computing.",
          "Experienced in developing and deploying scalable web applications using cloud computing platforms like AWS and Microsoft Azure.",
          "Skilled in using HTML5 to create modern and responsive web pages with advanced features and functionality.",
          "Skilled in using CSS to create visually appealing and responsive web pages.",
          "Skilled in working with XML, a popular markup language used in web development.",
          "Proficient in using PHP, a server-side scripting language commonly used in web development.",
          "Proficient in using SQL for database management and data analysis.",
          "Skilled in using JavaScript, a popular programming language used to create dynamic and interactive web pages.",
          "Skilled in using Node.js, a popular JavaScript runtime that allows for server-side JavaScript programming.",
          "Proficient in using Python for data analysis, machine learning, and other applications.",
          "Proficient in using C#, a popular programming language used in web development and software engineering.",
        ];

        const contentSec2 = document.getElementById("content-sec-2");

        const introHeading2 = document.createElement("h3");
        introHeading2.setAttribute("class", "content-heading-mini");
        introHeading2.textContent = "Skills";
        contentSec2.appendChild(introHeading2);

        const hr2 = document.createElement("hr");
        hr2.setAttribute("class", "content-section-hr");
        contentSec2.appendChild(hr2);

        const skillsList = document.createElement("ul"); // create unordered list
        skillsList.setAttribute("class", "content-section-p"); // set class to apply styling
        contentSec2.appendChild(skillsList); // append to content section

        for (let i = 0; i < eng_paragraphVars2.length; i++) { // iterate through array
          const paragraphVar = eng_paragraphVars2[i];
          const titleAndDescription = document.createElement("li");
          titleAndDescription.innerHTML = `<span class="content-title">${eng_titles2[i]}</span>${paragraphVar}`; // set title with different class
          skillsList.appendChild(titleAndDescription); // append title and description to unordered list
        };


        // port section 3

        const eng_paragraphVars3 = [
            "As a full stack developer, I have created two unique programs, each with its own set of features and functionalities. The first program, 'docsGPT,' is a writing and research tool that leverages the power of the OpenAI API and the GPT-3.5-turbo model to generate high-quality content for users. With an intuitive user interface and a variety of tools for generating ideas, finding sources, and answering questions, this program is ideal for students, researchers, and writers who need to produce high-quality content quickly and efficiently.",
            "The second program, 'Engine C-PA,' is a simple but unique chess game that allows users to play against an AI opponent. With a standard chess board and movable pieces, users can play as white while the AI plays as black. The left-hand side panel displays important information about the game, including the assessment of the position, the advantage/status bar, and the settings accordion. With an interface built using Bootstrap, Google Icons, Font Awesome, and other tools, this program is both user-friendly and visually appealing.",
            "Overall, I am proud to have created these two programs, each of which serves a unique purpose and demonstrates my skills as a developer. Whether it's helping users generate high-quality content or providing them with a fun and engaging way to play chess, these programs are a testament to my commitment to creating innovative and effective solutions to real-world problems.",
        ];

        const contentSec3 = document.getElementById("content-sec-3");

        const introHeading3 = document.createElement("h3");
        introHeading3.setAttribute("class", "content-heading-mini");
        introHeading3.textContent = "Programs";
        contentSec3.appendChild(introHeading3);

        const hr3 = document.createElement("hr");
        hr3.setAttribute("class", "content-section-hr");
        contentSec3.appendChild(hr3);

        for (let i = 1; i <= eng_paragraphVars3.length; i++) {

            const paragraphID = `content3p${i}`;
            const paragraphVar = eng_paragraphVars3[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec3.appendChild(paragraph);
        };

        // port section 4

        const eng_paragraphVars4 = [
            "I have completed several courses at HarvardX and MITx, two of the most prestigious institutions in the world. At HarvardX, I focused on advancing my skills in back-end web development, cloud computing, and data analysis. Through these courses, I gained a deep understanding of key technologies such as JavaScript, C#, HTML5, Cascading Style Sheets (CSS), and Python, among others. I have also honed my skills in cloud computing, learning how to develop and deploy scalable web applications using platforms like AWS and Microsoft Azure. Furthermore, I have learned how to conduct data analysis using Python, exploring key data science concepts such as data cleaning, data visualization, and machine learning.",
            "At MITx, I completed several courses focusing on the latest trends in back-end web development, cloud computing, and related technologies. Through these courses, I gained a deep understanding of PHP, JavaScript, Node.js, and other key tools for creating and deploying robust, scalable web applications. I also honed my skills in cloud computing, learning about platforms like AWS and Microsoft Azure and how they can be used to build and deploy web applications. Additionally, I learned how to develop efficient and secure back-end systems using modern best practices and cutting-edge technologies. These educational experiences have provided me with the tools and knowledge needed to succeed in a constantly evolving technological landscape.",
        ];

        const contentSec4 = document.getElementById("content-sec-4");

        const introHeading4 = document.createElement("h3");
        introHeading4.setAttribute("class", "content-heading-mini");
        introHeading4.textContent = "Education";
        contentSec4.appendChild(introHeading4);

        const hr4 = document.createElement("hr");
        hr4.setAttribute("class", "content-section-hr");
        contentSec4.appendChild(hr4);

        for (let i = 1; i <= eng_paragraphVars4.length; i++) {

            const paragraphID = `content4p${i}`;
            const paragraphVar = eng_paragraphVars4[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec4.appendChild(paragraph);
        };

        // port section 5

        const eng_paragraphVars5 = [
            "I am currently working as an Information Technology Specialist at myhelo on a part-time basis. In this role, I am responsible for various tasks related to IT service management, software project management, and Windows registry. I also apply my expertise in XML, HTML, and full-stack development to contribute to the development and maintenance of the company's website.",
            "In addition to my current position, I have also gained valuable professional experience as a full stack developer. I have worked on various projects that involved front-end and back-end web development, cloud computing, and data analysis. Through these experiences, I have honed my skills in technologies such as JavaScript, Python, Node.js, PHP, and SQL, among others. These experiences have equipped me with the tools and knowledge needed to take on complex challenges in the world of web development and data analysis.",
        ];

        const contentSec5 = document.getElementById("content-sec-5");

        const introHeading5 = document.createElement("h3");
        introHeading5.setAttribute("class", "content-heading-mini");
        introHeading5.textContent = "Professional Experience";
        contentSec5.appendChild(introHeading5);

        const hr5 = document.createElement("hr");
        hr5.setAttribute("class", "content-section-hr");
        contentSec5.appendChild(hr5);

        for (let i = 1; i <= eng_paragraphVars5.length; i++) {

            const paragraphID = `content5p${i}`;
            const paragraphVar = eng_paragraphVars5[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec5.appendChild(paragraph);
        };

        // port section 6

        const eng_paragraphVars6 = [
            "References are available upon request.",
        ];

        const contentSec6 = document.getElementById("content-sec-6");

        const introHeading6 = document.createElement("h3");
        introHeading6.setAttribute("class", "content-heading-mini");
        introHeading6.textContent = "References";
        contentSec6.appendChild(introHeading6);

        const hr6 = document.createElement("hr");
        hr6.setAttribute("class", "content-section-hr");
        contentSec6.appendChild(hr6);

        for (let i = 1; i <= eng_paragraphVars6.length; i++) {

            const paragraphID = `content6p${i}`;
            const paragraphVar = eng_paragraphVars6[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec6.appendChild(paragraph);
        };

        /*
        codeHTML = `
            <div style="position: relative; padding-bottom: 62.5%; height: 0;">
                <iframe src="https://www.loom.com/embed/8fabedb3dd65436e8ccebf434d92476b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
            </div>
        `;

        document.querySelector(".main-content").innerHTML = codeHTML;
        */

    };

    function enginePage() {

        event.preventDefault(); // Prevents the default behavior of the link

        clearMainContent(); // Clear .main-content

        mainContent.scrollTo(0, 0); // Scroll to the top of the page

        createHeading('Engine C-PA', ' Documentation');
        createHeader();
        createSections(9);
        createFooter(60);
        createFooter(60);

        // content overview html

        const titles = [
            "Introduction",
            "Development & JavaScript",
            "HTML",
            "CSS & Bootstrap",
            "Rules",
            "Sunfish.py",
            "Parallel Chess",
            "Conclusion",
            "Sources & Tools",
        ];

        const contentOverview = document.getElementById("content-overview");
        const hr = document.createElement("hr");
        hr.setAttribute("class", "content-heading-hr-t");
        contentOverview.appendChild(hr);

        for (let i = 0; i < titles.length; i++) {
            const anchor = document.createElement("a");
            anchor.setAttribute("class", "content-overview-link");
            anchor.setAttribute("href", "javascript:void(0)");
            anchor.setAttribute("data-section-id", `content-sec-${i + 1}`);

            const marker = document.createElement("p");
            marker.setAttribute("class", "content-overview-link-marker");
            marker.textContent = `${i + 1}.`;

            anchor.appendChild(marker);
            anchor.insertAdjacentText("beforeend", titles[i]);
            contentOverview.appendChild(anchor);

            if (i < titles.length - 1) {
                const lineBreak = document.createElement("br");
                contentOverview.appendChild(lineBreak);
            }
        }

        addScrollListeners();
        
        // engine section 1

        const eng_paragraphVars1 = [
            'Engine C-PA is a simple but unique chess game created by the developer cmprkr, which runs on a github development server. The game is designed to allow the user to play white while the AI plays black. It features a standard chess board with movable pieces that only allow the white pieces to move to legal spots. There are buttons underneath the board to undo or redo a move, making the game more convenient and user-friendly.',
            'One of the unique features of Engine C-PA is its left-hand side panel that displays the title ‘Engine C-PA’, the evaluation of the position in the number of seconds, a ‘settings’ accordion, and an advantage/status bar. The assessment of the class helps the user determine their next move, while the settings accordion allows the user to highlight white\'s best move, change how many moves ahead black thinks, and how many moves white thinks. The advantage/status bar tells the user which color has the advantage in the game, helping them understand the state of the game and plan their next move accordingly.',
            "The game's interface is built using Bootstrap, Google Icons, Font Awesome, JQuery, Chessboard JS, Chess JS, and Bootstrap JS. I personally created the main.js, README.md, main.css, chess.html, cpa.html, engine.html, the “images” file, and chess image files. The chess.js file is written under an MIT license, making it available for public use as a library."
        ];

        const contentSec1 = document.getElementById("content-sec-1");

        const introHeading = document.createElement("h3");
        introHeading.setAttribute("class", "content-heading-mini");
        introHeading.textContent = "Introduction";
        contentSec1.appendChild(introHeading);

        const hr1 = document.createElement("hr");
        hr1.setAttribute("class", "content-section-hr");
        contentSec1.appendChild(hr1);

        for (let i = 1; i <= eng_paragraphVars1.length; i++) {
            const paragraphID = `content1p${i}`;
            const paragraphVar = eng_paragraphVars1[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec1.appendChild(paragraph);
        };

        // engine section 2

        const eng_paragraphVars2 = [
            "The first step to take in creating the chess AI was setting up the game board and initializing the necessary variables. This includes setting the maximum size of the undo stack, initializing the Chessboard and Chess objects, and defining the color schemes for the chessboard.",
            "The next step is to define the configuration for the Chessboard, which includes draggable pieces and functions for onDragStart, onDrop, onMouseoutSquare, onMouseoverSquare, and onSnapEnd. These functions handle user input and update the board accordingly.",
            "After setting up the board and defining its configuration, we need to define the piece square tables. These tables are used to evaluate the board at any given point in time, based on the weights assigned to each piece and their position on the board.",
            "We then define the evaluateBoard function, which takes the current game state, the move made the current sum of values and the color of the AI as parameters. This function evaluates the board at the current state and returns a sum of values representing the current position's evaluation.",
            "Inside the evaluateBoard function, we check if the game is in checkmate, draw, threefold repetition, or stalemate position. If it is, we return a fixed value indicating the game's outcome.",
            "We then calculate the position of the move being made and update the piece square tables based on the move. We also update the sum of values based on the weight of the piece being moved and its position on the board.",
            "Finally, we return the updated sum of values representing the current position's evaluation.",
            "Give the AI the ability to manipulate pieces on the board.",
            "The AI can then use this function to evaluate potential moves and choose the one that best evaluates the board.",
        ];

        const contentSec2 = document.getElementById("content-sec-2");

        const introHeading2 = document.createElement("h3");
        introHeading2.setAttribute("class", "content-heading-mini");
        introHeading2.textContent = "Development & JavaScript";
        contentSec2.appendChild(introHeading2);

        const hr2 = document.createElement("hr");
        hr2.setAttribute("class", "content-section-hr");
        contentSec2.appendChild(hr2);

        for (let i = 1; i <= eng_paragraphVars2.length; i++) {
            const paragraphID = `content2p${i}`;
            const paragraphVar = eng_paragraphVars2[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec2.appendChild(paragraph);
        };

        // engine section 3

        const eng_paragraphVars3 = [
            "The webpage includes various CSS and JavaScript libraries for styling and functionality. The application features a chessboard and allows the user to adjust settings for the AI, such as search depth and showing suggested moves. It also displays the current game status and advantage and allows for undo and redo moves. The HTML code includes a header with a title, meta tags, and links to external stylesheets and scripts. It also includes a main section with various components, such as a collapsible settings section, buttons, and div containers for displaying information and the chessboard.",
            "The page is divided into two separate columns using Bootstrap's grid system, which divides a page into 12 equal-width columns. In this case, the 'row' element contains two 'col-md-6' elements, which means that each column will take up six of the 12 columns in the row, making them equal in width.",
            "The content on the left column, including the title and status bars, is placed inside a 'div' element with the 'col-md-6' class. Similarly, the content on the right column, which includes the chessboard and gameplay controls, is placed inside another 'div' element with the same class. Using Bootstrap's grid system, the two columns are automatically positioned side-by-side and will adjust their width and position based on the size of the screen.",
        ];

        const contentSec3 = document.getElementById("content-sec-3");

        const introHeading3 = document.createElement("h3");
        introHeading3.setAttribute("class", "content-heading-mini");
        introHeading3.textContent = "HTML";
        contentSec3.appendChild(introHeading3);

        const hr3 = document.createElement("hr");
        hr3.setAttribute("class", "content-section-hr");
        contentSec3.appendChild(hr3);

        for (let i = 1; i <= eng_paragraphVars3.length; i++) {
            const paragraphID = `content3p${i}`;
            const paragraphVar = eng_paragraphVars3[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec3.appendChild(paragraph);
        };

        const engine_image3 = document.createElement('img');
        engine_image3.src = 'images/engine/engine_content_3.png';
        engine_image3.alt = "Image of 'cmprkr.github.io' chess board.";
        engine_image3.style.display = 'block';
        engine_image3.style.maxWidth = '100%';
        contentSec3.appendChild(engine_image3);

        // engine section 4

        const eng_paragraphVars4 = [
            "The CSS code utilized defines several classes and styles that can be applied to HTML elements.",
            "Bootstrap is a popular framework for building responsive, mobile-first websites, and it provides a collection of pre-made CSS classes and components that can be used to quickly and easily style a web page.",
            "This particular link loads version 4.4.1 of the Bootstrap CSS framework from the URL 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'. It includes an integrity attribute that is used to ensure that the file being loaded has not been modified in transit, by verifying its cryptographic hash.",
            "The cross-origin attribute is set to 'anonymous', meaning that the browser should not send any identifying information when requesting the file. This is a security measure that helps protect the privacy of users.",
            "Many Bootstrap elements were used in the design of the program, most of which didn’t make it to the final design of the 'index' homepage.",
        ];

        const eng_liVars4 = [
            "The '.text-align-center' class centers the text within an element that has this class applied.",
            "The '#myBoard' selector styles the element with the ID 'myBoard'. It sets the maximum width to 100% and allows the height to adjust automatically while providing a scrollbar when necessary.",
            "The ‘.highlight-white’, ‘.highlight-black’, and ‘.highlight-hint’ classes each apply a different box-shadow effect to an element, with different colors and dimensions.",
            "The ‘.no-underline’ class removes underlines from links.",
            "The ‘.no-outline: focus’ class removes the focus outline that appears when a user clicks on an element, and also removes any box-shadow that may have been applied.",
            "Finally, the ‘.btn-header’ class applies styles to button elements that are used as headers.",
        ];

        const contentSec4 = document.getElementById("content-sec-4");

        const introHeading4 = document.createElement("h3");
        introHeading4.setAttribute("class", "content-heading-mini");
        introHeading4.textContent = "CSS & Bootstrap";
        contentSec4.appendChild(introHeading4);

        const hr4 = document.createElement("hr");
        hr4.setAttribute("class", "content-section-hr");
        contentSec4.appendChild(hr4);

        for (let i = 1; i <= eng_paragraphVars4.length; i++) {

            const paragraphID = `content4p${i}`;
            const paragraphVar = eng_paragraphVars4[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec4.appendChild(paragraph);

            if (i === 1) {
                const ul = document.createElement("ul");
                ul.setAttribute("class", "content-section-ul");
                contentSec4.appendChild(ul);

                for (let i = 0; i < eng_liVars4.length; i++) {
                    const li = document.createElement("li");
                    li.setAttribute("class", "content-section-li");
                    li.textContent = eng_liVars4[i];
                    ul.appendChild(li);
                };
            };
        };

        // engine section 5

        const eng_paragraphVars5 = [
            "The basic rules for legal moves in chess are relatively straightforward. Each piece has a set of possible moves based on its type and position on the board. When a player makes a move, the game checks whether that move is legal for the piece being moved and whether it is blocked by any other pieces on the board. If the move is legal, the game updates the position of the piece.",
        ];

        const eng_liVars5 = [
            "In order to detect checkmate, the game needs to check whether the king is in check and whether there are any legal moves available to get out of check. If the king is in check and there are no legal moves available, then the game is over and the player in checkmate has lost.",
            "Similarly, a stalemate occurs when a player is not in check but has no legal moves available. In this case, the game is considered a draw.",
            "Draws by repetition occur when the same position on the board occurs three times. This is typically implemented by keeping track of the position of all the pieces on the board after each move and comparing each new position to previous positions. If the same position occurs three times, the game is considered a draw.",
            "Drag and drop functionality implemented using JavaScript and HTML5. When a player clicks on a piece and drags it to a new position, the game uses JavaScript to determine whether the move is legal and updates the position of the piece on the board if it is.",
        ];

        const contentSec5 = document.getElementById("content-sec-5");

        const introHeading5 = document.createElement("h3");
        introHeading5.setAttribute("class", "content-heading-mini");
        introHeading5.textContent = "Rules";
        contentSec5.appendChild(introHeading5);

        const hr5 = document.createElement("hr");
        hr5.setAttribute("class", "content-section-hr");
        contentSec5.appendChild(hr5);

        for (let i = 1; i <= eng_paragraphVars5.length; i++) {

            const paragraphID = `content5p${i}`;
            const paragraphVar = eng_paragraphVars5[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec5.appendChild(paragraph);

            if (i === 1) {
                const ul = document.createElement("ul");
                ul.setAttribute("class", "content-section-ul");
                contentSec5.appendChild(ul);

                for (let i = 0; i < eng_liVars5.length; i++) {
                    const li = document.createElement("li");
                    li.setAttribute("class", "content-section-li");
                    li.textContent = eng_liVars5[i];
                    ul.appendChild(li);
                };
            };
        };

        const engine_image5 = document.createElement('img');
        engine_image5.src = 'images/engine/engine_content_5.png';
        engine_image5.alt = "Image of 'cmprkr.github.io' chess board.";
        engine_image5.style.display = 'block';
        engine_image5.style.maxWidth = '100%';
        contentSec5.appendChild(engine_image5);

        // engine section 6

        const eng_paragraphVars6 = [
            "Sunfish.py is a simple, lightweight chess engine that has become a popular choice for chess engine development due to its simplicity and ease of understanding. It is written in Python and uses a basic evaluation function to determine the value of a given position. The engine also employs the minimax algorithm with alpha-beta pruning to search for the best move.",
            "One of the main advantages of Sunfish.py is its straightforward implementation. The engine is designed to be easy to read and understand, with clear, concise code that can be easily modified and extended by other developers. This simplicity makes it an excellent reference for beginners who are just starting to learn about chess engine development.",
            "Sunfish.py is written in Python, while the engine is written in HTML, CSS, and JavaScript. These are different programming languages that serve different purposes and have different strengths and weaknesses. Sunfish.py uses Python's advanced data structures and libraries to optimize the performance of the engine, while the web application code uses HTML, CSS, and JavaScript to create a user interface.",
        ];

        const contentSec6 = document.getElementById("content-sec-6");

        const introHeading6 = document.createElement("h3");
        introHeading6.setAttribute("class", "content-heading-mini");
        introHeading6.textContent = "Sunfish.py";
        contentSec6.appendChild(introHeading6);

        const hr6 = document.createElement("hr");
        hr6.setAttribute("class", "content-section-hr");
        contentSec6.appendChild(hr6);

        for (let i = 1; i <= eng_paragraphVars6.length; i++) {

            const paragraphID = `content6p${i}`;
            const paragraphVar = eng_paragraphVars6[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec6.appendChild(paragraph);
        };

        // engine section 7

        const eng_paragraphVars7 = [
            "A parallel chess engine is a powerful tool used by chess players to analyze and improve their game. It is a computer program that can analyze and predict different chess moves and strategies. Unlike a traditional chess engine, a parallel chess engine uses multiple processors to analyze the game faster and more efficiently. This means that the engine can consider more moves and positions in a shorter amount of time, which is essential in complex chess games.",
            "One of the main advantages of a parallel chess engine is that it allows players to analyze multiple moves simultaneously. This means that the engine can consider different variations of the game and provide a more comprehensive analysis of the best moves to make. Additionally, the parallel engine can analyze multiple games at once, allowing players to compare and contrast different strategies and styles.",
            "Another advantage of a parallel chess engine is that it can analyze games with a higher level of complexity than a traditional chess engine. This is because the parallel engine can handle larger game trees and search deeper into possible moves and positions. This means that the engine can provide more accurate and insightful analysis of the game, which is essential for players looking to improve their skills.",
            "A parallel chess engine also allows players to test different scenarios and strategies in real-time. This means that players can experiment with different openings, mid-game tactics, and end-game strategies to see how they affect the outcome of the game. Additionally, the engine can provide feedback on the effectiveness of different strategies and suggest improvements for future games.",
            "Finally, a parallel chess engine is an essential tool for competitive chess players looking to gain an edge in tournaments and matches. By providing accurate and insightful analysis of the game, players can make more informed decisions and improve their chances of winning. Additionally, the engine can help players prepare for specific opponents and adapt their strategies to different playing styles and strengths.",
        ]

        const contentSec7 = document.getElementById("content-sec-7");

        const introHeading7 = document.createElement("h3");
        introHeading7.setAttribute("class", "content-heading-mini");
        introHeading7.textContent = "Parallel Chess";
        contentSec7.appendChild(introHeading7);

        const hr7 = document.createElement("hr");
        hr7.setAttribute("class", "content-section-hr");
        contentSec7.appendChild(hr7);

        for (let i = 1; i <= eng_paragraphVars7.length; i++) {

            const paragraphID = `content7p${i}`;
            const paragraphVar = eng_paragraphVars7[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec7.appendChild(paragraph);
        };

        // engine section 8

        const eng_paragraphVars8 = [
            "TC-PA chess engine is a powerful and versatile tool that has been designed to help chess players of all skill levels improve their game. Developed with a focus on simplicity and ease of use, the engine offers a wide range of features and functions, including a simple yet effective evaluation function, minimax with alpha-beta pruning algorithm, drag-and-drop user interface, and many more. Its intuitive user interface and customizable options make it an excellent tool for both beginners and advanced players looking to improve their game.",
        ]

        const contentSec8 = document.getElementById("content-sec-8");

        const introHeading8 = document.createElement("h3");
        introHeading8.setAttribute("class", "content-heading-mini");
        introHeading8.textContent = "Conclusion";
        contentSec8.appendChild(introHeading8);

        const hr8 = document.createElement("hr");
        hr8.setAttribute("class", "content-section-hr");
        contentSec8.appendChild(hr8);

        for (let i = 1; i <= eng_paragraphVars8.length; i++) {

            const paragraphID = `content8p${i}`;
            const paragraphVar = eng_paragraphVars8[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec8.appendChild(paragraph);
        };

        const engine_image8 = document.createElement('img');
        engine_image8.src = 'images/engine/engine_content_8.png';
        engine_image8.alt = "Image of 'cmprkr.github.io' chess board.";
        engine_image8.style.display = 'block';
        engine_image8.style.maxWidth = '100%';
        contentSec8.appendChild(engine_image8);

        // engine section 9

        const eng_paragraphVars9 = [
            "The following links and sources were all used in the creation of this project.",
        ]

        const eng_liVars9 = [
            { name: "Bootstrap", link: "https://getbootstrap.com/" },
            { name: "Google Icons", link: "https://fonts.google.com/icons" },
            { name: "Font Awesome", link: "https://fontawesome.com/" },
            { name: "JQuery", link: "https://jquery.com/" },
            { name: "Chessboard JS", link: "https://chessboardjs.com/" },
            { name: "Chess JS", link: "https://github.com/jhlywa/chess.js" },
            { name: "Bootstrap JS", link: "https://getbootstrap.com/docs/4.4/getting-started/introduction/#js" },
            { name: "Sunfish.py", link: "https://github.com/thomasahle/sunfish" },
            { name: "Parallel engine", link: "https://en.wikipedia.org/wiki/Parallel_computing" },
            { name: "Minimax", link: "https://en.wikipedia.org/wiki/Minimax" },
        ];

        const contentSec9 = document.getElementById("content-sec-9");

        const introHeading9 = document.createElement("h3");
        introHeading9.setAttribute("class", "content-heading-mini");
        introHeading9.textContent = "Sources & Tools";
        contentSec9.appendChild(introHeading9);

        const hr9 = document.createElement("hr");
        hr9.setAttribute("class", "content-section-hr");
        contentSec9.appendChild(hr9);

        for (let i = 1; i <= eng_paragraphVars9.length; i++) {

            const paragraphID = `content9p${i}`;
            const paragraphVar = eng_paragraphVars9[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec9.appendChild(paragraph);

            if (i === 1) {

                for (let j = 0; j < eng_liVars9.length; j++) {
                    const a = document.createElement("a");
                    a.setAttribute("class", "content-section-a");
                    a.setAttribute("href", eng_liVars9[j].link);
                    a.setAttribute("target", "_blank");
                    a.textContent = eng_liVars9[j].name;
                    const li = document.createElement("li");
                    li.appendChild(a);
                    contentSec9.appendChild(li);
                };
            };
        };
    };

    function docsPage() {
        event.preventDefault(); // Prevents the default behavior of the link

        clearMainContent(); // Clear .main-content

        mainContent.scrollTo(0, 0); // Scroll to the top of the page

        createHeading('docsGPT', ' Documentation');
        createHeader();
        createSections(16);
        createFooter(60);
        createFooter(60);

        // content overview html

        const titles = [
            "Overview",
            "Functions",
            "Writing",
            "Research",
        ];

        const contentOverview = document.getElementById("content-overview");
        const hr = document.createElement("hr");
        hr.setAttribute("class", "content-heading-hr-t");
        contentOverview.appendChild(hr);

        for (let i = 0; i < titles.length; i++) {
            const anchor = document.createElement("a");
            anchor.setAttribute("class", "content-overview-link");
            anchor.setAttribute("href", "javascript:void(0)");
            anchor.setAttribute("data-section-id", `content-sec-${i + 1}`);

            const marker = document.createElement("p");
            marker.setAttribute("class", "content-overview-link-marker");
            marker.textContent = `${i + 1}.`;

            anchor.appendChild(marker);
            anchor.insertAdjacentText("beforeend", titles[i]);
            contentOverview.appendChild(anchor);

            if (i < titles.length - 1) {
                const lineBreak = document.createElement("br");
                contentOverview.appendChild(lineBreak);
            }
        }

        addScrollListeners();
        
        // docs section 1

        const eng_paragraphVars1 = [
            'Welcome to the documentation for "docsGPT"! My name is Cameron Parker, and I am excited to introduce you to this program. "docsGPT" is a powerful tool that can help you with various tasks related to writing and research. Whether you need to generate ideas for a writing project, find sources for your research, or summarize a piece of text, "docsGPT" can do it all.',
            'At its core, "docsGPT" is built on the GPT-3.5 language model, a state-of-the-art artificial intelligence system developed by OpenAI. By leveraging the power of GPT-3.5, "docsGPT" is able to perform a wide range of writing and research tasks with remarkable accuracy and efficiency.',
            'One of the key features of "docsGPT" is its intuitive user interface. The program is integrated with Google Docs, which means you can access it directly from your document. Once you have opened "docsGPT," you will see a menu that contains a variety of options for different tasks. You can choose to generate ideas, find sources, research a topic, answer a question, or write an essay. Each of these options is designed to help you with a specific aspect of your writing or research, and all of them are powered by the incredible GPT-3.5 language model.',
            'So, whether you are a student working on a research project, a writer looking for inspiration, or anyone who needs help with writing and research, "docsGPT" is here to help. With its powerful AI capabilities and intuitive user interface, "docsGPT" is the ultimate tool for anyone who wants to take their writing and research to the next level. So, let us dive in and explore everything that "docsGPT" has to offer!',
        ];

        const contentSec1 = document.getElementById("content-sec-1");

        const introHeading = document.createElement("h3");
        introHeading.setAttribute("class", "content-heading-mini");
        introHeading.textContent = "Overview";
        contentSec1.appendChild(introHeading);

        const hr1 = document.createElement("hr");
        hr1.setAttribute("class", "content-section-hr");
        contentSec1.appendChild(hr1);

        for (let i = 1; i <= eng_paragraphVars1.length; i++) {

            const paragraphID = `content1p${i}`;
            const paragraphVar = eng_paragraphVars1[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec1.appendChild(paragraph);
        };

        var img = document.createElement("img");
        img.src = "images/docs/docsGPT.png";
        img.style.width = "100%";
        contentSec1.appendChild(img);

        // docs section 2

        const eng_paragraphVars2 = [
            'As the developer of docsGPT, I wanted to create a powerful tool that streamlines the writing and research process for individuals, allowing them to quickly and easily generate high-quality content for their documents. This program uses the OpenAI API, specifically the GPT-3.5-turbo model, to generate responses to various prompts and tasks. The goal of this program is to provide users with a variety of tools that can assist them in their writing and research, while still ensuring that the content generated is of high quality and relevant to the task at hand.',
            'The docsGPT program is designed to be intuitive and easy to use, with a simple interface and clear instructions for each task. The program includes a variety of different tools, each with its own specific function. Some of these tools include generating ideas, finding sources, summarizing text, answering questions, and expanding on selected text. The program is also equipped with a tone selector that allows users to adjust the formatting tone of their content.',
            'With docsGPT, users can save a significant amount of time and effort when it comes to writing and research. Rather than spending hours poring over sources and writing and revising content, users can simply input their prompts and allow the program to generate high-quality responses in a matter of minutes. This makes it an ideal tool for students, researchers, and writers who need to produce high-quality content quickly and efficiently.',
            'Overall, the docsGPT program is a powerful tool that can help streamline the writing and research process for individuals. Whether you are working on a research paper, a creative writing project, or any other type of written content, this program can help you produce high-quality results quickly and efficiently.',
        ];

        const contentSec2 = document.getElementById("content-sec-2");

        const introHeading2 = document.createElement("h3");
        introHeading2.setAttribute("class", "content-heading-mini");
        introHeading2.textContent = "Functions";
        contentSec2.appendChild(introHeading2);

        const hr2 = document.createElement("hr");
        hr2.setAttribute("class", "content-section-hr");
        contentSec2.appendChild(hr2);

        for (let i = 1; i <= eng_paragraphVars2.length; i++) {
            const paragraphID = `content2p${i}`;
            const paragraphVar = eng_paragraphVars2[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec2.appendChild(paragraph);

        };

        // docs section 3

        const eng_paragraphVars3 = [
            'The "Write Paragraph" function prompts the user to select a portion of text within the document and generates a formal paragraph based on that selection. The generated paragraph is formatted in a scholarly manner with 5-8 sentences, and the language used is above high school level. The function uses the text-davinci-002 model to generate the paragraph.',
            'The "Expand" function prompts the user to select a portion of text within the document and generates a more detailed and expanded version of that selection. The generated text is also formatted in a formal writing style and uses the text-davinci-002 model.',
            'The "Expand Thesis" function prompts the user to select a thesis statement within the document and generates a formal, in-depth essay based on that thesis. The generated essay is also formatted in a scholarly manner and uses the text-davinci-002 model.',
            'The "Summarize Text" function prompts the user to select a portion of text within the document and generates a concise summary of that selection in bullet points. The function uses the text-davinci-002 model to generate the summary.',
        ];

        const contentSec3 = document.getElementById("content-sec-3");

        const introHeading3 = document.createElement("h3");
        introHeading3.setAttribute("class", "content-heading-mini");
        introHeading3.textContent = "Writing";
        contentSec3.appendChild(introHeading3);

        const hr3 = document.createElement("hr");
        hr3.setAttribute("class", "content-section-hr");
        contentSec3.appendChild(hr3);

        for (let i = 1; i <= eng_paragraphVars3.length; i++) {
            const paragraphID = `content3p${i}`;
            const paragraphVar = eng_paragraphVars3[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec3.appendChild(paragraph);

        };

        var img = document.createElement("img");
        img.src = "images/docs/writing.png";
        img.style.width = "100%";
        contentSec1.appendChild(img);

        // docs section 4

        const eng_paragraphVars4 = [
            'The first function, "Generate Ideas," generates new ideas related to a selected topic. It takes the selected text as input, sends it to the GPT-3 model, and returns a list of new ideas related to the topic.',
            'The second function, "Find Sources," generates a list of potential scholarly sources related to a selected topic. It takes the selected text as input, sends it to the GPT-3 model, and returns a list of sources that might be relevant.',
            'The third function, "Research Topic," generates a comprehensive research report on a selected topic. It takes the selected text as input, sends it to the GPT-3 model, and returns a detailed report on the topic, with information gathered from a variety of sources.',
        ];

        const contentSec4 = document.getElementById("content-sec-4");

        const introHeading4 = document.createElement("h3");
        introHeading4.setAttribute("class", "content-heading-mini");
        introHeading4.textContent = "Research";
        contentSec4.appendChild(introHeading4);

        const hr4 = document.createElement("hr");
        hr4.setAttribute("class", "content-section-hr");
        contentSec4.appendChild(hr4);

        for (let i = 1; i <= eng_paragraphVars4.length; i++) {
            const paragraphID = `content4p${i}`;
            const paragraphVar = eng_paragraphVars4[i-1];
            const paragraph = document.createElement("p");
            paragraph.setAttribute("class", "content-section-p");
            paragraph.setAttribute("id", paragraphID);
            paragraph.textContent = paragraphVar;
            contentSec4.appendChild(paragraph);

        };

        var img = document.createElement("img");
        img.src = "images/docs/research.png";
        img.style.width = "100%";
        contentSec1.appendChild(img);
    };

    const sidebarHTML = `
        <header>
            <a id="doc-homePageButtonBig" class="header-link" href="">Projects and Programs</a>
            <div class="spacer-15"></div>
            <a id="doc-homePageButton" class="subhead" href="">Home</a>
            <div class="spacer-15"></div>
            <a class="name" href="">Cameron Parker</a>
            <a class="name default" href="mailto:cparker@myhelo.com">cparker@myhelo.com</a>
        </header>
        <nav>
            <hr>
            <div class="link-list">
                <a class="project-link" href=""><p class="project-link-number">1. </p>docsGPT</a><br>
                <a class="project-link default" href="/engine.html"><p class="project-link-number">2. </p>Chess Engine</a><br>
            </div>
            <hr>
            <div class="contact-list">
                <h3 class="subhead">Social Media</h3>
                <a class="project-link default" href="https://instagram.com/cmprkr" target="_blank">Instagram</a><br>
                <a class="project-link default" href="https://www.linkedin.com/in/cameron-parker-952ba9233" target="_blank">LinkedIn</a><br>
                <a class="project-link default" href="https://github.com/cmprkr" target="_blank">GitHub</a><br>
                <a class="project-link default" href="https://twitter.com/cmprkr" target="_blank">Twitter</a><br>
            </div>
            <hr>
            <div class="documentation-list">
                <h3 class="subhead">Documentation</h3>
                <a id="doc-websiteButton" class="project-link" href="">Website</a><br>
                <a id="doc-docsGptButton" class="project-link" href="">docsGPT</a><br>
                <a id="doc-chessEngineButton" class="project-link" href="">Chess Engine</a><br>
            </div>
        </nav>
    `;

    const sidebarHTMLTOP = `
        <div class="spacer-15"></div>
        <a id="top_home" class="subhead" href="">Home</a>
        <a class="subheada" href=""> - </a>
        <a id="top_engine" class="subhead" href="">Chess Engine</a>
        <a class="subheada" href=""> - </a>
        <a id="top_docs" class="subhead" href="">docsGPT</a>
    `

    const headHTML = `
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Cameron Parker</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="css/main-styles.css">
            <link rel="stylesheet" href="css/content-styles.css">
            <link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAgIAAAAEAIAAoCAEAFgAAACgAAACAAAAAAAEAAAEAIAAAAAAAAAABAPY6AQD2OgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAAAAAAAAAAAAAAAAAQAAAAOAAAAEQAAABAAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABAAAAARAAAADgAAAAQAAAAAAAAAAAAAAAAAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAAAAAAAEwAAAGUAAACwAAAA2AAAAOoAAADvAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO8AAADqAAAA2AAAALAAAABnAAAAFAAAAAAAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAwAAAHMAAADsAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADtAAAAdAAAAAMAAAABAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAABMAAAC8AAAA/wAAAP0AAAD8AAAA+wAAAP0AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP0AAAD7AAAA/AAAAP0AAAD/AAAAvQAAABMAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAQAAAAywAAAP8AAAD6AAAA/QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/QAAAPoAAAD/AAAAzAAAABAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAKkAAAD/AAAA+gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPoAAAD/AAAAqQAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAABUAAAA/wAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPsAAAD/AAAAVAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMYAAAD/AAAA/QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAADGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAyAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAxAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAG4AAAD/AAAA+wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAPsAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPsAAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAA/wAAAG0AAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAlQAAAP8AAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPsAAAD/AAAAlAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACnAAAA/wAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+QAAAK4AAACnAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACnAAAArgAAAPkAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAP8AAACnAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO8AAAATAAAAAAAAAAQAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAAEAAAAAAAAABMAAADvAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAABAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAABAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAUQAAAFgAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVQAAAFsAAAA5AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAFwAAAAAAAAADAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKsAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAGUAAAD2AAAATgAAAAAAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEAAAAOwAAAD/AAAA+wAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPgAAAD/AAAApwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAvAAAA9AAAAP8AAAD/AAAAiwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAACgAAAM8AAAD/AAAA+wAAAPsAAAD/AAAAxAAAACAAAAAAAAAABAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACbAAAA/wAAAPsAAAD/AAAA/gAAAPsAAAD/AAAA7QAAAFAAAAAAAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAYwAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD9AAAA/wAAAIsAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAADAAAAD1AAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP0AAAD7AAAA/wAAAMQAAAAgAAAAAAAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAKAAAA0AAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD7AAAA/wAAAO0AAABQAAAAAAAAAAMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPsAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAKcAAAD/AAAA+wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/QAAAP8AAACLAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAQAAAA7AAAAP8AAAD7AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA+AAAAP8AAACnAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAJAAAAwwAAAP8AAAD7AAAA/QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAA+wAAAP8AAADDAAAAIAAAAAAAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKsAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAACAAAAiQAAAP8AAAD+AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA+wAAAP8AAADtAAAATwAAAAAAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAFEAAABYAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFYAAABWAAAAVgAAAFUAAABbAAAAOQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAMAAAAAAAAATQAAAOwAAAD/AAAA+wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP0AAAD/AAAAiwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAQAAAAAAAAAHgAAAMIAAAD/AAAA+wAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/QAAAPsAAAD/AAAAxAAAACAAAAAAAAAABAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAABAAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAABAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAIkAAAD/AAAA/gAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAPsAAAD/AAAA7QAAAFAAAAAAAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAADAAAAAAAAAE0AAADsAAAA/wAAAPsAAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD9AAAA/wAAAIsAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAEAAAAAAAAAB4AAADCAAAA/wAAAPsAAAD9AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP0AAAD7AAAA/wAAAMQAAAAgAAAAAAAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAACJAAAA/wAAAP4AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD7AAAA/wAAAO0AAABQAAAAAAAAAAMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAAAAAAABNAAAA7AAAAP8AAAD7AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/QAAAP8AAACLAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAABAAAAAAAAAAeAAAAwgAAAP8AAAD7AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAA+wAAAP8AAADEAAAAIAAAAAAAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAiQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA+wAAAP8AAADtAAAATwAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAAAAAAAQgAAAOsAAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP0AAAD/AAAAlwAAAAIAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAwAAAAAAAABCAAAA6wAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/QAAAP8AAACXAAAAAgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAADAAAAiQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA+wAAAP8AAADtAAAATwAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAQAAAAAAAAAHgAAAMIAAAD/AAAA+wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/QAAAPsAAAD/AAAAxAAAACAAAAAAAAAABAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAADAAAAAAAAAE0AAADsAAAA/wAAAPsAAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD9AAAA/wAAAIsAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAMAAACJAAAA/wAAAP4AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD7AAAA/wAAAO0AAABQAAAAAAAAAAMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAABAAAAAAAAAAeAAAAwgAAAP8AAAD7AAAA/QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAA+wAAAP8AAADEAAAAIAAAAAAAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAMAAAAAAAAATQAAAOwAAAD/AAAA+wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP0AAAD/AAAAiwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAwAAAIkAAAD/AAAA/gAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAPsAAAD/AAAA7QAAAFAAAAAAAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAEAAAAAAAAAB4AAADCAAAA/wAAAPsAAAD9AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP0AAAD7AAAA/wAAAMQAAAAgAAAAAAAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAAAAABNAAAA7AAAAP8AAAD7AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/QAAAP8AAACLAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAACAAAAiQAAAP8AAAD+AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA+wAAAP8AAADtAAAAUAAAAAAAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAACQAAAMMAAAD/AAAA+wAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/QAAAPsAAAD/AAAAwwAAACAAAAAAAAAABAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAApwAAAP8AAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD9AAAA/wAAAIsAAAADAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAKAAAA0AAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD7AAAA/wAAAO0AAABQAAAAAAAAAAMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAwAAAA9QAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAA+wAAAP8AAADEAAAAIAAAAAAAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABjAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP0AAAD/AAAAiwAAAAMAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACbAAAA/wAAAPsAAAD/AAAA/gAAAPsAAAD/AAAA7QAAAFAAAAAAAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAoAAADPAAAA/wAAAPsAAAD7AAAA/wAAAMQAAAAgAAAAAAAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAC8AAAD0AAAA/wAAAP8AAACLAAAAAwAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAGUAAAD2AAAATgAAAAAAAAADAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAABcAAAAAAAAAAwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADuAAAAEQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAARAAAA7gAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACpAAAA/wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAD/AAAA7gAAABEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEQAAAO4AAAD/AAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAP8AAACpAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAKkAAAD/AAAA/AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADvAAAAEwAAAAAAAAAEAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAABAAAAAAAAAATAAAA7wAAAP8AAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA/wAAAKkAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAqQAAAP8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAA/wAAAO4AAAARAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAABEAAADuAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAAD/AAAAqQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAACnAAAA/wAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+QAAAK4AAACnAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACpAAAAqQAAAKkAAACnAAAArgAAAPkAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAP8AAACnAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAJUAAAD/AAAA+wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAA/wAAAJQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAbgAAAP8AAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAA+wAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA/AAAAPwAAAD8AAAA+wAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPsAAAD/AAAAbQAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAyAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAxAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGAAAA/wAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP0AAAD/AAAAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAFUAAAD/AAAA+wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAP8AAABVAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAKkAAAD/AAAA+gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPoAAAD/AAAAqQAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAEAAAAMwAAAD/AAAA+gAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP0AAAD6AAAA/wAAAMwAAAAQAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAEwAAAL0AAAD/AAAA/QAAAPwAAAD7AAAA/QAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/gAAAP4AAAD+AAAA/QAAAPsAAAD8AAAA/QAAAP8AAAC+AAAAFAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAAAAAwAAAHMAAADsAAAA/wAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAP8AAADtAAAAdQAAAAQAAAABAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAADAAAAAAAAABMAAABmAAAAsQAAANkAAADqAAAA7wAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADuAAAA7gAAAO4AAADvAAAA6gAAANkAAACxAAAAaAAAABQAAAAAAAAAAwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAADAAAAAAAAAAAAAAAAAAAABAAAAA4AAAARAAAAEAAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEQAAABEAAAARAAAAEAAAABEAAAAOAAAABAAAAAAAAAAAAAAAAAAAAAMAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAABAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oAAAAAAAAAAAAAAAAF///IX///////////////oT//oQAAAAAAAAAAAAAAAAhf/0gAAAAAAAAAAAAAAAABL/6AAAAAAAAAAAAAAAAAABf9QAAAAAAAAAAAAAAAAAAr/IAAAAAAAAAAAAAAAAAAE/iAAAAAAAAAAAAAAAAAABH5AAAAAAAAAAAAAAAAAAAJ+QAAAAAAAAAAAAAAAAAACfoAAAAAAAAAAAAAAAAAAAX6AAAAAAAAAAAAAAAAAAAF8gAAAAAAAAAAAAAAAAAABPIAAAAAAAAAAAAAAAAAAATyABf//////////////oAE8gAQAAAAAAAAAAAAAACABPIAEAAAAAAAAAAAAAAAgATyABf//////////////oAE8gAX//////////////6ABPIAF//////////////+gATyABf//////////////oAE8gAX//////////////6ABPIAF//////////////+gATyABf//////////////oAE8gAX//////////////6ABPIAF//////////////+gATyABf//////////////oAE8gAX//////6AAAAF//6ABPIAF//S///////////+gATyABf/oL///oAAAAT//oAE8gAX/5Jf//6AAAAE//6ABPIAF/9RL//+gAAABP/+gATyABf+oAv//oAAAAT//oAE8gAX/UAl//6AAAAE//6ABPIAF/xAEv/+gAAABP/+gATyABf6gAC//oAAAAT//oAE8gAX9QACX/6AAAAE//6ABPIAF/oAAS/+gAAABP/+gATyABfyAAAL/oAAAAT//oAE8gAX9AAAJf6AAAAE//6ABPIAF/oAABL+gAAABP/+gATyABf0gAAAv////////oAE8gAX+kAAAl6AAAAF//6ABPIAF/0AAAEv///////+gATyABf/SAAAC////////oAE8gAX/6QAACX///////6ABPIAF//QAAAS///////+gATyABf/9IAAAL///////oAE8gAX//pAAAJf//////6ABPIAF//9AAABP//////+gATyABf//0gAAF///////oAE8gAX//9IAABf//////6ABPIAF//9AAABP//////+gATyABf/+kAAAl///////oAE8gAX//SAAAC///////6ABPIAF//QAAAS///////+gATyABf/pAAAJf///////oAE8gAX/0gAAAv///////6ABPIAF/0AAAEv///////+gATyABf6QAACX////////oAE8gAX9IAAAL////////6ABPIAF/oAABL////////+gATyABf0AAAl/////////oAE8gAX8gAAC/////////6ABPIAF/oAAS/////////+gATyABf1AAJf/////////oAE8gAX+oAAv/////////6ABPIAF/xAEv/////////+gATyABf9QCX//////////oAE8gAX/qAL//////////6ABPIAF/9RL//////////+gATyABf/kl///////////oAE8gAX/6C///////////6ABPIAF//S///////////+gATyABf//////////////oAE8gAX//////////////6ABPIAF//////////////+gATyABf//////////////oAE8gAX//////////////6ABPIAF//////////////+gATyABf//////////////oAE8gAX//////////////6ABPIAF//////////////+gATyABf//////////////oAE8gAX//////////////6ABPIAEAAAAAAAAAAAAAAAgATyABAAAAAAAAAAAAAAAIAE8gAX//////////////6ABPIAAAAAAAAAAAAAAAAAAATyAAAAAAAAAAAAAAAAAAAE+gAAAAAAAAAAAAAAAAAABfoAAAAAAAAAAAAAAAAAAAX5AAAAAAAAAAAAAAAAAAAJ+QAAAAAAAAAAAAAAAAAACfiAAAAAAAAAAAAAAAAAABH8gAAAAAAAAAAAAAAAAAAT/UAAAAAAAAAAAAAAAAAAK/6AAAAAAAAAAAAAAAAAABf/SAAAAAAAAAAAAAAAAAEv/6EAAAAAAAAAAAAAAAAIX//IX///////////////oT//+gAAAAAAAAAAAAAAAAX//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=">
        </head>
    `

    document.getElementById("left-sidebar").innerHTML = sidebarHTML;
    document.getElementById('head').innerHTML = headHTML;
    document.getElementById("top-sidebar").innerHTML = sidebarHTMLTOP;

    const doc_homePageButton = document.getElementById('doc-homePageButton')
    const doc_homePageButtonBig = document.getElementById('doc-homePageButtonBig')
    const doc_websiteButton = document.getElementById('doc-websiteButton');
    const doc_docsGptButton = document.getElementById('doc-docsGptButton');
    const pro_docsGptButton = document.getElementById('pro-docsGPT');
    const pro_engineButton = document.getElementById('pro-engine');
    const doc_chessEngineButton = document.getElementById('doc-chessEngineButton');
    const mainContent = document.querySelector('.main-content');
    const mainContentScroll = document.querySelector('.main-content');
    const top_home_button = document.getElementById('top_home');
    const top_engine_button = document.getElementById('top_engine');
    const top_docs_button = document.getElementById('top_docs');

    homePage();

    document.querySelectorAll('a').forEach(function(a) {

        a.addEventListener('click', function(event) {

            if (!a.classList.contains('default')) {
                event.preventDefault();
            };
        });
    });

    top_home_button.addEventListener('click', function(event) {

        homePage();
    });

    top_engine_button.addEventListener('click', function(event) {

        enginePage();
    });

    top_docs_button.addEventListener('click', function(event) {

        docsPage();
    });

    doc_homePageButton.addEventListener('click', function(event)  {

        event.preventDefault();

        homePage();
    });

    doc_homePageButtonBig.addEventListener('click', function(event)  {

        event.preventDefault();

        homePage();
    });

    doc_chessEngineButton.addEventListener('click', function(event) {

        enginePage();
    });

    doc_docsGptButton.addEventListener('click', function(event) {

        docsPage();
    });
});